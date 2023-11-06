import axios from 'axios'
import { CONSTANTS } from '../app.config'

const getApi = async () => {
  try {
    const response = await axios.get(CONSTANTS.API_BASE_URL);
    console.log('data in api', response.data); 

    return response.data; 
  } catch (err) {
    console.log("error", err); 
    throw err;
  }
}

export default getApi;
