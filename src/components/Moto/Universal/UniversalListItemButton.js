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
  const { saveButtonData } = myUniversalItem;

  const actionSave = () => {
    const myValues = {
      ...saveButtonData,
      actiondata: "1",
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

  Object.keys(memberItemsContext.state.memberItems).map((item, index) => {
    const myItem = memberItemsContext.state.memberItems[index];
    if (
      myItem.recordid === saveButtonData.recordid &&
      myItem.tablename === saveButtonData.tablename
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

  if (Object.keys(myUniversalItem).length !== 0) {
    return (
      <>
        <Tooltip title="Харьцуулалтад нэмэх" key="add-compare">
          <Button
            key="moto-filter-button"
            size="large"
            type="text"
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
            key="moto-button-like"
            size="large"
            // type="text"
            type={myIsLike.checked ? "primary" : "text"}
            icon={<MyIcon type="iconlove" className="moto-icon-1-1" />}
            onClick={(e) =>
              actionMine(!myIsLike.checked, "Таалагдлаа", myIsLike.id)
            }
            className={`gx-m-0 ${
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

export default UniversalListItemButton;
