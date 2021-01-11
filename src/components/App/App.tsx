import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import ResultsView from "../ResultsView/ResultsView";
import FavoritesView from '../FavoritesView/FavoritesView'
import {ISongResults, allGenres} from '../common/Types'
import { useLocalStorage } from '../../utilities/useLocalStorage';


function App() {
  const [userName, setUserName] = useLocalStorage("userName", '');
  const [songResults, setSongResults] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState<ISongResults[]>([]); // type the return for setFavoriteSongs for the error: Type 'undefined' is not assignable to type 'never'.ts(2322)
  const [localStorage, setLocalStorage] = useLocalStorage("favorites");

  const getMoodyTunes = async (mood: string, decade: string) => {
    const arousal: string = mood.split(",")[0];
    const valence: string = mood.split(",")[1];
    // const excludedGenres: string = allGenres
    //   .filter(musicGenre => genre !== musicGenre)
    //   .join(",");
    setSongResults([]);
    const results = await getTracksByMoodAPI(valence, arousal, decade);
    setSongResults(results);
  };

  const addFavorite = (id: string) => {
    type AnyType = any;
    const favorite = songResults.find((song:ISongResults) => song.id === id) as AnyType
    if (favoriteSongs === undefined) {
      setFavoriteSongs([favorite]);
      setLocalStorage(favoriteSongs);
    } else if (!favoriteSongs.includes(favorite)) {
      setFavoriteSongs([favorite, ...favoriteSongs]);
      setLocalStorage([favorite, ...favoriteSongs])
    }
  }

  const removeFavorite = (id: string) => {
    const favorites = favoriteSongs.filter((song:ISongResults) => song.id !== id) as any;
    setFavoriteSongs(favorites);
    setLocalStorage(favorites);
  }

  let storedFavs: any = useLocalStorage('favorites');
  useEffect(() => {
    storedFavs = storedFavs[0];
    setFavoriteSongs(storedFavs);
  }, []);

  const checkSongResults = () => {
    if (!songResults) {
      return (
        <h2>
          Sorry, there are no results for that selection.<br/>
          <p>Click the "Home" or "back" button to try again.
          </p>
        </h2>
      )
    } else if (songResults.length) {
      return (
        <ResultsView
          addFavorite={addFavorite} songResults={songResults}
        />
      )
    } else if (!songResults.length) {
      return (
        <h2>
          <br/>
          One moment while your song results load...
          <br/>
          {/* <br/> Please try again. */}
        </h2>
      )
    }
  }

  return (
    <div className="App">
      <header className='app-header'>
        <div id = "music-note">
          <img className="note-img" src = "https://static.thenounproject.com/png/493888-200.png" />
        </div>
        <h1 className='app-name'>MoodyTunes</h1>
        <nav>
          <Link to='/' className='nav-btn-link'>
            <div className='nav-btn'>Home</div>
          </Link>
          <Link to='/favorites' className='nav-btn-link'>
            <div className='nav-btn'>View Favorites</div>
          </Link>
        </nav>
      </header>
      <Switch>
        <Route
          path='/favorites'
          render={props => (
          <FavoritesView
            removeFavorite={removeFavorite}
            favoriteSongs={favoriteSongs} {...props}
            
            />)}
        />
        <Route
          path='/results'
          render={props => (checkSongResults())}
        />
        <Route
          path='/'
          render={props => (<Form getMoodyTunes={getMoodyTunes} {...props}/>)}
        />
      </Switch>
    </div>
  );
}

export default App;
