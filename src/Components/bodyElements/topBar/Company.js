import React, { Component } from 'react'

export class Company extends Component {

    state = {
        status: 1,
        KBIS:0
    }
    render() {
        return (
            
               
            <div>
                <ul>
                    <li className="Col-ID">
                        <input type="checkbox" name="checkbox" checked={this.checked}/>
                        <h3>ID</h3>
        
                    </li>

                    <li className="Col-COMP-NAME">
                       
                        <h3>Company Name</h3>
        
                    </li>
                    <li className="Col-DATE">
                       
                        <h3>creates At</h3>
                       
                        
                    </li>
                    <li className="Col-EQUATE">
                     
                        <h3>KBIS</h3>
                       
                      
                        
                    </li>
                    <li className="Col-EQUATE">
                       
                        <h3>Status</h3>
                       
                        
                    </li>
                    <li className="Col-PROGRESS">
                        <input type="checkbox" name="checkbox" checked={this.checked}/>
                        <h3>Progress</h3>
        
                    </li>
                </ul>
            </div>
        ) 
           
        
    }
}


export default Company
