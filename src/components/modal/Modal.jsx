import React, { Component, useState, useEffect } from "react";
import { postEventAtApi } from "../../gateway/events";
import "./modal.scss";

const Modal = ({ handleModalClose }) => {
  // state = { title: "", date: "", dateFrom: "", dateTo: "", description: "" };
  const [task, setTask] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  // Запись в стейт при вводе в поля
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ [name]: value });
  };

  // отправка формы
  const handleSubmit = (event) => {
    this.state.title;

    postEventAtApi(event);
    event.preventDefault();
  };

  // handleSubmit = (event) => {
  //   this.props.addEvent(this.state);
  //   postEventAtApi(this.state).then(this.props.handleModalClose);
  //   console.log(this.state);
  //   event.preventDefault();
  // };

  console.log(task);
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={handleModalClose}
          >
            +
          </button>

          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={task.title}
              onChange={handleChange}
            />

            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={task.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="dateFrom"
                className="event-form__field"
                value={task.dateFrom}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="dateTo"
                className="event-form__field"
                value={task.dateTo}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={task.description}
              onChange={handleChange}
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

export default Modal;
