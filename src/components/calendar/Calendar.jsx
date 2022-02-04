import React, { Component, useState } from "react";
import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";

import "./calendar.scss";

class Calendar extends Component {
  render() {
    const { weekDates } = this.props;

    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={this.props.events} />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
