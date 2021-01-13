import { useState, useEffect } from "react";
import "./Result.css";
import { ResultProps } from "../common/Types";
import { gsap } from "gsap";
import { star, spotify } from "../../utilities/icons";

const Result = ({
  id,
  artist,
  title,
  releaseDate,
  genre,
  favoriteSongs,
  addFavorite,
}: ResultProps) => {
  const [inFavorites, setInFavorites] = useState(false);

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = () => {
    const match = favoriteSongs.find(song => song.id === id);
    if (match) {
      setInFavorites(true);
    } else {
      setInFavorites(false);
    }
  };

  const handleClick = () => {
    if (!inFavorites) {
      addFavorite(id);
      setInFavorites(true);
    }
  };

  const highlightFavBtn = () => {
    return inFavorites ? 'in-favorites-btn' : 'favorites-btn'
  }

  const searchSpotify = () => {
    let searchParams = `${title}  artist:${artist}`;
    window.open(`https://open.spotify.com/search/${searchParams}`);
  };

  const capitalize = (songInfo: string) => {
    return (
      songInfo.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ")
    );
  }

  return (
    <article className={`song-result card-${id}`} id={id}>
      <div className="song-details">
        <div className={`title-artist title-artist-${id}`}>
          <h1>{capitalize(title)}</h1>
          <h3>{capitalize(artist)}</h3>
        </div>
        <div className="date-genre">
          <span className={`badge badge-${id}`}>
            <b>Release Date:</b> {releaseDate}
          </span>
          <span className={`badge badge-${id}`}>
            <b>Genre:</b> {capitalize(genre)}
          </span>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => searchSpotify()} className="spotify-button" data-testid='spotify'>
          {spotify}
        </button>
        <button
          onClick={() => handleClick()}
          className={`btn ${highlightFavBtn()} --${id}`}>
          {star}
        </button>
      </div>
    </article>
  );
};

export default Result;
