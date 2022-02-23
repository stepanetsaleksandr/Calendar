import moment from "moment";

export const getTimezone = () => {
  const offset = new Date().getTimezoneOffset();
  if (offset < 0) {
    if (-offset % 60 < 10) return `GMT+0${Math.ceil(offset / -60)}`;
  } else {
    if (offset % 60 < 10) return `GMT-0${Math.ceil(offset / 60)}`;
  }
};

export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(":");
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const getNextWeek = (weekStartDate) =>
  new Date(
    weekStartDate.getFullYear(),
    weekStartDate.getMonth(),
    weekStartDate.getDate() + 7
  );

export const getPreviousWeek = (weekStartDate) =>
  new Date(
    weekStartDate.getFullYear(),
    weekStartDate.getMonth(),
    weekStartDate.getDate() - 7
  );

export const timeFromFixed = (time) => {
  const timing = parseInt(time);
  if (timing >= 0 && timing <= 14) {
    return "00";
  } else if (timing >= 15 && timing <= 29) {
    return "15";
  } else if (timing >= 30 && timing <= 44) {
    return "30";
  } else if (timing >= 45 && timing <= 60) {
    return "45";
  }
};

export const hoursValidation = (dateTo, dateFrom) =>
  (dateTo - dateFrom) / 1000 / 60 / 60;

export const midnightValidation = (dateFrom) =>
  getHoursFunc(dateFrom) === 0 && getMinutesFunc(dateFrom) === 0;

export const dayValidation = (dateTo, dateFrom) => {
  const dateToDay = dateTo / 1000 / 60 / 60;
  const dateFromDay = dateFrom / 1000 / 60 / 60;

  if (dateToDay < dateFromDay) {
    return true;
  }
  return false;
};

export const timeValidation = (events, dateTo, dateFrom) => {
  const result = events.find(
    (event) =>
      getDateFunc(event.dateFrom) === getDateFunc(dateFrom) &&
      ((event.dateFrom < dateFrom && event.dateTo > dateFrom) ||
        (event.dateFrom < dateTo && event.dateTo > dateTo) ||
        (dateFrom < event.dateFrom &&
          dateTo > event.dateFrom &&
          dateTo > event.dateTo))
  );

  if (result) {
    return true;
  }
  return false;
};

export const getDateFunc = (date) =>
  new Date(new Date(date).toString()).getDay();

export const getHoursFunc = (date) =>
  new Date(new Date(date).toString()).getHours();
export const getMinutesFunc = (date) =>
  new Date(new Date(date).toString()).getMinutes();

export const getDefaultTime = (date, format) => moment(date).format(format);
export const currentDate = new Date();
export const formatMins = (mins) => (mins < 10 ? `0${mins}` : mins);
export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const getCurrentMonth = (monthNames, dateCopy) => {
  const dayOfWeek = dateCopy.getMonth();
  return `${monthNames[dayOfWeek]} — ${monthNames[dayOfWeek + 1]}`;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
];
