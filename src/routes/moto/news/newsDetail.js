import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import NewsDetail from "components/Moto/NewsDetail";
import { CommentListStore } from "context/CommentContext";
import { LogsStore } from "context/LogsContext";
import NewsContext from "context/NewsContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";

const NewsPage = (props) => {
  const { newsId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const newsContext = useContext(NewsContext);

  useEffect(() => {
    newsContext.loadNewsDetail(newsId);
  }, [newsId]);
  // console.log("newsContext-----", newsContext.state);

  //const loading = newsContext.state.loading;

  return (
    <CommentListStore>
      <LogsStore>
        {/* {newsContext.state.loading  ? ( */}
        {newsContext.state.loading ? (
          <LoadingDetail />
        ) : (
          <NewsDetail newsId={newsId} />
        )}
      </LogsStore>
    </CommentListStore>
  );
};

export default NewsPage;
