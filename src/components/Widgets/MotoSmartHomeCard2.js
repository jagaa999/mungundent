import React from "react";

import { Card, Image } from "antd";

const MotoSmartHomeCard2 = ({ item }) => {
  if (item.image === "")
    item.image =
      "https://images.unsplash.com/photo-1534078362425-387ae9668c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

  return (
    <div className="moto-item-card gx-p-0">
      <div
        className="moto-auction-thumb-image gx-rounded-lg"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      ></div>

      <div className="gx-p-3">
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default MotoSmartHomeCard2;
