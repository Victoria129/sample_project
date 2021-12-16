import { Pages } from '@material-ui/icons'
import React from 'react'
import Productcard from "../components/ProductCard"
import styled from "styled-components"
import AppMenu from "../components/AppMenu"
import Slider from "../components/Slider"
import {useState} from "react"
import MenuBar from "../components/MenuBar"




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

