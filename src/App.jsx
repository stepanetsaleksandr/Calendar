import React, { Component, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import {
  getWeekStartDate,
  generateWeekRange,
  getNextWeek,
  getPreviousWeek,
} from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate)); // дни недели, на входе текущая дата

  // Текущая неделя
  const getCurrWeek = () => {
    setWeekStartDate(new Date());
  };

  return (
    <>
      <Header weekDates={weekDates} getCurrWeek={getCurrWeek} />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
