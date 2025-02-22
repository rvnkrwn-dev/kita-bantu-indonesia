import { Suspense } from 'react';
import Jobs from '../_components/Jobs';
import Loading from '../loading';

const page = async () => {
  const res = await fetch(
    'https://kita-bantu-indonesia-tmvc.vercel.app/api/jobs',
    {
      next: { revalidate: 10 },
    }
  );
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
