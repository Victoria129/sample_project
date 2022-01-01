import React from 'react'
import {Card} from "@material-ui/core"
import styled from "styled-components"
import {Button} from "@material-ui/core"
import {TextField} from "@material-ui/core"
import AppMenu from '../components/AppMenu'

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

function Login() {
const Register=()=>{
useRegister(!register)
}
    const [register,useRegister]=React.useState(true);
    return (
        <div>
<AppMenu/>
     
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
           
        <Wrapper>
        {register ? 
<Card style={{backgroundColor:"white",borderStyle:"solid",borderColor:"#2e2e2e"}}>
 <Wrapper width="100%" >
     <h4 style={{color:"orange"}}>Login Page</h4>
 <TextField style={spaces} color="white" id="contained" label="Phone Number" variant="outlined" />
 <TextField type="password" style={spaces} id="Contained" label="Password" color="primary" id="fullWidth" variant="outlined" />
    <Button style={{backgroundColor:"orange"}} variant='contained' color="secondary">Login</Button>
<h4>OR</h4>
<Button color="secondary" style={{backgroundColor:"orange"}} onClick={Register} variant='contained'>Register</Button>
    </Wrapper>
</Card>
:
<Card style={{backgroundColor:"white",borderStyle:"solid",borderColor:"#2e2e2e"}}>
<Wrapper width="100%">
<h4 style={{color:"orange"}}>Registration Page</h4>
<TextField style={spaces} id="contained" label="Full Names" variant="outlined" />
 <TextField  style={spaces} id="Contained" label="Phone Number" color="primary" id="fullWidth" variant="outlined" />
 <TextField style={spaces} id="contained" label="Business Name" variant="outlined" />
 <TextField style={spaces} id="Contained" label="Business Contact" color="primary" id="fullWidth" variant="outlined" />
 <TextField style={spaces}  id="contained" type="password"  label="Password" variant="outlined" />
 <TextField style={spaces} id="Contained" type="password" label="Confirm Password" color="primary" id="fullWidth" variant="outlined" />
    <Button style={{backgroundColor:"orange"}} color="secondary" variant='contained'>Register</Button>
<h4>OR</h4>
<Button style={{backgroundColor:"orange"}} variant='contained' onClick={Register} color="secondary">Login</Button>

    </Wrapper>
    </Card>
    }
</Wrapper>
        </div>
        </div>
    )
}

export default Login

