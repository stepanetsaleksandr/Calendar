import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modal.scss";
import {
  timeFromFixed,
  getDefaultTime,
  currentDate,
} from "../../../src/utils/dateUtils.js";

const Modal = ({ handleModalClose, postNewEvent }) => {
  const [date, setDate] = useState({
    date: getDefaultTime(currentDate, "YYYY-MM-DD"),
  });
  const [timeFrom, setTimeFrom] = useState({
    timeFrom: getDefaultTime(currentDate, "HH:mm"),
  });
  const [timeTo, setTimeTo] = useState({
    timeTo: getDefaultTime(
      currentDate.setMinutes(currentDate.getMinutes() + 15),
      "HH:mm"
    ),
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Обьект данных события
  const eventDataObj = Object.assign(
    {},
    date,
    timeFrom,
    timeTo,
    title,
    description
  );

  const handleSubmitEvent = (event) => {
    const { date, timeFrom, timeTo, title, description } = eventDataObj;
    const dateFromVal = new Date(date);
    const dateFrom = new Date(
      dateFromVal.setHours(
        timeFrom.slice(0, 2),
        timeFromFixed(timeFrom.slice(3, 5)),
        0
      )
    ).getTime();

    const dateToVal = new Date(date);
    const dateTo = new Date(
      dateToVal.setHours(
        timeTo.slice(0, 2),
        timeFromFixed(timeTo.slice(3, 5)),
        0
      )
    ).getTime();

    event.preventDefault();
    postNewEvent({ dateFrom, dateTo, title, description });
    handleModalClose();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={() => handleModalClose()}
          >
            +
          </button>
          <form className="event-form" onSubmit={handleSubmitEvent}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={Object.values(title)}
              onChange={(e) => {
                const { name, value } = e.target;
                setTitle({ [name]: value });
              }}
              placeholder={"Print your title, please..."}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={Object.values(date)}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setDate({ [name]: value });
                }}
              />
              <input
                type="time"
                list="times"
                name="timeFrom"
                className="event-form__field"
                value={Object.values(timeFrom)}
                step="900"
                onChange={(e) => {
                  const { name, value } = e.target;
                  setTimeFrom({ [name]: value });
                }}
              />
              <span>-</span>
              <input
                type="time"
                list="times"
                name="timeTo"
                className="event-form__field"
                value={Object.values(timeTo)}
                step="900"
                onChange={(e) => {
                  const { name, value } = e.target;
                  setTimeTo({ [name]: value });
                }}
              />
              <datalist id="times">
                <option value="00:15">00:15</option>
                <option>04:00</option>
                <option>06:00</option>
                <option>08:00</option>
                <option>12:00</option>
                <option>18:00</option>
              </datalist>
            </div>
            <textarea
              name="description"
              placeholder={"Print your description, please..."}
              className="event-form__field"
              value={Object.values(description)}
              onChange={(e) => {
                const { name, value } = e.target;
                setDescription({ [name]: value });
              }}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  postNewEvent: PropTypes.func.isRequired,
};

export default Modal;
