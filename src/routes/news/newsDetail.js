import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import NewsDetail from "../../components/Moto/NewsDetail";
import NewsContext from "../../context/NewsContext";

const NewsPage = (props) => {
  const { newsid } = useParams();
  // console.log("НӨГӨӨ newsid", newsid);
  //const myItem = null;

  useEffect(() => {
    newsContext.loadNewsDetail(newsid);
  }, []);

  const newsContext = useContext(NewsContext);

  const myItem = newsContext.state.newsDetail;
  myItem.imagemain = "https://www.moto.mn/" + myItem.imagemain;

  return (
    <NewsDetail
      key={myItem.newsid}
      newsItem={myItem}
      loading={newsContext.state.loading}
    />
  );
};

export default NewsPage;
