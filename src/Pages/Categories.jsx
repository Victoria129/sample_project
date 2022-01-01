import React from 'react';
import "../css/Mainpage.css";
import styled from "styled-components";
import { useState } from 'react';
import {Button} from "@material-ui/core"

const Text =styled.div`
color: white;
`
const Listing=styled.li`
display:flex;
align-items: center;
justify-content: flex-start;
margin-top:1px;
`
const Wrapper=styled.div`
width:60%;
display: flex;
flex-direction: column;
justify-content:center;
`

function Categories() {
    const [lists,setLists]=useState([1,1,1,1,1,1,1,1])
    return (
        <div>
            <section>
      
      <div class="appBar">
      
        <Text>Katale Xpress</Text>
       
      <div>
        <input type="input" placeholder="search.." />
      </div>
      <div></div>
      </div>
      </section>
      <br/>
      <br/>
      <Wrapper>
    <ul>
        {lists.map((item,i)=>(
<Button variant="outlined" style={{margin:"10px"}}>

<Listing>
                        <img src="https://assets.jiji.ug/art/attributes/categories/mobile.png" alt="Product alternatives"/>
       <span><h5>Mobile Phone </h5></span>
        </Listing>
</Button>
        ))}
       
   </ul>
      </Wrapper>
        </div>
    )
}

export default Categories
