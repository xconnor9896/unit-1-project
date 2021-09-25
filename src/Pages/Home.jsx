import React from "react";
import { useMusicContext } from "../util/context";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const { artist, setArtist, submitArtistName} =
    useMusicContext();
  return (
    <div className="home">
      <form onSubmit={(e) => e.preventDefault()} artist={artist}>
        <h2>Enter An Artist</h2>
        <input
          type="text"
          className="enter-artist"
          onChange={(e) => setArtist(e.target.value)}
        ></input>
        <Link to="/Album">
          <input type="submit" value="Submit" onClick={submitArtistName}></input>
        </Link>
      </form>

    </div>
  );
};

export default Home;
