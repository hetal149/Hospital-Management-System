
import React, { useState } from "react";
import { validUsername,validPassword } from './regex/regex';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

// import Typography from '@mui/material/Typography';




function SignIn() {
        
const initialValue = {
    username: "",
    password: "",
  };
  const initialIsValidValue = {
     
      isusername: '',
      ispassword: '',
  }
  
  
  
  
  const useStyles = makeStyles({
    container: {
      width: "50%",
      margin: "5% 0 0 25%"
     
    },
    label:{
      color:'#015f92',
      fontWeight:'bolder',
     
    },
    button:{
      backgroundColor:'#015f92'
    }
  });
  
    
   
    
    const [user, setUser] = useState(initialValue);
    const { username, password } = user;
  
    console.log(user)
    
  
    const [isValid, setIsValid] = useState(initialIsValidValue);
    const {  isusername,ispassword } = isValid;
    const classes = useStyles();
    const validationMessageCSS = {color:'red',marginBottom:'20px'}
   
   
    const history = useHistory();
  
    const onChangeSetState = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onValidate = (e,regEx) => {
      const RegExObj=new RegExp(regEx);
      const isValidKey='is'+e.target.name;
      
     
      if(RegExObj.test(e.target.value))
      {
          setIsValid({...isValid,[isValidKey]:''});
          setUser({...user, [e.target.name]: e.target.value});
      }
      else if(e.target.value===""){
          setIsValid({...isValid,[isValidKey]:'This Field is required'})
      }
      else{
          setIsValid({...isValid,[isValidKey]:'Please Enter valid the details..!!'});
        
      }
  }
   var flag=true;
  const validateDetailsFlag = Object.values(isValid).every(value => {
      if ((value!==null) && (value!=='')&&(username.length===0) ||( password.length===0) || (isusername.length!==0) || (ispassword.length!==0)) {
          flag=false;
      }
      return flag;
  });
  const[state,setState]= useState()
  
    const signin=async()=>{
    
  
      try {
        
        
       if(validateDetailsFlag){  
     
        
  
        if(((username=="doctor1") && (password=="doctor@123"))||((username=="doctor2") && (password=="doctor@111"))){
            localStorage.setItem('doctors',JSON.stringify({username,password}))
            // localStorage.setItem("patients","[]")
            history.push('/dash')
        }
        else{
          const data =JSON.parse(localStorage.getItem('patients'))
         
          if(data && validateDetailsFlag){
          
           flag=0
           for(var i=0;i<data.length;i++){
            if(user?.username==data[i]?.username){
                  flag=1

                  break;
               
              }
              else{
                flag=0
              }
            }
            if(flag==1){
              history.push('/home')
              
            }
          }
        }
       
       }
      } catch (error) {
        console.log(error) 
  }
    
  }

  return (
    <div>
  

    
    <FormGroup className={classes.container}>
      <Typography variant="h4" align="center" className={classes.label}>SignIn</Typography>
      <FormControl>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          onChange={(e) => onChangeSetState(e)}
          required
          name="username"
          value={username}
          onBlur={(e) => onValidate(e,validUsername)}
          inputProps={{ maxLength: 50 }}
        />
        <div style={validationMessageCSS}>{isusername}</div>
      </FormControl>

      <FormControl>
        
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          type="password"
          onChange={(e) => onChangeSetState(e)}
          required
          name="password"
          value={password}
          id="txtPassword"
          inputProps={{ maxLength: 12 }}
          onBlur={(e) => onValidate(e,validPassword)}
        />
        <div style={validationMessageCSS}>{ispassword}</div>
      </FormControl>
      <br />
      <FormControl>
        <Button
          variant="contained"
          className={classes.button}
          color="secondary"
          disabled={username.length === 0 || password.length === 0}
          onClick={signin}
        >
          SignIn 
        </Button>
      </FormControl>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
    </FormGroup>
    </div>
  );
};
 
export default SignIn