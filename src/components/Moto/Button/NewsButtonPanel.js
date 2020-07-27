import React, { useState, useContext } from "react";
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
  ArrowUpOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { LoadProcess, loadDataview } from "util/axiosFunction";
import NewsContext from "context/NewsContext";

const NewsButtonPanel = () => {
  const newsContext = useContext(NewsContext);
  const newsItem = newsContext.state.newsDetail;

  console.log(newsItem);

  // const [memberActions, setMemberActions] = useState({});
  // const [ownerActions, setOwnerActions] = useState({
  //   isFeatured: newsItem.isfeatured,
  //   isActive: newsItem.isactive,
  // });

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

  function toggleFeature(e) {
    newsContext.toggleIsFeatured();
  }

  const menuOwnerActions = (myLike, mySave) => (
    <Menu>
      <Menu.Item key="Дээшлүүлэх" onClick={handleMenuClick}>
        <ArrowUpOutlined /> Дээшлүүлэх
      </Menu.Item>
      <Menu.Item key="Засах" onClick={handleMenuClick}>
        <EditOutlined /> Засах
      </Menu.Item>
      <Divider />
      <Menu.Item key="Спонсор">
        <Checkbox checked={myLike} onChange={toggleFeature}>
          Спонсор
        </Checkbox>
      </Menu.Item>
      <Menu.Item key="Идэвхтэй">
        <Checkbox checked={mySave} onChange={gogof}>
          Идэвхтэй
        </Checkbox>
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log(e);
  }

  function gogof(e) {
    console.log("checkbox", e);
  }

  // console.log("newsItem", newsItem);

  return (
    <div className="gx-product-footer">
      <div className="ant-row-flex">
        <div className="gx-module-contact-content">
          <span>{!!+newsItem.isfeatured ? "Спонсор" : "Спонсор биш"}</span>
          <span>{!!+newsItem.isactive ? "Идэвхтэй" : "Идэвхгүй"}</span>
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
                <i className="gx-icon-btn icon icon-ellipse-v" />
              </Tooltip>
            </Dropdown>
          </span>
          <span style={{ display: "inline-flex" }}>
            <Dropdown
              overlay={menuOwnerActions}
              placement="bottomRight"
              trigger={["click"]}
              visible="true"
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
