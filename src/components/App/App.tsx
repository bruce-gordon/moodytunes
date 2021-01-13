import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import ResultsView from "../ResultsView/ResultsView";
import FavoritesView from '../FavoritesView/FavoritesView'
import {ISongResults} from '../common/Types'
import { useLocalStorage } from '../../utilities/useLocalStorage';
import NavBar from '../NavBar/NavBar';

function App() {
  const [songResults, setSongResults] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState<ISongResults[]>([]);
  const [localStorage, setLocalStorage] = useLocalStorage("favorites");
  const [moodName, setMoodName] = useState('');

  useEffect(() => {
    let storedFavs: any = localStorage;
    storedFavs = storedFavs ? storedFavs : [];
    setFavoriteSongs(storedFavs);
  }, []);

  const getMoodyTunes = async (mood: string, decade: string) => {
    const arousal: string = mood.split(",")[0];
    const valence: string = mood.split(",")[1];
    const results = await getTracksByMoodAPI(valence, arousal, decade);
    setSongResults(results);
  };

  const updateMoodName = (moodWord: string) => {
    setMoodName(moodWord);
  }

  const clearMoodName = () => {
    setMoodName('');
  }

  const addFavorite = (id: string) => {
    const favorite = songResults.find((song:ISongResults) => song.id === id) as any
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
          addFavorite={ addFavorite }
          songResults={ songResults }
          moodName={ moodName }
          favoriteSongs={ favoriteSongs as any }

        />
      )
    } else if (!songResults.length) {
      return (
        <div className='please-wait'>
          <h2 className='please-wait-header'>
            Please wait while your songs load,
          </h2>
          <br/>
          <h2 className='please-wait-header'>
            or click "Home" to start a new search.
          </h2>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <NavBar
        clearMoodName ={ clearMoodName }
      />
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
          path="/results"
          render={props => (checkSongResults())}
        />
        <Route
          path="/"
          render={props => <Form
          getMoodyTunes={ getMoodyTunes }
          updateMood={ updateMoodName }{...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
