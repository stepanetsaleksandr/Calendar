import React from "react";
import { Component } from "react/cjs/react.production.min";

import "./event.scss";

class Event extends Component {
  render() {
    // const eventStyle = {
    //   this.props.height,
    //   this.props.marginTop,
    // };

    return (
      <div style={(this.props.height, this.props.marginTop)} className="event">
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    );
  }
}

// const Event = ({ height, marginTop, title, time }) => {
//   const eventStyle = {
//     height,
//     marginTop,
//   };

//   return (
//     <div style={eventStyle} className="event">
//       <div className="event__title">{title}</div>
//       <div className="event__time">{time}</div>
//     </div>
//   );
// };

export default Event;
