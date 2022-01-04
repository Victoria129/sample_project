import React from 'react'
import styled from 'styled-components'

const Option=styled.div`
width:100px;
height:100px;
display:flex;
align-Items:center;
flex-direction:column;
border:1px solid lightgray;
padding:10px;
border-radius:10px;
filter: drop-shadow(2px 2px 2px lightgray);
drop-shadow(offset-x offset-y blur-radius color);
`
const Text=styled.h6`
font-Size:10px;
margin:3px;
color:${props=>props.color ? props.color : "white"}
font-Style:solid;
`

function Options() {
    return (
        <div>
            <Option>
                <img style={{width:"150px"}} src="https://assets.jiji.ug/art/attributes/categories/mobile.png" alt="Options selector"/>
                <Text>Mobile Phone</Text>
            </Option>
        </div>
    )
}

export default Options
