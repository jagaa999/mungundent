import React, { useContext } from "react";
import MemberContext from "context/MemberContext";
import { Modal } from "antd";
import SignIn from "../../../containers/SignIn";
import { CloseCircleOutlined } from "@ant-design/icons";

const SigninModal = () => {
  const memberContext = useContext(MemberContext);

  return (
    <Modal
      visible={memberContext.state.isModal}
      onOk={(e) => {
        memberContext.isModal(false);
      }}
      onCancel={(e) => {
        memberContext.isModal(false);
      }}
      footer={null}
      header={null}
      z-index="5000"
      closeIcon={<CloseCircleOutlined size={64} />}
      bodyStyle={{ background: "#F0F0F0", borderRadius: "6px" }}
    >
      <SignIn />
    </Modal>
  );
};
export default SigninModal;
