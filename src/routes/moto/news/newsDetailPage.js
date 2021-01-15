import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { prepareTitle } from "util/config";

import NewsDetail from "../../../components/Moto/NewsDetail2";
import { CommentListStore } from "../../../context/CommentContext";
import { LogsStore } from "../../../context/LogsContext";
import NewsContext from "../../../context/NewsContext";
import MemberContext from "../../../context/MemberContext";
import LoadingDetail from "../../../components/Moto/Loading/LoadingDetail";
import PleaseLogin from "../../../components/Moto/Member/PleaseLogin";

import UniversalDetail from "../../../components/Moto/UniversalDetail";
import { prepareNewsDetailSettings } from "util/prepareSpecsNews";
import UniversalMeta from "util/prepareMeta";

const NewsDetailPage = (props) => {
  const { newsId } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const newsContext = useContext(NewsContext);
  const memberContext = useContext(MemberContext);

  const newsItem = newsContext.newsDetail.mainDetail;

  useEffect(() => {
    if (newsId !== 0) {
      if (memberContext.state.memberCloudUserSysId !== 0) {
        newsContext.loadNewsDetail(
          newsId,
          memberContext.state.memberCloudUserSysId
        );
      }
      // else {
      //   newsContext.loadNewsDetailOg(newsId);
      // }
    }
  }, [newsId, memberContext.state.memberCloudUserSysId]);

  // console.log("newsContext", newsContext.newsDetail);
  // console.log("ddddddddddddddddddddd");

  return (
    <>
      {/* <Helmet>
        <title>{prepareTitle(newsItem.title)}</title>
        <meta property="fb:app_id" content="186294318100220" />
        <meta name="description" content={newsItem.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.description} />
        <meta property="og:image" content={newsItem.imagemain} />
        <meta property="og:locale" content="mn_MN" />
      </Helmet> */}

      {/* {memberContext.state.isLogin ? ( */}
      <CommentListStore>
        <LogsStore>
          {newsContext.newsDetail.loading ? (
            <LoadingDetail />
          ) : (
            <>
              <UniversalMeta meta={prepareNewsDetailSettings.meta} />
              <UniversalDetail
                myDetailContext={newsContext}
                myDetailContextDetail={newsContext.newsDetail}
                myDetailContextDetailDetail={newsContext.newsDetail.mainDetail}
                myDetailSettings={prepareNewsDetailSettings}
              />
              <NewsDetail myDetailContext={newsContext} />
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
