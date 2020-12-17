import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button, Avatar } from "antd";

const MotoSmartHomeCard2 = ({ item }) => {
  if (item.image === "") item.image = "unknown.jpg";

  return (
    <Card
      className="moto-item-card gx-card-full gx-text-center"
      style={{ paddingBottom: "40px" }}
      cover={<Image src={require(`assets/images/auction/${item.image}`)} />}
    >
      <div className="gx-px-2">
        <div className="gx-separator gx-mt-4 gx-bg-success-dark" />
        <h4 className="gx-mb-4 ">{item.title}</h4>
      </div>

      <Link to={item.link || "/auction"}>
        <Button
          type="primary"
          className="gx-mt-sm-4 gx-fs-sm gx-btn-block gx-mb-0 gx-text-uppercase gx-border-radius-top-left-0 gx-border-radius-top-right-0 absolute-bottom"
          size="large"
          htmlType="submit"
          block
        >
          Үзэх
        </Button>
      </Link>
    </Card>
  );
};

export default MotoSmartHomeCard2;
