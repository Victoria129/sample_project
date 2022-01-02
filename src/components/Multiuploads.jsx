import React, { Component } from 'react';
import styled from 'styled-components'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const Wrapper=styled.div`
display:flex;
width:100%;
justify-content:space-evenly;
align-items:center;
`


class Muiltiuploads extends Component {
 
    
    fileObj = [];
    fileArray = [];
 
    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
 
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            if(i==5){
                return;
            }
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
 
    uploadFiles() {
        this.setState([null])

    }
 


    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                <Wrapper>
                 {(this.fileArray || []).map(url => (   
                     
                     
<Card variant="contaned" style={{ backgroundColor: "green", width: "200px", height: "100%" }}>
        <CardMedia
          component="img"
          height="200px"
          width="100px"
          image={url}
          alt="green iguana"
        />
      </Card> 
          ))}
                  </Wrapper> 
                </div>
 
                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Clear</button>
            </form >
        )
    }
}

export default Muiltiuploads