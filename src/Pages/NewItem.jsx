import React from "react";
import styled from "styled-components";
import "../css/item.css"
import {TextField} from "@material-ui/core"
import { Dropdown } from 'semantic-ui-react'

const spaces={
  margin:"12px",
  Color:"orange",
  width:"60%",
  }

const Text=styled.h1`
color:white;

font-style:strong;
`
const Weed=styled.div`
width:50%;
height:20px;
margin: -50px;
`
const Wrapper=styled.div`
width:80%;
height:80%;
border:3px solid purple;
display:flex;
align-self:center;
align-Items:center;
border-radius:10px;
flex-direction:column;
justify-content:center;
`

const Wraps=styled.div`
width:100%;
height:100%;

display:flex;
align-self:center;
align-Items:center;
border-radius:10px;
flex-direction:column;
justify-content:center;
`

const BunnyGrid=styled.div`
display: flex;
flex-direction:column;
  background-color:Aliceblue;
  width:80%
  height:80%;
`


const friendOptions = [
   {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
  },
]


export function NewItem(){

const getItems=(e)=>{
console.log(e.target.value)
}

    return(
        <div>
              <section>
      
      <div class="appBar">
      
        <Text>GAGASALES.COM</Text>
       
        <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
      <div>
      </div>
          </div>
      </section>
      <br/>
      <br/>
      <br/>
      
<Wraps>
<Wrapper>
        
<h1>Post an Ad</h1>


<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select 
    onChange={getItems}
    class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
       
        <option selected>Select category</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
    </select>
  </div>
</div>


<BunnyGrid>
<h2>Luzinda Dougas</h2>
<h2>Luzinda Dougas</h2>
<h2>Luzinda Dougas</h2>
</BunnyGrid>
      </Wrapper>
</Wraps>
     

        </div>
        
    )
}


export default NewItem