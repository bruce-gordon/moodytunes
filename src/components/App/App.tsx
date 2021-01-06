import React from "react";
import Form from "../Form/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App-header">
      This is the App parent component
      <Form />
    </div>
  );
}

export default App;
