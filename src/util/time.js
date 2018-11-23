import moment from 'moment-timezone';

export const abbrTimeZone = () => {
  const fullName = moment.tz.guess();
  return moment.tz(fullName).zoneAbbr();
}