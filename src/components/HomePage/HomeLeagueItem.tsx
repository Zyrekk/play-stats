import React from "react";
import Image, { StaticImageData } from "next/image";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from "next/link";

export interface LeagueItemProps {
    text: string;
    buttonText: string;
    image: StaticImageData;
    bgColor:string;
    link:string
}

const HomeLeagueItem = ({
    index,
    data,
}: {
    index: number;
    data: LeagueItemProps;
}) => {
    return (
        <div className={`w-full justify-between font-bold ${[1,2].includes(index)?'text-black':'text-white'} py-[40px] flex px-[32px] items-center flex-col lg:flex-row`} style={{backgroundColor:data.bgColor}}>
            <div className="flex flex-col items-center lg:flex-row lg:gap-[30px]">
                <div className="slideFromLeft w-[100px] lg:w-[200px] pb-[20px]">
                    <Image
                        src={data.image}
                        alt={"image"}
                        layout={"responsive"}
                    />
                </div>
                <p className="slideFromLeft lg:mt-0 text-center text-[28px] xl:text-[36px]">
                    {data.text}
                </p>
            </div>
            <Link href={`/competitions${data.link}`} className={`slideFromLeft mt-[30px] lg:mt-0 ease-in-out duration-300 border-[1px] px-[20px]
                        py-[10px] rounded-full flex justify-center items-center
                        flex-row gap-[10px] text-[14px] xl:text-[18px] ${[1,2].includes(index)?' border-black hover:bg-black hover:text-[#FFFFFF]':'border-white hover:bg-white hover:text-[#000000]'} `}>
                <span className="min-w-[120px] xl:min-w-[150px]">{data.buttonText}</span>
                <NavigateNextIcon sx={{fontSize: 28}} />
            </Link>
        </div>
    );
};

export default HomeLeagueItem;
