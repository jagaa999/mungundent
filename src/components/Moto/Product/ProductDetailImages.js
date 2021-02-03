import React, { useState } from "react";
import { Image, Row, Col, Modal } from "antd";
import { defaultSrc } from "util/config";

const AutozarDetailImages = ({ myItem, imageotherFileList }) => {
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

  // console.log("imageotherFileList", imageotherFileList);

  return (
    <>
      <Row gutter={[8, 8]} justify="start">
        {imageotherFileList.map((item, index) => (
          <Col key={index} span={4}>
            <div
              className="moto-auction-thumb-image"
              style={{ backgroundImage: `url(${item.value})` }}
              onClick={(e) => onImgClick(e, item.value)}
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

export default AutozarDetailImages;
