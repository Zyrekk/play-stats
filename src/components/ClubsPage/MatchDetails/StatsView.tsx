import React from 'react';
import {HomeTeam} from "@/components/ClubsPage/MatchDetails/SelectedMatch";

const StatsView = ({homeTeam, awayTeam}: {homeTeam: HomeTeam, awayTeam: HomeTeam}) => {
    const color='#0c1a2d'
    return (
        <div className="flex flex-col items-center justify-center gap-2  py-6 rounded-lg bg-[#040910]">
            <p className=" text-center text-[18px] w-full font-semibold px-6 py-6">
                Statistics
            </p>
            <div className="w-3/4 h-[2px] bg-white px-3 mb-8"/>
            <div className="flex flex-col w-full  gap-4">
                <div className="flex flex-row w-full justify-between gap-4 px-6">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <p className="min-w-[50px] text-right">
                            {homeTeam.statistics.ball_possession}
                        </p>
                        <div className="w-[100px] relative h-[15px] bg-[#0c1a2d] rounded-md">
                            <div
                                style={{
                                    width: homeTeam.statistics
                                        .ball_possession,
                                    height: "100%",
                                }}
                                className="bg-red-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                    </div>
                    <div>Possesion</div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="w-[100px] relative h-[15px] rounded-md bg-[#0c1a2d]">
                            <div
                                style={{
                                    width: awayTeam.statistics
                                        .ball_possession,
                                    height: "100%",
                                }}
                                className="bg-green-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                        <p className="min-w-[50px] text-left">
                            {awayTeam.statistics.ball_possession}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between gap-4 px-6">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <p className="min-w-[50px] text-right">
                            {homeTeam.statistics.shots}
                        </p>
                        <div className="w-[100px] relative h-[15px] bg-[#0c1a2d] rounded-md">
                            <div
                                style={{
                                    width:
                                        homeTeam.statistics.shots * 2,
                                    height: "100%",
                                }}
                                className="bg-red-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                    </div>
                    <div>Shots</div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="w-[100px] relative h-[15px] rounded-md bg-[#0c1a2d]">
                            <div
                                style={{
                                    width:
                                        awayTeam.statistics.shots * 2,
                                    height: "100%",
                                }}
                                className="bg-green-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                        <p className="min-w-[50px] text-left">
                            {awayTeam.statistics.shots}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between gap-4 px-6">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <p className="min-w-[50px] text-right">
                            {homeTeam.statistics.shots_on_goal}
                        </p>
                        <div className="w-[100px] relative h-[15px] bg-[#0c1a2d] rounded-md">
                            <div
                                style={{
                                    width:
                                        homeTeam.statistics
                                            .shots_on_goal * 2,
                                    height: "100%",
                                }}
                                className="bg-red-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                    </div>
                    <div>Shots on target</div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="w-[100px] relative h-[15px] rounded-md bg-[#0c1a2d]">
                            <div
                                style={{
                                    width:
                                        awayTeam.statistics
                                            .shots_on_goal * 2,
                                    height: "100%",
                                }}
                                className="bg-green-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                        <p className="min-w-[50px] text-left">
                            {awayTeam.statistics.shots_on_goal}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between gap-4 px-6">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <p className="min-w-[50px] text-right">
                            {homeTeam.statistics.free_kicks}
                        </p>
                        <div className="w-[100px] relative h-[15px] bg-[#0c1a2d] rounded-md">
                            <div
                                style={{
                                    width:
                                        homeTeam.statistics
                                            .free_kicks * 2,
                                    height: "100%",
                                }}
                                className="bg-red-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                    </div>
                    <div>Free Kicks</div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="w-[100px] relative h-[15px] rounded-md bg-[#0c1a2d]">
                            <div
                                style={{
                                    width:
                                        awayTeam.statistics
                                            .free_kicks * 2,
                                    height: "100%",
                                }}
                                className="bg-green-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                        <p className="min-w-[50px] text-left">
                            {awayTeam.statistics.free_kicks}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between gap-4 px-6">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <p className="min-w-[50px] text-right">
                            {homeTeam.statistics.yellow_cards}
                        </p>
                        <div className="w-[100px] relative h-[15px] bg-[#0c1a2d] rounded-md">
                            <div
                                style={{
                                    width:
                                        homeTeam.statistics
                                            .yellow_cards * 2,
                                    height: "100%",
                                }}
                                className="bg-red-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center">
                        <div className="w-2 h-3 bg-yellow-400"></div>
                        <p>Cards</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="w-[100px] relative h-[15px] rounded-md bg-[#0c1a2d]">
                            <div
                                style={{
                                    width:
                                        awayTeam.statistics
                                            .yellow_cards * 2,
                                    height: "100%",
                                }}
                                className="bg-green-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                        <p className="min-w-[50px] text-left">
                            {awayTeam.statistics.yellow_cards}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between gap-4 px-6">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <p className="min-w-[50px] text-right">
                            {homeTeam.statistics.red_cards}
                        </p>
                        <div className="w-[100px] relative h-[15px] bg-[#0c1a2d] rounded-md">
                            <div
                                style={{
                                    width:
                                        homeTeam.statistics
                                            .red_cards * 2,
                                    height: "100%",
                                }}
                                className="bg-red-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center">
                        <div className="w-2 h-3 bg-red-600"></div>
                        <p>Cards</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="w-[100px] relative h-[15px] rounded-md bg-[#0c1a2d]">
                            <div
                                style={{
                                    width:
                                        awayTeam.statistics
                                            .red_cards * 2,
                                    height: "100%",
                                }}
                                className="bg-green-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                        <p className="min-w-[50px] text-left">
                            {awayTeam.statistics.red_cards}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between gap-4 px-6">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <p className="min-w-[50px] text-right">
                            {homeTeam.statistics.corner_kicks}
                        </p>
                        <div className="w-[100px] relative h-[15px] bg-[#0c1a2d] rounded-md">
                            <div
                                style={{
                                    width:
                                        homeTeam.statistics
                                            .corner_kicks * 2,
                                    height: "100%",
                                }}
                                className="bg-red-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                    </div>
                    <div>Corners</div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="w-[100px] relative h-[15px] rounded-md bg-[#0c1a2d]">
                            <div
                                style={{
                                    width:
                                        awayTeam.statistics
                                            .corner_kicks * 2,
                                    height: "100%",
                                }}
                                className="bg-green-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                        <p className="min-w-[50px] text-left">
                            {awayTeam.statistics.corner_kicks}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-between gap-4 px-6">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <p className="min-w-[50px] text-right">
                            {homeTeam.statistics.offsides}
                        </p>
                        <div className="w-[100px] relative h-[15px] bg-[#0c1a2d] rounded-md">
                            <div
                                style={{
                                    width:
                                        homeTeam.statistics.offsides *
                                        2,
                                    height: "100%",
                                }}
                                className="bg-red-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                    </div>
                    <div>Offsides</div>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <div className="w-[100px] relative h-[15px] rounded-md bg-[#0c1a2d]">
                            <div
                                style={{
                                    width:
                                        awayTeam.statistics.offsides *
                                        2,
                                    height: "100%",
                                }}
                                className="bg-green-500 rounded-md absolute top-0 left-0"
                            />
                        </div>
                        <p className="min-w-[50px] text-left">
                            {awayTeam.statistics.offsides}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsView;
