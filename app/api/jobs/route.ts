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
    const data = responseData;

    return NextResponse.json(data.slice(0, 15));
  } catch (error) {
    console.error('Error fetching API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
