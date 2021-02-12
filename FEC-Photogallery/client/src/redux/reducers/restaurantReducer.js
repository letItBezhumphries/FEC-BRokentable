import {
  GET_RESTAURANT_PHOTOS,
  SET_FILTER,
  CLEAR_FILTER,
} from "../actions/types";

const initialState = {
  loading: true,
  restaurantId: "",
  name: "",
  heroImage: "",
  photos: [],
  filterType: "",
  galleryPhotos: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RESTAURANT_PHOTOS:
      return {
        ...state,
        restaurantId: payload.restaurantId,
        name: payload.name,
        heroImage: payload.heroImage,
        photos: payload.photos,
        loading: false,
        filterType: "All",
        galleryPhotos: payload.photos.slice(0, 9),
      };
    case SET_FILTER:
      return {
        ...state,
        loading: false,
        filterType: payload.filterType,
        galleryPhotos: state.photos.filter(
          (photo) => photo.subjectType === payload.filterType
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        loading: false,
        filterType: "All",
        galleryPhotos: state.photos.slice(0, 9),
      };
    default:
      return state;
  }
}
