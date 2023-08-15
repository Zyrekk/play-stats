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
    return (
        <tr className="font-semibold">
            <td scope="row" className="px-4 py-4 text-center">
                {data.position}
            </td>
            <td className="px-6 py-4 flex flex-row gap-2">
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
            <td scope="col" className="px-4 py-4 text-center">
                {data.points}
            </td>
        </tr>
    );
};

export default SingleCompetitionRow;
