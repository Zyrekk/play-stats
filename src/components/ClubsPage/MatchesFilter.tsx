import React from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface FilterProps{
    setFilter:(value:string)=>void
    filter:string
}

const MatchesFilter = ({setFilter,filter}:FilterProps) => {
    const [isClicked,setIsClicked]=React.useState(false)
    const list=[
        {
            value:'all',
            label:'All'
        },
        {
            value:'won',
            label:'Won  '
        },
        {
            value:'draw',
            label:'Draw'
        },
        {
            value:'lose',
            label:'Lose'
        },
        {
            value:'timed',
            label:'Timed'
        }
    ]

    const handleSeason=(value:string)=>{
        setFilter(value)
        setIsClicked(false)
    }
    return (
        <div className="flex flex-col items-start w-fit">
            <label htmlFor="small" className="mb-2 text-sm font-medium text-white">Filter by Status</label>
            <div className="cursor-pointer text-white relative pl-2 pr-1 py-2 bg-[#040910] rounded-lg">
                <button onClick={()=>{
                    setIsClicked((prevState)=>!prevState)
                }} className="flex flex-row gap-4 items-center justify-center">
                    <p className="text-sm">{list.find((item)=>item.value===filter)?.label}</p>
                    <KeyboardArrowDownIcon/>
                </button>
                {
                    isClicked &&  <div className="absolute flex gap-3 pt-3 flex-col items-start w-full top-[100%] left-0 bg-[#040910] rounded-lg border-2 border-black">
                        {list.map((item,index)=>(
                            <button onClick={()=>{
                                handleSeason(item.value)
                            }} key={index} className="w-full pb-2 flex text-left px-2 last:border-transparent text-sm border-b-2 border-black">{item.label}</button>

                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default MatchesFilter;
