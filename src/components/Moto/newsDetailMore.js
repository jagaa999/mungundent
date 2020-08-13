import React, { useContext, useEffect, useState } from "react";

import { CommentListStore } from "context/CommentContext";
import { LogsStore } from "context/LogsContext";
import NewsDetailContext from "context/NewsDetailContext";
import MemberContext from "context/MemberContext";
import LoadingDetail from "components/Moto/Loading/LoadingDetail";
import PleaseLogin from "components/Moto/Member/PleaseLogin";
import { Modal } from "antd";
import { Html5Entities } from "html-entities";
import Output from "editorjs-react-renderer";

const NewsDetailModal = (props) => {
  const newsDetailContext = useContext(NewsDetailContext);
  const memberContext = useContext(MemberContext);

  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  useEffect(() => {
    if (props.newsId !== 0 && memberContext.state.memberCloudUserSysId !== 0)
      newsDetailContext.loadNewsDetail(
        props.newsId,
        memberContext.state.memberCloudUserSysId
      );
  }, []);

  const newsItem = newsDetailContext.state.newsDetail;

  let myBody = htmlEntities.decode(newsItem.body) || "";
  myBody = myBody.split('"/storage').join('"https://www.moto.mn/storage');
  myBody = myBody.split('"../storage').join('"https://www.moto.mn/storage');

  let myOutputBody = "";

  if (myBody !== "") {
    // console.log("myBodymyBody", myBody);

    if (myBody.indexOf('"blocks"') !== -1) {
      const editorConfig = {
        codeBox: {
          disableDefaultStyle: true,
        },
        header: {
          disableDefaultStyle: true,
        },
        paragraph: {
          disableDefaultStyle: true,
        },
        image: {
          disableDefaultStyle: true,
        },
        embed: {
          disableDefaultStyle: true,
        },
        list: {
          disableDefaultStyle: true,
        },
        checklist: {
          disableDefaultStyle: true,
        },
        table: {
          disableDefaultStyle: true,
        },
        quote: {
          disableDefaultStyle: true,
        },
        warning: {
          disableDefaultStyle: true,
        },
        delimiter: {
          disableDefaultStyle: true,
        },
      };

      try {
        myOutputBody = (
          <Output data={JSON.parse(myBody)} config={editorConfig} />
        );
      } catch (e) {
        myOutputBody = "";
      }
    } else {
      myOutputBody = (
        <div
          className="news-body"
          dangerouslySetInnerHTML={{
            __html: myBody,
          }}
        ></div>
      );
    }
  }

  return (
    <div>
      {newsDetailContext.state.loading ? <LoadingDetail /> : myOutputBody}
    </div>
  );
};

export default NewsDetailModal;
