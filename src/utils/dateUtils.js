export const getWeekStartDate = (date) => {
  //  принимаем текущую дату, возвращаем значения понедельника этой недели
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay(); // Узнаем каакой сегодня день недели
  const difference = // разница до понедельника
    dayOfWeek === 0 // если сегодня воскресенье разница будет -6
      ? -6 // for Sunday
      : 1 - dayOfWeek; // если другой день, например пятница разница 4 дня (-4)
  const monday = new Date(dateCopy.setDate(date.getDate() + difference)); // понедельник этой недели будет= текущая дата + разница дней (если пятница 5-4)
  const startDate = new Date(
    monday.getFullYear(),
    monday.getMonth(),
    monday.getDate()
  );
  return startDate; // результат возврата = прошлый понедельник, или текущий если сегодня понедельник
};

// создаем масив дат начиная с укзаного стартового дня
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
  console.log("get Date time" + withHours);
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  console.log("get Date time" + withMinutes);
  return withMinutes;
};

// формат минут в 2 знака
export const formatMins = (mins) => {
  return mins < 10 ? `0${mins}` : mins;
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

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
