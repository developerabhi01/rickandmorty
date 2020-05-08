import React from "react";
import styled from "styled-components";

import { Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import CharList from "./components/CharList";
import SoloChar from "./components/SoloChar";

export default function App(props) {
  return (
    <AppWrapper>
      <Route path="/" exact {...props} component={HomePage} />
      <Route path="/chars" exact {...props} component={CharList} />
      <Route path="/chars/:id" {...props} component={SoloChar} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1c75e9;
  a:hover {
    text-decoration: none;
  }
`;
