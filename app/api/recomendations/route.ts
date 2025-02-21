import getRelativeTime from '@/utils/getRelativeTime';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const KBI_URL = process.env.KBI_API;
  const { searchParams } = new URL(request.url);
  const rec = searchParams.get('rec');

  try {
    const res = await fetch(`${KBI_URL}`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch province data');
    }

    const data = await res.json();
    const mapData = data.map((data: any) => ({
      id: data.id,
      company: data.company,
      title: data.title,
      jasa: data.jasa,
      location: data.location,
      salary_range: data.salary_range,
      posted_at: getRelativeTime(data.posted_at),
      status: data.status,
    }));

    const filterData = mapData.filter((data: any) => {
      return data.jasa?.includes('Jasa Pekerja Kasar');
    });

    return NextResponse.json(filterData);
  } catch (error) {
    console.error('Error fetching API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
