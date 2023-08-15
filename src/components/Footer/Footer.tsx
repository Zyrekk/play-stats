"use client"
import React from 'react';
import logo from "@/assets/logosquare.png";
import Image from "next/image";
import Link from "next/link";
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className="w-full bg-black flex items-center flex-col py-[60px] px-[32px] sm:px-[60px] text-white italic">
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="w-[70px]">
                        <Image
                            src={logo}
                            alt={'employee image'}
                            layout="responsive"
                        />
                    </div>
                    <h3 className="font-bold text-[30px] mt-[10px]">Play Stats</h3>
                </div>
                <ul className="italic font-bold justify-center items-center gap-8 sm:gap-14 text-[16px] flex flex-row mt-[40px]">
                    <li>
                        <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/competitions" className="link flex flex-row items-center justify-center gap-2">
                            <span>Competitions</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                            <span>Clubs</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="link flex flex-row items-center justify-center gap-2">
                            <span>Live</span>
                        </Link>
                    </li>
                </ul>
            <div className="w-full h-[1px] bg-white mt-[40px]"/>
            <div className="mt-[50px] flex flex-row gap-4">
                <a href="https://konradzyra.netlify.app">
                    <button
                        className="min-w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-[1px] border-white">
                        <PublicIcon sx={{fontSize: 22}}/>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/konrad-żyra-a8131226a/">
                    <button
                        className="min-w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-[1px] border-white">
                        <LinkedInIcon sx={{fontSize: 22}}/>
                    </button>
                </a>
                <a href="https://github.com/Zyrekk">
                    <button
                        className="min-w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-[1px] border-white">
                        <GitHubIcon sx={{fontSize: 22}}/>
                    </button>
                </a>
                <a href="mailto:zyrekk.dev@gmail.com">
                    <button
                        className="min-w-[50px] min-h-[50px] flex justify-center items-center rounded-full border-[1px] border-white">
                        <EmailIcon sx={{fontSize: 21}}/>
                    </button>
                </a>
            </div>
            <p className="font-bold mt-[20px] text-[14px] text-center">© 2023 zyrekk.dev All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
