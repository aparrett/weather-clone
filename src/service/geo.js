import axios from 'axios';

const hasUniqueZipCode = (cities, city, i) => 
  cities.findIndex((cInner) => cInner.adminCode2 === city.adminCode2) === i;

const hasUniqueNameAndState = (cities, city, i) =>
  cities.findIndex((cInner) => cInner.placeName === city.placeName && cInner.adminName1 === city.adminName1) === i;

export const findCities = async city => {
  const url = 'http://api.geonames.org/postalCodeSearchJSON?username=anthonyparrett7';
  const res = await axios.get(`${url}&placename=${city}`);
  let cities = res.data.postalCodes;
  cities = cities.filter((c, i) => hasUniqueZipCode(cities, c, i) && hasUniqueNameAndState(cities, c, i));
  cities = cities.sort((a, b) => a.placeName.localeCompare(b.placeName));
  return cities.slice(0, 15);
};