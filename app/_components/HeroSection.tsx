// develop by rvnkrwn
"use client"

import styled from "styled-components";
import SearchBox from "@/app/_components/SearchBox";

const HeroWrapper = styled.div`
    width: 100%;
    height: 75dvh;
    background: url("/images/image1.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px 0;
`;

const HeroSection = () => {
    return (
        <div>
            <HeroWrapper>
                <div className="max-w-screen-md mx-auto grid gap-y-6 px-2">
                    <h2 className="text-4xl font-semibold text-white text-center px-6">Jadilah Bagian dari Kesempatan yang
                        Bermakna.</h2>
                    <SearchBox/>
                </div>
            </HeroWrapper>
        </div>
    )
}

export default HeroSection