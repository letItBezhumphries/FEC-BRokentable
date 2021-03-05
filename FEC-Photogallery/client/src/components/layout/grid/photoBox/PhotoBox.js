import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showModal } from "../../../../redux/actions/restaurant";
import "./PhotoBox.scss";

const PhotoBox = ({
  photo,
  className,
  photoSize,
  columns,
  photos,
  galleryPhotos,
  showModal,
}) => {
  const [morePhotosText, setMorePhotosText] = useState("");
  const [showMorePhotosText, setShowMorePhotosText] = useState(false);
  const [galleryPhotoURL, setGalleryPhotoURL] = useState("");
  const lastPhoto = galleryPhotos[galleryPhotos.length - 1];
  let height;

  useEffect(() => {
    if (galleryPhotos.length === 9) {
      if (lastPhoto.index === photo.index) {
        setMorePhotosText(`+ ${photos.length - galleryPhotos.length} more`);
        setShowMorePhotosText(true);
      }
    }
  }, [photo, galleryPhotos]);

  useEffect(() => {
    let newSizeURL = photo.imgSrc.replace(/526x526/, photoSize);
    if (!galleryPhotoURL.length && photoSize) {
      setGalleryPhotoURL(newSizeURL);
    }
  }, [galleryPhotos]);

  const handlePhotoClick = (index) => {
    showModal(index);
  };

  return (
    <Fragment>
      <div className={className} onClick={() => handlePhotoClick(photo.index)}>
        {showMorePhotosText ? (
          <div className="more-photos">{morePhotosText}</div>
        ) : null}
        {photo ? (
          <img
            src={galleryPhotoURL + `?sig=${photo.index}`}
            className={
              galleryPhotos.length === 4 ? `${className}--photos-4` : null
            }
          />
        ) : null}
      </div>
    </Fragment>
  );
};

PhotoBox.propTypes = {
  photos: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  viewModal: PropTypes.bool.isRequired,
  galleryPhotos: PropTypes.array.isRequired,
  photoSize: PropTypes.string,
};

const mapStateToProps = (state) => ({
  photos: state.restaurant.photos,
  viewModal: state.restaurant.viewModal,
  galleryPhotos: state.restaurant.galleryPhotos,
});

export default connect(mapStateToProps, {
  showModal,
})(PhotoBox);
