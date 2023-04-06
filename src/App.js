import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HealthDataForm from './components/HealthDataForm';
import Login from './components/Login';
import Menu from './components/Menu';
import PatientList from './components/PatientList';
import RegistrationForm from './components/RegistrationForm';
import Success from './components/Success';
import AlreadyRegistered from './components/AlreadyRegistered';
import Consent from './components/Consent';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px',
  fontWeight: 'bold',
}

const menuStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#300964',
}

const App = () => {
  const currentUserType = '';
  const [ user, setUser ] = useState(null)
  const navigate = useNavigate();
  // const [ notification, setNotification ] = useState(null)
  // const [ notificationType, setNotificationType ] = useState(null)
  
  // const notificationHandler = (message, type) => {
  //   setNotification(message)
  //   setNotificationType(type)

  //   setTimeout(() => {
  //     setNotificationType(null)
  //     setNotification(null)
  //   }, 3000)
  // }



  const handleLogin = async (credentials) => {
    try {
      //const userObject = await loginService.login(credentials)
      setUser(credentials)
      window.localStorage.setItem('loggedInUser', JSON.stringify(credentials))
      
      //notificationHandler(`Logged in successfully as ${credentials.email}`, 'success') 
    }
    catch (exception) {
     // notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  function DoctorElement(){
    if(localStorage.getItem('currentUserRole') === 'doctor'){
      return <><HealthDataForm/></>;
    }
    else{
      return <div>You do not have access to this page</div>;
    }
  }

  function consult(){
    return <HealthDataForm/>;
  }

  function DoctorElement1(){
    if(localStorage.getItem('currentUserRole') === 'doctor'){
      return <><Consent/></>;
    }
    else{
      return <div>You do not have access to this page</div>;
    }
  }
  function requestConsent(){
    return <Consent/>;
  }

  const handleLogout = async () => {
    setUser(null);
    navigate("/");
  }


  return (
    <div>
      {
          user === null && <Login startLogin={handleLogin}/>
      }
      {
        user!==null &&
        
        <div>
          <div style={menuStyle}>
            <div>
              <Link to="/" style={linkStyle}>Home</Link>
            </div>
            <div>
              <Link to="/RegistrationForm" style={linkStyle}>New Patient Registration</Link>
              <Link to="/HealthDataForm" style={linkStyle}>Doctor's Consultation</Link>
              <Link to="/AlreadyRegistered" style={linkStyle}>Already Registered</Link>
              <Link to="/Consent" style={linkStyle}>Request Consent</Link>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/RegistrationForm" element={<RegistrationForm/>} />
            <Route path="/AlreadyRegistered" element={<AlreadyRegistered/>} />
            <Route path="/PatientList" element={<PatientList/>} />
            <Route path="/success" element={<Success/>} />
            <Route path="/Consent" element = {<Consent/>} />
            <Route path ='/HealthDataForm' element = {<DoctorElement> <consult /> </DoctorElement>}> </Route>
            
            <Route path="*" element = {<div>Page Not Found</div>}/>
          </Routes>
        </div>
     
      }
    </div>
    
  );

//   return (
//     <div>
//       {/* <div class="card"> */}
//       <div className='text-center page-header p-2 regular-text-shadow regular-shadow' id='' role='tab'>
//           <h3 className='display-4 font-weight-bold mb-0'>
//             Health Information System
//           </h3>
//         </div>

      // <div>
      // {
      //     user === null &&
      //     <Login startLogin={handleLogin}/>
      // }
      // </div>
      // <div>
      // {
      //      user !== null && abhaid === null &&
      //     <Abha  fetch={handleabhafetch}/>
      // }
      // </div>
//       <div>
//       {
   //        abhaid !== null  &&
     //     <Otp  setOtp={handleotp}/>
//       }
//        {   p_data != null &&
//           <div style={{textAlign:'center'}}>
//             {/* <div>{p_data}</div> */}

//             <div> <b>Name :</b> {JSON.parse(p_data).name}</div>
//             <div> <b>Gender:</b> {JSON.parse(p_data).gender}</div>
//             <div> <b>yearOfBirth: </b> {JSON.parse(p_data).yearOfBirth}</div>
//             <div> <b>monthOfBirth: </b> {JSON.parse(p_data).monthOfBirth}</div>
//             <div> <b>dayOfBirth: </b> {JSON.parse(p_data).dayOfBirth}</div>
//             <div> <b>Address: </b> {JSON.stringify(JSON.parse(p_data).address)} </div>
//           </div>
//       }
      // </div>

  //   </div>  
  // );
}

export default App;
