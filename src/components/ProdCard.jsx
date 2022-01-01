import * as React from "react";
import { useTheme } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const Wrapper = styled.div`
width:95%;
height:200px;
align-Items:center;
display:flex;
margin:8px;
background-color:white;
border-Radius:10px;
padding:0px;
filter: drop-shadow(0px 5px 1px lightgray);
drop-shadow(offset-x offset-y blur-radius color);
:hover{
align-Items:center;
display:flex;
padding:0px;
filter: drop-shadow(2px 5px 5px #494A4D);
drop-shadow(offset-x offset-y blur-radius color);
}
`;
const DetaiWrapper = styled.div`
height:100%;
width:100%;
background-color:white;
flex-direction:${(props) => (props.direction ? props.direction : "column")}
border-radius: 0px 0px 100px 0px;
margin:10px;
`;
const Text = styled.h1`
  font-size: ${(props) => (props.size ? props.size : "20px")};
  padding: 4px;
  color: gray;
`;
const Displaywrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
function ProdCard() {
  const theme = useTheme();
  return (
    <Wrapper>
      <Card
        variant="contaned"
        style={{ backgroundColor: "green", width: "250px", height: "100%" }}
      >
        <CardMedia
          component="img"
          height="200px"
          width="200px"
          image="https://pictures-uganda.jijistatic.com/6487905_ODEwLTEwODAtMmU3MGIyMmUxZg.webp"
          alt="green iguana"
        />
      </Card>
      <DetaiWrapper>
        <div>
          <Displaywrapper>
            <Text>Samsung Galaxy Note 8 64 GB Blue</Text>
            <Chip label={false ? "Promoted" : "Premium"} color="secondary" />
            <Chip icon={<LocationOnIcon />} label="Kampala" />
          </Displaywrapper>
          <Displaywrapper>
            <h6 color="primary">Price: UGX 25000000</h6>
            <div></div>
          </Displaywrapper>
        </div>
      </DetaiWrapper>
    </Wrapper>
  );
}
export default ProdCard;