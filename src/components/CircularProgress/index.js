import React from "react";
import loader from "../../assets/images/loader.svg";
import loader03 from "../../assets/images/moto_loading02.svg";

const CircularProgress = ({ className }) => (
  <div className={`loader ${className}`}>
    <img src={loader03} alt="loader" />
  </div>
);
export default CircularProgress;
