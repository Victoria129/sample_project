import * as React from 'react';
import { useTheme } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import  Chip from "@material-ui/core/Chip";
import styled from "styled-components"
import LocationOnIcon from '@material-ui/icons/LocationOn';



const Wrapper=styled.div`
width:90%;
height:200px;
align-Items:center;
display:flex;
background-color:orange;
border-Radius:10px;

padding:0px;

filter: drop-shadow(0px 3px 1px lightgray);
drop-shadow(offset-x offset-y blur-radius color);

:hover{
 
align-Items:center;
display:flex;

padding:0px;
filter: drop-shadow(2px 2px 2px #494a4d);
drop-shadow(offset-x offset-y blur-radius color);
}
`

const DetaiWrapper=styled.div`
height:100%;
width:100%;
background-color:#2B2B2B;
flex-direction:${(props)=> (props.direction? props.direction : "column")}

border-radius: 0px 0px 100px 0px;

`
const Text=styled.h1`
font-size:${props=>props.size ? props.size :"20px"};
padding:10px;
color:white;
`
const Displaywrapper=styled.div`
width:100%;
display:flex;

align-items:center;
justify-content:space-between;
`
function ProdCard() {
    const theme = useTheme();
  
    return (
      <Wrapper>
        <Card variant="contaned" style={{backgroundColor:"green",width:"250px",height:"100%"}}>    
        <CardMedia
        component="img"        
        height="200px"
        width="200px"
        image="https://pictures-uganda.jijistatic.com/6488054_ODEwLTEwODAtMTQwNGIyYjBjOQ.webp"
        alt="green iguana"
      />
      </Card>
      
      <DetaiWrapper>
        <div>

       
      <Displaywrapper>
      <Text>Samsung Galaxy Note 8 64 GB Blue</Text>
            <Chip label="Promoted" color="secondary" />
            <Chip icon={<LocationOnIcon/>} label="Kampala" />
      </Displaywrapper>

      <Displaywrapper>
      <Chip label="Price:ugx 250000000" color="primary" />
      
      <div></div>

      </Displaywrapper>

     
      </div>
       </DetaiWrapper>
      </Wrapper>
    );
  }
export default ProdCard
