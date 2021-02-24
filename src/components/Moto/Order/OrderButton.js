import React, { useContext } from "react";

import { Card, Tabs, Button } from "antd";
import { isEmpty } from "lodash";
import ProductContext from "context/ProductContext";

const OrderButton = ({ myItem }) => {
  const productContext = useContext(ProductContext);

  console.log(myItem);

  if (isEmpty(myItem)) return null;

  return (
    <div>
      {/* saveOrderProduct */}
      <Button
        type="primary"
        onClick={
          (e) =>
            productContext.setOrder({
              ...productContext.order,
              isModal: true,
              orderDetail: {
                itemid: myItem.id,
                unitamount: myItem.saleprice,
                linetotalamount: myItem.saleprice,
              },
            })
          // productContext.isOrderModal(true)
          // productContext.saveOrderProduct({
          //   itemid: myItem.id,
          //   unitamount: myItem.saleprice,
          //   linetotalamount: myItem.saleprice,
          // })
        }
      >
        Захиалах
      </Button>
    </div>
  );
};

export default OrderButton;
