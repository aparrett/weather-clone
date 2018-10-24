// Fall back to state/province name then country name.
export const cityNameShort = city => {
  let name = city.placeName;

  if (city.adminCode1) return `${name}, ${city.adminCode1}`;

  if (city.adminName1) return `${name}, ${city.adminName1}`;

  return `${name}, ${city.countryCode}`;
}

// Only display city and country code if no state/province is given.
export const cityNameLong = city => {
  let name = city.placeName;

  if (city.adminName1) return `${name}, ${city.adminName1}, ${city.countryCode}`;

  return `${name}, ${city.countryCode}`;
}