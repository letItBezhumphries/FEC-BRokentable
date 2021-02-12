import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PhotoColumn from "./photoColumn/PhotoColumn";
import PropTypes from "prop-types";
import "./Grid.scss";

const Grid = ({ galleryPhotos }) => {
  console.log("photos in gallery", galleryPhotos.length);
  let galleryRow;
  let classNames = ["left-box", "center-box", "right-box"];

  if (galleryPhotos.length >= 4) {
    galleryRow = (
      <div className="photogallery-grid col-3">
        <PhotoColumn
          photos={galleryPhotos.slice(0, 2)}
          className={classNames[0]}
        />
        <PhotoColumn
          photos={galleryPhotos.slice(2, 3)}
          className={classNames[1]}
          index={3}
        />
        <PhotoColumn
          photos={galleryPhotos.slice(3)}
          className={classNames[2]}
        />
      </div>
    );
  }
  if (galleryPhotos.length === 3) {
    galleryRow = (
      <div className="photogallery-grid col-3">
        <PhotoColumn
          photos={galleryPhotos.slice(0, 1)}
          index={1}
          className={classNames[0]}
        />
        <PhotoColumn
          photos={galleryPhotos.slice(1, 2)}
          index={2}
          className={classNames[1]}
        />
        <PhotoColumn
          photos={galleryPhotos.slice(2, 3)}
          index={3}
          className={classNames[2]}
        />
      </div>
    );
  }
  if (galleryPhotos.length === 2) {
    galleryRow = (
      <div className="photogallery-grid col-2">
        <PhotoColumn
          photos={galleryPhotos.slice(0, 1)}
          index={1}
          className="left-box"
        />
        <PhotoColumn
          photos={galleryPhotos.slice(1)}
          index={2}
          className="right-box"
        />
      </div>
    );
  }
  if (galleryPhotos.length === 1) {
    galleryRow = (
      <div className="photogallery-grid col-1">
        <PhotoColumn
          photos={galleryPhotos.slice(0, 1)}
          index={1}
          className="center-box"
        />
      </div>
    );
  }
  return galleryPhotos.length && <Fragment>{galleryRow}</Fragment>;
};

Grid.propTypes = {
  galleryPhotos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  galleryPhotos: state.restaurant.galleryPhotos,
});

export default connect(mapStateToProps)(Grid);
