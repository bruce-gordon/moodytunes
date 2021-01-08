import React from 'react';
import { FavoriteProps } from '../common/Types';

const Favorite = ({id, artist, title, releaseDate, genre}: FavoriteProps) => {
  return (
    <article className='song' id={id}>
      <div className="song-details">
        <div className="title-artist">
          <h1>{title}</h1>
          <h3>{artist}</h3>
        </div>
        <button className="favoriteBtn">
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
