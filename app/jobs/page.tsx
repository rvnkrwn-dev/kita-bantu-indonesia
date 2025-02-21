import { Suspense } from 'react';
import Jobs from '../_components/Jobs';
import Loading from '../loading';

const page = async () => {
  const res = await fetch('http://localhost:3000/api/jobs', {
    next: { revalidate: 10 },
  });
  const JobsData = await res.json();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Jobs Jobsdata={JobsData} />
      </Suspense>
    </>
  );
};

export default page;
