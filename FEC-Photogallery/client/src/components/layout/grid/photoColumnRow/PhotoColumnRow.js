import React from "react";
import PhotoBox from "../photoBox/PhotoBox";

const PhotoColumnRow = ({ photos, className, index, color, colors }) => {
  let row;
  if (colors) {
    row = (
      <div className={className}>
        <PhotoBox
          photo={photos[0]}
          className="photobox-left"
          index={index}
          color={colors[0]}
        />
        <PhotoBox
          photo={photos[1]}
          className="photobox-right"
          index={index}
          color={colors[1]}
        />
      </div>
    );
  } else {
    row = (
      <div className={className}>
        <PhotoBox
          photo={photos[0]}
          index={index}
          className="photobox-row"
          color={color}
        />
      </div>
    );
  }
  return row;
};

export default PhotoColumnRow;
