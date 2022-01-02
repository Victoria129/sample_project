import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "@material-ui/core/Card";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";
import ProdCard from "../components/ProdCard";
import styled from "styled-components";
import AppMenu from "../components/AppMenu";
import {Paper} from "@material-ui/core"
import {Box} from '@material-ui/core';
import { Grid } from "@material-ui/core";
import { createTheme, ThemeProvider} from '@material-ui/core';
import BrandsBar from "../components/BrandsBar"
import {useEffect} from "react";


const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: "white",
  height: 60,
  lineHeight: '60px',
}));
const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });
const Flexer = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  padding: 0px;
  margin: 0px;
  width: 98%;
`;
const Cardwrap = styled.div`
  display: flex;
  flex-direction: column;
 background-color:white;
 width:70%;
  height: 100%;
`;
const SweetLove=styled.div`
width:90%;
height:100%;
display:flex;
background-color:white;
align-content:center;
justify-content:space-evenly;
`
const Filter=styled.div`
width:400px;
height:800px;
background-color:#2e2e2e;
`
const styles={
  width:"80%",
  height:"300px"
}
const Text =styled.div`
color: white;
`

function DetailsPage() {
  const [loading,setLoading]=useState(false)
const[data,setData]=useState([1,1,1,1,1])
/*
useEffect(()=>{
  const url ="https://fakestoreapi.com/products"
  try{
    fetch(url).then(res=>res.json()).then(data=>setData(data))
    setLoading(!loading)
  console.log(data)
  }
  catch(err){
    console.log(err)
  }
  
},[])
*/
  
    const [values, setValues] = React.useState([
        "Bam",
        "Kate",
        "Nicole",
        "Aaron"
      ]);
      const [selected, setSelected] = useState("Bam");
      function handleChange(event) {
        setSelected(event.target.value);
      }
    return (
        <div style={{backgroundColor:"white"}}>

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
    

<div>


<Flexer>
{loading ? <h1>Loading Items</h1>:


<Cardwrap>
  {data.map((item,i) =>(
    <ProdCard/>
  ))}
</Cardwrap>

  }
</Flexer>
        </div>
        </div>
    )
}
export default DetailsPage