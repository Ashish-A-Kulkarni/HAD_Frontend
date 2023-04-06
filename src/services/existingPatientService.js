import axios from 'axios';

// The API endpoint where login data is sent to
const requesturl = `http://localhost:9090/exisitingpatient`

const getPatientDetails = async (abha) => {
 
  const response = await axios.get(`${requesturl}?abhaid=${abha}`)
  
  return response.data
}

const requesturl2 = `http://localhost:9090/updateexisitingpatient`

const updateDetails = async (abha,patient) => {
 
  const response = await axios.post(`${requesturl2}?abhaid=${abha}`,patient)
  
  return response.data
}

const requesturl3 = `http://localhost:9090/otp`

const demographinit = async () => {
 
  const response = await axios.post(`${requesturl3}?mode=DEMOGRAPHICS`)
  
  return response.data
}

const requesturl4 = `http://localhost:9090/confirm`

const demographconfirm = async (abha) => {
 
  const response = await axios.post(`${requesturl4}?abhaid=${abha}`)
  
  return response.data
}

// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { getPatientDetails,updateDetails,demographinit,demographconfirm }
export default exportObject