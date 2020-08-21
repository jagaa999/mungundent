import React, { useEffect, useContext, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import { Col, Row, Button, Affix } from "antd";

import NewsListItem from "components/Moto/NewsListItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "components/Moto/Drawer/FilterDrawer";
import FilterTag from "components/Moto/Tag/FilterTag";
import MotoPagination from "components/Moto/Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "components/Moto/Loading/LoadingList";
import { PlusOutlined } from "@ant-design/icons";

const NewsListType1 = () => {
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
            {newsListContext.state.newsList.map((el, index) => {
              const newsItem = el;
              // const myMainImage = el.imagemain
              //   .split("storage")
              //   .join("https://www.moto.mn/storage");
              // newsItem.imageMain = myMainImage;
              newsItem.imageMain = el.imagemain;
              return (
                <Col key={index} span={24}>
                  <NewsListItem key={index} newsItem={newsItem} />
                </Col>
              );
            })}
          </Row>
          <MotoPagination />
          <FilterDrawer />
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default NewsListType1;
