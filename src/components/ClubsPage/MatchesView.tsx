import React, {useState} from 'react';
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MatchesFilter from "@/components/ClubsPage/MatchesFilter";

const MatchesView = ({id, matches, setView}: { id: number, matches: any, setView: (type: string) => void }) => {

    const [filter,setFilter] = useState<string>('all')
    const isWin = (match: any) => {
        if (match.homeTeam.id === id) {
            if (match.score.fullTime.home === null) {
                return '#040910';
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
        } else{
            if (match.score.fullTime.home === null) {
                return '#040910';
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

    const renderMatchStatus = (type: string) => {
        switch (type) {
            case '#040910':
                return 'Timed';
            case '#22c55e':
                return 'Won';
            case '#737373':
                return 'Draw';
            case '#ef4444':
                return 'Lost';
        }

    }

    const renderMatches = () => {

        const matchesFiltered = matches.filter((match: any) => {
            if (filter === 'all') {
                return match;
            } else if (filter === 'won') {
                if (match.homeTeam.id === id){
                    if (match.score.fullTime.home !== null) {
                        if (match.score.fullTime.home > match.score.fullTime.away) {
                            return match;
                        }
                    }
                }
                else{
                    if (match.score.fullTime.home !== null) {
                        if (match.score.fullTime.home < match.score.fullTime.away) {
                            return match;
                        }
                    }
                }
            }
            else if (filter === 'lost') {
                if (match.homeTeam.id === id){
                    if (match.score.fullTime.home !== null) {
                        if (match.score.fullTime.home < match.score.fullTime.away) {
                            return match;
                        }
                    }
                }
                else{
                    if (match.score.fullTime.home !== null) {
                        if (match.score.fullTime.home > match.score.fullTime.away) {
                            return match;
                        }
                    }
                }
            }
            else if (filter === 'draw') {
                if (match.homeTeam.id === id){
                    if (match.score.fullTime.home !== null) {
                        if (match.score.fullTime.home === match.score.fullTime.away) {
                            return match;
                        }
                    }
                }
                else{
                    if (match.score.fullTime.home !== null) {
                        if (match.score.fullTime.home === match.score.fullTime.away) {
                            return match;
                        }
                    }
                }
            }
            else if (filter === 'timed') {
                if (match.homeTeam.id === id) {
                    if (match.score.fullTime.home === null) {
                        return match;
                    }
                } else {
                    if (match.score.fullTime.home === null) {
                        return match;
                    }
                }
            }
        })

        return matchesFiltered.map((match: any) => {
            return (
                <div style={{backgroundColor: isWin(match)}}
                     className="flex flex-col lg:flex-row justify-center rounded-xl lg:px-2 py-2">
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row gap-2 items-start justify-center">
                            <div className="flex flex-col items-center justify-center mt-6 gap-2">
                                <Image
                                    className="max-w-[45px] max-h-[45px] lg:max-w-[60px] lg:max-h-[60px]"
                                    src={match.homeTeam.crest}
                                    alt={"team logo"}
                                    width={120}
                                    height={120}
                                />
                                <p className="text-[13px] lg:text-[14px] w-[120px] lg:w-[157px] text-center">{match.homeTeam.name}</p>
                            </div>
                            <p className="text-[20px] h-full flex items-center justify-center">{match.score.fullTime.home !== null ? match.score.fullTime.home : '-'}</p>
                        </div>
                        <p className="flex items-center justify-center px-3">:</p>
                        <div className="flex flex-row gap-2 items-start justify-center">
                            <p className="text-[20px] h-full flex items-center justify-center">{match.score.fullTime.away !== null ? match.score.fullTime.away : '-'}</p>
                            <div className="flex flex-col items-center justify-center mt-6 gap-2">
                                <Image
                                    className="max-w-[45px] max-h-[45px] lg:max-w-[60px] lg:max-h-[60px]"
                                    src={match.awayTeam.crest}
                                    alt={"team logo"}
                                    width={120}
                                    height={120}
                                />
                                <p className="text-[13px] lg:text-[14px] w-[120px] lg:w-[157px] text-center">{match.awayTeam.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-[18px] px-8 font-semibold">
                        {renderMatchStatus(isWin(match))}
                    </div>
                </div>
            )
        })
    };

    console.log(matches)
    return (
        <div className="flex flex-col gap-4">
            <button onClick={() => {
                setView('regular')
            }} className="flex bg-[#040910] py-5 rounded-lg flex-row items-center justify-center">
                <ArrowBackIosIcon/> Back
            </button>
            <MatchesFilter setFilter={setFilter} filter={filter}/>
            <div className="text-center text-[24px]">Matches in this season</div>
            {renderMatches()}
        </div>
    );
};

export default MatchesView;
