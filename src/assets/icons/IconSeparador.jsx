import * as React from "react";

const SvgIcon = ({fill="#EED94D" , width="511"}) => {

  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width= {width}
    height="22"
    fill="none"
    viewBox="0 0 511 22"
    
  >
    <rect width="481.008" height="3.63" y="18" fill="#1D243E" rx="1.815"></rect>
    <path
      fill={fill}
      stroke="#1D243E"
      strokeWidth="3.63"
      d="M499.16 1.815H275.899a9.076 9.076 0 0 0 0 18.151H499.16a9.076 9.076 0 0 0 0-18.15Z"
    ></path>
  </svg>
};

export default SvgIcon;
