import React from 'react'
import {Card} from "@material-ui/core"
import styled from "styled-components"
import {Button} from "@material-ui/core"
import {TextField} from "@material-ui/core"
import AppMenu from '../components/AppMenu'
import {useState} from "react"

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:${props=>props.width ? props.width:"60%"};
justify-content:center;
padding:20px;
}
`
const spaces={
margin:"12px",
Color:"orange"
}

const Text =styled.div`
color:white;
`

function Login() {

    const [loading,setLoading]=useState(false)
const Register=()=>{
useRegister(!register)
}
    const [register,useRegister]=React.useState(true);
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
     
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
           
        <Wrapper>
        {register ? 
<Card style={{backgroundColor:"white",borderStyle:"solid",borderColor:"#38006b"}}>
 <Wrapper width="100%" >
     <h4 style={{color:"gray"}}>Gaga Login</h4>
 <TextField style={spaces} color="white" id="contained" label="Phone Number" variant="outlined" />
 <TextField type="password" style={spaces} id="Contained" label="Password" color="primary" id="fullWidth" variant="outlined" />
    <Button style={{backgroundColor:"purple"}} variant='contained' color="secondary">Login</Button>
<h4>OR</h4>
<Button color="secondary" style={{backgroundColor:"purple"}} onClick={Register} variant='contained'>Register</Button>
    </Wrapper>
</Card>
:

<Card style={{backgroundColor:"white",borderStyle:"solid",borderColor:"#38006b"}}>

<Wrapper width="100%">
<h4 style={{color:"gray"}}>Gaga Registration</h4>
<TextField style={spaces} id="contained" label="Full Names" variant="outlined" />
 <TextField  style={spaces} id="Contained" label="Phone Number" color="primary" id="fullWidth" variant="outlined" />
 <TextField style={spaces} id="contained" label="Business Name" variant="outlined" />
 <TextField style={spaces} id="Contained" label="Business Contact" color="primary" id="fullWidth" variant="outlined" />
 <TextField style={spaces}  id="contained" type="password"  label="Password" variant="outlined" />
 <TextField style={spaces} id="Contained" type="password" label="Confirm Password" color="primary" id="fullWidth" variant="outlined" />
    <Button style={{backgroundColor:"purple"}} color="secondary" variant='contained'>Register</Button>
<h4>Have an account ?</h4>
<Button style={{backgroundColor:"purple"}} variant='contained' onClick={Register} color="secondary">Login instead</Button>
 
  </Wrapper>
 
    </Card>
}
</Wrapper>
        </div>
        </div>
    )
}

export default Login

