import React, { useContext } from "react";
import MemberContext from "context/MemberContext";
import { Skeleton, Divider, Typography, Button, Modal } from "antd";
import SignIn from "../../../containers/SignIn";
import { CloseCircleOutlined } from "@ant-design/icons";

const SigninModal = () => {
  const memberContext = useContext(MemberContext);

  return (
    <Modal
      title="Гишүүн нэвтрэх"
      visible={memberContext.state.isModal}
      onOk={(e) => {
        memberContext.isModal(false);
      }}
      onCancel={(e) => {
        memberContext.isModal(false);
      }}
      footer={null}
      header={null}
      width="700px"
      z-index="5000"
      closeIcon={<CloseCircleOutlined />}
    >
      <SignIn />
    </Modal>
  );
};
export default SigninModal;
