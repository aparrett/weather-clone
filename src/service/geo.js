import axios from 'axios';

export const findCities = async city => {
  const url = 'http://api.geonames.org/postalCodeSearchJSON?username=anthonyparrett7';
  const res = await axios.get(`${url}&placename=${city}`);
  let cities = res.data.postalCodes;
  
  // Filter duplicates. Result set returns duplicates for each zip code of a city.
  cities = cities.filter((c, i) => cities.findIndex((cInner) => cInner.adminCode2 === c.adminCode2) === i);

  // If search term is more than one word, theres no need to exclude the county results.
  if (city.split(' ').length === 1 && city.search(',') === -1) {
    // Exclude the county results.
    cities = cities.filter(c => c.placeName.toLowerCase().search(city.toLowerCase()) !== -1 || c.postalCode.search(city) !== -1);
  }

  return cities;
}