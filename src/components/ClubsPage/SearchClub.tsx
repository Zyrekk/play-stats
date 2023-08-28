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
    const [competitionInput, setCompetitionInput] = useState<string>('');
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
        return competitions.filter((item: { code: string; }): any => (!['BSA', 'EC', 'PPL', 'CLI', 'WC'].includes(item.code))).filter((item: { name: string; }): any => (item.name.toLowerCase().includes(competitionInput.toLowerCase()))).map((competition: any) => {
            return (
                <button
                    onClick={() => {
                        setCompetitionCode(competition.code);
                        setCompetition(competition);
                        setIsOptionsOpen(false)
                        setCompetitionInput(competition.name)
                    }}
                    className="w-full flex flex-row max-w-[450px]  items-center justify-between py-2 px-4 rounded-full bg-white text-[16px]"
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
                <div className="w-full max-w-[450px]">
                    <label htmlFor="small" className="mb-2 text-sm font-medium text-white">Competition</label>
                    <div
                        ref={parent}
                        className="relative lg:w-[450px] w-full max-w-[450px] flex items-center justify-between flex-row h-12 px-4 rounded-full bg-white text-[16px]">
                        <div className="flex justify-between items-center lg:w-full cursor-pointer">

                            <div className="w-[40]">
                                {competition!==null &&
                                    <div className=" mr-2">
                                        <Image
                                            src={competition.emblem}
                                            alt={'img'}
                                            width={30}
                                            height={30}
                                        />
                                    </div>}
                            </div>
                            <input value={competitionInput} onChange={(event)=>{
                                setCompetitionInput(event.target.value)
                                setIsOptionsOpen(true)
                            }} placeholder={'Type or select competition'} maxLength={30}  className="w-full outline-none" type="text"/>
                            <div onClick={() => setIsOptionsOpen((prevState) => !prevState)} className={`ease-in-out duration-200 ${isOptionsOpen && 'rotate-180'}`}>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                        {isOptionsOpen &&
                            <div
                                className="absolute h-[170px]   flex flex-col gap-4 rounded-lg overflow-y-scroll overflow-x-hidden top-[100%] pt-4 pb-6 left-0 w-full z-10 shadow-lg bg-[#122340] text-black text-[16px]">
                                {
                                    competitions && renderOptions()
                                }
                            </div>}
                    </div>
                </div>
                <div className="flex flex-col mt-10">
                    <label htmlFor="small" className="mb-2 text-sm font-medium text-white">Club name</label>
                    <input
                        value={clubName}
                        onChange={(e) => setClubName(e.target.value)}
                        type="text"
                        placeholder="Club name"
                        className="w-full max-w-[450px] h-12 px-4 rounded-full bg-white text-[16px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchClub;
