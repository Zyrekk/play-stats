"use client"
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Image from "next/image";
import ronaldo from '../../assets/ronaldoHome.png'
import ScrollToTopButton from "@/components/ScrollToTopButton";
import {leagueList} from "@/data/homeData";
import LeagueItem, {LeagueItemProps} from "@/components/Home/LeagueItem";

const HomePage = () => {

    const logos: LeagueItemProps[] = leagueList
    return (
        <div className="w-full flex flex-col items-center relative">
            <section
                className="mt-[60px] w-full flex flex-col sm:flex-row items-center gap-[40px] lg:gap-[100px]  px-[40px] ">
                <div
                    className="ronaldoHome flex items-center justify-center w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
                    <Image
                        src={ronaldo}
                        alt={'ronaldo image'}
                        width={920}
                        height={920}
                    />
                </div>
                <h1 className="italic homeText text-white flex-wrap text-[32px] lg:text-[56px] lg:leading-[122.5%] font-bold w-full max-w-[400px] lg:max-w-[900px]">
                    Spotlight on Top Leagues and Players, All in One Place
                </h1>
            </section>
            <section className="w-full">
                {logos.map((item, index) => <LeagueItem key={index} index={index} data={item}/>)}
            </section>
            <ScrollToTopButton/>
        </div>
    );
};

export default HomePage;
