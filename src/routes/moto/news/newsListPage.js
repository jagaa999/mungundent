import React, { useEffect, useContext, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import { Col, Row, Button, Affix } from "antd";

import NewsListItem from "components/Moto/NewsListItem";
import NewsListContext from "context/NewsListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "components/Moto/Drawer/FilterDrawer";
import FilterTag from "components/Moto/Tag/FilterTag";
import MotoPagination from "components/Moto/Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import { PlusOutlined } from "@ant-design/icons";

const NewsListPage = (props) => {
  const history = useHistory();
  const newsListContext = useContext(NewsListContext);
  const filterContext = useContext(FilterContext);
  const { search } = useLocation();

  // useEffect(() => {
  //   newsListContext.loadNewsList(search);
  // }, [
  //   filterContext.state.filterList,
  //   filterContext.state.paging,
  //   filterContext.state.sorting,
  // ]);

  const [container, setContainer] = useState(null);

  return (
    <div>
      {/* <Affix offsetTop={10}> */}
      {/* <Affix style={{ position: "absolute", top: 10, left: 10 }}> */}

      <div className="gx-flex-row gx-justify-content-between gx-align-items-center">
        <div className="">
          <FilterTag />
        </div>
        <div>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            icon={<PlusOutlined />}
            onClick={() => {
              history.push({
                pathname: "/news/insert",
              });
            }}
          >
            Нэмэх
          </Button>
        </div>
      </div>

      {!newsListContext.state.loading && (
        <div className="gx-main-content">
          <MotoPagination />
          <MotoSort />

          <Row>
            {newsListContext.state.newsList.map((el, index) => {
              const newsItem = el;
              const myMainImage = el.imagemain
                .split("storage")
                .join("https://www.moto.mn/storage");

              newsItem.imageMain = myMainImage;
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
      )}
    </div>
  );
};

export default NewsListPage;
