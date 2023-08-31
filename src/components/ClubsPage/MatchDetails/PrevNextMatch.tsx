import React, {useEffect, useState} from 'react';
import axios from "axios";
import RenderMatchTile from "@/components/ClubsPage/MatchDetails/RenderMatchTile";

const PrevNextMatch = ({id,matches,setView}:{id:string,matches:any,setView:(type:string)=>void}) => {
    const finishedMatches= matches && matches.filter((match:any) => match.status === 'FINISHED')
    const timedMatches=matches && matches.filter((match:any) => ['TIMED','SCHEDULED'].includes(match.status) )

    return (
        <div className=" flex flex-col mt-16 mb-16 justify-end items-center gap-8 lg:mr-[24px]">
            {matches && <div className="flex flex-row flex-wrap items-center justify-center gap-8 ">
                {finishedMatches[finishedMatches.length-1] && <RenderMatchTile id={id} match={finishedMatches[finishedMatches.length-1]} type={'previous'}/>}
                {timedMatches[0] && <RenderMatchTile id={id} match={timedMatches[0]} type={'next'}/>}
            </div>}
            <button onClick={()=>{setView('matches')}} className="border-[1px] border-white rounded-lg w-3/4 lg:w-full mb-4 lg:mb-0 bg-[#040910] py-2 ease-in-out duration-300 hover:bg-white font-semibold hover:text-black">See more matches here</button>
        </div>
    );
};

export default PrevNextMatch;
