import React, { useState, useContext, useEffect } from "react";

const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?api_key=b4120c7c69aaeb5e075ee2d4cd008ec7&format=json`;

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {

  const [artist, setArtist] = useState('porter robinson');

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