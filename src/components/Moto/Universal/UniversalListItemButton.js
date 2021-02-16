import React, { useContext, useEffect, useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Tooltip, Button, Dropdown, Menu, Switch } from "antd";
import MyIcon from "util/iconFunction";
import CompareContext from "context/CompareContext";
import MemberItemsContext from "context/MemberItemsContext";
import ErrorReportModal from "components/Moto/Error/ErrorReportModal";

const UniversalListItemButton = ({ myUniversalItem, isDetail = false }) => {
  const compareContext = useContext(CompareContext);
  const memberItemsContext = useContext(MemberItemsContext);
  const { loveButtonData, saveButtonData } = myUniversalItem;

  const [showErrorReportModal, setShowErrorReportModal] = useState(false);

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
      myItem?.recordid === loveButtonData?.recordid &&
      myItem?.tablename === loveButtonData?.tablename
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

  if (Object.keys(myUniversalItem).length === 0) return null;

  const menu = (
    <Menu>
      <Menu.Item
        key="add-compare"
        onClick={(e) =>
          compareContext.addItem(myUniversalItem, myUniversalItem.mainData.menu)
        }
        icon={<MyIcon type="iconcheck-square-solid" />}
      >
        <Tooltip title="Харьцуулахаар нэмэх" placement="right">
          Харьцуулах
        </Tooltip>
      </Menu.Item>

      <Menu.Item
        key="add-box"
        icon={<MyIcon type="iconinbox-solid" />}
        onClick={(e) =>
          actionMine(!myIsSave.checked, myIsSave.id, saveButtonData)
        }
      >
        <Tooltip title="Жоорондоо нэмэх" placement="right">
          Жоорлох
          <Switch size="small" checked={myIsSave.checked} className="gx-ml-4" />
        </Tooltip>
      </Menu.Item>
    </Menu>
  );

  return (
    <span
      className={`moto-item-control-button-member ${
        isDetail ? "isdetail" : "islist"
      }`}
    >
      <Tooltip title="Надад таалагдлаа!" key="add-love">
        <Button
          checked={false}
          // type={isDetail ? "default" : "text"}
          icon={
            <MyIcon
              type="iconlove"
              // className={isDetail ? "moto-icon-1-3" : "moto-icon-1-1"}
              className={isBrowser && "moto-icon-1-3"}
            />
          }
          onClick={(e) =>
            actionMine(!myIsLove.checked, myIsLove.id, loveButtonData)
          }
          // className={`${isDetail ? "gx-m-0 gx-ml-2" : "gx-m-0 gx-ml-1"} ${
          //   myIsLove.checked ? "gx-btn-purple" : "gx-text-purple"
          // }`}
          className={`gx-m-0 ${
            myIsLove.checked ? "gx-btn-purple" : "gx-btn-outline-light"
          }`}
          // size={isDetail ? "default" : "small"}
          size={isBrowser ? "default" : "small"}
          style={{ width: isBrowser && "40px" }}
        ></Button>
      </Tooltip>

      <Dropdown overlay={menu} trigger={["click"]}>
        <Tooltip title={null} key="button-menu">
          <Button
            icon={
              <MyIcon
                type="iconellipsis-h-solid"
                className={isBrowser && "moto-icon-1-3"}
              />
            }
            className="gx-m-0 gx-ml-2 gx-btn-outline-light"
            size={isBrowser ? "default" : "small"}
            style={{ width: isBrowser && "40px" }}
          ></Button>
        </Tooltip>
      </Dropdown>

      {/* <Tooltip title="Харьцуулалтад нэмэх" key="add-compare">
        <Button
          type={isDetail ? "default" : "text"}
          icon={
            <MyIcon
              type="iconcheck-square-solid"
              className={isDetail ? "moto-icon-1-3" : "moto-icon-1-1"}
            />
          }
          onClick={(e) =>
            compareContext.addItem(
              myUniversalItem,
              myUniversalItem.mainData.menu
            )
          }
          className="gx-m-0"
          size={isDetail ? "default" : "small"}
        ></Button>
      </Tooltip> */}

      {/* <Tooltip title="Жоорлох!" key="add-box">
        <Button
          checked={false}
          type={myIsSave.checked ? "primary" : isDetail ? "default" : "text"}
          icon={
            <MyIcon
              type="iconinbox-solid"
              className={isDetail ? "moto-icon-1-3" : "moto-icon-1-1"}
            />
          }
          onClick={(e) =>
            actionMine(!myIsSave.checked, myIsSave.id, saveButtonData)
          }
          // className="gx-m-0 gx-ml-2"
          className={isDetail ? "gx-m-0 gx-ml-2" : "gx-m-0 gx-ml-1"}
          size={isDetail ? "default" : "small"}
        ></Button>
      </Tooltip> */}

      {isDetail && (
        <>
          <Tooltip title="Алдаа мэдэгдэх" key="report-error">
            <Button
              checked={false}
              type={myIsSave.checked ? "primary" : "default"}
              icon={
                <MyIcon
                  type="iconexclamation-triangle-solid"
                  className={isDetail ? "moto-icon-1-3" : "moto-icon-1-1"}
                />
              }
              onClick={() => {
                setShowErrorReportModal(true);
              }}
              className="gx-m-0 gx-ml-2"
            ></Button>
          </Tooltip>
          <ErrorReportModal
            showErrorReportModal={showErrorReportModal}
            setShowErrorReportModal={setShowErrorReportModal}
            item={myUniversalItem}
            tablename={myUniversalItem.loveButtonData.tablename}
            actionname="Алдаа илгээв"
            recordid={myUniversalItem.loveButtonData.recordid}
            imagemain={myUniversalItem.loveButtonData.mainimg}
          />
        </>
      )}
    </span>
  );
};

export default UniversalListItemButton;
