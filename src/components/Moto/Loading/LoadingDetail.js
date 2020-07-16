import React from "react";
import { Skeleton } from "antd";

const LoadingDetail = ({ className }) => (
  <div className={`${className}`}>
    <>
      <Skeleton.Image active />
      <br />
      <br />
      <Skeleton avatar active />
      <Skeleton paragraph={{ rows: 7 }} active />
    </>
  </div>
);
export default LoadingDetail;
