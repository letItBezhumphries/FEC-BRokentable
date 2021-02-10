import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PhotoColumn from "./photoColumn/PhotoColumn";
import PropTypes from "prop-types";
import "./Grid.scss";

const Grid = ({ restaurant: { photos, loading } }) => {
  const galleryPhotos = photos.slice(0, 9);
  console.log("length of photos", galleryPhotos.length);
  let galleryRow;

  if (galleryPhotos.length >= 4) {
    galleryRow = (
      <div className="photogallery-grid col-3">
        <PhotoColumn photos={galleryPhotos.slice(0, 2)} className="left-box" />
        <PhotoColumn
          photos={galleryPhotos[2]}
          className="center-box"
          index={3}
        />
        <PhotoColumn photos={galleryPhotos.slice(3)} className="right-box" />
      </div>
    );
  }
  if (galleryPhotos.length === 3) {
    galleryRow = (
      <div className="photogallery-grid col-3">
        I am the photogallery-grid
        {galleryPhotos.map((photo, idx) => (
          <PhotoColumn
            key={idx}
            index={idx + 1}
            photos={photo}
            className={
              idx === 0 ? "left-box" : idx === 1 ? "center-box" : "right-box"
            }
          />
        ))}
      </div>
    );
  }
  if (galleryPhotos.length === 2) {
    galleryRow = (
      <div className="photogallery-grid col-2">
        I am the photogallery-grid
        <PhotoColumn photos={galleryPhotos[0]} index={1} className="left-box" />
        <PhotoColumn
          photos={galleryPhotos[1]}
          index={2}
          className="right-box"
        />
      </div>
    );
  }
  if (galleryPhotos.length === 1) {
    galleryRow = (
      <div className="photogallery-grid col-1">
        I am the photogallery-grid
        <PhotoColumn
          photos={galleryPhotos[0]}
          index={1}
          className="center-box"
        />
      </div>
    );
  }
  return galleryRow;
};

Grid.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
});

export default connect(mapStateToProps)(Grid);
