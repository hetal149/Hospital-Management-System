import { Button } from '@material-ui/core';
import { TableCell } from '@mui/material';
import React from 'react'
import { ModalBody,Modal, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { PatientContext } from '../Context/PatientContext';
import Edit from './edit';


function Dashlist({row,index}) {
    const [show, setShow] = React.useState(false);
  const handleClose = () => {setShow(false)
  };

 const handleShow = () => setShow(true);
    const[delet,setDelet] = React.useState(false)
    const {deletePatient} = React.useContext(PatientContext)
    const deletePatientDetail=(patient)=>{
     
        patient.resolved = true;
        var id=patient.id
       var  name=patient.name
        var email = patient.email
        var username = patient.username
        var mobile = patient.mobile
        var disease = patient.disease
        var medicine = patient.medicine
        var resolved = patient.resolved
        var adress = patient.adress
        var dusername = patient.dusername
       
        const deletedPatient = { id,resolved, name, email, username,mobile,disease,medicine,adress,dusername }
        deletePatient(deletedPatient,id)
        setDelet(true)
    }
    const doctor= JSON.parse(localStorage.getItem('doctors'))
  return (
    <>  
   
    <TableCell>{index+1}</TableCell>  
    <TableCell
      component="th"
      scope="row"
      padding="none"
    >
      {row.name}
    </TableCell>
    <TableCell align="right">{row.email}</TableCell>
    <TableCell align="right">{row.username}</TableCell>
    <TableCell align="right">{row.adress}</TableCell>
    <TableCell align="right">{row.mobile}</TableCell>
    <TableCell align="right">{row.disease[0]} {row?.disease[1]}</TableCell>
    <TableCell align="right">{row.medicine[0]} {row?.medicine[1]} {row?.medicine[2]}</TableCell>
    <TableCell align="right">{row.dusername}</TableCell>

    <><TableCell align="right"><Button disabled={row.resolved||row.dusername!==doctor?.username} variant="outlined" color="primary" onClick={() => {
          handleShow();

        } }>Edit</Button></TableCell><Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <ModalHeader closeButton>
              <ModalTitle>
                Edit Student
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Edit patient={row} setShow={setShow} />

            </ModalBody>



          </Modal><TableCell align="right"><Button disabled={row.resolved||row.dusername!==doctor?.username} variant="outlined" color="secondary" id="delete" onClick={() => deletePatientDetail(row)} key={row.id}>Delete</Button></TableCell></></>
  )
}

export default Dashlist