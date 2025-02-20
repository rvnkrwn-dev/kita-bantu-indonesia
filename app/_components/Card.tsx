import Image from 'next/image';
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

const Card = ({ job }: { job: any }) => {
  const { title, company, location, salary_range, posted_at } = job;
  const status = 'dilihat'; //Ketika User Mengklik detail ataupun sudah melamar maka data akan diUpdate;

  return (
    <div className="rounded-md shadow-md hover:ring-2 hover:shadow-lg transition-all hover:ring-primary border border-slate-200 flex overflow-hidden min-w-[20rem]">
      <div className="w-full">
        <div className="flex border-b border-slate-200">
          <div className="h-20 w-20 relative">
            <Image
              src="/images/KBI.jpeg"
              alt="tes"
              fill
              className="object-cover bg-center"
            />
          </div>
          <div className="p-2">
            <h2 className="text-lg font-semibold text-primary">{title}</h2>
            <h3 className="text-base text-black">{company}</h3>
          </div>
        </div>
        <div className="text-sm text-slate-700 p-2">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p>{location}</p>
          </div>
          <p>{salary_range}</p>
        </div>
        <div className="flex justify-between text-sm items-center text-slate-700 p-2">
          <div className="flex gap-1 items-center">
            <p>{posted_at}</p>
            <p className="text-xs text-slate-800">. {status}</p>
          </div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
