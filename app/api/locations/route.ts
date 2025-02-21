import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provinces = searchParams.getAll('provinces');

  try {
    const res = await fetch(
      'https://api-region-indonesia.vercel.app/api/provinces'
    );

    if (!res.ok) {
      throw new Error('Failed to fetch province data');
    }

    const data = await res.json();
    const provincesFilter = await data.filter((data: any) =>
      provinces.includes(data.name)
    );

    const regenciesData = await Promise.all(
      provincesFilter.map(async (province: any) => {
        const res = await fetch(
          `https://api-region-indonesia.vercel.app/api/regencies/${province.id}`
        );

        if (!res.ok) {
          throw new Error(
            `Failed to fetch regencies for province ${province.name}`
          );
        }

        return res.json();
      })
    );

    const mergedRegencies = regenciesData.flat();
    const filterRegencies = mergedRegencies.map(
      ({ name }: { name: string }) => name
    );

    return NextResponse.json(filterRegencies);
  } catch (error) {
    console.error('Error fetching API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
