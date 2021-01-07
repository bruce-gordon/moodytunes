import React, { useState, useEffect } from 'react';
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { getTracksByMoodAPI } from "../../utilities/apiCalls";

function App() {
  const [userName, setUserName] = useState('');


  const getMoodyTunes = () => {
    console.log("clicked!");
    // getTracksByMoodAPI();
  };

  return (
    <div className="App-header">
      This is the App parent component
      <Form
        getMoodyTunes={getMoodyTunes}
      />
    </div>
  );
}

export default App;
