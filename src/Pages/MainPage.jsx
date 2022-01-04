import { Pages } from '@material-ui/icons'
import {useEffect,useState} from "react"
import Productcard from "../components/ProductCard"
import styled from "styled-components"
import AppMenu from "../components/AppMenu"
import Slider from "../components/Slider"
import {component,React} from "react"
import "../css/Mainpage.css"
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {Button as button} from "@material-ui/core";
import {Chip} from '@material-ui/core';
import Cardcomponent from "../components/Cardcomponent"
import Options from "../components/Options"


const Button = styled.div`
  width: 90%;
    height: 230px;
  border-radius:20px 0px 20px 0px;
  margin:5px;
  padding: 0px;
`

const Container=styled.div`
margin:0px 5px;
height: 15;
align-items: center;
display: inline-block;
`

const Text=styled.h4`
font-size:${props =>props.size ? props.size:"13px"};
color:${props=>props.color ? "purple" : "#2e2e2e"};
margin:2px;
padding:0px;
`



const Cards=styled.div`
min-height:30px;
max-height:150px;
max-Width:150px;
display:flex;
flex-direction:column;
align-Items:center;
background-color: white;
box-shadow: 0 1px 5px rgba(0,0,0,0.25), 0 0 50px rgba(0,0,0,0.1);
position: sticky;

`
const Images=styled.img`
src=${props=>props.src ? props.src : null}
width: 100px;
height: 100px;
max-Width:150px;
min-Width:50px;
min-height: 50px;
max-height:150px;
max-width:100px;
max-height:100px;
margin: 0px;
`


const Pills=styled.div`
width: 150px;
height:50px;
border-radius:50px;
align-items: center;
justify-content: center;
display: flex;
margin: 0px 20px;
background-color:purple;
color:white;
:active{
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}


`
const Holder=styled.div`
width: 100%;
height:100px;
border-radius:50px;
align-items: center;
justify-content: space-evenly;
display: flex;


`

const Footers=styled.div`
width:100%;
height:400px;

background-image: url("https://image.shutterstock.com/image-vector/pet-store-dog-care-animal-600w-1488581693.jpg");

background-repeat: no-repeat;
background-size: cover;
`
const Texts =styled.div`
color: white;
`
const flexer=styled.div`
width:100%;
align-Items:center;
display:flex;
flex-direction:column;

`
const Display=styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(120px,80px));
grid-template-rows: repeat(auto-fit, minmax(120px,80px));
grid-auto-rows: minmax(100px, auto);
width:80%
`

const Prodisplay=styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,110px));
  grid-gap:10px;
  background-color:white;
  width:80%;
  margin:15px;
  padding:0px;
`

export default function MainPage(){
const [loading,setLoading]=useState(false)

const[Products,setProducts]=useState([1,1,1,1,1,1,1,1])

useEffect(() =>{
    const url="https://fakestoreapi.com/products";
    try{
        fetch(url).then(res=>res.json()).then(data=>setProducts(data))
        setLoading(!loading)
      console.log(Products)
    }catch(error){
console.log(error)

    }
  
},[])



    return (
     

   
      <div>
      <section>
      
<div class="appBar">

  <Texts>GAGASALES.UG</Texts>
 
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

<section>
<flexer>
  <Display>
  

  
{[1,1,1,1,1,1,1,1,1,1,1,1,1].map(()=>(
  <div>
    <Button>
  <Options/>
</Button>
  </div>
))}

</Display>

</flexer>
</section>

<section>

<Holder>
<h2>Golden Premium Ads</h2>

<div style={{display:"flex"}}>
  <Button>
  <Pills>
<h4>Official stores</h4>
</Pills>
  </Button>
  <Pills>
<h4>Grab a store</h4>
</Pills>
<Pills>
<h4>Certified CVs</h4>
</Pills>

</div>
</Holder>
<Prodisplay>
{Products.map((item,i)=>(
 
 <div>   
    <Button>      
    <Cardcomponent/> 
  </Button>    
    </div>
  
))}
</Prodisplay>
</section>
<Footers>

</Footers>
       </div>
    )}





