import React from 'react'
import { useMusicContext } from '../util/context'

const Search = () => {
    const { setArtist } =
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
