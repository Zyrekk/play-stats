import React, {useEffect, useState} from 'react';
import axios from "axios";
import Image from "next/image";
import Link from 'next/link';
import background from "@/components/Background/Background";
import RenderMatchTile from "@/components/ClubsPage/RenderMatchTile";

const PrevNextMatch = ({id,competition}:{id:string,competition:string}) => {
    const [matches,setMatches] = useState<any>(null)
    const url = `/teams/${id}/matches?competitions=${competition}&season=2023`; // Replace with your API endpoint
    const [hover,setHover]=useState<boolean>(false)
    const headers = {
        'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN // Add any other custom headers you need
    };
    useEffect(() => {
        axios.get(`/api/${url}`, {headers})
            .then(response => {
                // console.log('Response:', response.data.standings[0].table);
                setMatches(response.data.matches)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const finishedMatches= matches && matches.filter((match:any) => match.status === 'FINISHED')
    const timedMatches=matches && matches.filter((match:any) => ['TIMED','SCHEDULED'].includes(match.status) )

    return (
        <div className=" flex flex-col mt-16 mb-16 justify-end items-center gap-8 lg:mr-[24px]">
            {matches && <div className="flex flex-row flex-wrap items-center justify-center gap-8 ">
                {finishedMatches[finishedMatches.length-1] && <RenderMatchTile id={id} match={finishedMatches[finishedMatches.length-1]} competition={competition} type={'previous'}/>}
                {timedMatches[0] && <RenderMatchTile id={id} match={timedMatches[0]} competition={competition} type={'next'}/>}
            </div>}
            <button className="border-[1px] border-white rounded-lg w-3/4 lg:w-full mb-4 lg:mb-0 bg-[#040910] py-2 ease-in-out duration-300 hover:bg-white font-semibold hover:text-black">See more matches here</button>
        </div>
    );
};

export default PrevNextMatch;
