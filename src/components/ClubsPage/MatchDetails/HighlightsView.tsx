import {event, eventList} from "@/components/ClubsPage/MatchDetails/SelectedMatch";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsIcon from '@mui/icons-material/Sports';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import React from "react";

const HighlightsView = ({data,matchTime}: { data: eventList[],matchTime:number }) => {

    const renderEvent = (event: event) => {
        switch (event.type) {
            case "goal":
                return <div className="text-green-500 flex items-center gap-2 justify-start flex-row">
                    <SportsSoccerIcon/>
                    <p>Goal!</p>
                    <p>{event.score?.home} - {event.score?.away}</p>
                    <p>{event.scorer?.name}</p>
                </div>
            case "card":
                return <div style={{color: event.cardType === 'YELLOW' ? '#fbbf24' : '#ef4444'}}
                            className="flex items-center gap-2 justify-start flex-row">
                    {event.cardType === 'YELLOW' ? <div className="w-2 h-3 bg-yellow-400"></div> :
                        <div className="w-2 h-3 bg-red-500"></div>}
                    <p>Card!</p>
                    <p>{event.player?.name}</p>

                </div>
            case "substitution":
                return <div className="flex items-start text-blue-300 justify-center flex-col">
                    <div className="flex flex-row gap-2">
                        <ChangeCircleOutlinedIcon/>
                        <p>Substitution!</p>
                    </div>
                    <p>{event.playerOut?.name} - {event.playerIn?.name}</p>
                </div>
            default:
                return <span className="text-green-500">no data</span>
        }

    }

    const renderTimeline = () => {
        return data.map((item, index) => {
            return (
                <li key={index} className="mb-10 ml-6">
                    <span
                        className="absolute text-[13px]  flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-4 ring-white font-semibold">
                        {item.minute}'
                    </span>
                    <div className="flex flex-col gap-2">
                        {item.events.map((event, index) =>
                            renderEvent(event)
                        )}
                    </div>
                </li>
            )
        })
    };

    return (
        <div className="lg:px-24 flex items-center justify-center flex-col py-6 rounded-lg bg-[#040910]">
            <p className=" text-center text-[18px] w-full font-semibold px-6 py-6">
                Highlights
            </p>
            <div className="w-3/4 h-[2px] mx-auto bg-white px-3 mb-8"/>
            <ol className=" ml-8 mb-10  bg-[#040910] relative border-l-[2px] border-green-500 text-black">
                <li className="mb-10 ml-6">
                    <span
                        className="absolute text-[13px]  flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-4 ring-white font-semibold">
                        {90+matchTime}'
                    </span>
                    <div className="flex text-white flex-row gap-2">
                        <SportsIcon/>
                        <p>Match has ended!</p>
                    </div>
                </li>
                {renderTimeline()}
                <li className=" ml-6">
                    <span
                        className="absolute text-[13px]  flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-4 ring-white font-semibold">
                        1'
                    </span>
                    <p className="text-white">Match has started!
                    </p>
                </li>
            </ol>


        </div>
    );
};

export default HighlightsView;
