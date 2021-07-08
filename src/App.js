import React, { useState } from "react";
import { Button, Card, Grid, Paper, Typography } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';
const Home = () => {
  const data = [
    {
      id: "1",
      name: "Product 1",
      Count: 0,
    },
    {
      id: "2",
      name: "Product 2",
      Count: 0,
    },

    {
      id: "3",
      name: "Product 3",
      Count: 0,
    },
    {
      id: "4",
      name: "Product 4",
      Count: 0,
    },

  ];
  const [Products, setProducts] = useState([...data]);

  const handleIncrement = (index) => {
    const newARR = [...Products];
    newARR[index].Count = newARR[index].Count + 1;

    setProducts(newARR);
  };

  const handleDecrement = (index) => {
    const newARR = [...Products];
    if (newARR[index].Count === 0) {
      return;
    } else {
      newARR[index].Count = newARR[index].Count - 1;
    }

    setProducts(newARR);
  };

  const handleDelete = (index) => {
    const deletedArr = [...Products];
    deletedArr.splice(index, 1);
    setProducts(deletedArr);
  };
  const resetHandler = () => {
    setProducts(data);
  };

  return (
    <Grid align="center" >
    <Paper style={{  backgroundColor:"#5D6D7E", height:"100vh"}}>

<div>
  <Button
          variant="contained"
          style={{ backgroundColor: "#1B2631", color: "white", margin:"20px" }}
          startIcon={<CachedIcon style={{ marginLeft: 6 , color:"#ffffff"}} />}
          onClick={resetHandler}
          >
           Reload
          </Button>
  <Typography variant="h4" style={{color: "white", marginBottom:"30px" }} >Total Products : {Products.length}</Typography>

  </div>   
    <div style={{display:"inline-block", backgroundColor:"#1B2631"}}>

        {Products.map((s, index) => (
         
            <Card style={{backgroundColor:"#AAABB8", margin:"5px"}} key={index}>
              <div >
              <h3 style={{color:"black", float:"left", marginLeft:"10px",  marginRight:"15px"}} >{s.name}: <h2 style={{color:"#0B5345" , display:'inline', margin:"0 0"}}>{s.Count}</h2></h3>{" "}
              <Button style={{ backgroundColor: "#1B2631", color: "white", margin:" 15px" }}  onClick={() => handleIncrement(index)}>+</Button>
              <Button  style={{ backgroundColor: "#1B2631", color: "white", margin:" 15px"  }}  onClick={() => handleDecrement(index)}>-</Button>
              <Button  style={{ backgroundColor: "#1B2631", color: "white", margin:" 15px" }} startIcon={<DeleteIcon style={{ marginLeft: 6 , color:"#ffffff"}} />} onClick={() => handleDelete(index)}>Remove</Button>
           </div>
            </Card>
       
        ))}
        </div>
 
    </Paper>
    </Grid>
  );
};

export default Home;
