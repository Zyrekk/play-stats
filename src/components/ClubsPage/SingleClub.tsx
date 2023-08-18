import React from 'react';
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from 'framer-motion';

const SingleClub = ({club}:any) => {
    return (
            <motion.button layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} key={club.id} className="flex w-[485px] flex-row bg-white rounded-full gap-12 text-black py-5 px-8 items-center justify-between">
                <div className="flex flex-row items-center justify-center gap-4">
                    {club.crest ?
                        <div className="bg-white rounded-lg">
                            <Image
                                src={club.crest}
                                alt={'team logo'}
                                width={50}
                                height={50}
                            />
                        </div>
                        :'logo'}
                    <p className="text-[18px]">{club.name}</p>
                </div>
                <KeyboardArrowDownIcon sx={{fontSize: 28}} />
            </motion.button>
    );
};

export default SingleClub;
