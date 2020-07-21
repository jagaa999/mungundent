import React, { useContext } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal, Avatar, Popover, Tooltip } from "antd";
import { userSignOut } from "appRedux/actions/Auth";
import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined";

import MemberContext from "context/MemberContext";
import SignIn from "../../../containers/SignIn";

const MenuMember = () => {
  // const dispatch = useDispatch();
  const history = useHistory();

  const memberContext = useContext(MemberContext);
  console.log("МИНИЙ ПРОФАЙЛ", memberContext.state);

  const withMemberOptions = (
    <>
      <div className="gx-fs-sm">Сайн уу?</div>
      <div className="gx-fs-sm">
        {memberContext.state.memberFirebaseProfile.displayName}
      </div>
      <div className="gx-fs-sm">
        ERP userid {memberContext.state.memberProfile.id}
      </div>
      <div className="gx-fs-sm">
        ERP customerid {memberContext.state.memberProfile.customerid}
      </div>
      <div className="gx-fs-sm">
        Firebase UID {memberContext.state.memberUID}
      </div>
      <ul className="gx-user-popover gx-mt-3">
        <li>My Account</li>
        <li>Миний хадгалсан зүйлс</li>
        <li
          onClick={() => {
            memberContext.clearMemberProfile();
            // history.push("/signin");
          }}
        >
          Logout
        </li>
      </ul>
    </>
  );

  const withoutMemberGuestOptions = (
    <>
      <div className="gx-fs-sm">Сайн уу?</div>
      <div className="gx-fs-sm">Зочин</div>

      <ul className="gx-user-popover gx-mt-3">
        <li
          onClick={() => {
            memberContext.clearMemberProfile();
            history.push("/signin");
          }}
        >
          Нэвтрэх
        </li>
      </ul>
    </>
  );

  return memberContext.state.isLogin ? (
    <Popover
      overlayClassName="gx-popover-horizantal"
      placement="bottomRight"
      content={
        memberContext.state.isLogin
          ? withMemberOptions
          : withoutMemberGuestOptions
      }
      trigger="click"
    >
      <Tooltip
        title={
          memberContext.state.isLogin
            ? memberContext.state.memberFirebaseProfile.displayName
            : "Зочин!"
        }
      >
        <Avatar
          src={
            memberContext.state.isLogin
              ? memberContext.state.memberFirebaseProfile.photoURL
              : "https://pbs.twimg.com/profile_images/1218399717857644544/UQoPsIgl_400x400.jpg"
          }
          className="gx-avatar gx-pointer"
          alt={
            memberContext.state.isLogin &&
            memberContext.state.memberFirebaseProfile.displayName
          }
        />
      </Tooltip>
    </Popover>
  ) : (
    <>
      {/* <Link
        to="/signin"
        className="gx-d-block gx-pointer"
        style={{ fontSize: "15px" }}
      >
        Нэвтрэх
      </Link> */}
      <span
        className="gx-block gx-pointer"
        style={{ fontSize: "15px" }}
        onClick={() => {
          memberContext.isModal(true);
        }}
      >
        Нэвтрэх
      </span>
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
      ;
    </>
  );
};

export default MenuMember;
