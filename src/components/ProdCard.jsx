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
import styled from "styled-components"

const Wrapper=styled.div`
width:60%;
height:200px;
align-Items:center;
display:flex;
background-color:green;
border-Radius:10px;
margin:10%;
padding:0px;
filter: drop-shadow(0px 3px 1px lightgray);
drop-shadow(offset-x offset-y blur-radius color);
`

function ProdCard() {
    const theme = useTheme();
  
    return (
      <Wrapper>
        <Card variant="contaned" style={{backgroundColor:"green"}}>    
        <CardMedia
        component="img"        
        height="200"
        width="100%"
        image="https://pictures-uganda.jijistatic.com/8211050_MzAwLTQwMC1kMmExNDdiNTQ5.webp"
        alt="green iguana"
      />
      </Card>
      <CardContent>
       <div>
         <h3>Sonn Experia z10</h3>
       </div>
      </CardContent>
      </Wrapper>
    );
  }
export default ProdCard
