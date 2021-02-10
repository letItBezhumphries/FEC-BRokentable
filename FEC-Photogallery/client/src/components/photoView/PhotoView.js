import React from "react";
import PropTypes from "prop-types";

const PhotoView = (props) => {
  const { photo } = props;
  return (
    <div className="photoview">
      I am the PhotoView
      {/* <img src={props.img} /> */}
    </div>
  );
};

PhotoView.propTypes = {
  photo: PropTypes.object,
};

export default PhotoView;
