import React, { useEffect, useContext, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import { Col, Row, Button, Affix, Card, Avatar } from "antd";
import {
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { defaultSrc } from "util/config";

// import NewsListItem from "components/Moto/NewsListItem";
import NewsListItem2 from "./NewsListItem2";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsListContext from "../../context/NewsListContext";
import FilterContext from "context/FilterContext";
import NewsFilterDrawer from "./Drawer/NewsFilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "./Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Meta } = Card;

const NewsListType2 = () => {
  const history = useHistory();
  const newsListContext = useContext(NewsListContext);

  return (
    <div>
      <FilterTag />

      {!newsListContext.state.loading ? (
        <div className="gx-main-content gx-p-2 gx-p-sm-0">
          <NewsListIActionHeader title="Нийтлэл" />

          <Row className="gx-d-flex">
            {newsListContext.state.newsList.map((newsItem, index) => {
              return (
                <Col
                  key={index}
                  xl={6}
                  md={8}
                  sm={12}
                  xs={12}
                  className="gx-mb-5"
                >
                  <NewsListItem2 key={index} newsItem={newsItem} />
                </Col>
              );
            })}
          </Row>
          <MotoPagination />
          <NewsFilterDrawer />
        </div>
      ) : (
        <LoadingList type="card" />
      )}
    </div>
  );
};

export default NewsListType2;
