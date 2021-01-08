import "./Result.css";
import { ResultProps } from "../common/Types";

const Result = ({
  id,
  artist,
  title,
  releaseDate,
  genre,
  addFavorite,
}: ResultProps) => {
  const handleClick = () => {
    console.log("handleclick");
    addFavorite(id);
  };

  return (
    <article className="song" id={id}>
      <div className="song-details">
        <button className="moodBtn">➕</button>
        <div className="title-artist">
          <h1>{title}</h1>
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
