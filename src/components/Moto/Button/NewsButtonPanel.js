import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import {
  Button,
  Card,
  Badge,
  Tooltip,
  Row,
  Col,
  Dropdown,
  Menu,
  Checkbox,
  Switch,
  message,
  Divider,
  Spin,
} from "antd";

import {
  WarningTwoTone,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  EditOutlined,
} from "@ant-design/icons";

import NewsContext from "context/NewsContext";
import MemberItemsContext from "context/MemberItemsContext";

const NewsButtonPanel = () => {
  const newsDetailContext = useContext(NewsContext);
  const memberItemsContext = useContext(MemberItemsContext);
  const newsItem = newsDetailContext.newsDetail.mainDetail;

  // console.log(newsItem);
  const actionSave = (actionname) => {
    const myValues = {
      id: "",
      tablename: "ECM_NEWS",
      recordid: newsItem.newsid || "",
      actionname: actionname || "Таалагдлаа",
      actiondata: "1",
      description: newsItem.title,
    };

    memberItemsContext.saveMemberItem(myValues);
  };

  const actionDelete = (id) => {
    memberItemsContext.deleteMemberItem(id);
  };

  const actionMine = (event, actionname, id) => {
    // console.log("actionSave - e: ", event);
    // console.log("actionSave - actionname: ", actionname);
    const isChecked = event.target.checked || false;

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
    // console.log("memberItemsContext.memberItems.memberItems", myItem);
    if (myItem.recordid === newsItem.newsid) {
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

  const menuMemberActions = () => (
    <Menu>
      <Menu.Item key="Таалагдлаа">
        <Checkbox
          checked={myIsLike.checked}
          onChange={(e) => actionMine(e, "Таалагдлаа", myIsLike.id)}
        >
          Таалагдлаа
        </Checkbox>
      </Menu.Item>
      <Menu.Item key="Жоорлох">
        <Checkbox
          checked={myIsSave.checked}
          onChange={(e) => actionMine(e, "Жоорлох", myIsSave.id)}
        >
          Жоорлох
        </Checkbox>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="Алдаатай">
        <WarningTwoTone twoToneColor="#eb2f96" /> Алдаа мэдэгдэх
      </Menu.Item>
    </Menu>
  );

  const menuOwnerActions = () => (
    <Menu>
      <Menu.Item key="Дээшлүүлэх" onClick={newsDetailContext.upPublishedDate}>
        <ArrowUpOutlined /> Дээшлүүлэх
      </Menu.Item>

      <Menu.Item key="Спонсор">
        <Checkbox
          checked={toBoolean(newsItem.isfeatured)}
          onChange={newsDetailContext.toggleIsFeatured}
        >
          Спонсор
        </Checkbox>
      </Menu.Item>
      <Menu.Item key="Идэвхтэй">
        <Checkbox
          checked={toBoolean(newsItem.isactive)}
          onChange={newsDetailContext.toggleIsActive}
        >
          Идэвхтэй
        </Checkbox>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="Засах">
        <Link to={"/news/edit/" + newsItem.newsid}>
          <EditOutlined /> Засах
        </Link>
      </Menu.Item>
      <Menu.Item key="Устгах" onClick={handleMenuClick} danger disabled>
        <DeleteOutlined /> Устгах
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log(e);
  }

  // console.log("newsItem", newsItem);

  return (
    <div className="gx-product-footer">
      <div className="ant-row-flex">
        <div className="gx-module-contact-content">
          <span>
            <Tooltip title={newsItem.publisherpositionname}>
              <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                <img
                  src={newsItem.publisherphoto}
                  alt={newsItem.publishername}
                />
              </span>
              <span className="gx-text-grey gx-fs-sm gx-mx-2">
                {newsItem.publishername}
              </span>
            </Tooltip>
          </span>
        </div>
        <div className="gx-ml-auto">
          <span style={{ display: "inline-flex" }}>
            <Tooltip title="Таны үйлдлүүд">
              <Dropdown
                overlay={menuMemberActions}
                placement="bottomRight"
                trigger={["click"]}
                arrow
              >
                <i className="gx-icon-btn icon icon-wall" />
              </Dropdown>
            </Tooltip>
          </span>
          <span style={{ display: "inline-flex" }}>
            <Dropdown
              overlay={menuOwnerActions}
              placement="bottomRight"
              trigger={["click"]}
              // visible="true"
              arrow
            >
              <Tooltip title="Эзний үйлдлүүд">
                <i className="gx-icon-btn icon icon-setting" />
              </Tooltip>
            </Dropdown>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsButtonPanel;
