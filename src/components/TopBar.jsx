import React from 'react'
import styled from 'styled-components'
import { theme } from '../Module/Theme'
import { Card } from '@material-ui/core'
import "../css/topBar.css"
import {Button} from "@material-ui/core"


const prfilecontaine=styled.div`

display: flex;
`

const CardComponent=styled.div`
display: flex;
background-color:lightgrey;

height:70px;
justify-content: space-between;
align-items: center;
padding :0% 5%;
`



const profilestyle=styled.div`
display: flex;
background-color:lightgrey;
`

function TopBar() {
    return (
   
   <CardComponent>
      <div>
      <img src="https://img.icons8.com/office/16/000000/shopping-cart.png"/>
      </div>

      <div class="search">
<input type="text" class="searchTerm" placeholder="What are you looking for?">

</input>
<Button variant="contained">Search</Button>
</div>

     
<div class="profile">

  
 <Button variant="contained" disableElevation>
  Requests
  </Button>
</div>
   </CardComponent>
       
    )
}

export default TopBar
