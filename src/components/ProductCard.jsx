
import styled from "styled-components"
import { orange } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import * as React from 'react';
import Altcard from "../components/Altcard"


const Button = styled.div`
  width: 210px;
  height: 230px;
  border-radius:20px 0px 20px 0px;
  margin:50px;
  padding: 0px;
  background-color: orange;

`

const Container=styled.div`

margin:0px 5px;

height: 15;
margin: 5px;
display: flex;
justify-content: center;
flex-direction: column;
`


const Wrapper=styled.div`
display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-template-rows: repeat(5, 320px);
align-items: center;
width:100%;

`

const TestContainer=styled.div`
height:100%auto;
width:300px;
`


const Text=styled.span`
font-size:15px;
color:gray;
`

export default function Productcard() {
  const [item,setItem]=React.useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])

  return (

    <div>
    <Wrapper>

  
    {item.map((i,item)=>(

   
  
    <Altcard/>
 
 ))}
    
    </Wrapper>
    </div>
  );
}




