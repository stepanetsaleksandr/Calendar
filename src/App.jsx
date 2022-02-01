import React, { Component, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate)); // дни недели, на входе текущая дата

  return (
    <>
      <Header weekDates={weekDates} />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
