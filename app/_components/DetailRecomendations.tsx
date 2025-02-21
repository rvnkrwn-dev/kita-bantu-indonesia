import JobList from './JobList';

const DetailRecomendations = ({ rec }: { rec: any }) => {
  return (
    <div className="overflow-y-scroll max-h-[35rem]">
      <JobList jobs={rec} m="" />
    </div>
  );
};

export default DetailRecomendations;
