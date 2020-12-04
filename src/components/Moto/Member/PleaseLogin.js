import React, { useContext, useEffect } from "react";
import MemberContext from "context/MemberContext";
import { Skeleton, Divider, Typography, Button } from "antd";
import MyIcon from "util/iconFunction";
import SignIn from "containers/SignIn";

const { Text, Link } = Typography;

const PleaseLogin = () => {
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    setTimeout(() => {
      memberContext.isModal(true);
    }, 500);
  }, []);

  return (
    <div
      className="gx-bg-green-light gx-rounded-lg gx-p-5 gx-w-100 gx-h-100 gx-mb-5"
      // style={{ maxWidth: "500px" }}
    >
      <h3>
        Зөвхөн нэвтэрч орсон гишүүдэд зориулсан контент тул нэвтэрч орохыг урьж
        байна.
      </h3>
      <h3 className="gx-mt-3">
        Та өөрийн Facebook, Google бүртгэлийн аль нэгээр чөлөөтэй орж болно.
      </h3>
      <Button
        type="primary"
        size="Large"
        className="gx-mt-3 gx-btn-success"
        icon={<MyIcon type="iconlogin" />}
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
