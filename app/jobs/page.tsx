import Jobs from '../_components/Jobs';

const page = async () => {
  const res = await fetch('http://localhost:3000/api/jobs', {
    next: { revalidate: 10 },
  });
  const JobsData = await res.json();

  return (
    <>
      <Jobs Jobsdata={JobsData} />
    </>
  );
};

export default page;
