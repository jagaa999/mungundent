import React, { useState } from "react";
import { Modal, Image, Result, Button } from "antd";

const ResultSuccess = ({ resultOpen, setResultOpen }) => {
  const [resultModal, setResultModal] = useState({
    isOpen: true,
  });

  console.log("ББББББББББББББББ", resultOpen);

  return (
    <>
      <Modal
        // width="70%"
        visible={resultModal.isOpen}
        footer={null}
        onCancel={() => setResultModal({ ...resultModal, isOpen: false })}
        // className="moto-auction-preview-modal"
      >
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console">
              Гараашаа үзэх
            </Button>,
            <Button key="buy">Өөр машин үзэх</Button>,
          ]}
        />
      </Modal>
    </>
  );
};

export default ResultSuccess;
