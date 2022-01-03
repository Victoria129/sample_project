import React from 'react';
import "../css/Mainpage.css";
import styled from "styled-components";
import { useState } from 'react';
import {Button} from "@material-ui/core"

const Text =styled.div`
color: white;
font-style:italic;
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
border:1px solid lightgrey;
border-radius:10px;
margin:2px 0px;
`
const Categorieswrapper=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`

function Categories() {
    const [lists,setLists]=useState([1,1,1,1,1,1,1,1])
    return (
        <div>
            <section>
      
      <div class="appBar">
      
      <Text>Gagasales.ug</Text>
       
      <div>
      <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
      </div>
      <div></div>
      </div>
      </section>
      <br/>
      <br/>
      
      <br/>
     <div>
       <Categorieswrapper>
         {lists.map((item,i)=>(

         
<Wrapper>
<div>
   
    <ul class="flex flex-col divide divide-y">
        <li class="flex flex-row">
            <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src="https://assets.jiji.ug/art/attributes/categories/mobile.png" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium dark:text-white">
                        Electronics and gadgets
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                      2000 Ads
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                  2000 Ads
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="20" fill="currentColor" height="20" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
       
    </ul>
</div>
</Wrapper>
))}
</Categorieswrapper>




     </div>
        </div>
    )
}

export default Categories
