import React from 'react';
import Image from "next/image";

interface SingleCompetitionRowProps{
    "position": number,
    "team": {
        "id": number,
        "name": string,
        "shortName": string,
        "tla": string,
        "crest": string
    },
    "playedGames": number,
    "form": string,
    "won":number,
    "draw": number,
    "lost": number,
    "points": number,
    "goalsFor": number,
    "goalsAgainst": number,
    "goalDifference": number,
}

const SingleCompetitionRow = ({data}:{data:SingleCompetitionRowProps}) => {
    const form=data.form.split(',');
    const renderForm=form.map((item,index)=>{
        return <div key={index} className={`w-[25px] h-[25px] rounded-full flex-row flex items-center 
        justify-center ${item==='W'?'bg-green-500':item==='D'?'bg-gray-400':'bg-red-500'}`}>
            <p className="text-[12px] text-white font-semibold">{item}</p>
        </div>
    })
    return (
        <tr>
            <td scope="row" className="px-4 py-4 text-center">
                {data.position}
            </td>
            <td className="px-6 py-4 font-semibold flex flex-row gap-2">
                {data.team.crest ?
                    <Image
                        src={data.team.crest}
                        alt={'team logo'}
                        width={20}
                        height={20}
                    />
                    :'logo'}
                {data.team.name}
            </td>
            <td scope="col" className="px-4 py-4 text-center">
                {data.playedGames}
            </td>
            <td scope="col" className="px-4 py-4 text-center">
                {data.won}
            </td>
            <td scope="col" className="px-4 py-4 text-center">
                {data.draw}
            </td>
            <td scope="col" className="px-4 py-4 text-center">
                {data.lost}
            </td>
            <td scope="col" className="px-4 py-4 text-center">
                {data.goalsFor}
            </td>
            <td scope="col" className="px-4 py-4 text-center">
                {data.goalsAgainst}
            </td>
            <td scope="col" className="px-4 py-4 text-center">
                {data.goalDifference}
            </td>
            <td scope="col" className="px-4 py-4 text-center font-semibold">
                {data.points}
            </td>
            <td scope="col" className="px-4 py-4 text-center">
                <div className="flex flex-row gap-1">
                    {renderForm}
                </div>
            </td>
        </tr>
    );
};

export default SingleCompetitionRow;
