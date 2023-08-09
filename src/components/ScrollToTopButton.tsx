"use client";
import React, {useLayoutEffect, useState} from 'react';
import RocketIcon from '@mui/icons-material/Rocket';

const ScrollToTopButton = () => {
    const [height, setHeight] = useState<number>(0)
    const [positionY, setPositionY] = useState<number>(0);

    const handleScroll = () => {
        const newY = window.scrollY;
        setPositionY(newY);
    };
    useLayoutEffect(() => {
        setHeight(window.innerHeight)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <button onClick={scrollToTop}
                className={` transition-all duration-500 ease-in-out ${positionY>height/2 ? 'opacity-1':'opacity-0'} 
                fixed bottom-[50px] right-[100px] rounded-full text-white
                    bg-[#0000005A] flex justify-center items-center w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]`}>
            <RocketIcon sx={{fontSize: 45}}/>
        </button>
    );
};

export default ScrollToTopButton;
