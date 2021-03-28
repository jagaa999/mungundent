import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Carousel, Button, Card, Col, Row, Space, Tooltip, Avatar } from "antd";
import { UserOutlined, HomeOutlined, PlusOutlined } from "@ant-design/icons";

import MemberContext from "context/MemberContext";
import OnlyAvatar from "components/Moto/Member/onlyAvatar";

// motoMemberLIST_MAINLIST

const MemberBox = () => {
  // console.log("newMembersnewMembers", newMembers);
  const memberContext = useContext(MemberContext);

  const memberInfo = (
    <>
      <div className="gx-text-center gx-my-5">
        <Avatar
          size="large"
          src={memberContext.state.memberFirebaseProfile.photoURL}
        />
        <h4 className="gx-mt-3">
          {memberContext.state.memberFirebaseProfile.displayName}
        </h4>
      </div>
    </>
  );

  return memberContext.state.isLogin ? <>{memberInfo}</> : <></>;
};

export default MemberBox;
