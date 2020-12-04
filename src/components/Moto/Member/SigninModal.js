import React, { useContext } from "react";
import MemberContext from "context/MemberContext";
import { Modal } from "antd";
import SignIn from "../../../containers/SignIn";
import { CloseCircleOutlined } from "@ant-design/icons";

const SigninModal = () => {
  const memberContext = useContext(MemberContext);

  return (
    <Modal
      // title="Гишүүн нэвтрэх"
      visible={memberContext.state.isModal}
      onOk={(e) => {
        memberContext.isModal(false);
      }}
      onCancel={(e) => {
        memberContext.isModal(false);
      }}
      footer={null}
      header={null}
      width="90%"
      z-index="5000"
      closeIcon={<CloseCircleOutlined className="gx-text-white" size={64} />}
      bodyStyle={{ padding: "0" }}
    >
      <SignIn />
    </Modal>
  );
};
export default SigninModal;
