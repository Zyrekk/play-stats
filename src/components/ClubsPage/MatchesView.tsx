import React from 'react';
import Image from "next/image";

const MatchesView = ({id,matches}:{id:number,matches:any}) => {
    console.log(id)
    const isWin = (match: any) => {
        console.log(match.homeTeam.id,match.awayTeam.id)
        if (match.homeTeam.id === id) {
            if (match.score.fullTime.home === null) {
                return '#383838';
            }
            if (match.score.fullTime.home > match.score.fullTime.away) {
                return '#22c55e';
            } else if (
                match.score.fullTime.home === match.score.fullTime.away
            ) {
                return '#737373';
            } else {
                return '#ef4444';
            }
        } else if (match.awayTeam.id === id) {
            if (match.score.fullTime.home === null) {
                return '#383838';
            }
            if (match.score.fullTime.home < match.score.fullTime.away) {
                return '#22c55e';
            } else if (
                match.score.fullTime.home === match.score.fullTime.away
            ) {
                return '#737373';
            } else {
                return '#ef4444';
            }
        }
    };

    const renderMatches = () => {
        return matches.map((match:any) => {
            return (
                <div style={{backgroundColor:isWin(match)}} className="flex flex-row justify-center rounded-xl px-2 py-2">
                    <div className="flex flex-row gap-2 items-start justify-center">
                        <div className="flex flex-col items-center justify-center mt-6 gap-2">
                            <Image
                                className="max-w-[60px] max-h-[60px]"
                                src={match.homeTeam.crest}
                                alt={"team logo"}
                                width={120}
                                height={120}
                            />
                            <p className="text-[14px] w-[157px] text-center">{match.homeTeam.name}</p>
                        </div>
                        <p className="text-[20px] h-full flex items-center justify-center">{match.score.fullTime.home!==null?match.score.fullTime.home:'-'}</p>
                    </div>
                    <p className="flex items-center justify-center px-3">:</p>
                    <div className="flex flex-row gap-2 items-start justify-center">
                        <p className="text-[20px] h-full flex items-center justify-center">{match.score.fullTime.away!==null?match.score.fullTime.away:'-'}</p>
                        <div className="flex flex-col items-center justify-center mt-6 gap-2">
                            <Image
                                className="max-w-[60px] max-h-[60px]"
                                src={match.awayTeam.crest}
                                alt={"team logo"}
                                width={120}
                                height={120}
                            />
                            <p className="text-[14px] w-[157px] text-center">{match.awayTeam.name}</p>
                        </div>
                    </div>
                </div>
            )
        })
    };

    console.log(matches)
    return (
        <div className="flex flex-col gap-4">
            {renderMatches()}
        </div>
    );
};

export default MatchesView;
