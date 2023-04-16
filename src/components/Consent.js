import React, { useEffect, useState } from 'react';
import '../App.css';
import notificationHandler from '../components/Notification';
import saverecordsService from "../services/saveRecordsService";
import consentrequest from "../services/consentService";
import { useNavigate } from 'react-router-dom';
const HealthDataForm = ({ onSubmit }) => {
  const [patient, setPatient] = useState(null)
  const [curUser, setcurUser] = useState(null)
  const navigate = useNavigate();
  const [patientList, setpatientList] = useState([]);
  const [formData, setFormData] = useState({
    abhaid: '',
    dateFrom: '',
    dateTo: '',
    expirayDate: '',
    purpose: ''
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
      await consentrequest.requestConsent(formData);
      console.log("Done");
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
          <label>
            PatientId:
            <input type="text" name="abhaid" value={formData.abhaid} onChange={handleChange} />
          </label>
          <br />
          <label>
            dateFrom:
            <input type="text" name="dateFrom" value={formData.dateFrom} onChange={handleChange} />
          </label>
          <br />
          <label>
            dateTo:
            <input type="text" name="dateTo" value={formData.dateTo} onChange={handleChange} />
          </label>
          <br />
          <label>
            expirayDate:
            <input type="text" name="expirayDate" value={formData.expirayDate} onChange={handleChange} />
          </label>
          <br />
          <label>
            Purpose:
            <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HealthDataForm;

