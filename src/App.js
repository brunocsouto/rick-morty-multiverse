import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';

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
// import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        {/* <Header /> */}
        <header>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
                <Navbar.Brand>Multiverse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/characters" className="nav-link">Characters</Link>
                        <Link to="/episodes" className="nav-link">Episodes</Link>
                        <Link to="/locations" className="nav-link">Locations</Link>
                    </Nav>
                    <Nav>
                        <Link to="/about" className="nav-link">About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
        <div  className="container text-light">
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
        </div>
      </Router>
    </div>
  );
}

export default App;
