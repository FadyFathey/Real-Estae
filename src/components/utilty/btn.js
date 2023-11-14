import React from "react";

const Btn = ({ width, hight }) => {
  return (
    <button className="btn" style={{ width: `${width}`, height: `${hight}` }}>
      Add Listing
    </button>
  );
};

export default Btn;
