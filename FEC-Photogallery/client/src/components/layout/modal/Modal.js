import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PhotosScroller from "../../photosScroller/PhotosScroller";
import { closeModal } from "../../../redux/actions/restaurant";
import CloseIcon from "../../../assets/SVG/close.svg";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = ({ viewModal, currentIndex, closeModal }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      {viewModal && currentIndex >= 0 ? <PhotosScroller /> : null}
      <button
        className="modal-btn-close"
        type="button"
        onClick={() => closeModal()}
      >
        <CloseIcon className="modal-btn-close-icon" />
      </button>
    </div>,
    document.querySelector(".modalShowing-true")
  );
};

Modal.propTypes = {
  photos: PropTypes.array.isRequired,
  viewModal: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  photos: state.restaurant.photos,
  viewModal: state.restaurant.viewModal,
  currentIndex: state.restaurant.currentIndex,
});

export default connect(mapStateToProps, { closeModal })(Modal);
