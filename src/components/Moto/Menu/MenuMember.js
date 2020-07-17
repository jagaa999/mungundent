import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Popover, Tooltip } from "antd";
import { userSignOut } from "appRedux/actions/Auth";

import MemberContext from "context/MemberContext";

const MenuMember = () => {
  const dispatch = useDispatch();

  const memberContext = useContext(MemberContext);
  // console.log("МИНИЙ ПРОФАЙЛ", memberContext.state.memberProfile);

  const userMenuOptions = (
    <>
      <div className="gx-fs-sm">Сайн уу?</div>
      <div className="gx-fs-sm">
        {memberContext.state.memberFirebaseProfile.name}
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
        <li onClick={() => dispatch(userSignOut())}>Logout</li>
      </ul>
    </>
  );

  return (
    <Popover
      overlayClassName="gx-popover-horizantal"
      placement="bottomRight"
      content={userMenuOptions}
      trigger="click"
    >
      <Tooltip title={memberContext.state.memberFirebaseProfile.name}>
        <Avatar
          src={memberContext.state.memberFirebaseProfile.picture}
          className="gx-avatar gx-pointer"
          alt={memberContext.state.memberFirebaseProfile.name}
        />
      </Tooltip>
    </Popover>
  );
};

export default MenuMember;
