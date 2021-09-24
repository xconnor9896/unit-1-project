import React from "react";
import { useMusicContext } from "../util/context";

const Album = () => {
  const { artistTopAlbums } = useMusicContext();
  return (
    <div>
      {artistTopAlbums.map  ((ALBUM, i) => {
        const {name, playcount, artist: {name: artist}, image} = ALBUM;
        console.log(ALBUM)
        return (
          <div key={i}>
            <img src={image[3]['#text']} alt= {name} />
            <h3>{name}</h3>
            <h4>by: {artist}</h4>
            <p>Number of Plays: {playcount}</p> 
          </div>
        )
      })}
    </div>
  );
};

export default Album;