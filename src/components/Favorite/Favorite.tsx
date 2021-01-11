import React from 'react';
import { FavoriteProps } from '../common/Types';
import './Favorite.css';

const Favorite = ({id, artist, title, releaseDate, genre, removeFavorite}: FavoriteProps) => {

  const handleClick = () => {
    removeFavorite(id);
  }
  let genreTitle = genre.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
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
          <b>Genre:</b> {genreTitle}
        </p>
      </div>
    </article>
  )
}

export default Favorite;
