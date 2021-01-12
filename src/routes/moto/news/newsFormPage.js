import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import NewsForm from "components/Moto/NewsForm";
import NewsContext from "context/NewsContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";

const NewsFormPage = (props) => {
  const { newsId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const newsDetailContext = useContext(NewsContext);
  const memberContext = useContext(MemberContext);

  useEffect(() => {
    if (newsId !== 0 && memberContext.state.memberCloudUserSysId !== 0)
      newsDetailContext.loadNewsDetail(
        newsId,
        memberContext.state.memberCloudUserSysId
      );
  }, [newsId, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {memberContext.state.isLogin ? (
        <>
          {newsDetailContext.newsDetail.loading ? (
            <LoadingDetail />
          ) : (
            <NewsForm newsId={newsId} />
          )}
        </>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default NewsFormPage;
