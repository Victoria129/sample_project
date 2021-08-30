import React, { Component } from 'react'
import "./lists.css"



export class Bar extends Component {
    render() {
        return (
            <div className="listedclass">
                <ul>
                    <li>
                        <span className="IDITEM">
                            <input type="checkbox" name="checkbox" ></input>
                            <h5 className="names">ID</h5>
                        </span>
                        <span>
                        <img className="fa-solid fa-sort" ></img>
                               <h4>|</h4>
                            <h5 className="fa-solid fa-sort">COMPANY NAME</h5>
                        </span>
                        <span>
                            <img className="fa-solid fa-sort" ></img>
                               <h4>|</h4>
                            <h5 className="names">CREATED AT</h5>
                        </span>
                        <span>
                            <img className="fa-solid fa-sort" ></img>
                               <h4>|</h4>
                            <h5 className="names">KBIS</h5>
                        </span>
                        <span>
                            <img className="fa-solid fa-sort" ></img>
                               <h4>|</h4>
                            <h5 className="names">STATUS</h5>
                        </span>
                        <span>
                            <img className="fa-solid fa-sort" ></img>
                            <h4>|</h4>
                            <h5 className="names">PROGRESS</h5>
                        </span>
                         <span>
                          
                        </span>
                    </li>
</ul>
           </div> 
        )
    }
}

export default Bar
