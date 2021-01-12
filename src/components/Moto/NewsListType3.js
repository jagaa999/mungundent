import React, { useContext } from "react";

import { Col, Row, Card } from "antd";

import NewsListItem3 from "./NewsListItem3";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsContext from "context/NewsContext";
import NewsFilterDrawer from "./Drawer/NewsFilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const NewsListType2 = () => {
  const newsListContext = useContext(NewsContext);

  return (
    <div>
      <div className="">
        <FilterTag />
      </div>

      {!newsListContext.newsList.loading ? (
        <div className="gx-main-content">
          <NewsListIActionHeader title="Нийтлэл" />

          <Row className="gx-d-flex">
            <Col key="dffdf" xs={24}>
              <NewsListItem3
                key="newsListItem3"
                newsItems={newsListContext.newsList.mainList}
              />
            </Col>
          </Row>

          <MotoPagination myClass="gx-mt-2" />
          <NewsFilterDrawer />
        </div>
      ) : (
        <LoadingList type="table" />
      )}
    </div>
  );
};

export default NewsListType2;
