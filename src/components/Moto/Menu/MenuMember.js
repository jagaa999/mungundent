import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Avatar, Popover, Tooltip } from "antd";
import { userSignOut } from "appRedux/actions/Auth";

import MemberContext from "context/MemberContext";

const MenuMember = () => {
  // const dispatch = useDispatch();
  const history = useHistory();

  const memberContext = useContext(MemberContext);
  // console.log("МИНИЙ ПРОФАЙЛ", memberContext.state.memberProfile);

  const withMemberOptions = (
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

  // console.log("memberContext.state-------", memberContext.state);

  return (
    <Popover
      overlayClassName="gx-popover-horizantal"
      placement="bottomRight"
      content={
        memberContext.state.memberUID !== 0
          ? withMemberOptions
          : withoutMemberGuestOptions
      }
      trigger="click"
    >
      <Tooltip
        title={
          memberContext.state.memberUID !== 0
            ? memberContext.state.memberFirebaseProfile.name
            : "Зочин!"
        }
      >
        <Avatar
          src={
            memberContext.state.memberUID !== 0
              ? memberContext.state.memberFirebaseProfile.picture
              : "https://pbs.twimg.com/profile_images/1218399717857644544/UQoPsIgl_400x400.jpg"
          }
          className="gx-avatar gx-pointer"
          alt={
            memberContext.state.memberUID !== 0 &&
            memberContext.state.memberFirebaseProfile.name
          }
        />
      </Tooltip>
    </Popover>
  );
};

export default MenuMember;
