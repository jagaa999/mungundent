import React from "react";
import { Link } from "react-router-dom";

import { Card } from "antd";
import { defaultSrc } from "util/config";

const NewsItem = ({ image }) => {
  console.log(image);
  return (
    <Card
      className="gx-card-full gx-text-center moto-item-card"
      style={{ margin: "0 10px", height: "290px" }}
    >
      <img
        className="gx-img-fluid gx-w-100"
        alt={"https://catalogphoto.goo-net.com/carphoto/" + image}
        src={"https://catalogphoto.goo-net.com/carphoto/" + image}
        onError={defaultSrc}
      />
    </Card>
  );
};

export default NewsItem;
