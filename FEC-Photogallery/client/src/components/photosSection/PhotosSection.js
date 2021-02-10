import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurantPhotos } from "../../redux/actions/restaurant";
import Spinner from "../layout/spinner/Spinner";
import Grid from "../layout/grid/Grid";
import "./PhotosSection.scss";

const PhotosSection = ({ getRestaurantPhotos, name, loading, photos }) => {
  let { id } = useParams();

  useEffect(() => {
    getRestaurantPhotos(id);
  }, [id, getRestaurantPhotos]);

  return loading && !name ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="content">
        <div className="photo-gallery">
          <div className="photo-gallery-header">
            <h2 className="photo-gallery-header__text">
              {" "}
              {!loading && photos.length ? photos.length : null} Photos
            </h2>
          </div>
          {!loading && photos.length ? <Grid /> : null}
        </div>
      </div>
    </Fragment>
  );
};

PhotosSection.propTypes = {
  getRestaurantPhotos: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.restaurant.name,
  loading: state.restaurant.loading,
  photos: state.restaurant.photos,
});

export default connect(mapStateToProps, {
  getRestaurantPhotos,
})(PhotosSection);
