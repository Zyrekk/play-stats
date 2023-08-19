"use client";
import React, {useEffect} from 'react';
import axios from "axios";
import Image from "next/image";


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
        <div className="text-white w-full flex justify-center min-h-[60vh] my-16">
            <div className="flex flex-col bg-neutral-900 min-w-[900px] rounded-xl">
                {team &&
                    <div className="flex w-full items-center py-6 bg-[#38003C] justify-center rounded-lg flex-row gap-6">
                        {team.crest ?
                            <div className="rounded-lg">
                                <Image
                                    className="bg-[#38003C]"
                                    src={team.crest}
                                    alt={'team logo'}
                                    width={60}
                                    height={60}
                                />
                            </div>
                            : 'logo'}
                        <h1 className="text-3xl font-bold">{team && team.name}</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default PickedClub;
