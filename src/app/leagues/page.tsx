"use client"

import {useEffect} from "react";
import axios from "axios";

const Page = () => {
    const url = 'competitions'; // Replace with your API endpoint
    const headers = {
        'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_API_TOKEN // Add any other custom headers you need
    };
    useEffect(() => {
        axios.get(`/api/${url}`, {headers})
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            {}
        </div>
    );
};

export default Page;
