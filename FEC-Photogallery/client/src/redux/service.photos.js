import axios from "axios";

// returns the appropriate request url depending on current env
const getRequestURL = () => {
  let RESTAURANT_API_URL;
  if (process.env.NODE_ENV === "production") {
    RESTAURANT_API_URL = process.env.PROD_REQUEST_URL;
  } else if (process.env.NODE_ENV === "development") {
    RESTAURANT_API_URL = process.env.DEV_REQUEST_URL;
  }
  return RESTAURANT_API_URL;
};

export const restaurantImages = async (name) => {
  const url = getRequestURL();
  const res = await axios.get(`${url}/restaurant/${name}`);
  return res;
};
