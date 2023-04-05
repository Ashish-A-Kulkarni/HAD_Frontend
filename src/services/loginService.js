import axios from 'axios';

// The API endpoint where login data is sent to

const requesturl = `http://localhost:9090/login`

const loginStatus = async (login) => {
 console.log(login);
  const response = await axios.post(requesturl,login)
  
  return response.data
}

// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { loginStatus }
export default exportObject