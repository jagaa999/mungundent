import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Tabs, Button, Table, Image, Tag, Tooltip } from "antd";
import CompareContext from "context/CompareContext";

const CompareItems = () => {
  const compareContext = useContext(CompareContext);

  console.table(compareContext.compareList.compareList);

  const myTable = {
    AUCTION: ["MIRIVE Osaka", "TOKYO", "JAPAN"],
    AUCTION_DATE: ["2020-12-24 11:40:00", "", "2020-12-25 15:10:00"],
    AVG_PRICE: ["1903000", "2103590", "1098054"],
    COLOR: ["silver", "", ""],
  };

  let myTable3 = {};
  let myColumn3 = [
    {
      title: "Үзүүлэлт",
      dataIndex: "label",
    },
  ];
  const myDistinct = [];

  compareContext.compareList.compareList.map((item, index) => {
    const originalItem = item.originalItem;
    const { image, link, mainSpec } = item;

    const myItem = <Image src={item.image} />;

    const myColItem = {
      title: (
        <div style={{ position: "relative", width: "100%" }}>
          <Image src={item.image} />
          <Tag color="warning" className="moto-badge-2-1">
            {item.mainSpec}
          </Tag>
          <h5 className="gx-mt-2">
            <Link to={item.link || "/"}>{item.title || "Тодорхойгүй"}</Link>
          </h5>
          <div className="gx-fs-sm gx-mt-2 gx-d-none gx-d-sm-block">
            {item.subSpecs.map((subSpec, index) => (
              <Tooltip title={subSpec.title} key={index}>
                <span className="moto-label-main ant-tag">{subSpec.value}</span>
              </Tooltip>
            ))}
          </div>
        </div>
      ),
      dataIndex: ["item" + (index * 1 + 1)],
    };
    myColumn3.push(myColItem);

    Object.keys(originalItem).map((ii, index) => {
      if (!myDistinct.includes(ii)) {
        myDistinct.push(ii);
        myTable3 = { ...myTable3, [ii]: [] };
      }
    });
  });

  const columnTaa2 = [
    {
      title: "Үзүүлэлт",
      dataIndex: "label",
      key: "title",
    },
    {
      title: "1",
      dataIndex: "item1",
      key: "item1",
    },
    {
      title: "2",
      dataIndex: "item2",
      key: "item2",
    },
    {
      title: "3",
      dataIndex: "item3",
      key: "item3",
    },
  ];

  // console.log("myDistinct", myDistinct);
  // console.log("myTable3", myTable3);

  compareContext.compareList.compareList.map((item, index) => {
    const originalItem = item.originalItem;

    myDistinct.map((fff, index) => {
      myTable3[fff].push(originalItem[fff] || "");
    });
  });

  // console.log("AGAIN → myTable3", myTable3);

  let myTaaa = [];
  Object.keys(myTable3).map((item, index) => {
    let myRow = { key: index, label: item };
    myTable3[item].map((value, valueindex) => {
      myRow = {
        ...myRow,
        ["item" + (valueindex * 1 + 1)]: value,
      };
    });

    myTaaa.push(myRow);
  });

  // console.log("myTaaa", myTaaa);

  return (
    <>
      <h2>Харьцуулах</h2>
      <Button onClick={compareContext.toggleDrawer}>Харьцуулах </Button>

      <Table
        dataSource={myTaaa}
        // columns={columnTaa2}
        columns={myColumn3}
        pagination={false}
        tableLayout="fixed"
      />
    </>
  );
};

export default CompareItems;
