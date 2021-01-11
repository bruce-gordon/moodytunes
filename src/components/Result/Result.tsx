import { useState, useEffect } from 'react'
import "./Result.css";
import { ResultProps } from "../common/Types";
import { gsap } from "gsap";
import { spotify } from '../../utilities/icons';

const Result = (
  {
  id,
  artist,
  title,
  releaseDate,
  genre,
  favoriteSongs,
  addFavorite,
}: ResultProps) => {
  
  const [inFavorites, setInFavorites] = useState(false)

  useEffect(() => {
    checkFavoriteStatus()
    // updateFavoriteStatus()
    }, [])

  const checkFavoriteStatus = () => {
    const match = favoriteSongs.find(song => song.id === id)
    if (match) {
      setInFavorites(true)
      animateAddFavorite()
    } else {
      setInFavorites(false)
    }
  }

  const animateAddFavorite = () => {
    let tl = gsap.timeline();
      gsap.set(`.${'--' + id}`, {  //start animation state
        transition: "ease 0",
        transform: "rotate(0deg)",
      });

      tl.to(`.${'--' + id}`, { duration: 0.1, translateY: 3 })
        .to(`.${'--' + id}`, { duration: 0.3, rotateY: 360, translateY: -10 })
        .to(`.${'--' + id}`, { duration: 0.3, translateY: 0 })
        .to(`.${'--' + id}`, { duration: 0.2, filter: "grayscale(0%)" }, "-=.4");
      gsap.set(`.${'--' + id}`, { rotateY: 0, translateY: 0 });

      setInFavorites(true)
  };

  const handleClick = () => {
    if (!inFavorites) {
      addFavorite(id);
      animateAddFavorite();
    }
  };
  
  let songTitle = title.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
  
  let genreTitle = genre.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');

  return (
    <article className="song-result" id={id}>
      <div className="song-details">
        <div className="title-artist">
          <h1>{songTitle}</h1>
          <h3>{artist}</h3>
        </div>
        <button className="moodBtn">
          {spotify}
        </button>
        <button onClick={() => handleClick()} className={`favoriteBtn --${id}`}>
          ⭐
        </button>
      </div>
      <div className="date-genre">
        <p>
          <b>Release Date:</b> {releaseDate}
        </p>
        <p>
          <b>Genre:</b> {genreTitle}
        </p>
      </div>
    </article>
  );
};

export default Result;
