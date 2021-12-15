import React from 'react'
import styled from "styled-components"


const Wrapper=styled.div`
max-width:80%;
max-height:100%;
height:100%;
width:70%;
background-color:${props=>props.color ? props.color : "yellow"};
border-radius:${props=>props.radius ? props.radius : "10px"}
`

function ProductsWrapper() {
    return (
        <Wrapper>
      h    
        </Wrapper>
    )
}

export default ProductsWrapper
