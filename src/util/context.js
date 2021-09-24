import React, { useState, useContext, useEffect } from "react";

const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?api_key=${process.env.REACT_APP_MUSIC_API_KEY}&format=json`;

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {

  const [artist, setArtist] = useState('joji');

  //ARTIST:
  const [artistTopAlbums, setArtistTopAlbums] = useState([]);
  const [temp, setTemp] = useState([])

  const submitArtistName = () => {
    setArtist(temp);
  };

  const fetchArtistTopAlbums = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArtistTopAlbums(data.topalbums.album);
      console.log(data.topalbums.album);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArtistTopAlbums(`${API_ENDPOINT}&artist=${artist}&method=artist.gettopalbums`);
  }, [artist]);

  return (
    <MusicContext.Provider
      value={{
        artist,
        setArtist,
        submitArtistName,
        API_ENDPOINT,
        artistTopAlbums,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};