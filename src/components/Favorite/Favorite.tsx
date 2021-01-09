import React from 'react';
import { FavoriteProps } from '../common/Types';
import './Favorite.css';

const Favorite = ({id, artist, title, releaseDate, genre, removeFavorite}: FavoriteProps) => {

  const handleClick = () => {
    console.log("handleclick");
    removeFavorite(id);
  }

  return (
    <article className='favorite' id={id}>
      <div className="fav-details">
        <div className="title-artist">
          <h1>{title}</h1>
          <h3>{artist}</h3>
        </div>
        <button onClick={() => handleClick()} className="remove-fav-btn">
          Remove
        </button>
      </div>
      <div className="date-genre">
        <p>
          <b>Release Date:</b> {releaseDate}
        </p>
        <p>
          <b>Genre:</b> {genre}
        </p>
      </div>
    </article>
  )
}

export default Favorite;
