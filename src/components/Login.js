import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import loginService from '../services/loginService';

const Login = ({ startLogin }) => {
  // const roleList =[
  //   "doctor",
  //   "receptionist"
  // ]
  // const [ role, setRole ] = useState('');
  const [loginData, setLoginData] = useState({
    email:'',
    password:'',
    role:''
  });
  // const handleLogin = (event) => {
  //   event.preventDefault();
    
  //   const credentials = {
  //     loginid,
  //     password,
  //   };

  //   startLogin(credentials);

  //   localStorage.setItem('currentUser', loginid);

  //   setLoginId('');
  //   setPassword('');
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData.role);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const status = await loginService.loginStatus(loginData);
      if(status==="Success"){
        startLogin(loginData);
        localStorage.setItem('currentUser', loginData.email);
        localStorage.setItem('currentUserRole', loginData.role);
        console.log(loginData.role);
        setLoginData('');
      }
      else{
        alert("Login Failed\nEnter Correct Login ID and Password");
      }
    }
    catch(error){

    }
    

  }
 

  return (
    <div>
    <h1 className="cool-heading">Welcome To The Login Screen!</h1>
    <div className="login-container">
    <form onSubmit={handleSubmit} id="loginform" className="login-form">
    <h2>LOGIN</h2>
    <div className="form-group">
          <label htmlFor="loginid">LOGIN ID: </label>
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            placeholder="ENTER YOUR LOGIN ID"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="ENTER YOUR PASSWORD"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <label htmlFor="password">PASSWORD:</label>
        <select className="form-control" name="role" id="role" value={loginData.role} onChange={handleChange}>
            
            <option >Select Role</option>

          <option value="doctor">doctor</option>

          <option value="receptionist">receptionist</option>

          </select>
            </div>
    <br />
        <div className="form-group">
          <button className="styled-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
