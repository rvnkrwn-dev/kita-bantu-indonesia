import CardFeature from "@/app/_components/CardFeature";
import {File} from "lucide-react";

const FituresAndServicesSection = () => {
    return (
        <div className="py-16 px-8 grid gap-16 max-w-screen-xl mx-auto">
            <div className="text-center grid gap-y-2">
                <h2 className="text-3xl font-semibold">Fitur & Layanan</h2>
                <p className="text-sm font-medium text-gray-500">Menyediakan fitur dan layanan lengkap dalam satu
                    platform. Sebuah aplikasi rekrutmen end-to-end yang mencakup perencanaan, publikasi lowongan,
                    pemetaan kandidat, psikotes, wawancara, hingga penawaran kerja.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <CardFeature>
                    <File size={64} strokeWidth={1.5} />
                    <p>Portal Lowongan Kerjaan</p>
                </CardFeature>
                <CardFeature>
                    <File size={64} strokeWidth={1.5} />
                    <p>Portal Lowongan Kerjaan</p>
                </CardFeature>
                <CardFeature>
                    <File size={64} strokeWidth={1.5} />
                    <p>Portal Lowongan Kerjaan</p>
                </CardFeature>
                <CardFeature>
                    <File size={64} strokeWidth={1.5} />
                    <p>Portal Lowongan Kerjaan</p>
                </CardFeature>
                <CardFeature>
                    <File size={64} strokeWidth={1.5} />
                    <p>Portal Lowongan Kerjaan</p>
                </CardFeature>
                <CardFeature>
                    <File size={64} strokeWidth={1.5} />
                    <p>Portal Lowongan Kerjaan</p>
                </CardFeature>
            </div>
        </div>
    )
}

export default FituresAndServicesSection;