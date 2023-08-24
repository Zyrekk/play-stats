"use client";
import React, {useState} from 'react';
import Loading from "@/components/Loading/Loading";
import {code, flag} from "country-emoji"
import Image from "next/image";


const PickedClubPlayers = ({squad}: any) => {
    const renderPlayer = (player: any, index: number) => {
        const today = new Date();
        const birthDate = new Date(player.dateOfBirth);
        const age = today.getFullYear() - birthDate.getFullYear();

        const nationality = () => {
            switch (player.nationality) {
                case 'England':
                    return "GB"
                case 'Bosnia-Herzegovina':
                    return "BA"
                default:
                    return code(player.nationality)
            }
        }

        // const nationality=player.nationality==='England'?'GB':code(player.nationality)
        return (
            <tr key={index} className={`text-white ${index % 2 == 0 ? "bg-[#0C1B31]" : "bg-[#081221]"}`}>
                <td scope="col" className="pl-4 hidden md:table-cell  lg:px-4 py-3 text-center">
                    {player.nationality &&
                        <img src={`https://flagsapi.com/${nationality()}/flat/16.png`} alt="flag image"/>}
                </td>
                <td scope="col" className="md:px-6 pr-3 md:pr-0 py-3 ">
                    <div className='md:hidden'>
                        {player.nationality &&
                            <img src={`https://flagsapi.com/${nationality()}/flat/16.png`} alt="flag image"/>}
                    </div>
                    {player.name}
                </td>
                <td scope="col" className="px-1 lg:px-4 py-3 text-center ">
                    <p>{player.position}</p>

                </td>
                <td scope="col" className="px-1 lg:px-4 py-3 text-center">
                    <p>{age}</p>
                </td>
            </tr>
        )
    }

    return (
        <div>
            {squad.length > 0 ?
                <div className="flex flex-col">
                    <p className='mx-[24px] mt-16'>Players list:</p>
                    <div className="border-[1px] border-white rounded-lg shadow-md mx-[24px] mb-16 max-h-[420px] overflow-y-scroll">
                        <table className=" text-sm text-left text-white cursor-default w-full lg:w-auto">
                            <thead className="text-xs bg-[#040910]">
                            <tr>
                                <th scope="col" className="pl-4 hidden md:table-cell lg:px-4 py-3 text-left">
                                    <p>
                                        Nationality
                                    </p>
                                </th>
                                <th scope="col" className="md:px-6 pr-3 md:pr-0 py-3 ">
                                    Player
                                </th>
                                <th scope="col" className="px-1 lg:px-4 py-3 text-center ">
                                    <p>Position</p>
                                </th>
                                <th scope="col" className="px-1 lg:px-4 py-3 text-center">
                                    <p>Age</p>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-black">
                            {squad.map((player: any, index: number) => renderPlayer(player, index))}
                            </tbody>
                        </table>
                    </div>
                </div>
                : <Loading/>}
        </div>

    );
};

export default PickedClubPlayers;
