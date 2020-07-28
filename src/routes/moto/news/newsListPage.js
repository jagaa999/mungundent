import React, { useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";

import { Col, Row } from "antd";

import NewsListItem from "components/Moto/NewsListItem";
import NewsContext from "context/NewsContext";
import FilterDrawer from "components/Moto/Drawer/FilterDrawer";
import FilterTag from "components/Moto/Tag/FilterTag";

const NewsListPage = (props) => {
  const newsContext = useContext(NewsContext);
  const { search } = useLocation();

  useEffect(() => {
    newsContext.loadNewsList(search);
  }, [search]);

  return (
    <div>
      <FilterTag />

      {!newsContext.state.loading && (
        <div className="gx-main-content">
          <Row>
            {newsContext.state.newsList.map((el, index) => {
              const newsItem = el;
              newsItem.imageMain = "https://www.moto.mn/" + el.imagemain;
              return (
                <Col key={index} span={24}>
                  <NewsListItem key={index} newsItem={newsItem} />
                </Col>
              );
            })}
          </Row>
          <FilterDrawer />
        </div>
      )}
    </div>
  );
};

export default NewsListPage;
