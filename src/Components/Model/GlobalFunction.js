import axios from 'axios'
// Base url for backend api
var base_url = "https://test.api.amadeus.com"

// Geterating token for authentication
export async function getAccessToken() {
  const data={
      grant_type:"client_credentials",
      client_id:"U7AXs0PZYM6BnskUcXRje7EplTZjqFon",
      client_secret:"mZtIUnYAkKGbHGG5"
  }

  try {
    const response = await axios.post(`${base_url}/v1/security/oauth2/token`, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}
// End Token generation


// Get any data based on get method with authentic token
export async function generalGetFunction(url) {
  try {
    const token = await getAccessToken();
    const response = await axios.get(`${base_url}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}

// Get any data based on get method with authentic token
export async function generalPostFunction(url,post) {
  try {
    const token = await getAccessToken();
    const response =  axios.post(`${base_url}/v1${url}`,JSON.stringify(post), {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    return response;
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}
