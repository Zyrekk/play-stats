import React from 'react';
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import logo from "@/assets/logosquare.png";

export interface HamburgerProps {
    isHamburgerOpen: boolean;
    setIsHamburgerOpen: (value: boolean) => void;
}

const Hamburger = ({isHamburgerOpen, setIsHamburgerOpen}: HamburgerProps) => {
    return (
        <div className={`transition-all z-50  ease-in-out duration-300 bg-[#1B507CCC] backdrop-blur fixed w-full top-0 h-full opacity-1 flex lg:hidden flex-col items-center ${isHamburgerOpen?'right-0':'right-[-100%]'}`}>

            <div className="flex flex-row justify-center items-center mt-6">
                <div className="flex flex-row w-[80px] h-[80px] justify-center items-center">
                    <Image
                        src={logo}
                        alt={'employee image'}
                        width={200}
                        height={200}
                    />
                </div>
                <h1 className=" italic font-bold text-[32px] leading-[122.5%]  text-white">Play Stats</h1>
            </div>
            <ul className="cursor-pointer italic font-bold items-center flex flex-col gap-8 text-[20px] text-white mt-10">
                <li onClick={()=>{setIsHamburgerOpen(false)}}>
                    <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                        <HomeIcon sx={{fontSize: 28}}/>
                        <span>Home</span>
                    </Link>
                </li>
                <li onClick={()=>{setIsHamburgerOpen(false)}}>
                    <Link href="/competitions" className="link flex flex-row items-center justify-center gap-2">
                        <EmojiEventsIcon sx={{fontSize: 28}}/>
                        <span>Competitions</span>
                    </Link>
                </li>
                <li onClick={()=>{setIsHamburgerOpen(false)}}>
                    <Link href="/clubs" className="link flex flex-row items-center justify-center gap-2">
                        <GroupsIcon sx={{fontSize: 35}}/>
                        <span>Clubs</span>
                    </Link>
                </li>
                <li className="link flex flex-row items-center justify-center gap-2" onClick={()=>{setIsHamburgerOpen(false)}}>
                    <CloseIcon sx={{fontSize: 28}}/>
                    <span>Close</span>
                </li>
            </ul>
        </div>
    );
};

export default Hamburger;
