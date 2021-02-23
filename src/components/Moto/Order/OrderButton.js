import React from "react";

import { Card, Tabs, Button } from "antd";
import { isEmpty } from "lodash";

const OrderButton = ({ myItem }) => {
  if (isEmpty(myItem)) return null;

  return (
    <div>
      <Button type="primary">Захиалах</Button>
    </div>
  );
};

export default OrderButton;
