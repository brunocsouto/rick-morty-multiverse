import React, { useState, useEffect } from "react";
import "./styles.css";

import { Link, useLocation } from "react-router-dom";

import api from "../services/api";

interface Characters {
  id: number;
  name: string;
  image: string;
}

interface Pagination {
  first: number;
  previous: number;
  next: number;
  last: number;
}

const INITIAL_CHARACTERS = [
  {
    id: 0,
    name: "",
    image: "",
  },
];

const INITIAL_PAGINATION = {
  first: 0,
  previous: 0,
  next: 0,
  last: 0,
};

const Characters = () => {
  const [characters, setCharacters] = useState<Characters[]>(
    INITIAL_CHARACTERS
  );
  const [pagination, setPagination] = useState<Pagination>(INITIAL_PAGINATION);

  let query = new URLSearchParams(useLocation().search);
  let page = query.get("page") ? Number(query.get("page")) : 1;

  useEffect(() => {
    api.get(`character/?page=${page}`).then((response) => {
      setCharacters(response.data.results);
      const { pages } = response.data.info;
      setPagination(() => {
        const previous = page > 1 ? page - 1 : page;
        const next = page < pages ? page + 1 : page;
        return {
          first: 1,
          previous,
          next: next,
          last: pages,
        };
      });
    });
  }, [page]);

  return (
    <main id="characters-page">
      <h1>Characters</h1>
      <div id="pagination">
        <div>
          <Link to={`/characters?page=${pagination.first}`}>
            <button className="--first-button">First</button>
          </Link>
          <Link to={`/characters?page=${pagination.previous}`}>
            <button>Prev</button>
          </Link>
          <Link to={`/characters?page=${pagination.next}`}>
            <button>Next</button>
          </Link>
          <Link to={`/characters?page=${pagination.last}`}>
            <button className="--last-button">Last</button>
          </Link>
        </div>
        <p>
          page {page} of {pagination.last}
        </p>
      </div>
      <section>
        <ul>
          {characters.map((character) => (
            <Link to={`/characters/${character.id}`} key={character.id}>
              <li>
                <img src={character.image} alt={`${character.name} avatar`} />
                <p>{character.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Characters;
