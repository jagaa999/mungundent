import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MotoAuctionStarRatingComponent = ({
  starCount,
  value,
  emptyStarColor,
}) => {
  let myValue = value && Number(value);
  console.log("myValue", myValue);
  console.log("value", value, Number(value));

  if (value === "S") myValue = starCount;
  if (value === "RA") myValue = 3.5;
  if (value === "R") myValue = 2;

  return (
    <StarRatingComponent
      name="Үнэлгээ"
      value={myValue}
      starCount={starCount}
      editing={false}
      starColor={"#fa8c16"}
      emptyStarColor={emptyStarColor}
    />
  );
};

export default MotoAuctionStarRatingComponent;
