
import styled from "styled-components"
import { orange } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import * as React from 'react';


const Button = styled.div`
  width: 90%;
    height: 230px;
  border-radius:20px 0px 20px 0px;
  margin:5px;
  padding: 0px;
  background-color: orange;

`

const Container=styled.div`

margin:0px 5px;

height: 15;
align-items: center;
display: inline-block;
`


const Wrapper=styled.div`
display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-template-rows: repeat(4, 280px);
align-items: center;
width:200px;
min-Width:40%;
margin:0%;
padding:2%;
background-color:white;


@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(1, 140px);
  grid-template-rows: repeat(1, 140px);
align-items: center;
width:70%;
min-Width:40%;
margin:0%;
padding:2%;
background-color:orange
max-width: 80%;
}

`

const TestContainer=styled.div`
height:100%auto;
width:300px;
`


const Text=styled.h4`
font-size:10px;
color:#7eff05;
`

export default function Productcard() {
  const [item,setItem]=React.useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])

  return (

    <div>
    <Wrapper>

  
    {item.map((i,item)=>(

   
    <Button>
    <Card >
    <CardActionArea>
      <CardMedia
        component="img"
        
        height="200"
m

        width="300"
        image="https://pictures-uganda.jijistatic.com/7403894_ODEwLTEwODAtMWE3ZmRmYmJkMg.webp"
        alt="green iguana"
      />
      <Container>
     
      <Text>Samsung Galaxy Note 8 64 GB Black</Text>
      <h3><b>Ugx 3000000</b></h3>
      
      </Container>
     
    </CardActionArea>
  </Card>
  
  </Button>
 ))}
    
    </Wrapper>
    </div>
  );
}




