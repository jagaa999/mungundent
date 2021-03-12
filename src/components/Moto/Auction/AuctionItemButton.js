import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Alert, Row, Col, Image, Descriptions, Tooltip, Button } from "antd";
import MyIcon from "util/iconFunction";
import CompareContext from "context/CompareContext";
import MemberItemsContext from "context/MemberItemsContext";

const AuctionItemButton = ({ auctionItem }) => {
  const htmlEntities = new Html5Entities();
  // console.log("auctionItem", auctionItem);
  const compareContext = useContext(CompareContext);
  const memberItemsContext = useContext(MemberItemsContext);

  // console.log(auctionItem);
  const actionSave = (actionname) => {
    const myImages = auctionItem.IMAGES.split("#");

    const myValues = {
      id: "",
      tablename: "MOTO_AUCTION",
      recordid: auctionItem.ID || "",
      actionname: actionname || "Таалагдлаа",
      actiondata: "1",
      description: `${auctionItem.YEAR} ${htmlEntities.decode(
        auctionItem.MARKA_NAME
      )} ${htmlEntities.decode(auctionItem.MODEL_NAME)}`,
      mainimg: myImages[1],
    };

    memberItemsContext.saveMemberItem(myValues);
  };

  const actionDelete = (id) => {
    memberItemsContext.deleteMemberItem(id);
  };

  const actionMine = (isChecked, actionname, id) => {
    if (isChecked) {
      actionSave(actionname);
    } else {
      actionDelete(id);
    }
  };

  let myIsLike = {
    id: null,
    checked: false,
  };
  let myIsSave = {
    id: null,
    checked: false,
  };

  Object.keys(memberItemsContext.memberItems.memberItems).map((item, index) => {
    const myItem = memberItemsContext.memberItems.memberItems[index];
    if (
      myItem.recordid === auctionItem.ID &&
      myItem.tablename === "MOTO_AUCTION"
    ) {
      switch (myItem.actionname) {
        case "Таалагдлаа":
          myIsLike.id = myItem.id;
          myIsLike.checked = true;
          break;
        case "Жоорлох":
          myIsSave.id = myItem.id;
          myIsSave.checked = true;
          break;
        default:
          break;
      }
    }
  });

  // console.log("myIsLike", myIsLike);

  if (Object.keys(auctionItem).length !== 0) {
    return (
      <>
        <Tooltip title="Харьцуулалтад нэмэх" key="add-compare">
          <Button
            key="moto-filter-button"
            size="large"
            type="text"
            icon={<MyIcon type="iconcrosshairs" />}
            onClick={(e) => compareContext.addItem(auctionItem, "auction")}
            className="gx-m-0"
            style={{ width: "40px" }}
          ></Button>
        </Tooltip>

        <Tooltip title="Надад таалагдлаа!" key="add-love">
          <Button
            checked={false}
            key="moto-button-like"
            size="large"
            // type="text"
            type={myIsLike.checked ? "primary" : "text"}
            icon={<MyIcon type="iconlove" className="moto-icon-1-1" />}
            onClick={(e) =>
              actionMine(!myIsLike.checked, "Таалагдлаа", myIsLike.id)
            }
            className={`gx-m-0 gx-ml-2 ${
              myIsLike.checked ? "gx-btn-purple" : "gx-text-purple"
            }`}
            style={{ width: "40px" }}
          ></Button>
        </Tooltip>
      </>
    );
  } else {
    return "";
  }
};

export default AuctionItemButton;
