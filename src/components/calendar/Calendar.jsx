import React, { useState } from "react";
import PropTypes from "prop-types";
import { getTimezone } from "../../utils/dateUtils";
import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";

import "./calendar.scss";

const Calendar = ({
  events,
  weekDates,
  deleteEvent,
  postNewEvent,
  updateEventsApp,
  pageUpdater,
}) => {
  const [calendarRender, setRender] = useState(false);

  return calendarRender || !calendarRender ? (
    <section className="calendar">
      <Navigation weekDates={weekDates} />

      <div className="calendar__offset">
        <span className="calendar__offset-text">{getTimezone()}</span>
        <div className="calendar__offset-line"></div>
      </div>

      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            deleteEvent={deleteEvent}
            postNewEvent={postNewEvent}
            calendarRender={() => setRender()}
            updateEventsApp={updateEventsApp}
            pageUpdater={pageUpdater}
          />
        </div>
      </div>
    </section>
  ) : null;
};

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
  weekDates: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Calendar;
