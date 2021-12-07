
import styled from "styled-components"
import { orange } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import * as React from 'react';


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
align-items: center;
display: inline-block;
`


const Wrapper=styled.div`
display: grid;
  grid-template-columns: repeat(5, 250px);
  grid-template-rows: repeat(5, 350px);
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

   
    <Button>
    <Card sx={{ maxWidth: 100 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        margin="0px"
        height="200"
        width="150"
        image="https://pictures-uganda.jijistatic.com/4654554_7cfae9a3-d471-4469-93f4-4962e3435a25_1600x1200.webp"
        alt="green iguana"
      />
      <Container>
     
      <h2>Laptop HP ProBook 4530S 4GB Intel Core I5 320GB</h2>
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




