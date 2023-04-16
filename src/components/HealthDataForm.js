import React, { useEffect, useState } from 'react';
import '../App.css';
import notificationHandler from '../components/Notification';
import saverecordsService from "../services/saveRecordsService";
import { useNavigate } from 'react-router-dom';
const HealthDataForm = ({ onSubmit }) => {
  const [patient, setPatient] = useState(null)
  const [curUser, setcurUser] = useState(null)
  const navigate = useNavigate();
  const [patientList, setpatientList] = useState([]);
  const [formData, setFormData] = useState({
    prescription: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      console.log(11);
      await saverecordsService.saverecords(formData, patient, curUser);
      console.log("Done");
      console.log(patient);
      await saverecordsService.endAppointment(patient);
      console.log("appointment done");
      navigate("/success");
    } catch (exception) {
      notificationHandler(`Update failed`, 'error');
    }
  };

  const handleSetPatient = (event) => {
    setPatient(event.target.value);
    console.log(patient)

  }

  useEffect(() => {
    const fetchData = async () => {
      const cur = localStorage.getItem('currentUser');
      const response = await fetch(`http://localhost:9090/listofpatient?email=${cur}`);
      const newData = await response.json();
      setcurUser(cur)
      setpatientList(newData);
    };
    fetchData();
  }, []);

  return (
    <div className="register-form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <br />
          <label className="form__label" htmlFor="Prerequisite">Select Patient ABHA ID </label>
          <select className="form-control" value={patient} onChange={handleSetPatient}>
            <option value=" ">Select ABHA ID</option>
            {patientList.map(patient => (
              <option value={patient.id} key={patient.id} > {patient.id}</option>
            ))
            }
          </select>
          <br />
          <label>
            Prescription:
            <input type="text" name="prescription" value={formData.prescription} onChange={handleChange} />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HealthDataForm;

