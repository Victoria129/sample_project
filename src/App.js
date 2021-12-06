import './App.css';
import MainPage from './Pages/MainPage'
import styled from "styled-components"
import { orange } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
       

const Button = styled.div`
  width: 250px;
  height: 180px;
  border-radius:20px 0px 20px 0px;
  margin:50px;
  padding: 0px;
  background-color: Transparent;

`

const mainContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`







function App() {
  return (
    <Button>
    <Card sx={{ maxWidth: 100 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        width="150"
        image="https://th.bing.com/th/id/R.8e9d4f7bb468416d735e549401345879?rik=PNnYjvfaaaY5PA&pid=ImgRaw&r=0"
        alt="green iguana"
      />
      <div>
      <h5>hello there</h5>
        </div>
    </CardActionArea>
  </Card>
  
  </Button>

    
   

  );
}

export default App;
