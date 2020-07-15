import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Popover } from "antd";
import { userSignOut } from "appRedux/actions/Auth";

import MemberContext from "context/MemberContext";

const UserInfo = () => {
  const dispatch = useDispatch();

  const memberContext = useContext(MemberContext);
  // console.log("МИНИЙ ПРОФАЙЛ", memberContext.state.memberProfile);

  const userMenuOptions = (
    <>
      <div className="gx-fs-sm">Сайн уу?</div>
      <div className="gx-fs-sm">
        {memberContext.state.memberProfile.personname}
      </div>
      <div className="gx-fs-sm">
        userid {memberContext.state.memberProfile.id}
      </div>
      <div className="gx-fs-sm">
        customerid {memberContext.state.memberProfile.customerid}
      </div>
      <ul className="gx-user-popover gx-mt-3">
        <li>My Account</li>
        <li>Connections</li>
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
      <Avatar
        src={"https://via.placeholder.com/150"}
        className="gx-avatar gx-pointer"
        alt=""
      />
    </Popover>
  );
};

export default UserInfo;
