'use client';
import { useEffect, useState } from 'react';
import JobList from '../_components/JobList';
import Filter from '../_components/Filter';
import SearchButtonFilter from '../_components/SearchButtonFilter';

type Props = {};

const page = (props: Props) => {
  const [data, setData] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function getJobs() {
      try {
        setIsLoading(true);
        const res = await fetch('http://localhost:3000/api/jobs');

        if (!res) return setError('Something Wrong');
        const data = await res.json();
        setData(data);
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    }
    getJobs();
  }, []);

  return (
    <div className="px-10 py-12 min-h-dvh">
      <SearchButtonFilter />
      <Filter />
      {isLoading ? 'Loading...' : <JobList jobs={data} />}
    </div>
  );
};

export default page;
