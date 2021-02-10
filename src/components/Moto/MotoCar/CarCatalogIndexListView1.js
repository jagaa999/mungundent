import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Select, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

import toBoolean from "util/booleanFunction";
import CarCatalogIndexItem1 from "./CarCatalogIndexItem1";

const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

const CarCatalogIndexListView1 = ({ carIndexList }) => {
  const [whatDate, setWhatDate] = useState(["1900-01-01", "2090-12-31"]);

  // console.log(
  //   "CarCatalogContext.carIndexList",
  //   CarCatalogContext.carIndexList
  // );

  return (
    <Row className="gx-d-flex">
      {carIndexList.map((indexItem, index) => {
        if (!moment(indexItem.maindate).isBetween(whatDate[0], whatDate[1])) {
          return "";
        }

        return (
          <Col key={index} lg={8} md={12} sm={12} xs={12} className="gx-mb-5">
            <CarCatalogIndexItem1
              key={index}
              indexItem={indexItem}
              count={indexItem.count}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default CarCatalogIndexListView1;
