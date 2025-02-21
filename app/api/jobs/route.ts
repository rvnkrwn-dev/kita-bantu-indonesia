import getRelativeTime from '@/utils/getRelativeTime';
import { NextResponse } from 'next/server';

type Job = {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  employment_type: string;
  education_level: string;
  jasa: string;
  posted_at: string;
  salary_range: string;
  company_logo: string;
  status: string;
  experience: string;
};

export async function GET() {
  const KBI_URL = process.env.KBI_API;

  try {
    const res = await fetch(`${KBI_URL}`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const filterData = data.map((job: Job) => ({
      id: job.id,
      slug: job.slug,
      title: job.title,
      company: job.company,
      location: job.location,
      employment_type: job.employment_type,
      education_level: job.education_level,
      jasa: job.jasa,
      posted_at: getRelativeTime(job.posted_at),
      salary_range: job.salary_range,
      company_logo: job.company_logo,
      status: job.status,
      experience: job.experience,
    }));

    return NextResponse.json(filterData.slice(0, 10));
  } catch (error) {
    console.error('Error fetching API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
