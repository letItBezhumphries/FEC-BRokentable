import axios from "axios";
import { GET_RESTAURANTS } from '../types';
import { restaurantsURL, searchRestaurantsURL } from '../service.endpoints';

export const getRestaurants = async () => (dispatch) => {
  try {
    const url = await restaurantsURL();
    console.log('url:', url);
    const res = await axios.get(url);

    dispatchMethod(GET_RESTAURANTS, res.data, dispatch);
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
  console.log('type:', type, "payload:", payload);
  dispatch({ type, payload });
};