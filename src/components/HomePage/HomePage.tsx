"use client"
import React from 'react';
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import {leagueList} from "@/data/homeData";
import {HomeLeagueItem} from "@/components/HomePage/HomeLeagueItem";

const HomePage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <section
                className="home w-full">
            </section>
            <div className="text-white text-[32px] lg:text-[48px] lg:leading-[122.5%] bg-black py-[70px] font-bold w-full text-center">
            <h1 className="homeText px-[32px]">
                Spotlight on Top Leagues. All in One Place
            </h1>
            </div>
            <section className="w-full">
                {leagueList.map((item, index) => <HomeLeagueItem key={index} index={index} data={item}/>)}
            </section>
            <ScrollToTopButton/>
        </div>
    );
};

export default HomePage;
