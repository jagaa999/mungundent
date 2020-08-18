import React from "react";
import { Skeleton, Divider } from "antd";

const LoadingList = ({ className }) => (
  <div className={`${className}`}>
    <>
      <Skeleton
        avatar
        paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
        active
      />
      <Divider />
      <Skeleton
        avatar
        paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
        active
      />
      <Divider />
      <Skeleton
        avatar
        paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
        active
      />
      <Skeleton
        avatar
        paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
        active
      />
      <Skeleton
        avatar
        paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
        active
      />
    </>
  </div>
);
export default LoadingList;
