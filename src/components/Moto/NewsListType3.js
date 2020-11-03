import React, { useContext } from "react";

import { Col, Row, Card } from "antd";

import NewsListItem3 from "./NewsListItem3";
import NewsListIActionHeader from "./NewsListIActionHeader";
import NewsListContext from "context/NewsListContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const NewsListType2 = () => {
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
                key="newsListItem3"
                newsItems={newsListContext.state.newsList}
              />
            </Col>
          </Row>

          <MotoPagination myClass="gx-mt-2" />
          <FilterDrawer />
        </div>
      ) : (
        <LoadingList type="table" />
      )}
    </div>
  );
};

export default NewsListType2;
