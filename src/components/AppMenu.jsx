import styled from "styled-components"
import MailIcon from '@material-ui/icons/Mail';
import * as React from "react";


const Menucomponent=styled.div`
width: 100px;
background-color:white;
height: 100px;
margin: 50px;
border-Radius:0px 20px 0px 20px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px;
border: 2px solid gray;
:hover{
background-color: lightblue;

}

`
const styles={
    width: 100,
    height: 100,
    }

    const Text=styled.h6`
color:red;
font-weight: bold;
margin: 0px;
:hover{
  color:white;
}

`
const imageStyles={
    width: '60px',
    height: '60px',
    padding: "0px",
    margin:"0px",
  
  }
  
  
  const Wrapper=styled.div`
  display:Grid;
  grid-template-columns: repeat(4, 115px);
    grid-template-rows: repeat(3, 115px);
  align-items: center;
  `


function AppMenu() {
    const [item,setItem]=React.useState([1,1,1,1,1,1,1,1])
    return (
          <Wrapper>
    {item.map((i,item)=>(

  
  <Menucomponent>
  <MailIcon color="secondary" style={imageStyles}/>
   <Text>ELECTRONICS</Text>
  </Menucomponent>

))}
  </Wrapper>
    )
}

export default AppMenu
