import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import NewsDetail from "components/Moto/NewsDetail";
import { CommentListStore } from "context/CommentContext";
import { LogsStore } from "context/LogsContext";
import NewsContext from "context/NewsContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const NewsDetailPage = (props) => {
  const { newsId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const newsContext = useContext(NewsContext);
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (newsId !== 0 && memberContext.state.memberCloudUserSysId !== 0)
      newsContext.loadNewsDetail(
        newsId,
        memberContext.state.memberCloudUserSysId
      );
  }, [newsId, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {memberContext.state.isLogin ? (
        <CommentListStore>
          <LogsStore>
            {newsContext.state.loading ? (
              <LoadingDetail />
            ) : (
              <NewsDetail newsId={newsId} />
            )}
          </LogsStore>
        </CommentListStore>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default NewsDetailPage;
