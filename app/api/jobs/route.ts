import { NextResponse } from 'next/server';
import responseData from '../../_data/fakteData';

type Job = {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  employment_type: string;
  education_level: string;
  jasa: string;
  bidang: string;
  posted_at: string;
  description: string;
  requirements: string[];
  salary_range: string;
  benefits: string[];
  company_logo: string;
  apply_link: string;
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
