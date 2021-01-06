import React, { useState, useEffect } from 'react';
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";

function App() {
  const [userName, setUserName] = useState('');
  const [mood, setMood] = useState('');
  const [genre, setGenre] = useState([]);
  const [decade, setDecade] = useState([]);

  const getMoodyTunes = () => {
    console.log("clicked!");
    // getTracksByMoodAPI();
  };

  return (
    <div className="App-header">
      This is the App parent component
      <Form
        userName={userName}
        mood={mood}
        genre={genre}
        decade={decade}
        getMoodyTunes={getMoodyTunes}
      />
    </div>
  );
}

export default App;
