import React from 'react'
import { useMusicContext } from '../util/context'

const Search = () => {
    const { artist, setArtist, submitArtistName } =
        useMusicContext();
    return (
        <div>
            <input
                type="text"
                className="enter-artist"
                onChange={(e) => setArtist(e.target.value)}
            ></input>
        </div>
    )
}

export default Search
