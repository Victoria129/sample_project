import React, { Component } from 'react'
import "./topbarstyles.css"

export class TopBar extends Component {
    render() {
        return (
            <div className="headerItem">
                <h2>Customers</h2>
                <input type="search" name="search" />
                <div className="filter">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/sorting-answers.png" />
                    <h3>Filter</h3>
                </div>
            </div>
        )
    }
}

export default TopBar
