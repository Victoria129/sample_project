import React from 'react'
import Details from "../components/Details"
import styled from "styled-components"
import Slider from "../components/Slider"
const Text=styled.div`
color:white;
`


function ProductDetails() {
    return (
        <div>
            <section>
      
      <div class="appBar">
      
        <Text>Katale Xpress</Text>
       
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
      <br/>

    
            <Details/>
        </div>
    )
}

export default ProductDetails
