import React, { useContext } from "react";
import MemberContext from "context/MemberContext";

//! MemberStore-оор хучаагүй болохоор ажиллахгүй юм байна.

const IsMemberLogin = (props) => {
  const memberContext = useContext(MemberContext);
  // !memberContext.state.isLogin && memberContext.isModal(true);
  // return null;
};

export default IsMemberLogin;
