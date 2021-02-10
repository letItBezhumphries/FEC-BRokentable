import axios from "axios";
import { SET_ERROR, GET_RESTAURANT_PHOTOS } from "./types";
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
