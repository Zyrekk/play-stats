"use client"
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Image from "next/image";
import ronaldo from '../app/ronaldoHome.png'
import ScrollToTopButton from "@/components/ScrollToTopButton";

const HomePage = () => {
    return (
        <div className="mt-[60px] w-full flex flex-col sm:flex-row items-center gap-[40px] lg:gap-[100px] relative py-[30px] px-[40px] lg:px-[100px] lg:py-[70px]">
            <div className="ronaldoHome flex items-center justify-center w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
                <Image
                src={ronaldo}
                alt={'ronaldo image'}
                width={920}
                height={920}
                />
            </div>
            <h1 className="homeText text-white flex-wrap text-[32px] lg:text-[64px] lg:leading-[122.5%] font-bold w-full max-w-[400px] lg:max-w-[900px]">
                Spotlight on Top Leagues and Players, All in One Place
            </h1>
            <ScrollToTopButton/>
        </div>
    );
};

export default HomePage;
