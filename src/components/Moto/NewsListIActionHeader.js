import React, { useState, useContext } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import {
  Button,
  Checkbox,
  Avatar,
  Tag,
  PageHeader,
  Menu,
  Dropdown,
  Typography,
  Row,
} from "antd";

import {
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "./Sort/MotoSort";
const { Paragraph } = Typography;

const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const NewsListIActionHeader = (props) => {
  const history = useHistory();

  return (
    <>
      <PageHeader
        title={props.title}
        extra={[
          <MotoPagination type={"simple"} myClass="gx-float-left" />,
          <MotoSort />,
          <Button
            type="primary"
            size="small"
            className="gx-bg-success gx-border-success"
            htmlType="submit"
            icon={<PlusOutlined />}
            onClick={() => {
              history.push({
                pathname: "/news/insert",
              });
            }}
          >
            Нэмэх
          </Button>,
        ]}
      ></PageHeader>
    </>
  );
};

export default NewsListIActionHeader;
