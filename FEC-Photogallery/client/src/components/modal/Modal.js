import React from "react";
import ReactDOM from "react-dom";
import PhotoSlider from "../photoslider/PhotoSlider";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" style={modalOverlayStyles}>
      <div className="actions">
        <button
          className="modal__btn-close"
          type="button"
          style={modalCloseStyles}
          onClick={() => props.handleHide()}
        >
          <i className="modal__btn-close icon" style={closeModalIconStyles}></i>
        </button>

        <div className="modal__content">
          <PhotoSlider
            show={props.showModal}
            totalImages={props.photos}
            gallery={props.gallery}
            slideIndex={props.slideIndex}
          />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

const modalOverlayStyles = {
  position: "absolute",
  padding: "25px",
  right: "0",
  top: "20px",
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  backgroundColor: "rgb(0,0,0,.9)",
  zIndex: "1001",
};

//style for the close Icon container but not the icon
const modalCloseStyles = {
  position: "absolute",
  padding: "25px",
  top: "20px",
  right: "0",
  fontSize: "1.5rem",
  fontWeight: "50",
  transition: "all .25s ease-in-out",
  height: "50px",
  width: "50px",
  background: "inherit",
  border: "none",
};

const closeModalIconStyles = {
  fontFamily: "icons",
  fontWeight: "400",
  fontStyle: "normal",
  textTransform: "none",
  lineHeight: "2",
  content: "U",
  color: "#6f737b",
  fontSize: "18px",
  position: "absolute",
  textAlign: "center",
  top: "16px",
  right: "16px",
  height: "38px",
  width: "32px",
  display: "flex-start",
  backgroundColor: "transparent",
  opacity: "0.5",
  border: "none",
  transition: "opacity 0.2s ease",
};
