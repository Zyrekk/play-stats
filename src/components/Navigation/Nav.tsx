"use client"
import React, {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/Navigation/Hamburger";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/logosquare.png"


const Nav = () => {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

    return (
        <div className="w-full">
            <div className="bg-[#040910] flex justify-between flex-row py-[20px]">
                <Link href="/" className="flex flex-row justify-center items-center">
                    <div className="w-[90px] h-[90px] ml-[20px] lg:w-[110px] lg:h-[110px]">
                        <Image
                            src={logo}
                            alt={'employee image'}
                            layout="responsive"
                        />
                    </div>
                    <h1 className="hidden lg:block italic font-bold text-[42px] leading-[122.5%]  text-white">Play Stats</h1>
                </Link>
                <ul className="italic hidden lg:visible font-bold justify-center items-center lg:flex flex-row gap-8 lg:mr-[70px] text-[18px] text-white">
                    <li>
                        <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                            <HomeIcon sx={{fontSize: 28}}/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/competitions" className="link flex flex-row items-center justify-center gap-2">
                            <EmojiEventsIcon sx={{fontSize: 28}}/>
                            <span>Competitions</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/clubs" className="link flex flex-row items-center justify-center gap-2">
                            <GroupsIcon sx={{fontSize: 35}}/>
                            <span>Clubs</span>
                        </Link>
                    </li>
                </ul>
                <button onClick={()=>{setIsHamburgerOpen((prevState)=>!prevState)}} className={`ease-in-out duration-300 lg:hidden text-white mr-[30px] ${isHamburgerOpen && 'opacity-0'}`}>
                    <MenuIcon sx={{fontSize: 40}}/>
                </button>
            </div>
            <Hamburger isHamburgerOpen={isHamburgerOpen} setIsHamburgerOpen={setIsHamburgerOpen}/>
        </div>
    );
};

export default Nav;
