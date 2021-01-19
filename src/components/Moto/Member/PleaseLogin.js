import React, { useContext, useEffect } from "react";
import MemberContext from "context/MemberContext";
import { Skeleton, Divider, Typography, Button } from "antd";
import MyIcon from "util/iconFunction";
import SignIn from "containers/SignIn";

const { Text, Link } = Typography;

const PleaseLogin = () => {
  const memberContext = useContext(MemberContext);

  // useEffect(() => {
  //   setTimeout(() => {
  //     memberContext.isModal(true);
  //   }, 5000);
  // }, []);

  return (
    <div
    // className="gx-bg-green-light gx-rounded-lg gx-p-5 gx-w-100 gx-h-100 gx-mb-5"
    // style={{ maxWidth: "500px" }}
    >
      <div>Мото гишүүнд зориулсан хэсэг тул нэвтэрч орохыг урьж байна.</div>
      <div className="gx-my-3">
        Та өөрийн Facebook, Google бүртгэлийн аль нэгээр чөлөөтэй ороорой.
      </div>
      <Button
        type="primary"
        size="Large"
        className="gx-mt-3 gx-btn-success"
        icon={<MyIcon type="iconlogin" className="moto-icon-1-3" />}
        onClick={() => {
          memberContext.isModal(true);
        }}
      >
        Нэвтрэх
      </Button>
    </div>
  );
};
export default PleaseLogin;
