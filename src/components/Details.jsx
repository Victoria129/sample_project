import React from 'react'
import "../css/details.css";
import { useEffect, useRef, useState } from "react";
import Styled from "styled-components"
import 'pure-react-carousel/dist/react-carousel.es.css';


const Wrapper=Styled.div`
width:99%;
height:100%;
background-color:green;
justify-content:center;
display:flex;
padding: 10px;
flex-direction:column;

`
const Wrap=Styled.div`
width:60%;

`
const imagestyle={
height:"300px",
width:"100%"

	
	}

const Imager=Styled.div`
width: 100%;
background-color:orange;
height:10%;

`
const Imagestyle={
	width:"800px",
	height: "600px"

}

const Flexbox=Styled.div`
display:Grid;
padding:10px;
grid-template-columns: repeat(3, 180px);
grid-template-rows: repeat(3, 100px);
background-color:white;
border:1px solid black;
width:100%;
margin-top:15px;
border-radius:15px;
`

function Details() {
const [descriptions,setDescriptions] =useState([1,1,1,1,1,,1,1,1])
	
	return (
	<div style={{display:"flex",justifyContent:"space-between"}}>
<div>
<h1>Adverts Here</h1>
</div>

         <div style={{width:"80%",justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
		<div>
			

		</div>
	<div style={{Width:"100%",alignItems:"center"}}>
		<div class="title">
			<h1 style={{color:"#2e2e2e",fontSize:"20px"}}>Toyota Kigege Ready for Work</h1>
			<div class="price">
			UGX <span>500000000 (500M)</span>
		</div>
		</div>
		
		
		<div class="variant">
			<h3>Description</h3>
			<h5>Lorem Ipsum dos all his hst in th middle aged country about to collapse and live this world t0 the living</h5>
		</div>
	
		<div class="variant">
			<h3>Specifications</h3>
		<Flexbox>
			{descriptions.map((item,i)=>(
    <div>			
			<div style={{display:"flex",alignItems: 'center',flexDirection:"column"}}>
				<span style={{color:"#2e2e2e"}}><strong>Model</strong></span>
				<span style={{color:"gray"}}>GT X 5000D</span>
			</div>
			</div>
			))}
			
			

		</Flexbox> 
		</div>
	</div>
	</div>
	<div>
	<h1>Adverts Here</h1>
	</div>

  </div>
        
    )
}

export default Details
