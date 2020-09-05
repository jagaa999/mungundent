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

import FilterContext from "context/FilterContext";
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
  const filterContext = useContext(FilterContext);
  const history = useHistory();

  return (
    <PageHeader
      title={
        <h3>
          {props.title}
          {filterContext.totalcount > 0 ? (
            <span className="gx-ml-2 gx-text-grey gx-fs-sm">
              ({filterContext.totalcount})
            </span>
          ) : (
            ""
          )}
        </h3>
      }
      extra={[
        // <MotoPagination type={"simple"} myClass="gx-float-left" />,
        <MotoSort key="motosort" />,
        <Button
          key="motobutton"
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
  );
};

export default NewsListIActionHeader;
