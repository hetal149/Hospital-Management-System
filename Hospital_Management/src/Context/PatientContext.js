import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //32 hexadecimal digits data display

export const PatientContext = createContext();

const PatientContextProvider = (props) => {
    const doctor = JSON.parse(localStorage.getItem('doctors'))
  const [Patients, setPatients] = useState([
    {
      id: uuidv4(),
      name: "",
      email: "",
      mobile: "",
      adress: "",
      password: "",
      username: "",
      disease: [""],
      medicine: [""],
     
    },
  ]);
 
  useEffect(() => {
    setPatients(JSON.parse(localStorage.getItem("patients")));
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(Patients));
  });

  const addPatients = (
    name,
    email,
    mobile,
    adress,
    password,
    username,
    disease,
    medicine
  ) => {
    setPatients([
      ...Patients,
      {
        id: uuidv4(),
        name,
        email,
        mobile,
        adress,
        password,
        username,
        disease,
        medicine,
        resolved: false,
        dusername:doctor.username
      },
    ]);
  };

  const deletePatient = (resolved,id) => {
      setPatients(Patients.map((Patient) => Patient.id === id ? resolved : Patient))
  }

  const updatePatients = ( id,updatePatient) => {
    console.log("hi")
      setPatients(Patients.map((Patient) => Patient.id === id ? updatePatient : Patient))
  }

  return (
    <PatientContext.Provider value={{ addPatients,deletePatient,updatePatients }}>
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientContextProvider;
