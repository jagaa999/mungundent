import React, { useContext, useEffect, useState } from "react";

import NewsDetailModal from "components/Moto/NewsDetailModal";
import { CommentListStore } from "context/CommentContext";
import { LogsStore } from "context/LogsContext";
import NewsDetailContext from "context/NewsDetailContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";
import { Modal } from "antd";

const NewsDetailModalPage = (props) => {
  const newsDetailContext = useContext(NewsDetailContext);
  const memberContext = useContext(MemberContext);

  const [ddd, setDdd] = useState(true);

  const showModal = () => {
    setDdd(!ddd);
  };

  const modalOk = (e) => {
    console.log(e);
    setDdd(true);
  };

  const modalCancel = (e) => {
    console.log(e);
    setDdd(false);
  };

  // useEffect(() => {
  //   if (props.newsId !== 0 && memberContext.state.memberCloudUserSysId !== 0)
  //     newsDetailContext.loadNewsDetail(
  //       props.newsId,
  //       memberContext.state.memberCloudUserSysId
  //     );
  // }, [props.newsId, memberContext.state.memberCloudUserSysId]);

  return (
    <div>
      dfgd gfdsgjk lsdfg jlkfsdg jlskfdj glkdfsj gkldfsjgkldf jgkldfgj lk
      {/* {memberContext.state.isLogin ? (
        <>
          {newsDetailContext.state.loading ? (
            <LoadingDetail />
          ) : (
            <NewsDetailModal newsId={props.newsId} />
          )}
        </>
      ) : (
        <PleaseLogin />
      )} */}
    </div>
  );
};

export default NewsDetailModalPage;
