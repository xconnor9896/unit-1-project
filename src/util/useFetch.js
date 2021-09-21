import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `http://www.tastedive.com/api/similar&k=${process.env.REACT_APP_TASTEDIVE_API_KEY}`;


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
}

export default useFetch
