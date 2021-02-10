import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PhotoView from "../photoView/PhotoView";

const PhotoSlider = (props) => {
  const { photos } = props;
  const [photosIndex, setPhotosIndex] = useState(0);

  const nextSlide = (idx) => {
    if (idx === photos.length - 1) {
      setPhotosIndex(0);
    } else if (idx < photos.length - 1) {
      setPhotosIndex((idx += 1));
    }
  };

  const prevSlide = (idx) => {
    if (idx === 0) {
      setPhotosIndex(photos.length - 1);
    } else if (idx <= photos.length - 1) {
      setPhotosIndex((idx -= 1));
    }
  };

  return (
    <div className="image-wrapper">
      <div className="slideContainer">
        <button className="arrow">
          <i
            className="angle left icon"
            onClick={() => prevSlide(photosIndex)}
          ></i>
        </button>

        <PhotoView photo={photos[photosIndex]} />

        <button className="arrow">
          <i
            className="angle right icon"
            onClick={() => nextSlide(photosIndex)}
          ></i>
        </button>
      </div>
    </div>
  );
};

PhotoSlider.propTypes = {
  photos: PropTypes.array,
};

const mapStateToProps = (state) => ({
  photos: state.restaurant.photos,
});

export default connect(mapStateToProps)(PhotoSlider);
