import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const RenderMatchTile = ({
    id,
    competition,
    match,
    type,
}: {
    id: string;
    competition: string;
    match: any;
    type: string;
}) => {
    const [hover, setHover] = useState<boolean>(false);
    const isWin = (match: any) => {
        if (match.homeTeam.id === id) {
            if (match.score.fullTime.home === null) {
                return <p className="bg-gray-700 text-center py-4">Timed</p>;
            }
            if (match.score.fullTime.home > match.score.fullTime.away) {
                return <p className="bg-green-500 text-center py-4">Win</p>;
            } else if (
                match.score.fullTime.home === match.score.fullTime.away
            ) {
                return <p className="bg-gray-700 text-center py-4">Draw</p>;
            } else {
                return <p className="bg-red-500 text-center py-4">Lose</p>;
            }
        } else if (match.awayTeam.id === id) {
            if (match.score.fullTime.home === null) {
                return <p className="bg-gray-700 text-center py-4">Timed</p>;
            }
            if (match.score.fullTime.home < match.score.fullTime.away) {
                return <p className="bg-green-500 text-center py-4">Win</p>;
            } else if (
                match.score.fullTime.home === match.score.fullTime.away
            ) {
                return <p className="bg-gray-700 text-center py-4">Draw</p>;
            } else {
                return <p className="bg-red-500 text-center py-4">Lose</p>;
            }
        }
    };
    const path=usePathname()

    const getDate = () => {
        // const year = date.getFullYear();
        // const month = (date.getMonth() + 1).toString().padStart(2, '0');
        // const day = date.getDate().toString().padStart(2, '0');
        const localDate = new Date(match.utcDate);
        const year = localDate.getUTCFullYear();
        const month = (localDate.getUTCMonth() + 1).toString().padStart(2, "0");
        const day = localDate.getUTCDate().toString().padStart(2, "0");
        const hours = localDate.getUTCHours().toString().padStart(2, "0");
        const minutes = localDate.getUTCMinutes().toString().padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };
    return (
        <Link
            href={`${path.toString()}/${match.id}`}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            className="border-[1px] border-white rounded-lg"
        >
            <p className="bg-[#040910] rounded-t-lg px-8 pt-[18px] pb-6 text-center">
                {type === "previous" ? "Previous Match" : "Next Match"}
            </p>
            {match && (
                <p className="bg-[#040910] flex items-center justify-center pb-3">
                    {getDate()}
                </p>
            )}
            <div
                style={
                    hover
                        ? { backgroundColor: "#fff" }
                        : { backgroundColor: "#081221" }
                }
                className="ease-in-out duration-300 flex flex-row items-center justify-center px-6 py-6"
            >
                <div className="flex flex-col items-center justify-center">
                    <Image
                        className="max-w-[50px] max-h-[50px]"
                        src={match.homeTeam.crest}
                        alt={"team logo"}
                        width={50}
                        height={50}
                    />
                    <p
                        className="mt-3"
                        style={hover ? { color: "#000" } : { color: "#fff" }}
                    >
                        {match.homeTeam.tla}
                    </p>
                    {match.score.fullTime.home !== null ? (
                        <p
                            style={
                                hover ? { color: "#000" } : { color: "#fff" }
                            }
                            className="font-bold text-[24px] mt-4"
                        >
                            {match.score.fullTime.home}
                        </p>
                    ) : (
                        <p
                            style={
                                hover ? { color: "#000" } : { color: "#fff" }
                            }
                            className="font-bold text-[24px] mt-4"
                        >
                            -
                        </p>
                    )}
                </div>
                <div
                    style={hover ? { color: "#000" } : { color: "#fff" }}
                    className="px-6"
                >
                    VS
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        className="max-w-[50px] max-h-[50px]"
                        src={match.awayTeam.crest}
                        alt={"team logo"}
                        width={50}
                        height={50}
                    />
                    <p
                        className="mt-3"
                        style={hover ? { color: "#000" } : { color: "#fff" }}
                    >
                        {match.awayTeam.tla}
                    </p>
                    {match.score.fullTime.away !== null ? (
                        <p
                            style={
                                hover ? { color: "#000" } : { color: "#fff" }
                            }
                            className="font-bold text-[24px] mt-4"
                        >
                            {match.score.fullTime.away}
                        </p>
                    ) : (
                        <p
                            style={
                                hover ? { color: "#000" } : { color: "#fff" }
                            }
                            className="font-bold text-[24px] mt-4"
                        >
                            -
                        </p>
                    )}
                </div>
            </div>
            <div className="font-bold rounded-b-lg overflow-hidden">
                {isWin(match)}
            </div>
        </Link>
    );
};

export default RenderMatchTile;
