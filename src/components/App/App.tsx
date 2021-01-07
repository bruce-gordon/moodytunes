import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import ResultsView from "../ResultsView/ResultsView";

function App() {
  const [userName, setUserName] = useState("");
  const [songResults, setSongResults] = useState([]);

  const getMoodyTunes = async (mood: string, genre: string, decade: string) => {
    console.log("clicked!");
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
    setSongResults(
      await getTracksByMoodAPI(valence, arousal, excludedGenres, decade)
    );
  };

  return (
    <div className="App-header">
      <Switch>
        <Route
          path='/results'
          render={props => (<ResultsView songResults={songResults} {...props} />)}
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
