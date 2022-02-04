import React, { Component, useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import "./common.scss";
import { fetchEvents } from "./gateway/events.js";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate)); // дни недели, на входе текущая дата
  const [events, setEvents] = useState([]);

  // Текущая неделя
  const getCurrWeek = () => {
    setWeekStartDate(new Date());
  };

  //След неделя
  const getNextWeek = (weekStartDate) =>
    new Date(
      weekStartDate.getFullYear(),
      weekStartDate.getMonth(),
      weekStartDate.getDate() + 7
    );

  // Предыдущая неделя
  const getPreviousWeek = (weekStartDate) =>
    new Date(
      weekStartDate.getFullYear(),
      weekStartDate.getMonth(),
      weekStartDate.getDate() - 7
    );

  //загрузка событий из сервера
  const loadDataFromServer = () => {
    fetchEvents().then((data) => {
      setEvents(data);
    });
  };

  // обновление стейта даными из сервера
  useEffect(() => {
    loadDataFromServer();
  }, []);

  console.log(events);

  return (
    <>
      <Header
        weekDates={weekDates}
        weekStartDate={weekStartDate}
        setWeekStartDate={setWeekStartDate}
        getCurrWeek={getCurrWeek}
        getNextWeek={getNextWeek}
        getPreviousWeek={getPreviousWeek}
        events={events}
      />
      <Calendar weekDates={weekDates} events={events} />
    </>
  );
};

export default App;
