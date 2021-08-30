
import React, { Component } from 'react'
import HeadernBody from "./HeadernBody"

import "../css/fullheader.css"

    export class NavBar extends Component {
      
     // All stored  in states which can be set using the setState( ) method
        state = {
            Directory: "Legal Docs Review",
            Filter:"All",
            header:[{}]
        }

        render() {
            const { Directory, Filter } = this.state;
        
            return (
       
                    <div ClassName="navElement">

                   
                    <HeadernBody logo={Directory} filter={Filter} />
                        
                    </div>
                    
             
        
        )
    }
    }





    export default NavBar
