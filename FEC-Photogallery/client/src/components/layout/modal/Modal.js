import React from "react";
import ReactDOM from "react-dom";
import PhotoSlider from "../../photoslider/PhotoSlider";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="actions">
        <button
          className="modal__btn-close"
          type="button"
          onClick={() => props.handleHide()}
        >
          <i className="modal__icon"></i>
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
