import { GET_RESTAURANT_PHOTOS, CLEAR_RESTAURANT } from "../actions/types";

const initialState = {
  loading: true,
  restaurantId: "",
  name: "",
  heroImage: "",
  photos: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log("in Reducer", type, payload);
  switch (type) {
    case GET_RESTAURANT_PHOTOS:
      return {
        ...state,
        restaurantId: payload.restaurantId,
        name: payload.name,
        heroImage: payload.heroImage,
        photos: payload.photos,
        loading: false,
      };
    default:
      return state;
  }
}
