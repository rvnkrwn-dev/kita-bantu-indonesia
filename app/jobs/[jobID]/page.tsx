import DetailRecomendations from '@/app/_components/DetailRecomendations';
import Loading from '@/app/loading';
import {
  Banknote,
  Building2,
  Watch,
  GraduationCap,
  BriefcaseBusiness,
  Facebook,
  Instagram,
  Twitter,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import React, { Suspense } from 'react';

const page = async ({ params }: { params: { jobID: string } }) => {
  const KBI_URL = process.env.KBI_API;
  const { jobID } = await params;
  const res = await fetch(`${KBI_URL}/${jobID}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return <p>Data tidak ditemukan</p>;
  }

  const data = await res.json();

  const resRecomendation = await fetch(
    `http://localhost:3000/api/recomendations?rec=${data?.jasa}`
  );
  if (!resRecomendation.ok) {
    console.error('Gagal mengambil rekomendasi');
  }
  const dataRecomendation = await resRecomendation.json();

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col lg:flex-row px-2 md:p-5 lg:px-12 py-5 lg:py-20 gap-5">
        <div className="w-full lg:w-2/3 space-y-5">
          <div className="p-5 shadow-sm border border-slate-300 rounded-md flex gap-5">
            <div className="h-20 w-20 flex">
              <Image
                src="/images/KBI.jpeg"
                alt={data.company}
                width={350}
                height={350}
                className="object-cover grow"
              />
            </div>
            <div className="space-y-5">
              <div className="">
                <h1 className="text-2xl text-black font-semibold">
                  {data.title}
                </h1>
                <div className="flex gap-1 items-center">
                  <Building2 size="15" className="text-slate-600" />
                  <p className="text-sm text-slate-600">{data.company}</p>
                </div>
              </div>
              <div className="text-sm text-slate-800">
                <div className="flex gap-1 items-center">
                  <Banknote size="15" className="text-green-700" />
                  <p>{data.salary_range}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Watch size="15" />
                  <p>{data.employment_type}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <GraduationCap size="15" />
                  <p>{data.education_level}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <BriefcaseBusiness size="15" className="text-green-950" />
                  <p>{data.experience} pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-sm border border-slate-300 rounded-md space-y-3">
            <div>
              <h2 className="text-xl text-blue-950 font-semibold">
                Job Description
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500 ring-2 ring-blue-300"></div>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl text-blue-950 font-semibold">
                Job Requirements
              </h2>
              <ul className="text-sm">
                {data.requirements.map((req: any) => (
                  <li key={req} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500 ring-2 ring-blue-300"></div>
                    <p>{req}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl text-blue-950 font-semibold">Benefits</h2>
              <p className="text-sm">{data.benefits.join(', ')}</p>
            </div>
            <div className="flex flex-wrap gap-y-2 items-center justify-between border-t border-slate-300 pt-2">
              <div className="text-sm font-medium flex items-center gap-2">
                <p>Share this job : </p>
                <div className="flex gap-2 cursor-pointer">
                  <Facebook size="15" />
                  <Instagram size="15" />
                  <Twitter size="15" />
                  <Mail size="15" />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
                >
                  Simpan Pekerjaan
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Lamar Pekerjaan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 rekomen">
          {!resRecomendation.ok ? (
            <p>Recomendasi Tidak Ada</p>
          ) : (
            <DetailRecomendations rec={dataRecomendation} />
          )}
        </div>
      </div>
    </Suspense>
  );
};

export async function generateStaticParams() {
  const KBI_URL = process.env.KBI_API;
  const res = await fetch(`${KBI_URL}`);
  const items = await res.json();

  return items.map((item: any) => ({
    jobID: item.id.toString(),
  }));
}

export default page;
