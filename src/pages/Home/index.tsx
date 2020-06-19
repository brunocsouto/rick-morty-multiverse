import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import poster from "../../assets/rick-morty-poster.png";

const Home = () => {
  return (
    <div id="container-home">
      <Link to="/characters">
        <button>Entrar</button>
      </Link>
      <img src={poster} alt="Rick Morty poster" />
    </div>
  );
};

export default Home;
