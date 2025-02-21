import { MapPin } from "lucide-react";

interface CardJobRecommendedProps {
    companyLogo: string;
    companyName: string;
    jobType: string;
    jobTitle: string;
    location: string;
    updatedTime: string;
    onCompanyDetailClick: () => void;
    onJobDetailClick: () => void;
}

const CardJobRecommended: React.FC<CardJobRecommendedProps> = ({
                                                                   companyLogo,
                                                                   companyName,
                                                                   jobType,
                                                                   jobTitle,
                                                                   location,
                                                                   updatedTime,
                                                                   onCompanyDetailClick,
                                                                   onJobDetailClick
                                                               }) => {
    return (
        <div className="border shadow-sm rounded-xl overflow-hidden">
            <div className="grid gap-y-4 bg-white p-4 md:p-5">
                <div className="flex gap-4">
                    <img src={companyLogo} alt="Company Logo" className="h-12 w-12 bg-gray-300 p-2 rounded" />
                    <div className="grid">
                        <h3 className="text-sm font-medium text-gray-500">{companyName}</h3>
                        <p className="text-base font-bold uppercase text-gray-600">{jobType}</p>
                    </div>
                </div>

                <p className="text-xl text-gray-800 font-bold capitalize">{jobTitle}</p>
                <div className="flex gap-2 items-center">
                    <MapPin size="16" />
                    <p className="text-sm font-normal">{location}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <button
                        type="button"
                        onClick={onCompanyDetailClick}
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-[#00AAFF] bg-white text-[#00AAFF] shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Detail Perusahaan
                    </button>
                    <button
                        type="button"
                        onClick={onJobDetailClick}
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#00AAFF] text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Detail Lowongan
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-gray-500">{updatedTime}</p>
            </div>
        </div>
    );
};

export default CardJobRecommended;
