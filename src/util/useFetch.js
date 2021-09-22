import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https:/ws.audioscrobbler.com/2.0/api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;


export const useFetch = (searchQuery) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: ""});
    const [entry, setEntry] = useState(null);

    const fetchEntry = async(url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)

            if (data.Response === "True") {
                setEntry(data.Search || data);
                setError({ show: false, msg: ""});
            } else {
                setError({ show: true, msg: data.Error});
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        console.log(`${API_ENDPOINT}${searchQuery}`);
        fetchEntry(`${API_ENDPOINT}${searchQuery}`);
    }, [searchQuery])

    return {loading, error, entry };
    
}
