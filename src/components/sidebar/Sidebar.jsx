import React from "react";
import { Component } from "react/cjs/react.production.min";

import "./sidebar.scss";

class Sidebar extends Component {
  render() {
    const hours = Array(24)
      .fill()
      .map((val, index) => index);

    return (
      <div className="calendar__time-scale">
        {hours.map((hour) => (
          <div key={hour} className="time-slot">
            <span className="time-slot__time">{`${hour}:00`}</span>
          </div>
        ))}
      </div>
    );
  }
}

// const Sidebar = (props) => {
//   const hours = Array(24)
//     .fill()
//     .map((val, index) => index);

//   return (
//     <div className="calendar__time-scale">
//       {hours.map((hour) => (
//         <div className="time-slot">
//           <span className="time-slot__time">{`${hour}:00`}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Sidebar;
