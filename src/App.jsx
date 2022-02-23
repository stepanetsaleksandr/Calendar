import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import {
  getWeekStartDate,
  generateWeekRange,
  getNextWeek,
  getPreviousWeek,
  timeValidation,
  dayValidation,
  hoursValidation,
  midnightValidation,
} from "../src/utils/dateUtils.js";
import {
  fetchEvents,
  deleteEvent,
  postNewEvent,
} from "../src/gateway/gateways.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [events, setEvents] = useState([]);

  const updateEventsApp = () =>
    fetchEvents().then((json) =>
      json.map((event) => {
        setEvents((result) => [...result, event]);
      })
    );

  const pageUpdater = () => {
    setEvents([]);
    updateEventsApp();
  };

  const deleteEventFromApp = (id) => {
    deleteEvent(id);
  };

  const postNewEventInApp = ({ dateFrom, dateTo, title, description }) => {
    const eventToPost = {
      dateFrom: dateFrom,
      dateTo: dateTo,
      title: title,
      description: description,
    };

    switch (true) {
      case timeValidation(events, dateTo, dateFrom):
        alert(`Sorry, we can't shedule two events in one time!`);
        break;
      case hoursValidation(dateTo, dateFrom) > 6:
        alert(`Sorry, event's longer than 6 hours are not allowed!`);
        break;
      case dayValidation(dateTo, dateFrom):
        alert(`Sorry, each event should starts and ends in one day!`);
        break;
      case midnightValidation(dateFrom):
        alert(`You can't start at 00:00! Try 00:15`);
        break;
      default: {
        setEvents([...events, eventToPost]);
        postNewEvent(eventToPost);
      }
    }
  };

  useEffect(() => pageUpdater(), []);

  const getNextWeekInApp = () => {
    setWeekStartDate(getNextWeek(weekStartDate));
  };

  const getPreviousWeekInApp = () => {
    setWeekStartDate(getPreviousWeek(weekStartDate));
  };

  const getCurrentWeekInApp = () => {
    setWeekStartDate(new Date());
    // updateEventsApp();
  };

  return (
    <>
      <Header
        getNextWeek={getNextWeekInApp}
        getPreviousWeek={getPreviousWeekInApp}
        getCurrentWeek={getCurrentWeekInApp}
        postNewEvent={postNewEventInApp}
        weekStartDate={weekStartDate}
        updateEventsApp={updateEventsApp}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        deleteEvent={deleteEventFromApp}
        postNewEvent={postNewEventInApp}
        updateEventsApp={updateEventsApp}
        pageUpdater={pageUpdater}
      />
    </>
  );
};

export default App;
