import React, { useEffect, useContext } from "react";
import { Col, Row } from "antd";

import NewsList from "components/Moto/NewsList";
import NewsContext from "context/NewsContext";

const NewsPage = (props) => {
  // console.log("News руу орлоо");

  useEffect(() => {
    newsContext.loadNewsList();
  }, []);

  const newsContext = useContext(NewsContext);

  return (
    <div>
      {!newsContext.state.loading && (
        <div className="gx-main-content">
          <Row>
            {newsContext.state.newsList.map((el, index) => {
              const newsItem = el;
              newsItem.imageMain = "https://www.moto.mn/" + el.imagemain;
              // thumb: `https://picsum.photos/seed/picsum/${
              //   Math.floor(Math.random() * (300 - 200 + 1)) + 200
              // }/300`,

              return (
                <Col key={index} span={24}>
                  <NewsList key={index} newsItem={newsItem} />
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
