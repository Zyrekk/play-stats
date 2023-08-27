import React from 'react';
import {Lineup} from "@/components/ClubsPage/MatchDetails/SelectedMatch";

const LineupsView = ({homeLineup, awayLineup,homeBench,awayBench}: {homeBench:Lineup[],awayBench:Lineup[], homeLineup: Lineup[], awayLineup: Lineup[] }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <p className=" text-center text-[18px] w-full font-semibold px-6 py-6">
                Lineups
            </p>
            <div className="w-3/4 h-[2px] bg-white px-3 mb-8"/>
            <div className="flex flex-row w-full  gap-4">
                <div className="flex flex-col gap-3">
                    <p className=" border-b-[3px] border-white mx-6 px-2 w-fit font-semibold mt-4">Starting 11</p>
                    <div className="flex-col gap-4 flex">
                        {homeLineup.map((player, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 justify-start text-center text-[18px] w-full font-semibold px-6">
                                <div className="bg-[#040910] rounded-full flex items-center justify-center w-[30px] h-[30px]">
                                    <p className="text-[14px]">{player.shirtNumber}</p>
                                </div>
                                <p className="text-[14px]">{player.name}</p>
                            </div>
                        ))}
                    </div>
                    <p className=" border-b-[3px] border-white mx-6 px-2 w-fit font-semibold mt-4">Bench</p>
                    <div className="flex-col gap-4 flex">
                        {homeBench.map((player, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 justify-start text-center text-[18px] w-full font-semibold px-6">
                                <div className="bg-[#040910] rounded-full flex items-center justify-center w-[30px] h-[30px]">
                                    <p className="text-[14px]">{player.shirtNumber}</p>
                                </div>
                                <p className="text-[14px]">{player.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-end">
                    <p className="border-b-[3px] border-white mx-6 px-2 w-fit font-semibold text-right mt-4">Starting 11</p>
                    <div className="flex-col gap-4 flex">
                        {awayLineup.map((player, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 justify-end text-center text-[18px] w-full font-semibold px-6">
                                <p className="text-[14px]">{player.name}</p>
                                <div className="bg-[#040910] rounded-full flex items-center justify-center w-[30px] h-[30px]">
                                    <p className="text-[14px]">{player.shirtNumber}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="border-b-[3px] border-white mx-6 px-2 w-fit font-semibold text-right mt-4">Bench</p>
                    <div className="flex-col gap-4 flex">
                        {awayBench.map((player, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 justify-end text-center text-[18px] w-full font-semibold px-6">
                                <p className="text-[14px]">{player.name}</p>
                                <div className="bg-[#040910] rounded-full flex items-center justify-center w-[30px] h-[30px]">
                                    <p className="text-[14px]">{player.shirtNumber}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LineupsView;
