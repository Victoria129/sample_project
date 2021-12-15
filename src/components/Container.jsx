import React from 'react'
import styled from "styled-components"
import Altcard from "../components/Altcard"
import Productcard from "./ProductCard"
export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .2rem;
`;

export const Grid = styled.div`
  display: grid;
  max-Width:100%;
  min-width: 50%;
  width: 80%;
  background-color: lightgrey;
  grid-template-columns: repeat(4, .05fr);
  grid-template-rows: 10% 10%;
  align-items: center;
  align-content: center;
  grid-gap: 10px;
`;

function Container() {
    return (
        <div>
        <Productcard/>
        </div>
    )
}

export default Container
