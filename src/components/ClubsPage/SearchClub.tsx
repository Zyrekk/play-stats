import React from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface SearchClubProps {
    setCompetitionCode: (competition: string) => void;
    competitionCode: string;
    setClubName: (clubName: string) => void;
    clubName:string
}

const SearchClub = ({setCompetitionCode ,setClubName, competitionCode,clubName}:SearchClubProps) => {
    return (
        <div className="flex items-center w-full text-white flex-col">
            <h2 className="font-bold text-4xl mb-4">
                Search for your club
            </h2>
            <form className="flex w-full flex-col items-center mt-6">
                <div className="w-full cursor-pointer max-w-[350px] flex items-center justify-between flex-row h-12 px-4 rounded-full bg-gray-800 text-white text-[16px]">
                    <p>Premier League</p>
                    <KeyboardArrowDownIcon/>
                </div>
                <input
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}
                    type="text"
                    placeholder="Club name"
                    className="w-full max-w-[350px] h-12 px-4 rounded-full bg-gray-800 text-white text-[16px] mt-5"
                />
                <button
                    type="submit"
                    className="w-full max-w-[120px] rounded-full mt-4 text-[16px] py-2  bg-white text-black font-semibold"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchClub;
