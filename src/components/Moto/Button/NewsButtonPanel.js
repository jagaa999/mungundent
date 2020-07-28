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

import { LoadProcess, loadDataview } from "util/axiosFunction";
import NewsContext from "context/NewsContext";

const NewsButtonPanel = () => {
  const newsContext = useContext(NewsContext);
  const newsItem = newsContext.state.newsDetail;

  // console.log(newsItem);

  const menuMemberActions = (myLike, mySave) => (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Таалагдлаа">
        <Checkbox checked={myLike}>Таалагдлаа</Checkbox>
      </Menu.Item>
      <Menu.Item key="Жоорлох">
        <Checkbox checked={mySave}>Жоорлох</Checkbox>
      </Menu.Item>
      <Divider />
      <Menu.Item key="Алдаатай">
        <WarningTwoTone twoToneColor="#eb2f96" /> Алдаа мэдэгдэх
      </Menu.Item>
    </Menu>
  );

  const menuOwnerActions = () => (
    <Menu>
      <Menu.Item key="Дээшлүүлэх" onClick={newsContext.upPublishedDate}>
        <ArrowUpOutlined /> Дээшлүүлэх
      </Menu.Item>

      <Menu.Item key="Спонсор">
        <Checkbox
          checked={toBoolean(newsItem.isfeatured)}
          onChange={newsContext.toggleIsFeatured}
        >
          Спонсор
        </Checkbox>
      </Menu.Item>
      <Menu.Item key="Идэвхтэй">
        <Checkbox
          checked={toBoolean(newsItem.isactive)}
          onChange={newsContext.toggleIsActive}
        >
          Идэвхтэй
        </Checkbox>
      </Menu.Item>
      <Divider />
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
            <Dropdown
              overlay={menuMemberActions}
              placement="bottomRight"
              trigger={["click"]}
              arrow
            >
              <Tooltip title="Таны үйлдлүүд">
                <i className="gx-icon-btn icon icon-wall" />
              </Tooltip>
            </Dropdown>
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
