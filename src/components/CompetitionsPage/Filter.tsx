import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface FilterProps {
    setSeason: (season: string) => void;
    season: string;
}

const Filter = ({setSeason,season}:FilterProps) => {
    const [isClicked,setIsClicked]=React.useState(false)
    const list=[
        {
            value:'2020',
            label:'2020/2021'
        },
        {
            value:'2021',
            label:'2021/2022'
        },
        {
            value:'2022',
            label:'2022/2023'
        },
        {
            value:'2023',
            label:'2023/2024'
        }
    ]

    const handleSeason=(value:string)=>{
        setSeason(value)
        setIsClicked(false)
    }
    return (
        <div className="flex flex-col items-start w-fit">
            <label htmlFor="small" className="mb-2 text-sm font-medium text-white">Filter by Season</label>
            <div className="cursor-pointer text-black relative pl-2 pr-1 py-2 bg-white rounded-lg">
                <button onClick={()=>{
                    setIsClicked((prevState)=>!prevState)
                }} className="flex flex-row gap-4 items-center justify-center">
                    <p className="text-sm">{list.find((item)=>item.value===season).label}</p>
                    <KeyboardArrowDownIcon/>
                </button>
                {
                    isClicked &&  <div className="absolute flex gap-3 pt-3 flex-col items-start w-full top-[100%] left-0 bg-white rounded-lg border-2 border-black">
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

export default Filter;
