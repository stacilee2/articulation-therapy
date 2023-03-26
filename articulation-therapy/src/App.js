import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react'; 
import Home from './Home';
import Navigation from './Navigation';
import SoundContainer from './SoundContainer';
import Games from './Games';
import AddSound from './AddSound';

function App() {

  const [sounds, setSounds] = useState("") 
  
  useEffect(() => {
    fetch("http://localhost:3000/sounds") 
    .then (res => res.json()) 
    .then (data => setSounds(data) 
    )                              
  }, []);

  function handleAddSound(newSound) {
    setSounds([...sounds, newSound])
  }

    return (
      <div className="App">
      <h1 className="header">Speech Therapy Sandbox:
      <p>Ideas for Articulation Elicitation</p>
      </h1>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sounds">
            <SoundContainer sounds = {sounds} />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route exact path="/addsound">
            <AddSound handleAddSound = {handleAddSound} />
          </Route>
        </Switch>
      </div>
    )
}

export default App;
