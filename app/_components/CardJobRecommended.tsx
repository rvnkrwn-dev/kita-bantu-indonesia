// develop by rvnkrwn
import {MapPin} from "lucide-react";

const CardJobRecommended = () => {
    return (
        <div className="border shadow-sm rounded-xl overflow-hidden">
            <div className="grid gap-y-4 bg-white p-4 md:p-5">
                <div className="flex gap-4">
                    <img src="/images/logo.png" alt="" className="h-12 w-12 bg-gray-300 p-2 rounded"/>
                    <div className="grid">
                        <h3 className="text-sm font-medium text-gray-500">
                            Pt Kita Bantu Indonesia
                        </h3>
                        <p className="text-base font-bold uppercase text-gray-600">
                            Internship
                        </p>
                    </div>
                </div>

                <p className="text-xl text-gray-800 font-bold capitalize">
                    Web Developer Junior
                </p>
                <div className="flex gap-2 items-center">
                    <MapPin size="16"/>
                    <p className="text-sm font-normal">Kota Jakarta Selatan</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <button type="button"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-[#00AAFF] bg-white text-[#00AAFF] shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        Detail Perusahaan
                    </button>
                    <button type="button"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#00AAFF] text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                        Detail Lowongan
                    </button>
                </div>
            </div>
            <div
                className="bg-gray-100 py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    Last updated 5 mins ago
                </p>
            </div>
        </div>
    )
}

export default CardJobRecommended;