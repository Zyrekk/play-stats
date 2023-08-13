import React from 'react';
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const LeagueTile = ({competition}:any) => {
    console.log(competition)
    return (
        <button className="ease-in-out duration-200 hover:translate-x-6 flex w-full flex-row items-center text-black py-2 rounded-xl px-5 justify-between border-[2px] border-black ">
            <div className="flex flex-row gap-3 items-center">
                <div className="max-w-[36px] min-h-[40px] lg:max-w-[60px] flex justify-center items-center">
                    {competition.emblem ?
                        <Image
                            src={competition.emblem}
                            alt={'img'}
                            width={200}
                            height={200}
                        />
                        :'logo'}

                </div>
                <p className="text-[16px] text-center">{competition.name}</p>
            </div>
            <NavigateNextIcon sx={{fontSize: 28}} />
        </button>
    );
};

export default LeagueTile;
