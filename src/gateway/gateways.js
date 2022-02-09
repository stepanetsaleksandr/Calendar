const baseUrl = "https://61fcda0cf62e220017ce41b8.mockapi.io/api/events";

export const updateEvents = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Internal Server Error. Can't display events");
  });

export const deleteEvent = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

export const postNewEvent = (toPost) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(toPost),
  });
