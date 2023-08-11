import React from "react";
import Image, { StaticImageData } from "next/image";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface LeagueItemProps {
    text: string;
    buttonText: string;
    image: StaticImageData;
    bgColor:string;
    textColor:string,
    hoverTextColor:string
}

const LeagueItem = ({
    index,
    data,
}: {
    index: number;
    data: LeagueItemProps;
}) => {
    const renderTile = () => {
        if (index % 2 === 0) {
            return (
                <div className={`w-full last:text-black text-white flex justify-center items-center flex-col pb-[50px] pt-[50px] lg:pt-0 lg:pb-0 lg:flex-row`} style={{backgroundColor:data.bgColor}}>
                    <div className="ronaldoHome w-[300px] lg:w-[400px] py-[40px]">
                        <Image
                            src={data.image}
                            alt={"ronaldo image"}
                            width={400}
                            height={400}
                        />
                    </div>
                    <p className=" ronaldoHome italic mt-[50px] lg:mt-0 text-[28px] xl:text-[36px] font-bold ml-[20px]">
                        {data.text}
                    </p>
                    <button className={` ronaldoHome mt-[30px] lg:mt-0 ease-in-out duration-300 lg:ml-[80px] xl:ml-[200px] border-[3px] px-[20px]
                        py-[10px] rounded-full border-white flex justify-center items-center
                        lg:mr-[64px]
                        flex-row gap-[10px] text-[14px] xl:text-[18px] font-bold italic hover:bg-white hover:text-[#000000] ${index===2&&' border-black hover:bg-black hover:text-[#FFFFFF]'} `}>
                        <span className="min-w-[120px] xl:min-w-[150px]">{data.buttonText}</span>
                        <NavigateNextIcon sx={{fontSize: 28}}/>
                    </button>
                </div>
            );
        } else {
            return (
                <div className={`w-full flex items-center justify-center flex-col pb-[50px] lg:pb-0 lg:flex-row-reverse`} style={{backgroundColor:data.bgColor}}>
                    <div className="ronaldoHome w-[300px] lg:w-[400px] py-[40px]">
                        <Image
                            src={data.image}
                            alt={"ronaldo image"}
                            width={400}
                            height={400}
                        />
                    </div>
                    <p className=" ronaldoHome text-white italic text-[28px] xl:text-[36px] font-bold mr-[50px]">
                        {data.text}
                    </p>
                    <button className=" ronaldoHome ease-in-out mt-[30px] lg:mt-0 duration-300 lg:mr-[80px] xl:mr-[200px] border-[3px] px-[20px]
                    lg:ml-[64px]
                    py-[10px] rounded-full border-white flex justify-center items-center
                     flex-row gap-[10px] text-white text-[14px] xl:text-[18px]  font-bold italic hover:bg-white hover:text-[#000000]">
                        <span className="min-w-[120px] xl:min-w-[150px]">{data.buttonText}</span>
                        <NavigateNextIcon sx={{fontSize: 28}}/>
                    </button>
                </div>
            );
        }
    };

    return <>{renderTile()}</>;
};

export default LeagueItem;
