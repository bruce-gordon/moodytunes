import React from "react";
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";

function App() {
  type MoodObject = {
    valence: number;
    arousal: number;
  };

  const getMoodyTunes = () => {
    console.log("clicked!");
    getTracksByMoodAPI();
  };

  return (
    <div className="App-header">
      This is the App parent component
      <Form />
      <button onClick={getMoodyTunes}>console log API call</button>
    </div>
  );
}

export default App;
