import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import ResultsView from "../ResultsView/ResultsView";
import FavoritesView from '../FavoritesView/FavoritesView'

interface ISongResults {
  id: string, 
  artist_display_name: string, 
  title: string, 
  releasedate: string, 
  genre: string
}

function App() {
  const [userName, setUserName] = useState("");
  const [songResults, setSongResults] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState<ISongResults[]>([]); // type the return for setFavoriteSongs for the error: Type 'undefined' is not assignable to type 'never'.ts(2322)


  const getMoodyTunes = async (mood: string, genre: string, decade: string) => {
    const allGenres: string[] = [
      "hip hop",
      "vocal pop",
      "rock",
      "electro",
      "pop",
      "randb",
      "metal",
      "classical",
      "jazz",
      "soundtrack",
      "world",
      "latin",
      "reggae",
      "folk",
      "blues",
      "country"
    ];
    const arousal: string = mood.split(",")[0];
    const valence: string = mood.split(",")[1];
    const excludedGenres: string = allGenres
      .filter(musicGenre => genre !== musicGenre)
      .join(",");
      console.log(excludedGenres)
    const results = await getTracksByMoodAPI(valence, arousal, excludedGenres, decade)
    setSongResults(
      results
    );
  };

  const addFavorite: Function = (id: string) => {
    type AnyType = any;
    const favorite: ISongResults = songResults.find((song:ISongResults) => song.id === id) as AnyType // favorite needs to be set to any???
    setFavoriteSongs([favorite, ...favoriteSongs]) // putting these params inside an array (error expected 1 arg but got 2+)
    console.log(favoriteSongs)
  }

  return (
    <div className="App-header">
      <FavoritesView favoriteSongs={favoriteSongs}/>
      <Switch>
        <Route
          path='/results'
          render={props => (<ResultsView addFavorite={addFavorite} songResults={songResults} {...props} />)}
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
