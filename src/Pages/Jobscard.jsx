import React from 'react'
import styled from "styled-components"

const Wrapper=styled.div`
width:100%;
padding:0% 5%;
display: flex;
background-color:green;

`
const Text=styled.div`
color:white;

`
const PostWrapper=styled.div`
width:30%;
background-color:orange;
height:100%;
justify-content:center;
display:flex;
flex-direction:column;
align-Items:center;

`

function Jobscard() {
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

        <Wrapper>
        <PostWrapper>
        <h1>Jobs Board</h1>  
        </PostWrapper>
        
        </Wrapper>
      
        </div>
    )
}

export default Jobscard
