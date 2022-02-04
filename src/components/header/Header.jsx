import React from "react";
import { Component } from "react/cjs/react.production.min";
import Modal from "../modal/Modal.jsx";
import { months } from "../../utils/dateUtils.js";
import { fetchEvents } from "../../gateway/events.js";
import "./header.scss";

class Header extends Component {
  state = {
    isModalActive: false,
  };

  closeModal() {
    this.setState({ isModalActive: false });
  }

  openModal() {
    this.setState({ isModalActive: true });
  }

  getDefaultTime = (date, format) => moment(date).format(format);

  render() {
    ///// Рендерим 2 месяца, если попадают в одну неделю
    const month1 = months[this.props.weekDates[0].getMonth()];
    const month2 = months[this.props.weekDates[6].getMonth()];
    const month =
      `${month1}` === `${month2}` ? `${month1}` : `${month1} - ${month2}`;

    return (
      <header className="header">
        {this.state.isModalActive && (
          <Modal
            closeModal={this.closeModal}
            handleModalClose={() => this.closeModal()}
            addEvent={this.props.addEvent}
          />
        )}

        <button
          className="button create-event-btn"
          onClick={() => this.openModal(true)}
        >
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>

        <div className="navigation">
          <button // today button
            className="navigation__today-btn button"
            onClick={() => {
              this.props.setWeekStartDate(new Date());
            }}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={() => {
              this.props.setWeekStartDate(
                this.props.getPreviousWeek(this.props.weekStartDate)
              );
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            className="icon-button navigation__nav-icon"
            onClick={() => {
              this.props.setWeekStartDate(
                this.props.getNextWeek(this.props.weekStartDate)
              );
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <span className="navigation__displayed-month">{month}</span>
          <button // today button
            className="navigation__list-btn button"
            onClick={() => {
              const resArr = async () => {
                const arrayFromFetch = await fetchEvents();
                console.log(arrayFromFetch);
              };
              resArr();
            }}
          >
            TasksListToConsole
          </button>
        </div>
      </header>
    );
  }
}

// const Header = () => {
//   return (
//     <header className="header">
//       <button className="button create-event-btn">
//         <i className="fas fa-plus create-event-btn__icon"></i>Create
//       </button>
//       <div className="navigation">
//         <button className="navigation__today-btn button">Today</button>
//         <button className="icon-button navigation__nav-icon">
//           <i className="fas fa-chevron-left"></i>
//         </button>
//         <button className="icon-button navigation__nav-icon">
//           <i className="fas fa-chevron-right"></i>
//         </button>
//         <span className="navigation__displayed-month"></span>
//       </div>
//     </header>
//   );
// };

export default Header;
