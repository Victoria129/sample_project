import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import {useState} from 'react'
import AppMenu from "../components/AppMenu"
import ProdCard from "../components/ProdCard"
import MenuBar from "../components/MenuBar"
import styled from "styled-components"

const Flexer=styled.div`
align-Items: center;
background-color:green;
display:flex;
justify-content:space-evenly;
padding:0px;
margin:0px;
width:98%;



`
const Cardi=styled.div`
width:30%;
background-color:orange;
height:200px;
margin:10px;
filter: drop-shadow(0px 3px 1px lightgray);
drop-shadow(offset-x offset-y blur-radius color);

`
const Cardwrap=styled.div`
display: inline-block;
flex-direction: column;
width:100%;
height:100%;

`

function DetailsPage() {
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
        <div>    
<AppMenu/>
<Flexer>
  <div>
  <Cardi/>   
  </div>
<Cardwrap>
  {[1,1,1,1,1,1,1].map((item) =>(
    <ProdCard/>
  ))}

</Cardwrap>


</Flexer>


        </div>
    )
}

export default DetailsPage
