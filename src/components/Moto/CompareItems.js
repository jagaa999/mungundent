import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Button, Table, Image, Tag, Tooltip, PageHeader } from "antd";
import MyIcon from "util/iconFunction";
import CompareContext from "context/CompareContext";
import { motoSpecAuction } from "util/carSpecTranslation";

const CompareItems = () => {
  const compareContext = useContext(CompareContext);

  console.table(compareContext.compareList.compareList);

  // const myTable = {
  //   AUCTION: ["MIRIVE Osaka", "TOKYO", "JAPAN"],
  //   AUCTION_DATE: ["2020-12-24 11:40:00", "", "2020-12-25 15:10:00"],
  //   AVG_PRICE: ["1903000", "2103590", "1098054"],
  //   COLOR: ["silver", "", ""],
  // };
  // const columnTaa2 = [
  //   {
  //     title: "Үзүүлэлт",
  //     dataIndex: "label",
  //     key: "title",
  //   },
  //   {
  //     title: "1",
  //     dataIndex: "item1",
  //     key: "item1",
  //   },
  // ];

  let myTable3 = {};
  let myColumn3 = [
    {
      title: "",
      dataIndex: "label",
    },
  ];
  const myDistinct = [];

  compareContext.compareList.compareList.map((item, index) => {
    const originalItem = item.originalItem;

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
        // console.log("ii ii Distinct s", ii);
        // console.log("motoSpecAuction[ii]", motoSpecAuction[ii]);

        if (motoSpecAuction[ii]?.active !== "0") {
          //active: 0 эсэхийг шалгаж байна.
          myDistinct.push(ii); //active: 1 байвал Table рүүгээ нэмнэ.
          myTable3 = { ...myTable3, [ii]: [] };
        }
      }
    });
  });

  // console.log("myDistinct", myDistinct);
  // console.log("myTable3", myTable3);

  compareContext.compareList.compareList.map((item, index) => {
    const originalItem = item.originalItem;

    myDistinct.map((fff, index) => {
      console.log("originalItem[fff]", originalItem[fff]);
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

  console.log("myTaaa", myTaaa);
  //Эхний title-ийг орчуулна.
  //AUCTION → "Аукшин"
  myTaaa.map((row, index) => {
    // myTaaa[index].label =
    //   motoSpecAuction[myTaaa[index].label].title || myTaaa[index].label; //хэрвээ орчуулга олдохгүй бол байгааг нь буцаагаад тавина
    myTaaa[index].label = myTaaa[index].label; //хэрвээ орчуулга олдохгүй бол байгааг нь буцаагаад тавина
  });

  // console.log("myTaaa", myTaaa);
  // console.log("myColumn3", myColumn3);

  return (
    <>
      <PageHeader
        className="moto-pageheader"
        title={<h3>Харьцуулах</h3>}
        extra={[
          <Tooltip title="Харьцуулалт нээх" key="dsfsdf">
            <Button
              key="moto-filter-button"
              // size="small"
              type="primary"
              icon={<MyIcon type="iconcrosshairs" />}
              onClick={compareContext.toggleDrawer}
              // className="gx-ml-1 gx-mr-0"
              // style={{ width: "40px" }}
            >
              Харьцуулах
            </Button>
          </Tooltip>,
        ]}
      />

      <Table
        className="moto-compare-table"
        dataSource={myTaaa}
        columns={myColumn3}
        pagination={false}
        tableLayout="fixed"
      />
    </>
  );
};

export default CompareItems;
