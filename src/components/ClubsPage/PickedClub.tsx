"use client";
import React, {useEffect} from 'react';
import axios from "axios";
import Image from "next/image";
import PickedClubPlayers from "@/components/ClubsPage/PickedClubPlayers";
import StadiumIcon from '@mui/icons-material/Stadium';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import FunctionsIcon from '@mui/icons-material/Functions';
import PrevNextMatch from "@/components/ClubsPage/PrevNextMatch";
import Link from "next/link";

interface PickedClubProps {
    id: string
}

const PickedClub = ({id}: PickedClubProps) => {
    const [team, setTeam] = React.useState<any>(null);
    const url = `teams/${id}`; // Replace with your API endpoint
    const headers = {
        'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN // Add any other custom headers you need
    };
    useEffect(() => {
        axios.get(`/api/${url}`, {headers})
            .then(response => {
                // console.log('Response:', response.data.standings[0].table);
                setTeam(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div className="text-white w-full flex justify-center min-h-[60vh] my-16 mx-[32px] lg:mx-0">
            <div className="flex flex-col bg-[#122340] items-center shadow-2xl rounded-xl">
                {team &&
                    <div className="flex w-full items-start py-6 justify-between gap-12 px-6 flex-row flex-wrap">
                        <div className="flex flex-row flex-wrap gap-6">
                            {team.crest ?
                                <div className=" bg-[#040910] border-[1px] border-white rounded-full px-5 py-5 flex items-center justify-center ">
                                    <Image
                                        className=""
                                        src={team.crest}
                                        alt={'team logo'}
                                        width={90}
                                        height={90}
                                    />
                                </div>
                                : 'logo'}
                            <div className="flex flex-col gap-2 h-full">
                                <h1 className="text-[22px] font-bold">{team && team.name}</h1>
                                <div className="flex flex-row gap-2">
                                    {team.area ?
                                        <Image
                                            className=""
                                            src={team.area.flag}
                                            alt={'team logo'}
                                            width={20}
                                            height={20}
                                        />
                                        : 'logo'}
                                    <p className="text-[14px]">{team.area.name && team.area.name}</p>
                                </div>
                                {team &&
                                    <div className="md:hidden flex flex-row items-center justify-center gap-2">
                                        <div className="rounded-full w-fit bg-white px-1 py-1">
                                            <Image
                                                className=""
                                                src={team.runningCompetitions[0].emblem}
                                                alt={'team logo'}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <p className='text-[14px]'>{team.runningCompetitions[0].name}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-8 max-w-[507px]">
                            <div className="flex flex-col gap-1 md:gap-2">
                                <div className="flex flex-row gap-1 items-center justify-start">
                                    <PersonIcon/>
                                    <p className="text-[12px]">Manager</p>
                                </div>
                                <p className="border-[1px] text-center border-white py-2 px-6 bg-[#040910] rounded-lg">{team.coach.name}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-1 items-center justify-start">
                                    <StadiumIcon/>
                                    <p className="text-[12px]">Stadium</p>
                                </div>
                                <p className="border-[1px] text-center border-white py-2 px-6 bg-[#040910] rounded-lg">{team.venue}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-1 items-center justify-start">
                                    <CalendarMonthIcon/>
                                    <p className="text-[12px]">Founded</p>
                                </div>
                                <p className="border-[1px] text-center border-white py-2 px-6 bg-[#040910] rounded-lg">{team.founded}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-1 items-center justify-start">
                                    <GroupsIcon/>
                                    <p className="text-[12px]">Number of players</p>
                                </div>
                                <p className="border-[1px] text-center border-white py-2 px-6 bg-[#040910] rounded-lg">{team.squad.length}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-1 items-center justify-start">
                                    <FunctionsIcon/>
                                    <p className="text-[12px]">Age average</p>
                                </div>
                                <p className="border-[1px] text-center border-white py-2 px-6 bg-[#040910] rounded-lg">{(team.squad.reduce((acc: number, player: any) => {
                                    const today = new Date();
                                    const birthDate = new Date(player.dateOfBirth);
                                    const age = today.getFullYear() - birthDate.getFullYear();
                                    return acc + age
                                }, 0) / team.squad.length).toFixed(1)}</p>
                            </div>
                        </div>
                        <Link href={`/competitions/${team.runningCompetitions[team.runningCompetitions.length - 1].code}`} className=" hidden md:block">
                            {team ?
                                <div className="rounded-full bg-white px-2 py-2">
                                    <Image
                                        className=""
                                        src={team.runningCompetitions[team.runningCompetitions.length - 1].emblem}
                                        alt={'team logo'}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                : 'logo'}
                        </Link>
                    </div>
                }
                <div className="flex flex-col items-end lg:flex-row gap-5">
                    {team && <PickedClubPlayers squad={team.squad}/>}
                    {team && <PrevNextMatch id={team.id} competition={team.runningCompetitions[team.runningCompetitions.length - 1].code}/>}
                </div>
            </div>
        </div>
    );
};

export default PickedClub;
