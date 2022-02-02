import React from "react";
import { Component } from "react/cjs/react.production.min";
import Hour from "../hour/Hour";

import "./day.scss";

class Day extends Component {
  render() {
    const hours = Array(24)
      .fill()
      .map((val, index) => index);

    return (
      <div className="calendar__day" data-day={this.props.dataDay}>
        {hours.map((hour) => {
          //getting all events from the day we will render
          const hourEvents = this.props.dayEvents.filter(
            (event) => event.dateFrom.getHours() === hour
          );

          return (
            <Hour
              key={this.props.dataDay + hour}
              dataHour={hour}
              hourEvents={hourEvents}
              events={this.props.events}
            />
          );
        })}
      </div>
    );
  }
}

// const Day = ({ dataDay, dayEvents }) => {
//   const hours = Array(24)
//     .fill()
//     .map((val, index) => index);

//   return (
//     <div className="calendar__day" data-day={dataDay}>
//       {hours.map((hour) => {
//         //getting all events from the day we will render
//         const hourEvents = dayEvents.filter(
//           (event) => event.dateFrom.getHours() === hour
//         );

//         return (
//           <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />
//         );
//       })}
//     </div>
//   );
// };

export default Day;
