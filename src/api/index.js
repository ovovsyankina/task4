export const apiUrl = "http://localhost:3001/films";

export const getFilmsApi = () => {
  return fetch(`
    ${apiUrl}`)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const getCurrentFilmApi = (payload) => {
  return fetch(`${apiUrl}/${payload}`)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const putFilmApi = (payload) => {
  return fetch(`${apiUrl}/${payload.id}`, {
    method: "PUT",
    body: JSON.stringify(payload.dataFilm),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const postFilmApi = (payload) => {
  return fetch(`${apiUrl}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const deleteFilmApi = (payload) => {
  return fetch(`${apiUrl}/${payload}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};
export const getFilterFilmApi = (searchValue) => {
  return fetch(`${apiUrl}?search=${searchValue}`)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};
