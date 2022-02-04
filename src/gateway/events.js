const baseUrl = "https://61fcda0cf62e220017ce41b8.mockapi.io/api/events";

// Запись события на сервер
export const postEventAtApi = (event) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });

// Запрос событий из сервера
export const fetchEvents = () =>
  fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res;
  });

// Удалить событие
export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't delete event");
    }
  });

// const events = [
//   {
//     id: 1,
//     title: "Go to the gym",
//     description: "some text here",
//     dateFrom: new Date(2022, 1, 2, 1, 0),
//     dateTo: new Date(2022, 1, 2, 3, 1),
//   },
//   {
//     id: 2,
//     title: "Go to the school",
//     description: "hello, 2 am",
//     dateFrom: new Date(2022, 1, 3, 10, 15),
//     dateTo: new Date(2022, 1, 3, 11, 0),
//   },
//   {
//     id: 3,
//     title: "Lunch",
//     description: "",
//     dateFrom: new Date(2022, 1, 4, 10, 30),
//     dateTo: new Date(2022, 1, 4, 11, 30),
//   },
//   {
//     id: 4,
//     title: "Meet friend",
//     description: "at the cafe",
//     dateFrom: new Date(2022, 0, 31, 0, 1),
//     dateTo: new Date(2022, 0, 31, 1, 0),
//   },
// ];

// export default events;
