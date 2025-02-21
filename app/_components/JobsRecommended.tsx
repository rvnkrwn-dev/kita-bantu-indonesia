"use client";
import { useEffect, useState } from "react";
import CardJobRecommended from "@/app/_components/CardJobRecommended";

// Definisi tipe data untuk job dari API
interface Job {
    id: number;
    slug: string;
    title: string;
    company: string;
    location: string;
    employment_type: string;
    posted_at: string;
    company_logo: string | null;
    apply_link: string;
}

const JobsRecommended: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("https://67b28fe3bc0165def8cdd101.mockapi.io/my-api/kita-bantu");
                const data: Job[] = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="py-16 md:pt-24 px-8 grid gap-16 max-w-screen-xl mx-auto">
            <div className="text-center grid gap-y-2">
                <h2 className="text-3xl font-semibold">Karir Terbaru untuk Job Seeker</h2>
                <p className="text-sm font-medium text-gray-500">
                    Temukan dengan mudah karir terbaru, impian Anda di Bantu!
                </p>
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Loading jobs...</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {jobs.slice(0, 8).map((job) => (
                        <CardJobRecommended
                            key={job.id}
                            companyLogo={"/images/logo.png"}
                            companyName={job.company}
                            jobType={job.employment_type}
                            jobTitle={job.title}
                            location={job.location}
                            updatedTime={`Posted on ${new Date(job.posted_at).toLocaleDateString()}`}
                            onCompanyDetailClick={() => console.log(`Detail Perusahaan: ${job.company}`)}
                            onJobDetailClick={() => window.open(job.apply_link, "_blank")}
                        />
                    ))}
                </div>
            )}

            <a href="/jobs"
               className="w-full py-3 px-4 -mt-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#00AAFF] text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                Lihat Lainnya
            </a>
        </div>
    );
};

export default JobsRecommended;
