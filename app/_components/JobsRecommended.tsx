// develop by rvnkrwn
import CardJobRecommended from "@/app/_components/CardJobRecommended";

const JobsRecommended = () => {
    return (
        <div className="py-16 px-8 grid gap-16 max-w-screen-xl mx-auto">
            <div className="text-center grid gap-y-2">
                <h2 className="text-3xl font-semibold">Karir Terbaru untuk Job Seeker</h2>
                <p className="text-sm font-medium text-gray-500">Temukan dengan mudah karir terbaru, impian anda di
                    Bantu!</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <CardJobRecommended/>
                <CardJobRecommended/>
                <CardJobRecommended/>
                <CardJobRecommended/>
                <CardJobRecommended/>
                <CardJobRecommended/>
                <CardJobRecommended/>
                <CardJobRecommended/>
                <CardJobRecommended/>
            </div>
            <a href="/jobs"
               className="w-full py-3 px-4 -mt-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#00AAFF] text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                Lihat Lainnya
            </a>
        </div>
    )
}

export default JobsRecommended;