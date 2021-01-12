import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Button, Affix, BackTop, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import NewsListItem1 from "./NewsListItem1";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsContext from "context/NewsContext";
import NewsFilterDrawer from "./Drawer/NewsFilterDrawer";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const NewsListType1 = () => {
  const newsListContext = useContext(NewsContext);

  return (
    <div className="moto-list">
      <div className="">
        <FilterTag />
      </div>

      {!newsListContext.newsList.loading ? (
        <div className="gx-main-content">
          <NewsListIActionHeader title="Нийтлэл" />

          <Row className="gx-d-flex">
            {newsListContext.newsList.mainList.map((newsItem, index) => {
              newsItem.imageMain = newsItem.imagemain;
              return (
                <Col key={index} span={24}>
                  <NewsListItem1 key={index} newsItem={newsItem} />
                </Col>
              );
            })}
          </Row>
          <MotoPagination />
          <NewsFilterDrawer />
          <AffixButtonInsert link="news" />
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default NewsListType1;
