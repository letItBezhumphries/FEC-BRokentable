import React from "react";

const PhotoBox = ({ photo, className, index, color }) => {
  return (
    <div className={className} style={{ backgroundColor: `${color}` }}>
      {index}
    </div>
  );
};

export default PhotoBox;
