
import './App.css';
import React from 'react';

import NavBar from "./Components/NavComponents/NavBar"
import Itemslisting from "./itemslists/Itemslisting"
import BarItem from './itemslists/BarItem'
import TopBar from "./Componentii/TopBar"

 
       

function App() {
const state = {
    Directory: "Legal Docs Review",
    Filter: "All",
  header: [{ ID:"ID", cn:"COMPANY NAME", creation:"CREATED AT", KB: "KBIS", STAT: "STATUS", PROG: "PROGRESS" }],
    
}
  
  return (
    <>
      <NavBar />
      <BarItem user={ state.header}/>
      <Itemslisting />
      <TopBar/>

  </>

  );
}

export default App;
