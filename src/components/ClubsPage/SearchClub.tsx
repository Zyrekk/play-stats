import React, {useEffect, useState} from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import Image from "next/image";

import {useAutoAnimate} from "@formkit/auto-animate/react";

export interface SearchClubProps {
    setCompetitionCode: (competition: string) => void;
    setClubName: (clubName: string) => void;
    clubName: string
}

const SearchClub = ({setCompetitionCode, setClubName, clubName}: SearchClubProps) => {
    const [competitions, setCompetitions] = useState<any>(null);
    const [competition, setCompetition] = useState<any>(null);
    const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
    const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

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

    const renderOptions = () => {
        return competitions.filter((item: { code: string; }): any => (!['BSA', 'EC', 'PPL', 'CLI', 'WC'].includes(item.code))).map((competition: any) => {
            return (
                <button
                    onClick={() => {
                        setCompetitionCode(competition.code);
                        setCompetition(competition);
                    }}
                    className="w-full flex flex-row max-w-[350px]  items-center justify-between py-2 px-4 rounded-full bg-white text-[16px]"
                    key={competition.id}>
                    {competition.emblem ?
                        <Image
                            src={competition.emblem}
                            alt={'img'}
                            width={30}
                            height={30}
                        />
                        : 'logo'}
                    {competition.name}
                </button>
            )
        })
    }
    return (
        <div className="flex items-center  text-black flex-col">
            <div className="flex w-full flex-col ">
                <div className="w-full max-w-[350px]">
                    <label htmlFor="small" className="mb-2 text-sm font-medium text-white">Competition</label>
                    <div
                        ref={parent}
                        onClick={() => setIsOptionsOpen((prevState) => !prevState)}
                        className="relative w-full max-w-[350px] flex items-center justify-between flex-row h-12 px-4 rounded-full bg-white text-[16px]">
                        <div className="flex justify-between items-center w-full cursor-pointer">

                            {competition === null ?
                                <p>Select Competition</p>
                                :
                                <div className="flex flex-row items-center justify-center gap-2">
                                    {competition?.emblem ?
                                        <Image
                                            src={competition.emblem}
                                            alt={'img'}
                                            width={30}
                                            height={30}
                                        />
                                        : 'logo'}
                                    <p>{competition?.name}</p>
                                </div>}
                            <div className={`ease-in-out duration-200 ${isOptionsOpen && 'rotate-180'}`}>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                        {isOptionsOpen &&
                            <div
                                className="absolute max-h-[160px] flex flex-col gap-4 rounded-lg overflow-y-scroll overflow-x-hidden top-[140%] pb-6 left-0 w-full z-10 shadow-lg bg-black text-black text-[16px]">
                                {
                                    competitions && renderOptions()
                                }
                            </div>}
                    </div>
                </div>
                <div>
                    <label htmlFor="small" className="mb-2 text-sm font-medium text-white">Club name</label>
                    <input
                        value={clubName}
                        onChange={(e) => setClubName(e.target.value)}
                        type="text"
                        placeholder="Club name"
                        className="w-full max-w-[350px] h-12 px-4 rounded-full bg-white text-[16px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchClub;
