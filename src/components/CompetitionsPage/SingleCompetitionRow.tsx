import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface SingleCompetitionRowProps {
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
    "won": number,
    "draw": number,
    "lost": number,
    "points": number,
    "goalsFor": number,
    "goalsAgainst": number,
    "goalDifference": number,
}

const SingleCompetitionRow = ({data}: { data: SingleCompetitionRowProps }) => {
    const form = data.form.split(',');
    const renderFormDesktop = form.map((item, index) => {
        return <div key={index} className={`w-[16px] h-[16px] md:w-[25px] md:h-[25px] rounded-full flex-row flex items-center 
        justify-center ${item === 'W' ? 'bg-green-500' : item === 'D' ? 'bg-gray-400' : 'bg-red-500'}`}>
            <p className="text-[8px] md:text-[12px] text-white font-semibold">{item}</p>
        </div>
    })
    const renderFormMobile = form.slice(0,3).map((item, index) => {
        return <div key={index} className={`w-[16px] h-[16px] md:w-[25px] md:h-[25px] rounded-full flex-row flex items-center 
        justify-center ${item === 'W' ? 'bg-green-500' : item === 'D' ? 'bg-gray-400' : 'bg-red-500'}`}>
            <p className="text-[8px] md:text-[12px] text-white font-semibold">{item}</p>
        </div>
    })
    return (
        <tr>
            <td scope="row" className="pl-4 md:pl-0 md:px-4 py-4 text-center">
                {data.position}
            </td>
            <td className="md:px-6 pr-2 md:pr-0 py-4 font-semibold flex flex-row gap-2">
                {data.team.crest ?
                    <Image
                        src={data.team.crest}
                        alt={'team logo'}
                        width={20}
                        height={20}
                    />
                    : 'logo'}
                <Link href={`/clubs/${data.team.id}`} className="hidden md:table-cell">
                    <p className="hidden md:table-cell">{data.team.name}</p>
                </Link>
                <Link href={`/clubs/${data.team.id}`} className="md:hidden">
                    <p className="md:hidden">{data.team.tla}</p>
                </Link>
                {/*<p className="hidden md:table-cell">{data.team.name}</p>*/}
                {/*<p className="md:hidden">{data.team.tla}</p>*/}
            </td>
            <td scope="col" className="px-1 md:px-4 py-3 text-center">
                {data.playedGames}
            </td>
            <td scope="col" className="px-1 md:px-4 py-3 text-center">
                {data.won}
            </td>
            <td scope="col" className="px-1 md:px-4 py-3 text-center">
                {data.draw}
            </td>
            <td scope="col" className="px-1 md:px-4 py-3 text-center">
                {data.lost}
            </td>
            <td scope="col" className="px-1 md:px-4 py-3 hidden md:table-cell text-center">
                {data.goalsFor}
            </td>
            <td scope="col" className="px-1 md:px-4 py-3 hidden md:table-cell text-center">
                {data.goalsAgainst}
            </td>
            <td scope="col" className="px-1 md:px-4 py-3 text-center">
                {data.goalDifference}
            </td>
            <td scope="col" className="px-1 md:px-4 py-3 text-center font-semibold">
                {data.points}
            </td>
            <td scope="col" className="px-4 py-3 text-center">
                <div className="hidden md:flex flex-row justify-center items-center gap-1">
                    {renderFormDesktop}
                </div>
                <div className="flex md:hidden flex-row justify-center items-center gap-1">
                    {renderFormMobile}
                </div>
            </td>
        </tr>
    );
};

export default SingleCompetitionRow;
