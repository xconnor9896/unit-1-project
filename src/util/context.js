import React, { useState, useContext } from 'react';
import {useFetch} from './useFetch';

const entryContext = React.createContext();

export const entryProvider = ({children}) => {
    const [query, setQuery] = useState("Returnal");
    const [mediaType, setMediaType] = useState('game')
    const {entry, error, loading } = useFetch(`&q=${query}&type=${mediaType}`);

    return (
        <entryContext.Provider value={{query, setQuery, mediaType, setMediaType, entry, error, loading}}>
            {children}
        </entryContext.Provider>
    )
}

export const useEntryContext = () => {
    return useContext(entryContext);
}