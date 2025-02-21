import { MapPin, Banknote, CalendarDays, Bookmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  employment_type: string;
  education_level: string;
  jasa: string;
  posted_at: { displayTime: string };
  salary_range: string;
  company_logo: string;
  status: string;
};

const Card = ({ job }: { job: Job }) => {
  const {
    id,
    title,
    company,
    location,
    posted_at,
    salary_range,
    company_logo,
    status,
  } = job;

  return (
    <Link
      href={`/jobs/${id}`}
      className="rounded-md shadow-md hover:ring-2 hover:shadow-lg transition-all hover:ring-primary border border-slate-200 flex overflow-hidden min-w-[20rem]"
    >
      <div className="w-full">
        <div className="flex border-b border-slate-200">
          <div className="h-20 w-20 flex">
            <Image
              src="/images/KBI.jpeg"
              alt={company}
              width={350}
              height={350}
              className="object-cover grow"
            />
          </div>
          <div className="p-2">
            <h2 className="text-lg font-semibold text-primary">{title}</h2>
            <h3 className="text-base text-black">{company}</h3>
          </div>
        </div>
        <div className="text-sm text-slate-700 p-2">
          <div className="flex gap-1 items-center">
            <MapPin size="16" className="text-red-700" />
            <p>{location}</p>
          </div>
          <div className="flex gap-1 items-center">
            <Banknote size="15" className="text-green-700" />
            <p>{salary_range}</p>
          </div>
        </div>
        <div className="flex justify-between text-sm items-center text-slate-700 p-2">
          <div className="flex gap-1 items-center">
            <CalendarDays size="15" className="text-blue-950" />
            <p>{posted_at.displayTime}</p>
            <p className="text-xs text-slate-800">. {status}</p>
          </div>
          <p>
            <Bookmark size="16" className="text-black" />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
