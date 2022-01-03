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
import {Button} from "@material-ui/core";



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
:hover{
  
}
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
const Display=styled.div`
display: grid;
  grid-template-columns: repeat(6, 153px);
  grid-template-rows: repeat(3, 152px);
  justify-content:center;
  background-color:white;
  width:100%;
  margin:40px 0px 0px 0px;

`
const Prodisplay=styled.div`
display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(4, 260px);
justify-Content:center;
  background-color:Aliceblue;
  width:100%;
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
const Text =styled.div`
color: white;
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
<section>
  <Display>
    {loading ?
     

 <>    
{Products.map(()=>(
  <div>
  <Cards>
<Images src="https://assets.jiji.ug/art/attributes/categories/mobile.png" styles={{margin:"0px",height:"30px"}}/>
<h5>Mobile Phones</h5>
</Cards>
  </div>
))}
</>
:
<h2>Loading Products</h2>
}

</Display>
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
 
  <Productcard/>
  
))}
</Prodisplay>
</section>
<footer>
<Footers>
<h3>hello there</h3>
</Footers>

</footer>
       </div>
       
    )}





