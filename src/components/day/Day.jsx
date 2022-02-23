import React from "react";
import Hour from "../hour/Hour";
import PropTypes from "prop-types";

const Day = ({
  dataDay,
  dayEvents,
  deleteEvent,
  postNewEvent,
  calendarRender,
  updateEventsApp,
  pageUpdater,
}) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.dateFrom).getHours() === hour
        );
        return (
          <Hour
            key={hour}
            dataHour={hour}
            dataDay={dataDay}
            hourEvents={hourEvents}
            deleteEvent={deleteEvent}
            postNewEvent={postNewEvent}
            calendarRender={calendarRender}
            updateEventsApp={updateEventsApp}
            pageUpdater={pageUpdater}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dayEvents: PropTypes.array.isRequired,
  dataDay: PropTypes.number.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

Day.defaultProps = {
  dayEvents: [],
};

export default Day;
