import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { prepareTitle } from "util/config";

import NewsDetail from "components/Moto/NewsDetail";
import { CommentListStore } from "context/CommentContext";
import { LogsStore } from "context/LogsContext";
import NewsDetailContext from "context/NewsDetailContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const NewsDetailPage = (props) => {
  const { newsId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const newsDetailContext = useContext(NewsDetailContext);
  const memberContext = useContext(MemberContext);

  const newsItem = newsDetailContext.state.newsDetail;

  useEffect(() => {
    if (newsId !== 0) {
      if (memberContext.state.memberCloudUserSysId !== 0) {
        newsDetailContext.loadNewsDetail(
          newsId,
          memberContext.state.memberCloudUserSysId
        );
      } else {
        newsDetailContext.loadNewsDetailOg(newsId);
      }
    }
  }, [newsId, memberContext.state.memberCloudUserSysId]);

  // console.log("newsDetailContext", newsDetailContext.state);
  // console.log("ddddddddddddddddddddd");

  return (
    <>
      <Helmet>
        <title>{prepareTitle(newsItem.title)}</title>
        <meta property="fb:app_id" content="186294318100220" />
        <meta name="description" content={newsItem.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.description} />
        <meta property="og:image" content={newsItem.imagemain} />
        <meta property="og:locale" content="mn_MN" />
      </Helmet>

      {memberContext.state.isLogin ? (
        <CommentListStore>
          <LogsStore>
            {newsDetailContext.state.loading ? (
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
