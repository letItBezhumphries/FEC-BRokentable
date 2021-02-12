import axios from "axios";
import {
  SET_ERROR,
  GET_RESTAURANT_PHOTOS,
  SET_FILTER,
  CLEAR_FILTER,
} from "./types";
import { searchRestaurantsURL, getRestaurantURL } from "../service/endpoints";

// get photos for a restaurant
export const getRestaurantPhotos = (id) => async (dispatch) => {
  try {
    const apiURL = await getRestaurantURL(id);
    const res = await axios.get(apiURL);

    const payload = {
      restaurantId: res.data.restaurantId,
      name: res.data.restaurantName,
      heroImage: res.data.heroImgSrc,
      photos: res.data.photogallery,
    };

    dispatch({
      type: GET_RESTAURANT_PHOTOS,
      payload: payload,
    });
  } catch (error) {
    if (error.response) {
      const payload = {
        errorMessage:
          error.response.data.message || error.response.data.status_message,
        errorCode: error.response.status,
      };
      dispatch({ type: SET_ERROR, payload: payload });
    }
  }
};

//get filtered list of photos for current restaurant page
export const setPhotosFilter = (subjectType) => (dispatch) => {
  try {
    if (subjectType === "All") {
      dispatch({ type: CLEAR_FILTER });
    } else {
      dispatch({ type: SET_FILTER, payload: { filterType: subjectType } });
    }
  } catch (err) {
    if (err) {
      dispatch({ type: SET_ERROR });
    }
  }
};
