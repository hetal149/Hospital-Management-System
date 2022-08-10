import React, { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";
import {
  validEmail,
  validPassword,
  validName,
  validMobile,
  validClass,
  validUsername,
} from "./regex/regex";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  MenuItem,
  Select,

  useTheme,

} from "@material-ui/core";
import Button from "react-bootstrap/Button";
import { Redirect, useHistory } from "react-router-dom";

import { useContext } from "react";
import { PatientContext } from "../Context/PatientContext";

import NavBar from "./Navbar";
import Dashboard from "./Dashboard";
import { Form } from "react-bootstrap";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, diseasesname, theme) {
    return {
      fontWeight:
      diseasesname.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }
  
export default function AddPatient() {
  const [show, setShow] = useState(false);
  const user1 = JSON.parse(localStorage.getItem('doctors'))
  const initialValue = {
    name: "",
    email: "",
    mobile: "",
    adress: "",
    password:"",
    username:"",
    
   
  
  };

  useEffect(() => {
    if(!user1) {
      history.push('/')
    }
   
  }, [])
  
  const medicine1 = ["dangue-medicine1", "dangue-medicine2", "dangue-medicine3"];
const medicine2 = ["malaria1", "malaria2", "malaria3"];
const diseasesname = ["dangue", "malaria"];
  const theme = useTheme();
  let [disease, setDisease] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setDisease(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const initialIsValidValue = {
    isname: "",
    ismobile: "",
    isemail: "",
    isusername: "",
    ispassword: "",
   
    isadress: "",
  };
  const [user, setUser] = useState(initialValue);
  const { name, email, username,password,adress,mobile } = user;

const [medicine, setMedicine] = React.useState([]);
let type = null;
  
  /** This will be used to create set of options that user will see */
  let options = null;
if (disease == "dangue") {
    type = medicine1;
  } else if (disease == "malaria") {
    type = medicine2;
  } else {
    type = medicine1.concat(medicine2)
  }
    
  if (type) {
    options = type.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>);
  }
const handleChange1 = (event) => {
  const {
    target: { value }
  } = event;
  setMedicine(
    // On autofill we get a the stringified value.
    typeof value === "string" ? value.split(",") : value
  );
};
  const history = useHistory();
  const [isValid, setIsValid] = useState(initialIsValidValue);
  const { isname,
  ismobile,
  isemail,
  isusername,
  ispassword,
  
  isadress } = isValid;

  const validationMessageCSS = { color: "red", marginBottom: "20px" };


 
  const onValidate = (e, regEx) => {
    const RegExObj = new RegExp(regEx);
    const isValidKey = "is" + e.target.name;

    if (RegExObj.test(e.target.value)) {
      setIsValid({ ...isValid, [isValidKey]: "" });
      setUser({ ...user, [e.target.name]: e.target.value });

    } else if (e.target.value === "") {
      setIsValid({ ...isValid, [isValidKey]: "This Field is required" });

    } else {
      setIsValid({
        ...isValid,
        [isValidKey]: "Please Enter valid the details..!!",
      });
    }
  };

  var flag = true;
 
  const onChangeSetState = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const {addPatients} = useContext(PatientContext)
  const resetform = (e) => {
    setUser({
        isname: "",
        ismobile: "",
        isemail: "",
        isusername: "",
        ispassword: "",
       
        isadress: "",
    });
  };

  // useEffect(() => {
  //   add()
  // }, [])
  
// console.log(Medicine)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const add = () => {
    try {
      
        addPatients(name,
            email,
            mobile ,
            adress ,
            password,
            username,
            disease,
            medicine);
      alert("Add successfully");
      handleClose();
   
      resetform();
    } catch (error) {
      console.log(error)
    }}



  return (
    <>
    <NavBar/>
      

      <Modal show={show} onHide={handleClose}  backdrop="static"  keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form onSubmit={add}>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                onChange={(e) => onChangeSetState(e)}
                required
                name="name"
                value={name}
                onBlur={(e) => onValidate(e, validName)}
                inputProps={{ maxLength: 50 }}
                isRequired
              />
              <div style={validationMessageCSS}>{isname}</div>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="name">Username</InputLabel>
              <Input
                onChange={(e) => onChangeSetState(e)}
                required
                name="username"
                value={username}
                onBlur={(e) => onValidate(e, validUsername)}
                inputProps={{ maxLength: 50 }}
                isRequired
              />
              <div style={validationMessageCSS}>{isusername}</div>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="name">Password</InputLabel>
              <Input
                onChange={(e) => onChangeSetState(e)}
                required
                name="password"
                value={password}
                onBlur={(e) => onValidate(e, validPassword)}
                inputProps={{ maxLength: 50 }}
                isRequired
              />
              <div style={validationMessageCSS}>{ispassword}</div>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email">email</InputLabel>
              <Input
                type="text"
                onChange={(e) => onChangeSetState(e)}
                required
                name="email"
                value={email}
                onBlur={(e) => onValidate(e, validEmail)}
                inputProps={{ maxLength: 12 }}
                isRequired
              />
              <div style={validationMessageCSS}>{isemail}</div>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="adress">Adress</InputLabel>
              <Input
                type="text"
                onChange={(e) => onChangeSetState(e)}
                required
                name="adress"
                value={adress}
              
                isRequired
              />
              <div style={validationMessageCSS}>{isadress}</div>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="class">mobile</InputLabel>
              <Input
                type="text"
                onChange={(e) => onChangeSetState(e)}
                required
                name="mobile"
                pattern="^[0-9]"
                value={mobile}
                onBlur={(e) => onValidate(e, validMobile)}
                inputProps={{ maxLength: 10 }}
                isRequired
              />
              <div style={validationMessageCSS}>{ismobile}</div>
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Disease</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={disease}
          onChange={handleChange}
          input={<Input label="Name" />}
          MenuProps={MenuProps}
        >
          {diseasesname.map((diseasename) => (
            <MenuItem
              key={diseasename}
              value={diseasename}
              style={getStyles(diseasename, disease, theme)}
            >
              {diseasename}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Medicine</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={medicine}
          onChange={handleChange1}
          input={<Input label="Name" />}
          MenuProps={MenuProps}
        >
          {/* {medicine1.map((m1) => (
            <MenuItem
              key={m1}
              value={m1}
              style={getStyles(m1, Medicine, theme)}
            >
              {m1}
            </MenuItem>
          ))} */}

          {options}
            
         
        </Select>
      </FormControl>
      <br/>
            <FormControl>
              <Button
              type="submit"
                variant="contained"
                color="secondary"
                disabled={
                 name?.length===0||
                 mobile?.length===0|| password?.length===0|| disease?.length===0|| medicine?.length===0
                  ||adress?.length===0||email?.length === 0 ||
                 username?.length ===0
                 
                }
                
              >
                Add Patient
              </Button>
            </FormControl>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
      <Dashboard handleFunction={handleShow}/>
    </>
  );
}
