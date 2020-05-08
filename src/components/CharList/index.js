import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import CharCard from "./CharCard";
import axios from "axios";

export default function CharList() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setChars(res.data.results);
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  console.log("Characters:", chars);

  return (
    <CharListWrapper>
      <Nav>
        <Link to="/">Home</Link>
      </Nav>
      <CharListContainer>
        {chars.map(char => {
          return <CharCard key={char.id} char={char} />;
        })}
      </CharListContainer>
    </CharListWrapper>
  );
}

const CharListWrapper = styled.div``;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
  a {
    text-decoration: none;
    font-size: 1.6rem;
    background: aliceblue;
    border-radius: 0.3rem;
    padding: 0.3rem;
    color: darkblue;
  }
  a:hover {
    color: aliceblue;
    background: darkslateblue;
  }
`;

const CharListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
