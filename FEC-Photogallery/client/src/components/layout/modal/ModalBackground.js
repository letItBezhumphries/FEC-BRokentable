import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../../redux/actions/restaurant";
import Modal from "./Modal";
import PropTypes from "prop-types";
import "./ModalBackground.scss";

const ModalBackground = ({
  closeModal,
  viewModal,
  photos,
  currentIndex,
  ...props
}) => {
  return (
    <div
      className={
        viewModal
          ? `modalBackground modalShowing-${viewModal}`
          : "modalBackground"
      }
    >
      {viewModal && currentIndex >= 0 ? <Modal /> : null}
    </div>
  );
};

ModalBackground.propTypes = {
  photos: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  viewModal: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number,
};

const mapStateToProps = (state) => ({
  photos: state.restaurant.photos,
  viewModal: state.restaurant.viewModal,
  currentIndex: state.restaurant.currentIndex,
});

export default connect(mapStateToProps, { closeModal })(ModalBackground);
