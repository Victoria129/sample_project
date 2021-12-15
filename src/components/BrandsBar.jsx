import styled from "styled-components"
import * as React from "react"
import {Card} from "@material-ui/core"
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
const Items=styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color:white;
margin:10px;
padding:5px;
`

const Carded = styled.div`
width: 100%;
height:8%;
display: flex;
align-items: center;
justify-content: center;
box-shadow:1px solid black;
`
const Wrapper=styled.div`
padding: 10px;
margin: 0px';
border-Radius:50%;
background-color:lightgrey

`

function BrandsBar() {
const [item,useItem]=React.useState([1,1,1,1,1,1,1,1])
    return (
           
            <Carded>
{item.map((i,item)=>(
     
            <Items> 
           <Wrapper>         
            <DirectionsCarIcon style={{fontSize:"50px"}}/>
            </Wrapper>
            <h5>Mobile Phone</h5>
           </Items>
           
           
        

))}
            </Carded>
            
     
    )
}

export default BrandsBar
