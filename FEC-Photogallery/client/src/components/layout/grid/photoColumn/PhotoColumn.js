import React from "react";
import PhotoBox from "../photoBox/PhotoBox";
import PhotoColumnRow from "../photoColumnRow/PhotoColumnRow";

const PhotoColumn = ({ className, photos, index }) => {
  let columnContent;
  if (className === "left-box") {
    if (photos.length < 2) {
      columnContent = (
        <div className="left-box">
          Left
          <PhotoBox photo={photos[0]} className="photobox" index={index} />
        </div>
      );
    } else {
      columnContent = (
        <div className="left-box">
          Left
          <PhotoBox photo={photos[0]} className="photobox__top" index={1} />
          <PhotoBox photo={photos[1]} className="photobox__bottom" index={2} />
        </div>
      );
    }
  }

  if (className === "center-box") {
    columnContent = (
      <div className="center-box">
        Center
        <PhotoBox photo={photos[0]} className="photobox" index={index} />
      </div>
    );
  }

  if (className === "right-box") {
    if (photos.length <= 3) {
      columnContent = (
        <div className={`right-box rows-${photos.length}`}>
          Right
          {photos.map((photo, idx) => (
            <PhotoColumnRow
              key={idx}
              photos={photo}
              className={`column-row row-${idx}`}
              indices={[3, 5, 6]}
            />
          ))}
        </div>
      );
    } else if (photos.length === 4) {
      let images = photos.splice(0, 2);
      columnContent = (
        <div className="right-box rows-3">
          Right
          <PhotoColumnRow
            photos={images}
            className="column-row row-1"
            index={3}
          />
          {photos.map((photo, idx) => (
            <PhotoColumnRow
              key={idx}
              photos={photo}
              className={`column-row row-${idx + 1}`}
              index={idx + 6}
            />
          ))}
        </div>
      );
    } else if (photos.length === 5) {
      columnContent = (
        <div className="right-box rows-3">
          Right
          <PhotoColumnRow
            photos={photos.slice(0, 2)}
            className="column-row row-1"
            indices={[3, 7]}
          />
          <PhotoColumnRow
            photos={photos[2]}
            className="column-row row-2"
            index={5}
          />
          <PhotoColumnRow
            photos={photos.slice(4)}
            className="column-row row-3"
            indices={[6, 8]}
          />
        </div>
      );
    } else {
      columnContent = (
        <div className="right-box rows-3">
          Right
          <PhotoColumnRow
            photos={photos.slice(0, 2)}
            className="column-row row-1"
            indices={[3, 7]}
          />
          <PhotoColumnRow
            photos={photos.slice(2, 4)}
            className="column-row row-2"
            indices={[5, 8]}
          />
          <PhotoColumnRow
            photos={photos.slice(4)}
            className="column-row row-3"
            indices={[6, 9]}
          />
        </div>
      );
    }
  }
  return columnContent;
};

export default PhotoColumn;
