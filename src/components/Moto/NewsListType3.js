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

// import NewsListItem from "components/Moto/NewsListItem";
import NewsListItem3 from "./NewsListItem3";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "components/Moto/Drawer/FilterDrawer";
import FilterTag from "components/Moto/Tag/FilterTag";
import MotoPagination from "components/Moto/Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Meta } = Card;

const NewsListType2 = () => {
  const history = useHistory();
  const newsListContext = useContext(NewsListContext);

  return (
    <div>
      <div className="">
        <FilterTag />
      </div>

      {!newsListContext.state.loading ? (
        <div className="gx-main-content">
          <NewsListIActionHeader title="Нийтлэл" />

          <Row className="gx-d-flex">
            <Col key="dffdf" xs={24}>
              <NewsListItem3
                key="dfdfd"
                newsItems={newsListContext.state.newsList}
              />
            </Col>
          </Row>

          {/* <Row className="gx-d-flex">
            {newsListContext.state.newsList.map((el, index) => {
              const newsItem = el;
              newsItem.imageMain = el.imagemain;
              return (
                <Col
                  key={index}
                  xl={6}
                  md={8}
                  sm={12}
                  xs={24}
                  className="gx-mb-5"
                >
                  <NewsListItem3 key={index} newsItem={newsItem} />
                </Col>
              );
            })}
          </Row> */}
          <MotoPagination />
          <FilterDrawer />
        </div>
      ) : (
        <LoadingList type="card" />
      )}
    </div>
  );
};

export default NewsListType2;
