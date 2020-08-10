import React, { useContext, useEffect } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
import Output from "editorjs-react-renderer";

import toBoolean from "util/booleanFunction";

import {
  Button,
  Card,
  Badge,
  Tooltip,
  Row,
  Col,
  Tag,
  Dropdown,
  Menu,
  Checkbox,
  Switch,
  message,
  Divider,
  Spin,
} from "antd";

import {
  WarningTwoTone,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

import LogBox from "components/Moto/LogBox";
import CommentBox from "components/Moto/CommentBox";
import NewsButtonPanel from "components/Moto/Button/NewsButtonPanel";
import NewsDetailHeader from "components/Moto/NewsDetailHeader";
import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";

import LogsContext from "context/LogsContext";
import MemberCard02 from "./MemberCard02";
import NewsDetailContext from "context/NewsDetailContext";

const NewsDetailComponent = ({ newsId }) => {
  const newsDetailContext = useContext(NewsDetailContext);
  const logsContext = useContext(LogsContext);

  const newsItem = newsDetailContext.state.newsDetail;

  useEffect(() => {
    document.title = newsItem.title;
  }, [newsItem]);

  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  const member = {
    publisheddate: newsItem.publisheddate,
    publisherid: newsItem.publisherid,
    publisherphoto: newsItem.publisherphoto,
    publishername: newsItem.publishername,
    publisherpositionname: newsItem.publisherpositionname,
  };

  let myBody = htmlEntities.decode(newsItem.body) || "";
  myBody = myBody.split('"/storage').join('"https://www.moto.mn/storage');
  myBody = myBody.split('"../storage').join('"https://www.moto.mn/storage');

  // const myOutputBody = (
  //   <div
  //     className="news-body"
  //     dangerouslySetInnerHTML={{
  //       // __html: htmlEntities.decode(myBody),
  //       __html: myBody,
  //     }}
  //   ></div>
  // );

  let myOutputBody = "";

  if (myBody !== "") {
    console.log("myBodymyBody", myBody);

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

  let myMainImage;
  try {
    myMainImage = newsItem.imagemain
      .split("storage")
      .join("https://www.moto.mn/storage");
  } catch (e) {
    myMainImage = "";
  }

  return (
    <div>
      <div key={newsItem.newsid} className="gx-main-content news-detail">
        {/* <NewsDetailHeader headerElements={newsItem} /> */}

        <NewsButtonPanel newsItem={newsItem} />

        <Row>
          <Col xs={24}>
            <Card
              className={
                (toBoolean(newsItem.isfeatured) ? "gx-border-success" : "") +
                (!toBoolean(newsItem.isactive) ? "gx-border-danger" : "")
              }
              cover={
                <img
                  alt={newsItem.title}
                  // src={"https://www.moto.mn/" + newsItem.imagemain}
                  src={myMainImage}
                />
              }
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
              <div className="news-header">
                <div className="ant-row-flex">
                  <Tooltip title="Төрөл">
                    <Badge
                      count={newsItem.newstypename}
                      style={{ backgroundColor: "teal" }}
                    />
                  </Tooltip>
                  <Tooltip title="Эх сурвалж">
                    <span className="gx-text-grey gx-fs-sm">
                      {newsItem.newssourcename}
                    </span>
                  </Tooltip>
                  <Tooltip title="Нийтэлсэн огноо">
                    <span className="gx-text-grey gx-fs-sm gx-ml-2">
                      {newsItem.publisheddate}
                    </span>
                  </Tooltip>
                </div>
              </div>

              {/* Таалагдсан. Сэтгэгдэл. Logs */}
              <div className="gx-flex-row gx-mb-2 gx-mb-xl-3">
                {Object.entries(logsContext.state.actionTypes).map(function (
                  item,
                  i
                ) {
                  return (
                    <p
                      key={i}
                      className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey"
                    >
                      {/* <i className="icon icon-chat-bubble gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle" /> */}
                      <span className="gx-d-inline-flex gx-vertical-align-middle">
                        {item[1].count} {item[1].type}
                      </span>
                    </p>
                  );
                })}
              </div>

              {myOutputBody}
            </Card>
          </Col>
        </Row>

        <div>
          <MemberCard02 member={member} maxWidth="250px" />
        </div>

        {/* Одоогоор TableName-ийг хоосон орхив */}
        <CommentBox recordId={newsItem.newsid} tableName="" />

        <LogBox recordId={newsItem.newsid} tableName="ECM_NEWS" />
      </div>
    </div>
  );
};

export default NewsDetailComponent;
