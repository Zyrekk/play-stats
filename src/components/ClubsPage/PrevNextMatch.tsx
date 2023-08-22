import React, {useEffect, useState} from 'react';
import axios from "axios";
import Image from "next/image";
import {log} from "util";

const PrevNextMatch = ({id,competition}:{id:string,competition:string}) => {
    const [matches,setMatches] = useState<any>(null)
    const url = `/teams/${id}/matches?competitions=${competition}&season=2023`; // Replace with your API endpoint
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

    const isWin=(match:any)=>{
        if(match.homeTeam.id === id){
            if(match.score.fullTime.home===null){
                return <p className="bg-gray-700 text-center py-4">Timed</p>
            }
            if(match.score.fullTime.home > match.score.fullTime.away){
                return <p className="bg-green-500 text-center py-4">Win</p>
            }
            else if(match.score.fullTime.home === match.score.fullTime.away){
                return <p className="bg-gray-700 text-center py-4">Draw</p>
            }
            else{
                    return <p className="bg-red-500 text-center py-4">Lose</p>
            }
        }
        else if(match.awayTeam.id === id){
            if(match.score.fullTime.home===null){
                return <p className="bg-gray-700 text-center py-4">Timed</p>
            }
            if(match.score.fullTime.home < match.score.fullTime.away){
                return <p className="bg-green-500 text-center py-4">Win</p>
            }
            else if(match.score.fullTime.home === match.score.fullTime.away){
                return <p className="bg-gray-700 text-center py-4">Draw</p>
            }
            else{
                return <p className="bg-red-500 text-center py-4">Lose</p>
            }
        }
    }

    const renderMatchTile=(type:string,match:any)=>{
        return(
            <div>
                <p className='bg-[#040910] rounded-t-lg px-8 py-6 text-center'>{type==='previous'?'Previous Match':'Next Match'}</p>
                <div className="flex flex-row items-center justify-center px-6 py-6 bg-[#081221]">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            className="max-w-[50px] max-h-[50px]"
                            src={match.homeTeam.crest}
                            alt={'team logo'}
                            width={50}
                            height={50}
                        />
                        <p className="mt-3">{match.homeTeam.tla}</p>
                        {match.score.fullTime.home!==null ?<p className="font-bold text-[24px] mt-4">{match.score.fullTime.home}</p>:<p className="font-bold text-[24px] mt-4">-</p>}
                    </div>
                    <div className="px-6">VS</div>
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            className="max-w-[50px] max-h-[50px]"
                            src={match.awayTeam.crest}
                            alt={'team logo'}
                            width={50}
                            height={50}
                        />
                        <p className="mt-3">{match.awayTeam.tla}</p>
                        { match.score.fullTime.away!==null ? <p className="font-bold text-[24px] mt-4">{match.score.fullTime.away}</p>:<p className="font-bold text-[24px] mt-4">-</p>}
                    </div>
                </div>
                <div className="font-bold rounded-b-lg overflow-hidden">
                    {isWin(match)}
                </div>
            </div>
        )

    }

    matches && console.log(matches)
    return (
        <div className="my-16">
            <div className="flex flex-row gap-8 ">

                {finishedMatches &&renderMatchTile('previous',finishedMatches[finishedMatches.length-1])}
                {timedMatches&& renderMatchTile('next',timedMatches[0])}
            </div>
        </div>
    );
};

export default PrevNextMatch;
