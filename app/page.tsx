// develop by rvnkrwn

import HeroSection from '../app/_components/HeroSection'
import JobsRecommended from "@/app/_components/JobsRecommended";
import VideoPlayerSection from "@/app/_components/VideoPlayerSection";
import FituresAndServicesSection from "@/app/_components/FituresAndServicesSection";

export default function Home() {
    return (
        <div className="bg-gray-50">
            <HeroSection/>
            <JobsRecommended/>
            <VideoPlayerSection />
            <FituresAndServicesSection />
        </div>
    );
}
