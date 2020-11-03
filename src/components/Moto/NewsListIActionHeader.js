import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Button, PageHeader, Typography } from "antd";
import {
  PlusOutlined,
  FilterOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";

import FilterContext from "context/FilterContext";
import NewsListContext from "context/NewsListContext";
import MotoSort from "./Sort/MotoSort";

const NewsListIActionHeader = (props) => {
  const filterContext = useContext(FilterContext);
  const newsListContext = useContext(NewsListContext);
  const history = useHistory();

  const toggleFilterDrawer = () => {
    newsListContext.toggleFilterDrawerOpen();
  };

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
        <Button
          key="moto-filter-button"
          type="text"
          icon={<i className="icon icon-filter moto-animation-away" />}
          onClick={toggleFilterDrawer}
          className="gx-mr-0"
        ></Button>,

        <Button
          key="moto-insert-button"
          type="text"
          // className="gx-bg-success gx-border-success"
          // htmlType="submit"
          // icon={<PlusOutlined />}
          icon={<i className="icon icon-add" />}
          className="gx-mx-0 gx-text-success"
          onClick={() => {
            history.push({
              pathname: "/news/insert",
            });
          }}
        ></Button>,

        <MotoSort key="motosort" />,

        // <Button
        //   key="motobutton"
        //   type="primary"
        //   size="small"
        //   className="gx-bg-success gx-border-success"
        //   htmlType="submit"
        //   icon={<PlusOutlined />}
        //   onClick={() => {
        //     history.push({
        //       pathname: "/news/insert",
        //     });
        //   }}
        // ></Button>,
      ]}
    ></PageHeader>
  );
};

export default NewsListIActionHeader;
