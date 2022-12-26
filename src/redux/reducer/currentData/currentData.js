import { CURRENT_DATA, CURRENT_DATA_SUCCESS } from "./constants";

const defaultState = {};

const currentData = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CURRENT_DATA:
      return state;

    case CURRENT_DATA_SUCCESS:
      return {
        id: payload.id,
        title: payload.title,
        image: payload.image,
        description: payload.description,
        yearRelease: payload.yearRelease,
        isFavorite: payload.isFavorite,
      };

    default:
      return state;
  }
};

export default currentData;
