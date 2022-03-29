import axios from "axios";
export const getWheaterData = async (lat, lng) => {
  try {
    const { data } = await axios(
      "https://community-open-weather-map.p.rapidapi.com/find",
      {
        params: { lon: lng, lat: lat },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_OPENWHEATHER_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
