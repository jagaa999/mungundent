import React from "react";
import { Rate } from "antd";

const MotoAuctionStarRatingComponent = ({
  starCount,
  value,
  emptyStarColor,
}) => {
  let myValue = value && Number(value);
  // console.log("myValue", myValue);
  // console.log("value", value, Number(value));

  if (value === "S") myValue = starCount;
  if (value === "RA") myValue = 3.5;
  if (value === "R") myValue = 2;

  return (
    <>
      <Rate
        allowHalf
        value={myValue}
        count={starCount}
        disabled
        className="moto-auction-rate"
      />
    </>
  );
};

export default MotoAuctionStarRatingComponent;
