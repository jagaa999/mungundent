import React, { useEffect, useContext, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import { Col, Row, Button, Affix } from "antd";

import NewsListItem from "components/Moto/NewsListItem";
import NewsContext from "context/NewsContext";
import FilterDrawer from "components/Moto/Drawer/FilterDrawer";
import FilterTag from "components/Moto/Tag/FilterTag";
import { PlusOutlined } from "@ant-design/icons";

const NewsListPage = (props) => {
  const history = useHistory();
  const newsContext = useContext(NewsContext);
  const { search } = useLocation();

  useEffect(() => {
    newsContext.loadNewsList(search);
  }, [search]);

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

      {!newsContext.state.loading && (
        <div className="gx-main-content">
          <Row>
            {newsContext.state.newsList.map((el, index) => {
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
          <FilterDrawer />
        </div>
      )}
    </div>
  );
};

export default NewsListPage;
