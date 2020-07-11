import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import NewsDetail from "components/Moto/NewsDetail";
import NewsContext from "context/NewsContext";

const NewsPage = (props) => {
  //URL-аас орж ирсэн ID
  const { newsId } = useParams();
  console.log("НӨГӨӨ newsId", newsId);
  //const myItem = null;

  useEffect(() => {
    newsContext.loadNewsDetail(newsId);
  }, []);

  const newsContext = useContext(NewsContext);

  const myItem = newsContext.state.newsDetail;
  myItem.imagemain = "https://www.moto.mn/" + myItem.imagemain;

  return (
    <NewsDetail
      key={myItem.newsId}
      newsItem={myItem}
      loading={newsContext.state.loading}
    />
  );
};

export default NewsPage;
