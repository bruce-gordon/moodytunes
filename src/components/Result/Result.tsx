import "./Result.css";
import { ResultProps } from "../common/Types";

const Result = ({ id, artist, title, releaseDate, genre, addFavorite}: ResultProps) => {
  const handleClick = () => {
    addFavorite(id);
  };
var songTitle = title;
songTitle = title.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');

  return (
    <article className="song-result" id={id}>
      <div className="song-details">
        <button className="moodBtn">➕</button>
        <div className="title-artist">
          <h1>{songTitle}</h1>
          <h3>{artist}</h3>
        </div>
        <button onClick={() => handleClick()} className="favoriteBtn">
          ⭐
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
  );
};

export default Result;
