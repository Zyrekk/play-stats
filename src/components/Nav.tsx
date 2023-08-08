"use client"
import React, {useEffect, useLayoutEffect, useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import Image from "next/image";
import x from '../../public/logo.png'
import Link from "next/link";


const Nav = () => {

    const [windowSize, setWindowSize] = useState(0);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize(window.innerWidth);
        }

    }, []);

    useLayoutEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex w-full justify-between flex-row">
            <Link href="/" className="flex flex-row justify-center items-center">
                <Image
                    src={x}
                    alt={'employee image'}
                    width={200}
                    height={200}
                />
                <h1 className="italic font-bold text-[42px] leading-[122.5%]  text-white">Play Stats</h1>
            </Link>
            <ul className="italic font-bold justify-center items-center flex flex-row gap-8 mr-[150px] text-[24px] text-white">
                <li>
                    <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                        <HomeIcon sx={{fontSize: 28}}/>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                        <EmojiEventsIcon sx={{fontSize: 28}}/>
                        <span>Leagues</span>
                    </Link>
                </li>
                <li>
                    <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                        <GroupsIcon sx={{fontSize: 35}}/>
                        <span>Teams</span>
                    </Link>
                </li>
                <li>
                    <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                        <div className="relative w-[15px] h-[15px] rounded-full bg-red-600">
                            <div className="absolute h-full w-full rounded-full animate-ping bg-red-600"/>
                        </div>
                        <span>Live</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
