import React, { useState } from "react";
import { Image, Row, Col, Modal } from "antd";
import { defaultSrc } from "util/config";

const MotoAuctionDetailImages = ({ auctionItem, myImages }) => {
  const [imageModal, setImageModal] = useState({
    previewVisible: false,
    previewImage: "",
  });

  const onImgClick = (e, item) => {
    // console.log("item", item);
    setImageModal({
      ...imageModal,
      previewVisible: true,
      previewImage: item,
    });
  };

  return (
    <>
      <Row gutter={[8, 8]} justify="end">
        {myImages.map((item, index) => (
          <Col key={index} span={4}>
            <div
              className="moto-auction-thumb-image"
              style={{ backgroundImage: `url(${item})` }}
              onClick={(e) => onImgClick(e, item)}
            ></div>
          </Col>
        ))}
      </Row>

      <Modal
        width="70%"
        visible={imageModal.previewVisible}
        footer={null}
        onCancel={() => setImageModal({ ...imageModal, previewVisible: false })}
        className="moto-auction-preview-modal"
      >
        <img
          alt={imageModal.previewTitle}
          style={{ width: "100%" }}
          src={imageModal.previewImage}
        />
      </Modal>
    </>
  );
};

export default MotoAuctionDetailImages;
