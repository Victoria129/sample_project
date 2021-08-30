import React, { Component,useState } from 'react'
import "../css/Navcss.css"

class HeadernBody extends Component {
      
    state = {
    text:''
}


    search = (e) => {
             
  this.setState({text:e.target.value})
   
    }

    render() {
        
   
    return (
        
    

      

        //return statements
        
                    <div className="Logo_Header_Body">
                    <div>
                            
                    <div className="LogHeader">
                                <h1>{this.props.logo}</h1>
                        <h4>{this.props.filter}</h4>
                                        </div>
                     </div>
                
            <div className="navItems">
                <div className="inputTassker">

                
              <img src="https://img.icons8.com/material-sharp/24/000000/search.png"/>
                                             <input value={this.state.text} onChange={this.props.onSearch}   className="mainsearch" type="Search" name="Search" placeholder="Search in legal documents"></input>
                </div>
                


                <div className="filterName">
                   <button  className="bigger-btn"><img src="https://img.icons8.com/ios/50/000000/empty-filter.png"/>Add filter</button>
                      
                   </div>
                   <button className="small-btn"><img src="https://img.icons8.com/ios/50/000000/download-from-cloud--v1.png"/></button>
                    <button  className="big-btn"><img src="https://img.icons8.com/android/24/ffffff/plus.png"/> Add</button>
                </div>
                
            
            </div>

        )
    } 
}

export default HeadernBody
