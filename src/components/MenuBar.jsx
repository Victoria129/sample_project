import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from "styled-components"
import AcUnitIcon from '@material-ui/icons/AcUnit';

const Dispaywrapper=styled.div`
display:flex;
align-Items:center;
margin:0px;

`

const ImageWrapper=styled.div`
border-Radius:50%;
background-color:orange;
padding:0px;
margin:10px;
align-Items:center;
display:flex;
width:50px;
justify-content:center;
height:50px;
`
const styles = {
      Width:"70%",
      Height:"70%"
}


function MenuBar() {


const [items,setItems]=React.useState([1,1,1,1,1,1])

    return (
        <div>
           <ProSidebar style={styles}>
  <Menu iconShape="square">
    <MenuItem >Categories</MenuItem>
    <SubMenu title="Electronics">
      
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    </SubMenu>

    <SubMenu title="Electronics">
      
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    </SubMenu>

    <SubMenu title="Electronics">
      
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    </SubMenu>

    <SubMenu title="Electronics">
      
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    </SubMenu>

    <SubMenu title="Electronics">
      
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
      <MenuItem>
<Dispaywrapper>
      <ImageWrapper>
      <AcUnitIcon/>
     
      </ImageWrapper>
      AC units
      </Dispaywrapper>
      </MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>;
        </div>
    )
}

export default MenuBar
