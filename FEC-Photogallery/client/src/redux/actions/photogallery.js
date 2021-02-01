import {
  SET_ERROR,
  GET_RESTAURANT_GALLERY,
  CLEAR_RESTAURANT_GALLERY,
} from "../types";
import { restaurantImages } from "../service.photos";

export const getRestaurantPhotoGallery = (name) => async (dispatch) => {
  try {
    const res = await restaurantImages(name);
    const payload = {
      restaurantName: res.data.restaurantName,
      heroImage: res.data.heroImage,
      photos: res.data.photos,
    };
    dispatchMethod(GET_RESTAURANT_GALLERY, payload, dispatch);
  } catch (error) {
    if (error.response) {
      const payload = {
        errorMessage:
          error.response.data.message || error.response.data.status_message,
        errorCode: error.response.status,
      };
      dispatchMethod(SET_ERROR, payload, dispatch);
    }
  }
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
};
