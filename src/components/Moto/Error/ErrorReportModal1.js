import React, { useContext, useEffect, useState } from "react";

import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import { Modal, Divider, Button, Form, Input, Radio } from "antd";

const ErrorReportModal = (props) => {
  console.log("ErrorReportModal props", props);

  const modalOk = (e) => {
    console.log(e);
    props.setShowErrorReportModal(true);
  };

  const modalCancel = (e) => {
    console.log(e);
    props.setShowErrorReportModal(false);
  };

  return (
    <Modal
      title="Алдааг мэдээлэх"
      visible={props.showErrorReportModal}
      footer={[
        <Button key="back" onClick={modalCancel}>
          Болих
        </Button>,
        <Button key="submit" type="primary" onClick={modalOk}>
          Илгээх
        </Button>,
      ]}
      onOk={modalOk}
      onCancel={modalCancel}
      // width="80%"
      style={{ width: "100%", resize: "none" }}
    >
      <div>
        {/* <img alt="example" style={{ width: "100%" }} src={newsItem.imageMain} /> */}
        <Divider className="gx-my-4" />
        {/* <NewsDetailModal newsId={newsItem.newsid} /> */}
      </div>
    </Modal>
  );
};

export default ErrorReportModal;
