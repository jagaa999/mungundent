import React from "react";

import { Card, Image } from "antd";

const MotoSmartHomeCard2 = ({ item }) => {
  return (
    <div className="moto-item-card gx-p-0">
      <div
        className="moto-auction-thumb-image gx-rounded-lg"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      ></div>

      <div className="gx-p-3">
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default MotoSmartHomeCard2;
