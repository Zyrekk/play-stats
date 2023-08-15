"use client"
import React, {useEffect, useState} from 'react';
import axios from "axios";
import CompetitionTile from "@/components/CompetitionsPage/CompetitionTile";
import Loading from "@/components/Loading/Loading";

const CompetitionsPage = () => {

    const [competitions, setCompetitions] = useState<any>(null);

    const url = 'competitions'; // Replace with your API endpoint
    const headers = {
        'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN // Add any other custom headers you need
    };
    useEffect(() => {
        axios.get(`/api/${url}`, {headers})
            .then(response => {
                // console.log('Response:', response.data.competitions[0]);
                setCompetitions(response.data.competitions)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div className="text-black min-h-[60vh]  w-full flex flex-col justify-center items-center px-[16px] text-[32px] py-16">
            <div className="flex flex-col">
                <h2 className="text-center font-bold mb-[50px]">
                        Select a league to see more stats
                </h2>
                <div className="w-full h-[2px] bg-black mb-[50px] box-border px-[30px]"/>
            </div>
            <div className="w-max flex flex-col justify-center items-center lg:items-start gap-6">
                {competitions ?
                    competitions.filter((item: { code: string; }):any=>(!['BSA','EC','PPL','CLI','WC'].includes(item.code))).map((competition: any) => (<CompetitionTile key={competition.id} competition={competition}/>))
                    : <Loading/>}
            </div>
        </div>
    );
};

export default CompetitionsPage;
