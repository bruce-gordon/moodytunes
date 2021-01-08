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

  return (
    <div className="App">
      <header className='app-header'>
        <h1 className='app-name'>MoodyTunes</h1>
        <nav>
          <button className='nav-btn'>
          <Link to='/' className='nav-btn-link'>Home</Link>
          </button>
          <button className='nav-btn'>
          <Link to='/favorites' className='nav-btn-link'>Go to Favorites</Link>
          </button>
        </nav>
      </header>
      <Switch>
        <Route
          path='/favorites'
          render={props => (<FavoritesView
            favoriteSongs={favoriteSongs} {...props}
            />)}
        />
        <Route
          path='/results'
          render={props => (<ResultsView
            addFavorite={addFavorite} songResults={songResults} {...props}
            />)}
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
