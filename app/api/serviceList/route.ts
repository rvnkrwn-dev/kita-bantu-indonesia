import { NextResponse } from 'next/server';
import responseData from '../../_data/fakteData';

type Job = {
  id: number;
  jasa: string;
};

export function GET() {
  try {
    const data = responseData?.map((data: Job) => ({
      id: data.id,
      jasa: data.jasa,
    }));

    const filterData = data?.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.jasa === item.jasa)
    );

    const result = filterData?.map((data) => data.jasa);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
