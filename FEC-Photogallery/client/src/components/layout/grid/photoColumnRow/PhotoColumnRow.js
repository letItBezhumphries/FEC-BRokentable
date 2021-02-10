import React from "react";
import PhotoBox from "../photoBox/PhotoBox";

const PhotoColumnRow = ({ photos, className, index, indices, color }) => {
  let row;
  if (indices) {
    row = (
      <div className={className}>
        <PhotoBox
          photo={photos[0]}
          className="photobox-left"
          index={indices[0]}
          color={color}
        />
        <PhotoBox
          photo={photos[1]}
          className="photobox-right"
          index={indices[1]}
          color={color}
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
