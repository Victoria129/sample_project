import React from 'react'
import {Card, Paper} from "@material-ui/core"
import {Papers} from "@material-ui/core"
import styled from "styled-components"
import AppBarr from "./AppBar"
import { ArrowDropDownTwoTone } from '@material-ui/icons'


const Paperstyle=styled.div`
width:78%;
background-color:orange;

align-items: center;
display: flex;
flex-direction: column;
border-radius:10px;
margin:3%;
padding: 10px;
align-self: center;
`
const ImageWrapper=styled.div`
display: flex;
align-items: center;
height: 70px;
width:40%;
justify-content: space-between;
background-color:orange;
`
const FinalWrapper=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Button=styled.div`
margin:10px;
width:150px;
height:25px;
background-color: purple;
align-items: center;
display: flex;
justify-content: center;
cursor: pointer;
color:white;
:active{
    height:23.5px;
    width: 149px;
}
`

function Upload() {
    return (
        <div>
        <AppBarr/>
        <Paperstyle>    
        <h1>Post Ad</h1>
        <ImageWrapper>
        <ArrowDropDownTwoTone/>
        <ArrowDropDownTwoTone/>
        </ImageWrapper>
        <FinalWrapper>
            <h3>Add Photo</h3>
            <p>Add atlest one photo for this item</p>
<ImageWrapper>
    <h2>Item</h2>
    <h2>Item</h2>
    <h2>Item</h2>
</ImageWrapper>

<p>Add atlest one photo for this item</p>
<p>Add atlest one photo for this item</p>

<Button>Next</Button>
        </FinalWrapper>
     </Paperstyle>
        </div>
      
    )
}

export default Upload
