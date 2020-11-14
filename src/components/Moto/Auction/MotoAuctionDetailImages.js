import React from "react";
import { Image, Row, Col } from "antd";
import { defaultSrc } from "util/config";

const MotoAuctionDetailImages = ({ auctionItem, myImages }) => {
  // console.table(auctionItem);
  // console.log("auctionItem.Images", auctionItem.IMAGES);

  // const myImages = auctionItem.IMAGES.substr(
  //   auctionItem.IMAGES.indexOf("#") + 1
  // );
  // console.log("myImages", myImages);

  return (
    <>
      <Row gutter={[8, 8]}>
        {myImages.map((item, index) => (
          <Col span={6}>
            <Image src={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MotoAuctionDetailImages;
