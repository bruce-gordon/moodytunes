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

  let songTitle: string = title
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  let inFavorites: boolean = false

//   const animateAddFavorite = () => {
//     let tl = gsap.timeline() 
//  if (!inFavorites) { 
//    gsap.set('.favoriteBtn', {transition: 'ease 0', transform: 'rotate(0deg)'})
//    tl.to('.favoriteBtn', .1, {translateY:3})  
//      .to('.favoriteBtn', .3, {rotateY:360, translateY:-10}) 
//      .to('.favoriteBtn', .3, {translateY:0})
//      .to('.favoriteBtn', .2, {filter: 'grayscale(0%)'}, '-=.4')
//    gsap.set('.favoriteBtn', {rotateY:0, translateY:0})
//    inFavorites = true
//  }
//   }

  const handleClick = () => {
    addFavorite(id);
    // animateAddFavorite()
  };


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
