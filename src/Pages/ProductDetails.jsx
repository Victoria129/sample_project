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
        <input type="input" placeholder="search.." />
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
