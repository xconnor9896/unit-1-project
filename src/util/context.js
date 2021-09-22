import React, { useState, useContext } from 'react';
import { useFetch } from './useFetch';

const entryContext = React.createContext();

export const EntryProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const { entry, error, loading } = useFetch(``);

    return (
        <entryContext.Provider value={{ query, setQuery,  entry, error, loading }}>
            {children}
        </entryContext.Provider>
    )
}

export const useEntryContext = () => {
    return useContext(entryContext);
}