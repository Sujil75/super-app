import axios from "axios"
const API_KEY = "dcb2a5e1d019d5fd58ff9ee190a62d48"
const uri = "https://api.openweathermap.org/data/2.5/weather";


export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => reject(error)
    );
  });
}

export async function getWeather(lat, lon) {
  try {
    const response = await axios.get(uri, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (err) {
    console.error("Weather API error:", err.message);
    return null;
  }
}