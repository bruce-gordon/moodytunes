import React, { useState } from "react";
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import ResultsView from "../ResultsView/ResultsView";
import FavoritesView from '../FavoritesView/FavoritesView'
import {ISongResults, allGenres} from '../common/Types'

function App() {
  const [userName, setUserName] = useState("");
  const [songResults, setSongResults] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState<ISongResults[]>([]); // type the return for setFavoriteSongs for the error: Type 'undefined' is not assignable to type 'never'.ts(2322)

  const getMoodyTunes = async (mood: string, decade: string) => {
    const arousal: string = mood.split(",")[0];
    const valence: string = mood.split(",")[1];
    // const excludedGenres: string = allGenres
    //   .filter(musicGenre => genre !== musicGenre)
    //   .join(",");
    const results = await getTracksByMoodAPI(valence, arousal, decade)
    setSongResults(results);
  };

  const addFavorite: Function = (id: string) => {
    type AnyType = any;
    const favorite = songResults.find((song:ISongResults) => song.id === id) as AnyType // favorite needs to be set to any???
    setFavoriteSongs([favorite, ...favoriteSongs]) // putting these params inside an array (error expected 1 arg but got 2+)
  }

  const removeFavorite = (id: string) => {
    const favorites = favoriteSongs.filter((song:ISongResults) => song.id !== id) as any;
    console.log(favorites)
    setFavoriteSongs(favorites);
    console.log(favoriteSongs);
  }

  return (
    <div className="App">
      <header className='app-header'>
        <h1 className='app-name'>MoodyTunes</h1>
        <nav>
          <Link to='/' className='nav-btn-link'>
            <div className='nav-btn'>Home</div>
          </Link>
          <Link to='/favorites' className='nav-btn-link'>
            <div className='nav-btn'>Go to Favorites</div>
          </Link>

        </nav>
      </header>
      <Switch>
        <Route
          path='/favorites'
          render={props => (<FavoritesView
            removeFavorite={removeFavorite}
            favoriteSongs={favoriteSongs} {...props}
            />)}
        />
        <Route
          path='/results'
          render={props => (songResults.length ? <ResultsView
            addFavorite={addFavorite} songResults={songResults} {...props} /> : 
            <h2 {...props}> Sorry, there are no results for that selection.<br/> Please try again.</h2>
          )}
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
