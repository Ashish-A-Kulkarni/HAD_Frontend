import axios from 'axios';

// The API endpoint where login data is sent to
const requesturl = `http://localhost:9090/confirmotp`

const setOtp = async (authcode) => {
 
  const response = await axios.post(`${requesturl}?authcode=${authcode}`)
  
  return response.data
}

const requesturl1 = `http://localhost:9090/getpatientdata`

const getdata = async () => {
 
  const response = await axios.get(`${requesturl1}`)
  
  return response.data
}

const requesturl2 = `http://localhost:9090/savepatient`

const savePatient = async (patient,doctor) => {
  
  console.log(patient);
  console.log(doctor);
  const response = await axios.post(`${requesturl2}?doctorid=${doctor}`,patient)
  
  return response
}

// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { setOtp ,getdata,savePatient}
export default exportObject