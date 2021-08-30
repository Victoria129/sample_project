import React, { Component } from 'react'
import "./style.css"

export class BarItem extends Component {
    render() {


        [this.ID,]=this.props.user
        return (
           
            this.props.user.map(user =>
       
            <div className="topApp">
                 <div className="fullist">
                <ul>
                    <li>
                        <span className="IDITEM">
                         ,<input type="checkbox" name="checkbox"/>
                                <h5 className="names">{ user.ID}</h5>
                        </span>
                        <span>
                       <img src="https://img.icons8.com/material-rounded/24/000000/sort.png"/>
                               <h4>|</h4>
                            <h5 >{ user.cn}</h5>
                        </span>
                        <span>
                            <img src="https://img.icons8.com/material-rounded/24/000000/sort.png"/>
                               <h4>|</h4>
                            <h5 className="names">{ user.creation}</h5>
                        </span>
                        <span>
                            <img src="https://img.icons8.com/material-rounded/24/000000/sort.png"/>
                               <h4>| </h4>
                            <h5 className="names">{ user.KB}</h5>
                        </span>
                        <span>
                          <img src="https://img.icons8.com/material-rounded/24/000000/sort.png"/>
                               <h4>| </h4>
                            <h5 className="names"> { user.STAT}</h5>
                        </span>
                        <span>
                            <img src="https://img.icons8.com/material-rounded/24/000000/sort.png"/>
                            <h4>| </h4>
                            <h5 className="names"> { user.PROG}</h5>
                        </span>
                         <span>
                          
                        </span>
                    </li>
                            </ul>
                            
 </div>
</div>
       )
             
        )
    }
}

export default BarItem
