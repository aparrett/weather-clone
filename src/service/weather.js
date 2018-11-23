import axios from 'axios';

const URL = process.env.NODE_ENV === 'development' 
  ? 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/38b915e2a7da1df8ce32f386a8a59172' 
  : 'https://api.darksky.net/forecast/38b915e2a7da1df8ce32f386a8a59172';

export const getWeather = async (latitude, longitude) => {
  const res = await axios.get(`${URL}/${latitude},${longitude}`);
  return res.data;
}