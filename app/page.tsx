// develop by rvnkrwn

import HeroSection from '../app/_components/HeroSection'
import JobsRecommended from "@/app/_components/JobsRecommended";

export default function Home() {
    return (
        <div className="bg-gray-50">
            <HeroSection/>
            <JobsRecommended/>
        </div>
    );
}
