"use client";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {competitionsInfo} from "@/utils/competitionsInfo";
import Loading from "@/components/Loading/Loading";
import SingleCompetitionRow from "@/components/CompetitionsPage/SingleCompetitionRow";
import Filter from "@/components/CompetitionsPage/Filter";
import Image from "next/image";

interface competitionProps {
    code: string
}


const SingleCompetition = ({code}: competitionProps) => {
    const [leagueInfo, setLeagueInfo] = useState<any>(null)
    const [season,setSeason] = useState<string>('2023')
    const url = `/competitions/${code}/standings?season=${season}`; // Replace with your API endpoint
    const headers = {
        'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN // Add any other custom headers you need
    };
    useEffect(() => {
        axios.get(`/api/${url}`, {headers})
            .then(response => {
                // console.log('Response:', response.data.standings[0].table);
                setLeagueInfo(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [season]);
    const tableInfo = competitionsInfo.competitions.find((competition) => competition.code === code)
    return (
        <div className="min-h-screen pt-16 w-full flex justify-center">
            {leagueInfo ?
                <div className="relative overflow-x-auto shadow-md rounded-xl">
                    <table className="w-full text-sm text-left text-white cursor-default">
                        <caption className="p-5 text-3xl font-semibold text-center"
                                 style={{backgroundColor: tableInfo ? tableInfo.bgColor : '#5C5C5C'}}>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full items-center justify-center pt-6 flex-col mb-8 lg:mb-0 lg:flex-row gap-4">
                                    {leagueInfo.competition.emblem ?
                                        <div className="bg-white p-2 rounded-lg">
                                            <Image
                                                src={leagueInfo.competition.emblem}
                                                alt={'team logo'}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        :'logo'}
                                    <p>{leagueInfo.competition.name}</p>
                                </div>
                                <Filter setSeason={setSeason} season={season}/>
                            </div>
                        </caption>
                        <thead className="text-xs text-black bg-white">
                        <tr>
                            <th scope="col" className="pl-4  lg:px-4 py-3 text-center">
                                <p className="hidden md:block">
                                    Position
                                </p>
                            </th>
                            <th scope="col" className="md:px-6 pr-3 md:pr-0 py-3 ">
                                Club
                            </th>
                            <th scope="col" className="px-1 lg:px-4 py-3 text-center ">
                                <p className="hidden md:block">Played</p>
                                <p className="block md:hidden">Pl</p>
                            </th>
                            <th scope="col" className="px-1 lg:px-4 py-3 text-center">
                                <p className="hidden md:block">Won</p>
                                <p className="block md:hidden">W</p>
                            </th>
                            <th scope="col" className="px-1 lg:px-4 py-3 text-center ">
                                <p className="hidden md:block">Drawn</p>
                                <p className="block md:hidden">D</p>
                            </th>
                            <th scope="col" className="px-1 lg:px-4 py-3 text-center ">
                                <p className="hidden md:block">Lost</p>
                                <p className="block md:hidden">L</p>
                            </th>
                            <th scope="col" className="px-4 py-3 text-center hidden md:table-cell " title="Goals For">
                                <p>GF</p>
                            </th>
                            <th scope="col" className="py-3 px-4 text-center hidden md:table-cell" title="Goals Against">
                                <p>GA</p>
                            </th>
                            <th scope="col" className="px-1 lg:px-4 py-3 text-center" title="Goals Difference">
                                GD
                            </th>
                            <th scope="col" className="px-1 md:px-4 py-3 text-center">
                                <p className="hidden md:block">Points</p>
                                <p className="block md:hidden">Pts</p>
                            </th>
                            <th scope="col" className="px-4 py-3 text-center">
                                <p className="block">Form</p>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="text-black bg-white">
                        {leagueInfo.standings[0].table.map((team: any, index: number) => (
                            <SingleCompetitionRow key={index} data={team}/>
                        ))}
                        </tbody>
                    </table>
                </div>
                : <Loading/>}
        </div>
    );
};

export default SingleCompetition;
