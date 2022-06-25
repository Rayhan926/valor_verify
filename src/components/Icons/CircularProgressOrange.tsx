import React from "react";

const CircularProgressOrange = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      width="150"
      height="150"
      viewBox="0 0 150 150"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          y1="0.715"
          x2="1"
          y2="0.285"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#f9b035" />
          <stop offset="0.53" stopColor="#f98c4e" />
          <stop offset="1" stopColor="#f96767" />
        </linearGradient>
      </defs>
      <path
        id="circle_chart"
        data-name="circle chart"
        d="M1040.98,275.062a3.966,3.966,0,1,1,7.405,2.845,66.959,66.959,0,1,0,66.076-42.981,3.969,3.969,0,0,1,.413-7.926,75.033,75.033,0,1,1-73.893,48.062Z"
        transform="translate(-1036.001 -226.993)"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
};

export default CircularProgressOrange;
