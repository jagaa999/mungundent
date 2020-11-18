import React, { useContext } from "react";

import { Col, Row } from "antd";

// import NewsListItem from "components/Moto/NewsListItem";
import NewsListItem2 from "./NewsListItem2";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsListContext from "../../context/NewsListContext";
import NewsFilterDrawer from "./Drawer/NewsFilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const NewsListType2 = () => {
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
