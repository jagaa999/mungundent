import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Badge, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Paragraph } = Typography;

const CarcatalogIndexItem1 = ({ indexItem, count }) => {
  // console.log("Манай indexItem - ", indexItem);

  return (
    <Card
      key={indexItem.id}
      className="moto-card-type1 moto-item-card"
      hoverable={false}
      title={indexItem.maindate2}
      cover={
        <Link
          to={"/carcatalog/index/" + indexItem.mainid}
          style={{ maxWidth: "73%", margin: "20px auto" }}
        >
          <img alt="" src={indexItem.mainimg} className="gx-w-100" />
        </Link>
      }
    >
      <Meta
        avatar={null}
        title={
          <Link to={"/carcatalog/index/" + indexItem.mainid}>
            {indexItem.markname}
          </Link>
        }
        description={indexItem.firmname}
      />
      <Paragraph
        className="gx-mt-3"
        ellipsis={{ rows: 2, expandable: true, symbol: <CaretDownOutlined /> }}
      >
        {indexItem.desceng}
      </Paragraph>
      <div className="moto-card-badge">
        <Badge count={indexItem.count} />
      </div>
    </Card>
  );
};

export default CarcatalogIndexItem1;
