import styled from "styled-components"
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import * as React from "react";

//Illustration by <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
const AppBar=styled.div`
max-Width:100%;
max-height:70px;
background-color:#2B2B2B;
display: flex;
border-width: 0px 0px 3px 0px;
border-style: solid;
border-color:gray;
align-Items:center;
justify-content: space-between;
padding:0px 8% 0% 5%;
position:fixed;
z-index:9999;
top:0px;
`
const IconsWrapper=styled.div`
display: flex;
align-Items:center;
justify-content:space-evenly;
max-width:30%;
max-Width:70px;
`

const Icons=styled.div`
max-width: 80%;
max-height:50px;
align-items: center;
justify-content: center;
display: flex;
border-radius:50%;
background-color:orange;
padding:5px;
margin:5px;
color:white;

:hover{
  background-color:black;
  width:100%;
  height:100%;
}
 :active{
max-Width:70%;
max-height:70%;


 }
`


function AppMenu() {
return(
<div>
<AppBar>
  <img src="https://assets.jiji.ug/art/attributes/categories/vehicles.png" style={{maxWidth:"100%",maxHeight:"80px"}}/>
  
<div>
  <input type="input" placeholder="search.." />
</div>
  <IconsWrapper>
  <Icons>

 <AttachMoneyIcon></AttachMoneyIcon>
  </Icons>

  <Icons>
 <MailIcon></MailIcon>
  </Icons>
  <Icons>
 <NotificationsIcon></NotificationsIcon>
  </Icons>
  <Icons>
 <AddIcon></AddIcon>
  </Icons>
  
</IconsWrapper>
</AppBar>

</div>

)
}


export default AppMenu
