
import './App.css';
import SignIn from './Components/SignIn';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import AddPatient from './Components/AddPatient';
import PatientDash from './Components/patientDash';

function App() {
  const doctor = JSON.parse(localStorage.getItem('doctors'))
  const patient = JSON.parse(localStorage.getItem('patientInfo'))
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
{/*         
<Route
  exact
  path="/"
  render={() => (doctor ? <Redirect to="/dash" />  : <SignIn/>)}
/>;
<Route
  exact
  path="/"
  render={() => (patient ? <Redirect to="/home" /> : <SignIn />)}
/>; */}
  
        <Route path={"/"} exact component={SignIn}></Route>
        <Route path={"/dash"} component={AddPatient}></Route>
        <Route path={"/home"} component={PatientDash}></Route>
        {/* <Route exact path={"/edit/:id"} component={EditUser} /> */}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
