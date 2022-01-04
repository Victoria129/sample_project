import styled from "styled-components"
import React from 'react'

const Card=styled.div`
width:100%;
height:230px;
background-Color:lightgray;
border-radius:5px;

filter: drop-shadow(2px 2px 2px lightgray);
    drop-shadow(offset-x offset-y blur-radius color);
`
const Image=styled.img`
url="https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp";
width:200px;
height:210px;
`
const InfoWrapper=styled.div`
width:100%;
height:30%;
display:flex;
flex-direction:column;
`
const Text=styled.h6`
font-Size:10px;
margin:3px;
color:${props=>props.color ? props.color : "white"}
font-Style:solid;
`
const Texts=styled.h6`
font-Size:12px;
margin:3px;
color:white;
font-Style:solid;
`

const LastItem=styled.div`
width:50%;
height:20px;
display:flex;
background-Color:${props=> props.color ? props.color : "green"};
alignItems:center;
border-radius:0px 10px 10px 0px
`


function Cardcomponent() {
    var colors = [
        '#8533c4',
        '#c433ac',
        '#c4335f',
        '#338dc4',
        '#33c4b6',
        '#33c463',
        '#7ec433',
        '#b3c433',
        '#c4ac33',
        '#f0a930'
        ]
        var color = colors[Math.floor(Math.random()*colors.length)];
    return (
        <div>
<Card>
    <img style={{width:"100%",height:"70%",objectFit:"cover"}} src="https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp"/>
    <Text>Laptop Apple MacBook 2GB Intel Core 2 Duo HDD 72GB</Text>
<LastItem color={color} >
  <strong><Texts>USh 20,000,000</Texts></strong>
</LastItem>
</Card>

        </div>
    )
}

export default Cardcomponent
