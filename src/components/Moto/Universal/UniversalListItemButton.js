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

const UniversalListItemButton = ({ myUniversalItem }) => {
  const compareContext = useContext(CompareContext);
  const memberItemsContext = useContext(MemberItemsContext);
  const { loveButtonData, saveButtonData } = myUniversalItem;

  const actionMine = (isChecked, id, myButtonData) => {
    if (isChecked) {
      memberItemsContext.saveMemberItem(myButtonData);
    } else {
      memberItemsContext.deleteMemberItem(id);
    }
  };

  let myIsLove = {
    id: null,
    checked: false,
  };
  let myIsSave = {
    id: null,
    checked: false,
  };

  Object.keys(memberItemsContext.state.memberItems).map((item, index) => {
    const myItem = memberItemsContext.state.memberItems[index];
    if (
      myItem.recordid === loveButtonData.recordid &&
      myItem.tablename === loveButtonData.tablename
    ) {
      switch (myItem.actionname) {
        case "Таалагдлаа":
          myIsLove.id = myItem.id;
          myIsLove.checked = true;
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

  // console.log("myIsLove", myIsLove);

  if (Object.keys(myUniversalItem).length !== 0) {
    return (
      <>
        <Tooltip title="Харьцуулалтад нэмэх" key="add-compare">
          <Button
            key="moto-filter-button"
            type="default"
            icon={<MyIcon type="iconcheck-double-solid" />}
            onClick={(e) =>
              compareContext.addItem(
                myUniversalItem,
                myUniversalItem.mainData.menu
              )
            }
            className="gx-m-0"
            style={{ width: "40px" }}
          ></Button>
        </Tooltip>

        <Tooltip title="Надад таалагдлаа!" key="add-love">
          <Button
            checked={false}
            key="moto-button-love"
            type={myIsLove.checked ? "primary" : "default"}
            icon={<MyIcon type="iconlove" className="moto-icon-1-1" />}
            onClick={(e) =>
              actionMine(!myIsLove.checked, myIsLove.id, loveButtonData)
            }
            className={`gx-m-0 gx-ml-2 ${
              myIsLove.checked ? "gx-btn-purple" : "gx-text-purple"
            }`}
            style={{ width: "40px" }}
          ></Button>
        </Tooltip>

        <Tooltip title="Жоорлох!" key="add-box">
          <Button
            checked={false}
            key="moto-button-save"
            type={myIsSave.checked ? "primary" : "default"}
            icon={<MyIcon type="iconbox" className="moto-icon-1-1" />}
            onClick={(e) =>
              actionMine(!myIsSave.checked, myIsSave.id, saveButtonData)
            }
            className={`gx-m-0 gx-ml-2 ${
              myIsSave.checked ? "gx-btn-green" : "gx-text-green"
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

export default UniversalListItemButton;
