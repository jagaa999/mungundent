import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  Col,
  Row,
  Select,
  Timeline,
  DatePicker,
  Typography,
  Image,
  Button,
} from "antd";
import {
  PlusOutlined,
  ClockCircleOutlined,
  CaretDownOutlined,
  DownOutlined,
} from "@ant-design/icons";
import moment from "moment";

import toBoolean from "util/booleanFunction";
import CarCatalogIndexItem1 from "./CarCatalogIndexItem1";
import CarCatalogIndexItem2 from "./CarCatalogIndexItem2";

const { Option } = Select;
const dateFormat = "YYYY-MM-DD";
const { Paragraph } = Typography;

const CarCatalogIndexListView2 = ({ carIndexList, whatDate }) => {
  const [reverse, setReverse] = useState(false);

  return (
    <>
      <Timeline mode="left" reverse={reverse}>
        {carIndexList.map((indexItem, index) => {
          if (!moment(indexItem.maindate).isBetween(whatDate[0], whatDate[1])) {
            return "";
          }
          return (
            <Timeline.Item
              label={indexItem.maindate2}
              dot={<CaretDownOutlined style={{ fontSize: "16px" }} />}
            >
              <div className="gx-media">
                <Image
                  width={130}
                  src={indexItem.mainimg}
                  placeholder={null}
                  className="gx-mr-3"
                />
                <div className="gx-media-body">
                  <h5>
                    <Link to={"/carcatalog/index/" + indexItem.mainid}>
                      {indexItem.firmname} {indexItem.markname}
                    </Link>
                  </h5>

                  <p className="gx-text-grey gx-fs-sm">
                    <Paragraph
                      className="gx-mt-3"
                      ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: <CaretDownOutlined />,
                      }}
                    >
                      {indexItem.desceng}
                    </Paragraph>
                  </p>
                </div>
              </div>
            </Timeline.Item>
          );
        })}
      </Timeline>

      <Button
        type="primary"
        style={{ marginTop: 16 }}
        onClick={(e) => {
          setReverse(!reverse);
        }}
      >
        Он цагийн дараалал өөрчлөх
      </Button>

      {/* <Row className="gx-d-flex">
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
      </Row> */}
    </>
  );
};

export default CarCatalogIndexListView2;
