import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { prepareTitle } from "util/config";

import NewsDetail2 from "../../../components/Moto/NewsDetail2";
import { CommentListStore } from "../../../context/CommentContext";
import { LogsStore } from "../../../context/LogsContext";
import NewsContext from "../../../context/NewsContext";
import MemberContext from "../../../context/MemberContext";
import LoadingDetail from "../../../components/Moto/Loading/LoadingDetail";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

import UniversalDetail from "../../../components/Moto/UniversalDetail";
import { prepareNewsDetailSettings } from "util/prepareSpecsNews";
import { UniversalDetailMeta } from "util/prepareMeta";

const NewsDetailPage = (props) => {
  const { newsId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const newsContext = useContext(NewsContext);
  const memberContext = useContext(MemberContext);

  const newsItem = newsContext.newsDetail.mainDetail;

  useEffect(() => {
    if (newsId !== 0) {
      newsContext.loadNewsDetail(newsId);
    }
  }, [newsId, memberContext.state.memberCloudUserSysId]);

  return (
    <>
      {/* {memberContext.state.isLogin ? ( */}
      <CommentListStore>
        <LogsStore>
          {newsContext.newsDetail.loading ? (
            <LoadingDetail />
          ) : (
            <>
              <UniversalDetailMeta
                meta={prepareNewsDetailSettings.meta}
                myItem={newsContext.newsDetail.mainDetail}
              />
              <UniversalDetail
                myDetailContext={newsContext}
                myDetailContextDetail={newsContext.newsDetail}
                myDetailContextDetailDetail={newsContext.newsDetail.mainDetail}
                myDetailSettings={prepareNewsDetailSettings}
              />
              <NewsDetail2 myDetailContext={newsContext} />
            </>
          )}
        </LogsStore>
      </CommentListStore>
      {/* ) : (
        <PleaseLogin />
      )} */}
    </>
  );
};

export default NewsDetailPage;
