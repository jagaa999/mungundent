import React from "react";

import { Card } from "antd";

const MotoSmartHomeCard = ({ item }) => {
  return (
    <Card className="gx-card-full moto-item-card">
      <img className="gx-smart-img" alt="fuel waste" src={item.image} />
      <div className="gx-p-3">
        <p className="gx-mb-2">{item.desc}</p>
      </div>
    </Card>
  );
};

export default MotoSmartHomeCard;
