import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import PatientContextProvider from './Context/PatientContext';
ReactDOM.render(
  <React.StrictMode>
    <PatientContextProvider>
        <App />
        </PatientContextProvider>
  </React.StrictMode>
,document.getElementById("root"));
reportWebVitals();
