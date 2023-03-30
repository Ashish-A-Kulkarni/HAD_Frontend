import React ,{useState} from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HealthDataForm from './components/HealthDataForm';
import Menu from './components/Menu';
import Otp from './components/Otp';

const Initial=({Init})=>{

return (
    <Router>
      <div>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/Otp">Otp</Link>
        </li>
        <li>
          <Link to="/HealthDataForm">HealthDataForm</Link>
        </li>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/Otp" element={<Otp/>} />
          <Route path="/HealthDataForm" element={<HealthDataForm/>} />
        </Routes>
      </div>
    </Router>
    
  );
}
export default Initial;