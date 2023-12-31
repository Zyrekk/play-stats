import React from 'react';
import PickedClub from "@/components/ClubsPage/PickedClub";

interface pageProps {
    params: {id: string}
}

const Page = ({params}: pageProps) => {
    return (
        <div className="bg-[#0D1A30] w-full flex items-center justify-center">
            <PickedClub id={params.id}/>
        </div>
    );
};

export default Page;
