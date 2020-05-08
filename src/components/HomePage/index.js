import React from "react";
import styled from "styled-components";

import { Link as This_Link } from "react-router-dom";

export default function HomePage() {
  return (
    <HomePageWrapper>
      <h2>Welcome to the Rick and Morty API Project!</h2>
      <Link to="/chars">Let's get Rickity-rickity-wrecked son!!!</Link>
    </HomePageWrapper>
  );
}

const Link = styled(This_Link)`
  font-size: 2rem;
  color: white;
  &:hover {
    color: darkblue;
  }
`;

const HomePageWrapper = styled.div`
  text-align: center;
`;
