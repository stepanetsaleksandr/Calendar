import React, { Component, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import {
  getWeekStartDate,
  generateWeekRange,
  getNextWeek,
  getPreviousWeek,
} from "../src/utils/dateUtils.js";
import events from "./gateway/events.js";
import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate)); // дни недели, на входе текущая дата

  // Текущая неделя
  const getCurrWeek = () => {
    setWeekStartDate(new Date());
  };

  const getNextWeek = (weekStartDate) =>
    new Date(
      weekStartDate.getFullYear(),
      weekStartDate.getMonth(),
      weekStartDate.getDate() + 7
    );

  const getPreviousWeek = (weekStartDate) =>
    new Date(
      weekStartDate.getFullYear(),
      weekStartDate.getMonth(),
      weekStartDate.getDate() - 7
    );
  return (
    <>
      <Header
        weekDates={weekDates}
        weekStartDate={weekStartDate}
        setWeekStartDate={setWeekStartDate}
        getCurrWeek={getCurrWeek}
        getNextWeek={getNextWeek}
        getPreviousWeek={getPreviousWeek}
      />
      <Calendar weekDates={weekDates} events={events} />
    </>
  );
};

export default App;
