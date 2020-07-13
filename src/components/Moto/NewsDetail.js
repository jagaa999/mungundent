import React, { useContext, useEffect } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import {
  Button,
  Card,
  Badge,
  Tooltip,
  Row,
  Col,
  Dropdown,
  Menu,
  message,
} from "antd";
import StarRatingComponent from "react-star-rating-component";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";

import IntlMessages from "util/IntlMessages";

import LogBox from "components/Moto/LogBox";
import CommentBox from "components/Moto/CommentBox";
import {
  NewsDetailLogStore,
  NewsDetailCommentStore,
} from "context/NewsContext";
import CommentContext from "context/CommentContext";
import LogsContext from "context/LogsContext";
import MemberCard02 from "./MemberCard02";
import NewsContext from "context/NewsContext";

const NewsItem = ({ newsId }) => {
  useEffect(() => {
    newsContext.loadNewsDetail(newsId);
  }, []);

  const newsContext = useContext(NewsContext);
  const commentContext = useContext(CommentContext);
  const logsContext = useContext(LogsContext);

  const newsItem = newsContext.state.newsDetail;

  function handleMenuClick(e) {
    message.info("Click on menu item.");
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Products</Menu.Item>
      <Menu.Item key="2">Apps</Menu.Item>
      <Menu.Item key="3">Blogs</Menu.Item>
    </Menu>
  );

  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  const member = {
    publisheddate: newsItem.publisheddate,
    publisherid: newsItem.publisherid,
    publisherphoto: newsItem.publisherphoto,
    publishername: newsItem.publishername,
    publisherpositionname: newsItem.publisherpositionname,
  };

  return (
    <div
      key={newsItem.newsid}
      className="gx-main-content news-detail"
      loading={newsContext.state.loading}
    >
      <div className="gx-product-footer">
        <div className="ant-row-flex">
          <div className="gx-module-contact-content">
            <span>
              <Tooltip title={newsItem.publisherpositionname}>
                <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                  <img
                    src={newsItem.publisherphoto}
                    alt={newsItem.publishername}
                  />
                </span>
                <span className="gx-text-grey gx-fs-sm gx-mx-2">
                  {newsItem.publishername}
                </span>
              </Tooltip>
            </span>
          </div>
          <div className="gx-ml-auto">
            <span style={{ display: "inline-flex" }}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <i className="gx-icon-btn icon icon-ellipse-v" />
              </Dropdown>
            </span>
            <span style={{ display: "inline-flex" }}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <i className="gx-icon-btn icon icon-setting" />
              </Dropdown>
            </span>
          </div>
        </div>
      </div>

      <Row>
        <Col xs={24}>
          <Card
            cover={
              <img
                alt={newsItem.title}
                src={"https://www.moto.mn/" + newsItem.imagemain}
              />
            }
          >
            <h2>{newsItem.title}</h2>
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

            <div>
              <ul className="gx-list-inline gx-btn-list">
                <li>
                  <span className="gx-link gx-meta-like">
                    <i className="icon icon-like-o gx-text-red" />
                    12 таалагдсан
                  </span>
                </li>
                <li>
                  <span className="gx-link gx-meta-comment">
                    <i className="icon icon-chat-new" />
                    {commentContext.state.total} сэтгэгдэл
                  </span>
                </li>
                <li>
                  <span className="gx-link gx-meta-comment">
                    <i className="icon icon-chat-new" />
                    {logsContext.state.total} logs
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="news-body"
              dangerouslySetInnerHTML={{
                __html: htmlEntities.decode(newsItem.body),
              }}
            ></div>
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
  );
};

export default NewsItem;
