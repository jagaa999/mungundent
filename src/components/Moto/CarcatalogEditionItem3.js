import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Image } from "cloudinary-react";
import { defaultSrc } from "util/config";
import toBoolean from "util/booleanFunction";
import {
  Button,
  Badge,
  Tooltip,
  Row,
  Col,
  Dropdown,
  Menu,
  Avatar,
  message,
  Modal,
  Divider,
  Card,
  Table,
  Tag,
  Space,
  Typography,
} from "antd";

import {
  MailOutlined,
  MessageOutlined,
  BellOutlined,
  UnorderedListOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import moment from "moment";
import "moment/locale/mn";

const { Meta } = Card;
const { Paragraph } = Typography;

const MarkItem = ({ editionItems, count }) => {
  console.log("Манай Edition - ", editionItems);

  const columns = [
    {
      title: "",
      dataIndex: "mainimg",
      key: "mainimg",
      fixed: "left",
      render: (mainimg) => (
        <img
          src={mainimg}
          alt={mainimg}
          className="gx-d-block"
          style={{ height: "24px", minHeight: "24px", maxWidth: "fit-content" }}
        />
      ),
    },

    {
      title: "Хувилбар",
      dataIndex: "cartrim",
      key: "cartrim",
      render: (cartrim, record) => (
        <>
          <Link to={"/carcatalog/edition/" + record.id}>{cartrim}</Link>
          <div
            className="gx-d-flex"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <Tooltip title="Хийц" className="gx-d-none gx-d-sm-block">
              <span className="moto-label-main ant-tag">
                {record.body2bodyname}
              </span>
            </Tooltip>
            <Tooltip title="Хөтлөгч">
              <span className="moto-label-main ant-tag">
                {record.drive2drivename}
              </span>
            </Tooltip>
            <span className="gx-fs-sm">{record.drive2transmissionfull}</span>
          </div>
        </>
      ),
      sorter: (a, b) => a.cartrim.localeCompare(b.cartrim),
    },
    {
      title: "Мотор",
      dataIndex: "engine2disp",
      key: "engine2disp",
      sorter: (a, b) => a.engine2disp - b.engine2disp,
      sortDirections: ["descend", "ascend"],
      // render: (engine2disp) => <span>{engine2disp}</span>,
      ellipsis: true,
    },
    {
      title: "Арал",
      dataIndex: "body2modelcodefull",
      key: "body2modelcodefull",
      // render: (body2modelcodefull) => <span>{body2modelcodefull}</span>,
      ellipsis: true,
    },
    {
      title: "Ха/Су",
      dataIndex: "body2door",
      key: "body2door",
      responsive: ["lg"],
      render: (body2door, record) => (
        <span>
          {body2door} / {record.body2seat}
        </span>
      ),
      ellipsis: true,
    },
    {
      title: "Жишиг",
      dataIndex: "pricenewusd",
      key: "pricenewusd",
      responsive: ["md"],
      // render: (pricenewusd) => <span>{pricenewusd}</span>,

      sorter: (a, b) => a.pricenewusd - b.pricenewusd,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "ascend",
      ellipsis: true,
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={editionItems}
      pagination={false}
      tableLayout="auto"
    />
  );
};

export default MarkItem;
