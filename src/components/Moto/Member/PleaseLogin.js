import React, { useContext } from "react";
import MemberContext from "context/MemberContext";
import { Skeleton, Divider, Typography, Button } from "antd";

const { Text, Link } = Typography;

const PleaseLogin = () => {
  const memberContext = useContext(MemberContext);

  return (
    <div>
      <h3>
        Уучлаарай, зөвхөн Мото Гишүүдэд зориулсан контент тул Нэвтэрч орно уу.
      </h3>
      <h2>
        <Text type="danger">Нэвтрэх хэрэгтэй.</Text>
      </h2>
      <Button
        type="primary"
        size="Large"
        className="gx-mt-3"
        onClick={() => {
          memberContext.isModal(true);
        }}
      >
        Нэвтрэх
      </Button>
      <Divider />
      <Skeleton avatar active className="gx-mt-4" />
    </div>
  );
};
export default PleaseLogin;
