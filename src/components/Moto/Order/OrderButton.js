import React, { useContext } from "react";

import { Card, Tabs, Button } from "antd";
import { isEmpty } from "lodash";
import ProductContext from "context/ProductContext";

const OrderButton = ({ myItem }) => {
  const productContext = useContext(ProductContext);

  if (isEmpty(myItem)) return null;

  return (
    <div>
      <Button
        type="primary"
        size="large"
        onClick={(e) =>
          productContext.setOrder({
            ...productContext.order,
            isModal: true,
          })
        }
      >
        Захиалах
      </Button>
    </div>
  );
};

export default OrderButton;
