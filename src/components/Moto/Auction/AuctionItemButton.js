import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Alert, Row, Col, Image, Descriptions, Tooltip, Button } from "antd";
import MyIcon from "util/iconFunction";
import CompareContext from "context/CompareContext";

const AuctionItemButton = ({ auctionItem }) => {
  // console.log("auctionItem", auctionItem);
  const compareContext = useContext(CompareContext);

  if (Object.keys(auctionItem).length !== 0) {
    return (
      <>
        <Tooltip title="Харьцуулалтад нэмэх">
          <Button
            key="moto-filter-button"
            size="small"
            icon={<MyIcon type="iconcompare" />}
            onClick={(e) => compareContext.addItem(auctionItem, "auction")}
            // className="moto-badge-4"
            className="gx-m-0"
            style={{ width: "40px" }}
          ></Button>
        </Tooltip>

        <Button
          checked={false}
          key="moto-button-like"
          size="small"
          icon={<MyIcon type="iconfavorites" />}
          // onClick={(e) => actionMine(e, "Таалагдлаа", myIsLike.id)}
          className="gx-m-0 gx-ml-2"
          style={{ width: "40px" }}
        ></Button>
      </>
    );
  } else {
    return "";
  }
};

export default AuctionItemButton;
