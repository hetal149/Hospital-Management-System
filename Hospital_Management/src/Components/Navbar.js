import React,{useState,useEffect} from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./NavStyle";
import { useHistory } from "react-router-dom";



function NavBar() {
    const history = useHistory()
    function logout(){
     
      history.push('/')
        localStorage.removeItem("doctors")
       
    }
    const user = JSON.parse(localStorage.getItem('doctors'))
    const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
         
          className={classes.heading}
          variant="h4"
          align="center"
        >
          Hospital Management System
        </Typography>

      </div>
      <Toolbar className={classes.toolbar}>

          
          <div className={classes.profile}>
           
            <Button variant="contained" className={classes.logout} onClick={logout}>Logout</Button>
          </div>
          
         
         
    
      </Toolbar>
    </AppBar>
    
  );
  
}



export default NavBar;