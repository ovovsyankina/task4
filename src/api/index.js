export const apiUrl = "http://localhost:3001/films";

export const getFilmsApi = (payload) => {
  return fetch(`
    ${apiUrl}${
    payload.search.length > 0
      ? `?title_like=${encodeURIComponent(payload.search)}`
      : ""
  }`)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const getFavoriteFilmsApi = (payload) => {
  return fetch(`
    ${apiUrl}${
    payload.search.length > 0
      ? `?isFavorite=true&title_like=${payload.search}`
      : payload.search.length === 0
      ? "?isFavorite=true"
      : ""
  }`)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const getFavoriteFilmsCountApi = () => {
  return fetch(`
    ${apiUrl}${`?isFavorite=true`}`)
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
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((err) => {
      throw err;
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
