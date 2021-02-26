import React, { useContext } from "react";

import { Card, Tabs, Button } from "antd";
import { isEmpty } from "lodash";
import ProductContext from "context/ProductContext";
import MemberContext from "context/MemberContext";

const OrderButton = ({ myItem }) => {
  const productContext = useContext(ProductContext);
  const memberContext = useContext(MemberContext);

  if (isEmpty(myItem)) return null;

  return (
    <div>
      <Button
        type="primary"
        size="large"
        onClick={(e) => {
          if (!memberContext.state.isLogin) {
            memberContext.isModal(true);
          } else {
            productContext.setOrder({
              ...productContext.order,
              isModal: true,
            });
          }
        }}
      >
        Захиалах
      </Button>
    </div>
  );
};

export default OrderButton;
