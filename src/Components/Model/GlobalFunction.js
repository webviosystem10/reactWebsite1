import axios from 'axios'
// Base url for backend api
var base_url = "https://test.api.amadeus.com"
var hotel_base_url = "https://hotels4.p.rapidapi.com"
var rapidapi_key = "27d864eeebmshcafc7aaeb5d5c28p17864ajsn4959ccdaf554"
var rapidapi_host = "hotels4.p.rapidapi.com"
var map_token = "AIzaSyDeH2iXXSECIQVwio0fT6qhbc5ck8qfO7I"
var ipAddressToken = "1a8b2cddb9aef5"
var mobileApi = "https://mobileapp.theinfinitytravel.com/api"
var mobileKey = "infinitytravel@bx1m3ny7us2cjg5ea46q"
var mailApi = "https://api.theinfinitytravel.com/index.php/api/flight/sendmail"
var flightLeadApi = "https://api.theinfinitytravel.com/index.php/api/flight/lead"

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


// Getting hotel data base on get request
export async function hotelGetFunction(url) {
  try {
    const response = await axios.get(`${hotel_base_url}/${url}`, {
      headers: {
        "X-RapidAPI-Key": rapidapi_key,
        "X-RapidAPI-Host":rapidapi_host,
      },
    });
    return response.data;
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}


// Getting hotel data based on Post request
export async function hotelPostFunction(url,post) {
  try {
    const response =  axios.post(`${hotel_base_url}/${url}`,post, {
      headers: {
        'content-type': 'application/json',
        "X-RapidAPI-Key": rapidapi_key,
        "X-RapidAPI-Host":rapidapi_host,
      },
    });
    return response;
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}

// Getting address using lati. and long.
export async function getAddress(lat,lon) {
  var data = ""
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=false&key=${map_token}`)
    // console.log(response.data.plus_code.compound_code,"From map");
    return response.data["results"][0]["formatted_address"];
   
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}

// Getting user city name using ip
export async function ipLooker() {
  try {
    const response = await axios.get(`https://ipinfo.io?token=${ipAddressToken}`);
    return response.data;
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}


// Get request for mobile api
export async function mobileGetFunction(url) {
  try {
    const response = await axios.get(`${mobileApi}/${url}`, {
    });
    return response.data;
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}
// Post request for mobile api
export async function mobilePostFunction(url,post) {
  try {
    const response =  axios.post(`${mobileApi}/${url}`,post, {
    });
    return response;
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}

// Send email 
export async function sendEmail(post) {
  try {
    const response =  axios.post("https://api.theinfinitytravel.com/index.php/api/flight/sendmail",post, {
    });
    return response;
  } catch (error) {
    return "error"
    // throw error; // Re-throw the error so that the caller can also handle it if needed
  }
}

// Blog api
export async function blogApiFunction(url) {
  try {
    const response = await axios.get(`https://mobileapp.theinfinitytravel.com/index.php/api/site/${url}`,
   );
    return response.data;
  } catch (error) {
    return "error"
  }
}