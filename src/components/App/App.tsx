import React, { useState, useEffect } from 'react';
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";
import ResultsView from '../ResultsView/ResultsView';

function App() {
  const [userName, setUserName] = useState('');
  const [songResults, setSongResults] = useState([]);

  const getMoodyTunes = async(mood: string, genre: string, decade: string) => {
    console.log("clicked!");
    const allGenres: string[] = ['rock', 'electro', 'pop', 'randb', 'hip hop', 'metal', 'classical', 'jazz', 'soundtrack', 'world', 'latin', 'reggae', 'folk', 'blues', 'country', 'vocal pop'];
    const arousal: string = mood.split(',')[0];
    const valence: string = mood.split(',')[1];
    const excludedGenres: string = allGenres.filter((musicGenre) => genre !== musicGenre).join(',');
    setSongResults(await getTracksByMoodAPI(valence, arousal, excludedGenres, decade));
  };

  return (
    <div className="App-header">

      {!songResults.length && 
      <Form
        getMoodyTunes={getMoodyTunes}
      />
      }

      {songResults.length &&
      <ResultsView 
        songResults={songResults} 
      />
      }

    </div>
  );
}

export default App;
