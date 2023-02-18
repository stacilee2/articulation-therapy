import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react'; 
import Home from './Home';
import Navigation from './Navigation';
import Sounds from './Sounds';
import Games from './Games';
import AddSound from './AddSound';


function App() {

  const [sounds, setSounds] = useState([])

  useEffect( () => {
    fetch("http://localhost:3000/sounds")
    .then (res => res.json())
    .then (data => setSounds(data)
    )
  }, []);

console.log(sounds)


    return (
      <Router>
      <div className="App">
      <h1 className="header">Speech Therapy Sandbox
      <h3>Ideas for Vocalic R Elicitation</h3>
      </h1>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sounds">
            <Sounds sounds = {sounds} />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route exact path="/addsound">
            <AddSound />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default App;
