import { Pages } from '@material-ui/icons'
import React from 'react'
import AppBarr from "../components/AppBar"
import Productcard from "../components/ProductCard"
import styled from "styled-components"
import { orange } from '@material-ui/core/colors'
import AppMenu from "../components/AppMenu"
import Altcard from "../components/Altcard"
import BrandsBar from "../components/BrandsBar"
import Dropdowns from "../components/Dropdowns"
import Details from "../components/Details"
import Upload from "../components/Upload"
import Slider from "../components/Slider"
import Styled from "styled-components"
import ProductsWrapper from "../components/ProductsWrapper"
import {useState} from "react"
import Container from "../components/Container"
import MenuBar from "../components/MenuBar"
import {Grid,GridItem,Card,Paper} from "@material-ui/core"
import Filterbtn from "../components/Filterbtn"



const Wrapper=styled.div`
width:50%;
height:100%;
display:flex;
justify-content: center;
`
const Both=styled.div`
width:100%;
display:flex;

`
const ProducctWrap=styled.div`
width:90%;
padding:15px
`

export default function MainPage() {
    return (
      <div>
     
     <AppMenu style={{position: "sticky"}}/>     
      <div>   
            <div>        
            <Slider>
                Hello there
            </Slider>            
            </div>
            <ProducctWrap>
        <div>  
        
        <div style={{display:"flex",align:"center"}}>
       
        <Both>
             
<Wrapper>
<MenuBar />
            <div>
               <Productcard/>              
            </div>         
    </Wrapper>
    </Both> 
    </div>
       </div>

       <h2>hello there</h2>
       </ProducctWrap>
       </div>
       
       

        </div>

    )
}

