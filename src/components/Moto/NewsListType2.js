import React, { useContext } from "react";

import { Col, Row } from "antd";

// import NewsListItem from "components/Moto/NewsListItem";
import NewsListItem2 from "./NewsListItem2";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsContext from "../../context/NewsContext";
import NewsFilterDrawer from "./Drawer/NewsFilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const NewsListType2 = () => {
  const newsListContext = useContext(NewsContext);

  return (
    <div>
      <FilterTag />

      {!newsListContext.newsList.loading ? (
        <div className="gx-main-content">
          <NewsListIActionHeader title="Нийтлэл" />

          <Row className="gx-d-flex">
            {newsListContext.newsList.mainList.map((newsItem, index) => {
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
