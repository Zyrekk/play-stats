"use client";
import React, {useEffect, useState} from 'react';
import SearchClub from "@/components/ClubsPage/SearchClub";
import axios from "axios";
import SingleClub from './SingleClub';
import {AnimatePresence} from "framer-motion";
import {useAutoAnimate} from "@formkit/auto-animate/react";

const ClubsPage = () => {
    const [competitionCode, setCompetitionCode] = useState<string>('')
    const [clubs, setClubs] = useState<any>()
    const [clubName, setClubName] = useState<string>("")
    const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
    const url = `/competitions/${competitionCode}/teams?season=2023`; // Replace with your API endpoint
    const headers = {
        'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN // Add any other custom headers you need
    };
    useEffect(() => {
        if(competitionCode!==''){
            axios.get(`/api/${url}`, {headers})
                .then(response => {
                    // console.log('Response:', response.data.standings[0].table);
                    setClubs(response.data.teams)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [competitionCode]);
    const renderClubs = () => clubs.filter((club:any)=> club.name.toLowerCase().includes(clubName.toLowerCase())).map((club: any,index:number) => <SingleClub key={index} club={club}/>)
    return (
        <div
            className="text-black min-h-[60vh]  w-full justify-start gap-4 flex flex-col  bg-black  items-center  px-[16px] text-[32px] py-16">
            <h2 className="font-bold text-white text-4xl mb-4 text-center">
                Search for your club
            </h2>
            <div  ref={parent} className="justify-center gap-16 flex flex-row flex-wrap">

                <SearchClub setCompetitionCode={setCompetitionCode} clubName={clubName} setClubName={setClubName} />
                {clubs &&
                    <div>
                        <label className="mb-2 text-sm font-medium text-white" >Clubs listing</label>
                        <div  className="flex flex-col gap-4 overflow-y-scroll max-h-[280px] pr-1">
                            <AnimatePresence>
                                {renderClubs()}
                            </AnimatePresence>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ClubsPage;
