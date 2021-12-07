import styled from "styled-components"
import * as React from "react"
import {Card} from "@material-ui/core"
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

function BrandsBar() {
const [item,useItem]=React.useState([1,1,1,1,1,1,1,1])
    return (
           
            <Carded>
{item.map((i,item)=>(
     
            <Items>          
            <img src="https://assets.jiji.ug/art/attributes/top-selection/buses-and-microbuses/volkswagen.png"/>
            <h5>Mobile Phone</h5>
           </Items>
           
           
        

))}
            </Carded>
            
     
    )
}

export default BrandsBar
