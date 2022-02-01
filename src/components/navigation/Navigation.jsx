import React from "react";
import { Component } from "react/cjs/react.production.min";

import { days } from "../../utils/dateUtils.js";

class Navigation extends Component {
  render() {
    const today = new Date(); // today

    return (
      <header className="calendar__header">
        {this.props.weekDates.map((dayDate) => (
          <div key={dayDate.getDay()} className="calendar__day-label day-label">
            <span // рисуем день недели
              className={
                dayDate.getDate() === today.getDate()
                  ? "day-label__day-name day-label__day-name-today" // сегодня рисуем с особыми стилями
                  : "day-label__day-name"
              }
            >
              {days[dayDate.getDay()]}
            </span>
            <span // рисуем число недели
              className={
                dayDate.getDate() === today.getDate()
                  ? "day-label__day-number day-label__day-number-today" // сегодня рисуем с особыми стилями
                  : "day-label__day-number"
              }
            >
              {dayDate.getDate()}
            </span>
          </div>
        ))}
      </header>
    );
  }
}

// const Navigation = (props) => {
//   return (
//     <header className="calendar__header">
//       {props.weekDates.map(
//         (
//           dayDate //мепинг масива дат текущей недели, каждый день отрисовываем
//         ) => (
//           <div className="calendar__day-label day-label">
//             <span className="day-label__day-name">
//               {days[dayDate.getDay()]}
//             </span>
//             <span className="day-label__day-number">{dayDate.getDate()}</span>
//           </div>
//         )
//       )}
//     </header>
//   );
// };

export default Navigation;
