import React from "react";
import { connect } from "react-redux";
import PhotoBox from "../photoBox/PhotoBox";
import PropTypes from "prop-types";
import PhotoColumnRow from "../photoColumnRow/PhotoColumnRow";

const PhotoColumn = ({ className, index, photos, loading, galleryPhotos }) => {
  let columnContent;
  let columnClassName;
  let leftIndexCtrl = [1, 4];
  let rightIndexCtrl = [
    [3, 7],
    [5, 8],
    [6, 9],
  ];
  let colorCtrl = ["yellow", "brown", "purple", "green", "orange", "blue"];

  if (className === "left-box") {
    if (photos.length < 2) {
      columnClassName = "left-box";
      columnContent = (
        <PhotoBox
          photo={photos[0]}
          className="photobox"
          index={index}
          color="red"
        />
      );
    } else {
      columnClassName = "left-box rows-2";
      columnContent = (
        <>
          {photos.map((photo, idx) => (
            <PhotoBox
              key={idx}
              photo={photo}
              index={leftIndexCtrl[idx]}
              className={`photobox row-${idx + 1}`}
              color={colorCtrl[idx]}
            />
          ))}
        </>
      );
    }
  }

  if (className === "center-box") {
    columnClassName = "center-box";
    columnContent = (
      <PhotoBox
        photo={photos[0]}
        className="photobox"
        index={index}
        color="yellowgreen"
      />
    );
  }

  if (className === "right-box") {
    if (photos.length <= 3) {
      columnClassName = `right-box rows-${photos.length}`;
      columnContent = (
        <>
          {photos.map((photo, idx) => (
            <PhotoColumnRow
              key={idx}
              photos={photo}
              className={`column-row row-${idx + 1}`}
              index={rightIndexCtrl[idx][0]}
              color={colorCtrl[idx]}
            />
          ))}
        </>
      );
    }

    if (photos.length === 4) {
      columnClassName = "right-box rows-3";
      columnContent = (
        <>
          <PhotoColumnRow
            photos={photos.slice(0, 2)}
            className="column-row row-1"
            indices={rightIndexCtrl[0]}
            colors={colorCtrl.slice(0, 2)}
          />
          <PhotoColumnRow
            photos={photos[2]}
            className="column-row row-2"
            index={rightIndexCtrl[1][0]}
            color={colorCtrl[2]}
          />
          <PhotoColumnRow
            photos={photos[3]}
            className="column-row row-3"
            index={rightIndexCtrl[2][0]}
            color={colorCtrl[3]}
          />
        </>
      );
    }
    if (photos.length === 5) {
      columnClassName = "right-box rows-3";
      columnContent = (
        <>
          <PhotoColumnRow
            photos={photos.slice(0, 2)}
            className="column-row row-1"
            indices={rightIndexCtrl[0]}
            colors={colorCtrl.slice(0, 2)}
          />
          <PhotoColumnRow
            photos={photos[2]}
            className="column-row row-2"
            index={rightIndexCtrl[1][0]}
            colors={colorCtrl[2]}
          />
          <PhotoColumnRow
            photos={photos.slice(4)}
            className="column-row row-3"
            indices={rightIndexCtrl[2]}
            colors={colorCtrl.slice(3, 5)}
          />
        </>
      );
    }
    if (photos.length === 6) {
      columnClassName = "right-box rows-3";
      columnContent = (
        <>
          <PhotoColumnRow
            photos={photos.slice(0, 2)}
            className="column-row row-1"
            indices={rightIndexCtrl[0]}
            colors={colorCtrl.slice(0, 2)}
          />
          <PhotoColumnRow
            photos={photos.slice(2, 4)}
            className="column-row row-2"
            index={rightIndexCtrl[1]}
            colors={colorCtrl.slice(2, 4)}
          />
          <PhotoColumnRow
            photos={photos.slice(4, 6)}
            className="column-row row-3"
            indices={rightIndexCtrl[2]}
            colors={colorCtrl.slice(4, 6)}
          />
        </>
      );
    }
  }
  return (
    <div className={columnClassName}>
      {!loading && galleryPhotos.length ? columnContent : null}
    </div>
  );
};

PhotoColumn.propTypes = {
  className: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  galleryPhotos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.restaurant.loading,
  galleryPhotos: state.restaurant.galleryPhotos,
});

export default connect(mapStateToProps)(PhotoColumn);
