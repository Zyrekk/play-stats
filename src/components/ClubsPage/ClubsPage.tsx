"use client";
import React, {useEffect, useState} from 'react';
import SearchClub from "@/components/ClubsPage/SearchClub";
import axios from "axios";
import SingleClub from './SingleClub';
import {AnimatePresence} from "framer-motion";

const ClubsPage = () => {
    const [competitionCode, setCompetitionCode] = useState<string>("PL")
    const [clubs, setClubs] = useState<any>()
    const [clubName, setClubName] = useState<string>("")
    const url = `/competitions/${competitionCode}/teams?season=2023`; // Replace with your API endpoint
    const headers = {
        'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN // Add any other custom headers you need
    };
    useEffect(() => {
        axios.get(`/api/${url}`, {headers})
            .then(response => {
                // console.log('Response:', response.data.standings[0].table);
                setClubs(response.data.teams)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [competitionCode]);
    const renderClubs = () => clubs.filter((club:any)=> club.name.toLowerCase().includes(clubName.toLowerCase())).map((club: any,index:number) => <SingleClub key={index} club={club}/>)
    return (
        <div
            className="op text-black min-h-[60vh]  w-full flex flex-col bg-black  items-center px-[16px] text-[32px] py-16">
           <SearchClub competitionCode={competitionCode} setCompetitionCode={setCompetitionCode} clubName={clubName} setClubName={setClubName} />
            {clubs &&
                <div  className="op flex flex-col justify-center gap-10 mt-16">
                    <AnimatePresence>
                        {renderClubs()}
                    </AnimatePresence>
                </div>
            }
        </div>
    );
};

export default ClubsPage;
