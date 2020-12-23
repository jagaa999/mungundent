import React, { useContext, useEffect, useState } from "react";

import { Image } from "cloudinary-react";
import moment from "moment";
//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
import Output from "editorjs-react-renderer";

import toBoolean from "util/booleanFunction";
import { defaultSrc } from "util/config";
import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";

import {
  Card,
  Row,
  Col,
  Typography,
  Tabs,
  Tooltip,
  Avatar,
  Divider,
} from "antd";

import LogBox from "./LogBox";
import CommentBox from "./CommentBox";
import NewsDetailHeader from "./NewsDetailHeader";
import NewsControlButton from "./Button/NewsControlButton";

import LogsContext from "context/LogsContext";
import NewsDetailContext from "context/NewsDetailContext";
import NewsItemMainImage from "./NewsItemMainImage";

const NewsDetailComponent = () => {
  const newsDetailContext = useContext(NewsDetailContext);
  const newsItem = newsDetailContext.state.newsDetail;
  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  const member = {
    date: newsItem.publisheddate,
    id: newsItem.userpublisherid,
    photo: newsItem.userprofilephoto,
    name: newsItem.userfullename,
    positionname: "Гишүүнчлэл тодорхойгүй",
    uid: newsItem.userfirebaseuid,
  };

  let myBody = htmlEntities.decode(newsItem.body) || "";
  myBody = myBody.split('"/storage').join('"https://www.moto.mn/storage');
  myBody = myBody.split('"../storage').join('"https://www.moto.mn/storage');

  // console.log("newsItem", newsItem);

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
            // __html: htmlEntities.decode(myBody),
            __html: myBody,
          }}
        ></div>
      );
    }
  }

  console.log("newsItem", newsItem);

  if (Object.keys(newsItem).length !== 0) {
    // let myMainImage = "";
    // try {
    //   myMainImage = newsItem.imagemain;
    // } catch (e) {
    //   myMainImage = "";
    // }

    newsItem.imagemain =
      newsItem.imagemain === ""
        ? "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
        : newsItem.imagemain;

    return (
      <div key={newsItem.newsid} className="gx-main-content news-detail">
        {/* <NewsDetailHeader newsItem={newsItem} member={member} /> */}

        {/* <NewsButtonPanel newsItem={newsItem} /> */}

        <Row>
          <Col xs={24}>
            <div className="gx-media gx-mt-3">
              <Avatar
                src={member.photo}
                alt={member.name}
                className="gx-mr-3"
              />

              <div className="gx-media-body">
                <h5 className="gx-wall-user-title">{member.name}</h5>
                <p className="gx-text-grey gx-fs-sm">
                  {moment(newsItem.publisheddate).fromNow()}
                </p>
              </div>
            </div>
            <Card
              className={
                (toBoolean(newsItem.isfeatured) ? "gx-border-success" : "") +
                (!toBoolean(newsItem.isactive) ? "gx-border-danger" : "")
              }
              cover={
                <NewsItemMainImage
                  width="auto"
                  imageMain={newsItem.imagemain}
                />
              }
              style={{ maxWidth: "700px" }}
            >
              <h2
                className={
                  toBoolean(newsItem.isfeatured) ? "gx-text-success" : ""
                }
              >
                {newsItem.title}
                {toBoolean(newsItem.isfeatured) && <FeaturedTag />}
                {!toBoolean(newsItem.isactive) && <ActiveTag />}
              </h2>

              <div className="ant-row-flex">
                <Tooltip title="Төрөл">
                  <span className="moto-label-main ant-tag">
                    {newsItem.newstypename}
                  </span>
                </Tooltip>
                <Tooltip title="Эх сурвалж">
                  <span className="moto-label-main ant-tag">
                    {newsItem.newssourcename}
                  </span>
                </Tooltip>
              </div>

              <Divider className="gx-my-3" />

              <div className="moto-news-body gx-mt-3">{myOutputBody}</div>
            </Card>
          </Col>
        </Row>
        {/* <div>
          <MemberCard02 member={member} maxWidth="250px" />
        </div> */}
        <div>
          <NewsControlButton item={newsItem} />
        </div>
        {/* Одоогоор TableName-ийг хоосон орхив */}
        <CommentBox recordId={newsItem.newsid} tableName="" />
        <LogBox recordId={newsItem.newsid} tableName="ECM_NEWS" />
      </div>
    );
  } else {
    return "";
  }
};

export default NewsDetailComponent;
