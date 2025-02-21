'use client';
import Card from './Card';

type Job = {
  id: number;
  slug: string;
  title: string;
  company: string;
  location: string;
  employment_type: string;
  education_level: string;
  jasa: string;
  posted_at: { displayTime: string; filterTime: string };
  salary_range: string;
  company_logo: string;
  status: string;
};

const JobList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <div className="w-full flex flex-wrap gap-5 mt-5 justify-center">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
