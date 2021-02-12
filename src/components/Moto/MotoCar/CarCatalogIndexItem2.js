import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Card, Badge, Typography, Timeline, Image } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Paragraph } = Typography;

const CarcatalogIndexItem2 = ({ indexItem, count }) => {
  // console.log("Манай IndexItem - ", indexItem);

  return (
    <Timeline.Item
      label={indexItem.maindate2}
      dot={<CaretDownOutlined style={{ fontSize: "16px" }} />}
      className="ant-timeline-item-left"
    >
      <Link to={"/carcatalog/index/" + indexItem.mainid}>
        <div className="gx-media">
          <Image
            width={130}
            src={indexItem.mainimg}
            placeholder={null}
            className="gx-mr-3"
          />
          <div className="gx-media-body">
            <h5 className="gx-wall-user-title">{indexItem.markname}</h5>
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
      </Link>
    </Timeline.Item>
  );
};

export default CarcatalogIndexItem2;
