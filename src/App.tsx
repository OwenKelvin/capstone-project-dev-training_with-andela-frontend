import React from "react";
import "./App.css";
import logo from "./images/logo.png";
import { Button, ButtonToolbar } from "react-bootstrap";

const App = () => {
  return (
    <main className="App">
      <header className="App-header">
        <img alt="Logo" src={logo} />
      </header> Welcome to TeamWork
      <div className="App-body">
        Welcome to TeamWork
        <ButtonToolbar>
          <Button variant="outline-primary">Login</Button>
        </ButtonToolbar>
      </div>
    </main>
  );
};

export default App;
