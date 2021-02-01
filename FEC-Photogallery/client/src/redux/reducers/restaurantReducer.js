import { GET_RESTAURANT_GALLERY, CLEAR_RESTAURANT_GALLERY } from "../types";

const initialState = {
  name: "",
  heroImage: "",
  photos: [],
  currentGalleryPage: 1,
  showSlider: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT_GALLERY:
      return {
        ...state,
        name: action.payload.name,
        heroImage: action.payload.heroImage,
        photos: action.payload.photos,
        currentGalleryPage: 1,
      };
    default:
      return state;
  }
};
