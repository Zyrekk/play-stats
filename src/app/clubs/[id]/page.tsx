import React from 'react';

interface pageProps {
    params: {id: string}
}

const Page = ({params}: pageProps) => {
    return (
        <div>
            {params.id}
        </div>
    );
};

export default Page;
