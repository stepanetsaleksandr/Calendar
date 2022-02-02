import React from "react";
import events from "../../gateway/events";
import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";
import { Component } from "react/cjs/react.production.min";

class Hour extends Component {
  render() {
    return (
      <div className="calendar__time-slot" data-time={this.props.dataHour + 1}>
        {/* if no events in the current hour nothing will render here */}
        {this.props.hourEvents.map(({ id, dateFrom, dateTo, title }) => {
          const eventStart = `${dateFrom.getHours()}:${formatMins(
            dateFrom.getMinutes()
          )}`;
          const eventEnd = `${dateTo.getHours()}:${formatMins(
            dateTo.getMinutes()
          )}`;

          return (
            <Event
              key={id}
              //calculating event height = duration of event in minutes
              height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
              marginTop={dateFrom.getMinutes()}
              time={`${eventStart} - ${eventEnd}`}
              title={title}
            />
          );
        })}
      </div>
    );
  }
}

// const Hour = ({ dataHour, hourEvents }) => {
//   return (
//     <div className="calendar__time-slot" data-time={dataHour + 1}>
//       {/* if no events in the current hour nothing will render here */}
//       {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
//         const eventStart = `${dateFrom.getHours()}:${formatMins(
//           dateFrom.getMinutes()
//         )}`;
//         const eventEnd = `${dateTo.getHours()}:${formatMins(
//           dateTo.getMinutes()
//         )}`;

//         return (
//           <Event
//             key={id}
//             //calculating event height = duration of event in minutes
//             height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
//             marginTop={dateFrom.getMinutes()}
//             time={`${eventStart} - ${eventEnd}`}
//             title={title}
//           />
//         );
//       })}
//     </div>
//   );
// };

export default Hour;
