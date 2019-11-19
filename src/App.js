import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/home/index';
import Characters from './pages/characters/index';
import Episodes from './pages/episodes/index';
import Locations from './pages/locations/index';
import About from './pages/about/index';
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
        <Header />

        <div  className="container text-light">
          <Router >
            <Switch>
              <Route path="/characters">
                <Characters />
              </Route>
              <Route path="/episodes">
                <Episodes />
              </Route>
              <Route path="/locations">
                <Locations />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
