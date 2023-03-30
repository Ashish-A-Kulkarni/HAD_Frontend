import axios from 'axios';

// The API endpoint where login data is sent to
const requesturl = `http://localhost:9090/otp`

const selectmode = async (mode) => {
 
  const response = await axios.post(`${requesturl}?mode=${mode}`)
  
  return response
}
// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { selectmode }
export default exportObject