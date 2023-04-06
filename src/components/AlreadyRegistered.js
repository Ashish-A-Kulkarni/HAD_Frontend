import React, { useEffect,useState } from 'react';
import Abha from '../components/Abha';
import notificationHandler from '../components/Notification';
import existingPatientService from '../services/existingPatientService';
import { useNavigate } from 'react-router-dom';
const AlreadyRegistered = ({ onSubmit, onCancel }) => {
  const [abhaid ,setAbha] = useState(null)
  const navigate = useNavigate();
  const [ doctor, setDoctor] = useState('');
  const [ doctorsList, setdoctorsList] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    gender: '',
    year: '',
    month:'',
    day:'',
    mobile : '',
    state: '',
    district: ''
  });

  useEffect(() =>{
    const fetchData = async ()=>{
        const response = await fetch(`http://localhost:9090/getdoctors`);
        const newData = await response.json();
        setdoctorsList(newData);
        console.log("Doctor List Saved")
    };
    fetchData();
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event)=>{ 
    event.preventDefault();
    try {
      console.log(formData); 
      console.log(11);
      await existingPatientService.updateDetails(abhaid,formData);

      const item2 = await existingPatientService.demographconfirm(abhaid);
      await item2;
      console.log(item2);

      console.log("Done");
      navigate("/success");
    } catch (exception) {
      notificationHandler(`Update failed`, 'error');
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
  };


  const handleabhafetch = async (id) =>{
    try{
      setAbha(id);
      notificationHandler(`Organisation updated successfully response`, 'success');
    }
    catch (exception) {
      notificationHandler(`Update failed`, 'error');
    }
  };

  const handleSetDoctor = (event) => {
    setDoctor(event.target.value);
    console.log(doctor)
  
  }

  const handleClick = async(event) => {
    event.preventDefault();
      const item = await existingPatientService.getPatientDetails(abhaid);
      await item;
      console.log(item);
      const t=JSON.stringify(item);
      console.log(t);

      setFormData({
        id: JSON.parse(t).id,
        name: JSON.parse(t).name,
        gender: JSON.parse(t).gender,
        // dob: `${String(JSON.parse(t).yearOfBirth)}-${String(JSON.parse(t).monthOfBirth).padStart(2, "0")}-${String(JSON.parse(t).dayOfBirth).padStart(2, "0")}`,
        year:JSON.parse(t).year,
        month:JSON.parse(t).month,
        day:JSON.parse(t).day,
        mobile: JSON.parse(t).mobile,
        state: JSON.parse(t).state,
        district: JSON.parse(t).district
      });
    
      const item1 = await existingPatientService.demographinit();
      await item1;
      console.log(item1);

      console.log("init done");
  };

  return (
    <div className="register-container">
    <div>
    {
         abhaid === null &&
        <Abha  fetch={handleabhafetch}/>
    }
    </div>
    <div>
    {
          abhaid !== null  &&
          <div>
            <button class="styled-button" onClick={handleClick}>Refresh!</button>
          </div>
          
    }
    </div>
    
  <div className="form-container">
  <form onSubmit={handleSubmit}>
    <label>
      Health ID:
      <input type="text" name="id" value={formData.id} onChange={handleChange} />
    </label>
    <br />
    <label>
      Name:
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
    </label>
    <br />
    <label>
      Gender:
      <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
    </label>
    <br />
    {/* <label>
      DOB:
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
    </label>
    <br /> */}
     <label>
      Year Of Birth:
      <input type="text" name="year" value={formData.year} onChange={handleChange} />
    </label>
    <br />
    <label>
      Month Of Birth:
      <input type="text" name="month" value={formData.month} onChange={handleChange} />
    </label>
    <br />
    <label>
      Day Of Birth:
      <input type="text" name="day" value={formData.day} onChange={handleChange} />
    </label>
    <br />
    <label>
      Mobile:
      <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
    </label>
    <br />
    <label>
      State:
      <input type="text" name="state" value={formData.state} onChange={handleChange} />
    </label>
    <br />
    <label>
      District:
      <input type="text" name="district" value={formData.district} onChange={handleChange} />
    </label>
    <br />
    <label className="form__label" htmlFor="Prerequisite">Doctors </label>
            <select className="form-control" value={doctor} onChange={handleSetDoctor}>
                    <option value="">Select doctor</option>
                      {doctorsList.map(doctor => (
                          <option value={doctor.id} key={doctor.id} > {doctor.email}</option>
                            ))
                       } 
            </select>  
    <br />
    <div className="button-container">
      <button type="submit">Register</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  </form>
</div>
</div>
  );
};

export default AlreadyRegistered;
