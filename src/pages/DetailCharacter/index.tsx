import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

import api from "../services/api";

const INITIAL_CHARACTER = {
  id: 0,
  name: "",
  status: "",
  species: "",
  gender: "",
  image: "",
  episode: [],
  origin: {
    id: 0,
    name: "",
    url: "",
  },
  location: {
    id: 0,
    name: "",
    url: "",
  },
};

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  episode: string[];
  origin: {
    id: number;
    name: string;
    url: string;
  };
  location: {
    id: number;
    name: string;
    url: string;
  };
}

interface Episodes {
  id: number;
  episode: string;
  name: string;
}

const CharacterDetail = () => {
  const [character, setCharacter] = useState<Character>(INITIAL_CHARACTER);
  const [episodes, setEpisodes] = useState<Episodes[]>([]);

  let { id } = useParams();
  const characterId = Number(id);

  useEffect(() => {
    api.get(`character/${characterId}`).then((response) => {
      setCharacter(() => {
        const { origin, location } = response.data;
        const originId = parseIdFromURLParam(origin.url);
        const locationId = parseIdFromURLParam(location.url);

        response.data.origin = { ...origin, id: originId };
        response.data.location = { ...location, id: locationId };

        let serializedEpisodes = response.data.episode;
        serializedEpisodes = serializedEpisodes
          .map((episode: string) => parseIdFromURLParam(episode))
          .join();

        api.get(`/episode/${serializedEpisodes}`).then((episodeResponse) => {
          setEpisodes(() => {
            if (episodeResponse.data.id) {
              return Array(episodeResponse.data);
            } else {
              return episodeResponse.data;
            }
          });
        });
        return response.data;
      });
    });
  }, [characterId]);

  return (
    <div id="character-detail">
      <header>
        <h1>{character.name}</h1>
        <Link to="/characters">
          <button>Back</button>
        </Link>
      </header>
      <main>
        <img src={character.image} alt={`${character.name} avatar`} />
        <div id="character-description">
          <p>
            <strong>Specie: </strong>
            {character.species}
          </p>
          <p>
            <strong>Origin: </strong>
            <Link to={`location/${character.origin.id}`}>
              {character.origin.name}
            </Link>
          </p>
          <p>
            <strong>Last Seen: </strong>
            <Link to={`location/${character.location.id}`}>
              {character.location.name}
            </Link>
          </p>
          <section>
            <strong>Episodes:</strong>
            <div className="episodes-thumb">
              {episodes.map((episode) => (
                <Link to={`/episodes/${episode.id}`} key={episode.episode}>
                  <button>{episode.episode}</button>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

function parseIdFromURLParam(url: string) {
  const urlSize = url.split("/").length;
  const lastURLElement = Number(url.split("/")[urlSize - 1]);
  return lastURLElement;
}

export default CharacterDetail;
