import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Col, Row } from "antd";

import NewsDetail from "../../components/Moto/NewsDetail";

import NewsContext from "../../context/NewsContext";
import { NewsDetailLogStore } from "../../context/NewsContext";

const NewsPage = (props) => {
  const { newsid } = useParams();
  // console.log("НӨГӨӨ newsid", newsid);
  //const myItem = null;

  useEffect(() => {
    newsContext.loadNewsDetail(newsid);
  }, []);

  const newsContext = useContext(NewsContext);

  // if (!newsContext.state.loading) {
  //   const myItem = newsContext.state.newsDetail;
  //   myItem.imagemain = "https://www.moto.mn/" + myItem.imagemain;

  //   return (
  //     <div>
  //       <NewsDetail key={myItem.newsid} newsItem={myItem} />
  //     </div>
  //   );
  // } else {
  //   return <div></div>;
  // }

  const myItem = newsContext.state.newsDetail;
  myItem.imagemain = "https://www.moto.mn/" + myItem.imagemain;

  return (
    <NewsDetailLogStore>
      <NewsDetail
        key={myItem.newsid}
        newsItem={myItem}
        loading={newsContext.state.loading}
      />
    </NewsDetailLogStore>
  );
};

export default NewsPage;
