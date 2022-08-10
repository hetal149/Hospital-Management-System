import { useTheme } from '@emotion/react';
import { Button, Input, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import React,{ useContext, useState} from 'react'
import {
    FormGroup,
    FormControl,
   
   
  } from "@material-ui/core";
import { PatientContext } from '../Context/PatientContext';
import {
    validEmail,
    validPassword,
    validName,
    validMobile,
    validClass,
    validUsername,
  } from "./regex/regex";
import { Form } from 'react-bootstrap';

function Edit({patient,setShow}) {
    const theme = useTheme();
    const id = patient.id
    const [name, setName] = useState(patient.name);
    const [email, setEmail] = useState(patient.email);
    const [username, setUsername] = useState(patient.username);
    const [adress, setAdress] = useState(patient.adress);
    console.log(patient.disease)
    const [disease, setDisease] = useState(patient.disease);
    const [medicine, setMedicine] = useState(patient.medicine);
    const [mobile, setMobile] = useState(patient.mobile);
    const [dusername, setdusername] = useState(patient.dusername);
    const medicine1 = ["dangue-medicine1", "dangue-medicine2", "dangue-medicine3"];
    const medicine2 = ["malaria1","malaria2", "malaria3"];
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
          
        };
      }
    const handleClose = () => {setShow(false)
    };
    const { updatePatients } = useContext(PatientContext);
    const updatePatient ={  id,name, email, username, disease,adress,mobile,medicine,dusername }
    const handleSubmit = (e) => {
      
        
        updatePatients(id,updatePatient)
    }
    const diseasesname = ["dangue", "malaria"];
    const handleChange = (event) => {
        const {
          target: { value }
        } = event;
        setDisease(
       
          typeof value === "string" ? value.split(",") : value
        );
      };
      let type = null;
 
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
  const initialIsValidValue = {
    isname: "",
    ismobile: "",
    isemail: "",
    isusername: "",
    ispassword: "",
   
    isadress: "",
  };
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
    //   setUpdatepatient({...updatePatient,[e.target.value]: e.target.value});

    } else if (e.target.value === "") {
      setIsValid({ ...isValid, [isValidKey]: "This Field is required" });

    } else {
      setIsValid({
        ...isValid,
        [isValidKey]: "Please Enter valid the details..!!",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
    <FormGroup>
        <Input
            type="text"
            placeholder="Name *"
            name="aname"
            value={name}
            onBlur={(e) => onValidate(e, validName)}
            onChange={(e) => setName(e.target.value)}
            required
        />
    </FormGroup>
    <div style={validationMessageCSS}>{isname}</div>
    <FormGroup>
        <Input
            type="text"
            placeholder="Email *"
            name="email"
            value={email}
            onBlur={(e) => onValidate(e, validEmail)}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
    </FormGroup>
    <div style={validationMessageCSS}>{isemail}</div>
    <FormGroup>
        <Input
            type="text"
            placeholder="Username"
            rows={3}
            name="username"
            value={username}
            onBlur={(e) => onValidate(e, validUsername)}
            onChange={(e) => setUsername(e.target.value)}
        />
    </FormGroup>
    <div style={validationMessageCSS}>{isusername}</div>
    <FormGroup>
        <Input
            type="text"
            placeholder="Mobile No"
            rows={3}
            name="mobile"
            value={mobile}
            onBlur={(e) => onValidate(e, validMobile)}
            onChange={(e) => setMobile(e.target.value)}
        />
    </FormGroup>
    <div style={validationMessageCSS}>{ismobile}</div>
    <FormGroup>
        <Input
            type="text"
            placeholder="adress"
            rows={3}
            name="adress"
            value={adress}
   
            onChange={(e) => setAdress(e.target.value)}
        />
     </FormGroup>
    <div style={validationMessageCSS}>{isadress}</div>
    <FormGroup>
        <Input
            type="text"
           
            rows={3}
            name="dusername"
            value={patient.dusername}
            disabled
        />
    </FormGroup>
    <FormGroup>
    
        <Select sx={{ m: 1, width: 300 }}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={disease}
          onChange={(handleChange)}
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
     
      </FormGroup>
      <FormGroup sx={{ m: 1, width: 300 }}>
      
      
        <Select 
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={medicine}
          onChange={(handleChange1)}
          input={<Input label="Name" />}
          MenuProps={MenuProps}
        >
          

          {options}
            
         
        </Select>
    
    </FormGroup>
  <br/>
    <Button  type="submit" onClick={handleClose} block color="primary"  disabled={
                 name?.length===0||
                 mobile.length===0|| disease.length===0|| medicine.length===0
                  ||adress.length===0||email?.length === 0 ||
                 username?.length ===0
                 
                }>
        Update
    </Button>
    <Button color="secondary" onClick={handleClose}>
      Close 
  </Button>
</Form>

  )
}

export default Edit