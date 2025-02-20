import React from 'react';
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
  bidang: string;
  posted_at: string;
  description: string;
  requirements: string[];
  salary_range: string;
  benefits: string[];
  company_logo: string;
  apply_link: string;
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
