import React from "react";
import { useParams } from "react-router-dom";

import NewsDetail from "components/Moto/NewsDetail";
import { CommentListStore } from "context/CommentContext";
import { LogsStore } from "context/LogsContext";

const NewsPage = (props) => {
  const { newsId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID

  return (
    <CommentListStore>
      <LogsStore>
        <NewsDetail newsId={newsId} />
      </LogsStore>
    </CommentListStore>
  );
};

export default NewsPage;
