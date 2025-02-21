import CardFeature from "@/app/_components/CardFeature";
import { Briefcase, UserCheck, Brain, BarChart, Video, ListChecks, Database, FileText } from "lucide-react";

const FituresAndServicesSection = () => {
    const features = [
        { title: "Portal Lowongan Kerja", icon: <Briefcase size={64} strokeWidth={1.5} /> },
        { title: "Profiling Kandidat", icon: <UserCheck size={64} strokeWidth={1.5} /> },
        { title: "Psikotes Online", icon: <Brain size={64} strokeWidth={1.5} /> },
        { title: "Scoring & Test Interpretation", icon: <BarChart size={64} strokeWidth={1.5} /> },
        { title: "Interview", icon: <Video size={64} strokeWidth={1.5} /> },
        { title: "Recruitment Status", icon: <ListChecks size={64} strokeWidth={1.5} /> },
        { title: "Recruitment Database", icon: <Database size={64} strokeWidth={1.5} /> },
        { title: "Custom Tools atau Laporan", icon: <FileText size={64} strokeWidth={1.5} /> },
    ];

    return (
        <div className="py-16 px-8 grid gap-16 max-w-screen-xl mx-auto">
            <div className="text-center grid gap-y-2">
                <h2 className="text-3xl font-semibold">Fitur & Layanan</h2>
                <p className="text-sm font-medium text-gray-500">
                    Menyediakan fitur dan layanan lengkap dalam satu platform. Sebuah aplikasi rekrutmen end-to-end
                    yang mencakup perencanaan, publikasi lowongan, pemetaan kandidat, psikotes, wawancara, hingga penawaran kerja.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <CardFeature key={index}>
                        {feature.icon}
                        <p>{feature.title}</p>
                    </CardFeature>
                ))}
            </div>
        </div>
    );
};

export default FituresAndServicesSection;
