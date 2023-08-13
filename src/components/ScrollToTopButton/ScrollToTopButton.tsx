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
                className={` transition-all flex justify-center items-center hover:bg-[#0000009F] 
                px-2 py-2 duration-500 ease-in-out ${positionY>height ? 'opacity-1':'opacity-0'} 
                fixed bottom-[200px] right-[50px] rounded-full text-white
                bg-[#0000005A] flex justify-center items-center w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]`}>
            <RocketIcon sx={{fontSize: 35}}/>
        </button>
    );
};

export default ScrollToTopButton;
