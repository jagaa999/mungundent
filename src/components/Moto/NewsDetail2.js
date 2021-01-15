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
import NewsContext from "context/NewsContext";
import NewsItemMainImage from "./NewsItemMainImage";
import { isEmpty } from "lodash";

const NewsDetailComponent = ({ myDetailContext }) => {
  // const newsDetailContext = useContext(NewsContext);
  // const myItem = newsDetailContext.newsDetail.mainDetail;
  const myItem = myDetailContext.newsDetail.mainDetail;

  // console.log("PPPPP", myItem);
  if (isEmpty(myItem)) return null;
  // console.log("JJJJJJJ", myItem);

  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  const member = {
    date: myItem.publisheddate,
    id: myItem.userpublisherid,
    photo: myItem.userprofilephoto,
    name: myItem.userfullname,
    positionname: "Гишүүнчлэл тодорхойгүй",
    uid: myItem.userfirebaseuid,
  };

  let myBody = htmlEntities.decode(myItem.body) || "";
  myBody = myBody.split('"/storage').join('"https://www.moto.mn/storage');
  myBody = myBody.split('"../storage').join('"https://www.moto.mn/storage');

  // console.log("myItem", myItem);

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

  // console.log("myItem", myItem);

  myItem.imagemain =
    myItem.imagemain === ""
      ? "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
      : myItem.imagemain;

  //  ######  ####### ####### #     # ######  #     #
  //  #     # #          #    #     # #     # ##    #
  //  #     # #          #    #     # #     # # #   #
  //  ######  #####      #    #     # ######  #  #  #
  //  #   #   #          #    #     # #   #   #   # #
  //  #    #  #          #    #     # #    #  #    ##
  //  #     # #######    #     #####  #     # #     #
  return (
    <div key={myItem.newsid} className="gx-main-content2 news-detail">
      <Row>
        <Col xs={24}>
          <Card
            className={
              (toBoolean(myItem.isfeatured) ? "gx-border-success" : "") +
              (!toBoolean(myItem.isactive) ? "gx-border-danger" : "")
            }
            cover={
              <NewsItemMainImage width="auto" imageMain={myItem.imagemain} />
            }
            style={{ maxWidth: "700px" }}
          >
            <h2
              className={toBoolean(myItem.isfeatured) ? "gx-text-success" : ""}
            >
              {myItem.title}
              {toBoolean(myItem.isfeatured) && <FeaturedTag />}
              {!toBoolean(myItem.isactive) && <ActiveTag />}
            </h2>

            <Divider className="gx-my-3" />

            <div className="moto-news-body gx-mt-3">{myOutputBody}</div>
          </Card>
        </Col>
      </Row>
      <div>
        <NewsControlButton item={myItem} />
      </div>
      {/* Одоогоор TableName-ийг хоосон орхив */}
      <CommentBox recordId={myItem.newsid} tableName="" />
      <LogBox recordId={myItem.newsid} tableName="ECM_NEWS" />
    </div>
  );
};

export default NewsDetailComponent;
