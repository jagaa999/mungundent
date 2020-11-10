import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Affix } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import NewsListItem1 from "./NewsListItem1";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import NewsFilterDrawer from "./Drawer/NewsFilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const NewsListType1 = () => {
  const newsListContext = useContext(NewsListContext);

  return (
    <div className="moto-list">
      <div className="">
        <FilterTag />
      </div>

      {!newsListContext.state.loading ? (
        <div className="gx-main-content gx-p-2 gx-p-sm-0">
          <NewsListIActionHeader title="Нийтлэл" />

          <Row className="gx-d-flex">
            {newsListContext.state.newsList.map((el, index) => {
              const newsItem = el;
              // const myMainImage = el.imagemain
              //   .split("storage")
              //   .join("https://www.moto.mn/storage");
              // newsItem.imageMain = myMainImage;
              newsItem.imageMain = el.imagemain;
              return (
                <Col key={index} span={24}>
                  <NewsListItem1 key={index} newsItem={newsItem} />
                </Col>
              );
            })}
          </Row>
          <MotoPagination />
          <NewsFilterDrawer />
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default NewsListType1;
