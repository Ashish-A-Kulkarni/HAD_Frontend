import axios from 'axios';

// The API endpoint where login data is sent to
const requesturl = `http://localhost:9090/savedata`

const saverecords = async (medicalrecords,patient,doctor) => {
 
  const response = await axios.post(`${requesturl}?email=${doctor}&abhaid=${patient}`,medicalrecords)
  
  return response.data
}

const requesturl2 = `http://localhost:9090/exitappoinment`

const endAppointment = async (abhaid) => {
 
  const response = await axios.get(`${requesturl2}?abhaid=${abhaid}`)
  
  return response.data
}
// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { saverecords,endAppointment }
export default exportObject