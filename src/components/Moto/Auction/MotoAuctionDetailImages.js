import React from "react";
import { Card, Image } from "antd";
import { defaultSrc } from "util/config";

const MotoAuctionDetailImages = ({ auctionItem, myImages }) => {
  console.table(auctionItem);
  console.log("auctionItem.Images", auctionItem.IMAGES);

  // const myImages = auctionItem.IMAGES.substr(
  //   auctionItem.IMAGES.indexOf("#") + 1
  // );
  console.log("myImages", myImages);

  return (
    <ul className="gx-gallery-list">
      {myImages.map((item, index) => (
        <li key={index}>
          <img alt="..." src={item} />
        </li>
      ))}
    </ul>
  );
};

export default MotoAuctionDetailImages;
