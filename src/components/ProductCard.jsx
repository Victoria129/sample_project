import styled from "styled-components"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import {Chip} from '@material-ui/core';
import * as React from 'react';


const Button = styled.div`
  width: 90%;
    height: 230px;
  border-radius:20px 0px 20px 0px;
  margin:5px;
  padding: 0px;


`

const Container=styled.div`
margin:0px 5px;
height: 15;
align-items: center;
display: inline-block;
`

const Text=styled.h4`
font-size:${props =>props.size ? props.size:"13px"};
color:${props=>props.color ? "purple" : "#2e2e2e"};
margin:2px;
padding:0px;
`


export default function Productcard(props) {


  return (
    <div>   
    <Button>      
    <Card>
    <CardActionArea>
      <CardMedia
        component="img"   
        width="200"     
        height="180"
       
        image="https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp"
        alt="green iguana"
      />    
     <div>
      <Text>Samsung Galaxy Note 8 64 GB Black</Text>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Chip style={{height:17,margin:5,backgroundColor:"#2e2e2e",color:"white"}} label="USh 3000000" />
      <Text color="True"><b>3 pics</b></Text>
      </div>     
     </div>     
    </CardActionArea>
  </Card>  
  </Button>    
    </div>
  );
}


const Swiftcard=styled.div`
width:250px;
height:400px;
background-Color:green;

border:1px solid black;
`



