import React from "react";

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
import MemberCard02 from "./MemberCard02";

const NewsItem = ({ newsItem, loading, grid }) => {
  const {
    newsid,
    imagemain,
    title,
    body,
    isfeatured,
    isactive,
    newstypeid,
    newstypename,
    newssourceid,
    newssourcename,
    newssourcelogo,
    newssourcetype,
    newssourcefacebook,
    newssourcewebsite,
    newssourceyoutube,
    publisheddate,
    publisherid,
    publisherphoto,
    publishername,
    publisherpositionname,
    createddate,
    creatorid,
    creatorname,
    creatorphoto,
    creatorpositionname,
    modifieddate,
    modifiedby,
    modifiername,
    modifierphoto,
    modifierpositionname,
    iscomment,
    isfacebook,
    istwitter,
    contentid,
    companyid,
    booktypeid,
    dim1,
    dim2,
  } = newsItem;

  // console.log("Манай бараа - ", newsItem);

  // const truncatedDescription = description.substring(0, 120) + "&hellip;";

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    // console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Products</Menu.Item>
      <Menu.Item key="2">Apps</Menu.Item>
      <Menu.Item key="3">Blogs</Menu.Item>
    </Menu>
  );

  //Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
  const htmlEntities = new Html5Entities();

  const member = {
    publisheddate,
    publisherid,
    publisherphoto,
    publishername,
    publisherpositionname,
  };

  return (
    <div key={newsid} className="gx-main-content news-detail" loading={loading}>
      <div className="gx-product-footer">
        <div className="ant-row-flex">
          {/* <Row>
          <Col xs={8} sm={12} md={12} lg={24} xl={24}> */}
          <div className="gx-module-contact-content">
            <span>
              <Tooltip title={publisherpositionname}>
                <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                  <img src={publisherphoto} alt={publishername} />
                </span>
                <span className="gx-text-grey gx-fs-sm gx-mx-2">
                  {publishername}
                </span>
              </Tooltip>
            </span>
          </div>
          {/* </Col>
          <Col xs={16} sm={12} md={12} lg={24} xl={24}> */}
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
          {/* </Col>
        </Row> */}
        </div>
      </div>

      <Row>
        <Col xs={24}>
          <Card cover={<img alt={title} src={imagemain} />}>
            <h2>{title}</h2>
            <div className="news-header">
              <div className="ant-row-flex">
                <Tooltip title="Төрөл">
                  <Badge
                    count={newstypename}
                    style={{ backgroundColor: "teal" }}
                  />
                </Tooltip>
                <Tooltip title="Эх сурвалж">
                  <span className="gx-text-grey gx-fs-sm">
                    {newssourcename}
                  </span>
                </Tooltip>
                <Tooltip title="Нийтэлсэн огноо">
                  <span className="gx-text-grey gx-fs-sm gx-ml-2">
                    {publisheddate}
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
                    <i className="icon icon-chat-new" />3 сэтгэгдэл
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="news-body"
              dangerouslySetInnerHTML={{ __html: htmlEntities.decode(body) }}
            ></div>
          </Card>
        </Col>
      </Row>

      <div>
        <MemberCard02 member={member} maxWidth="250px" />
      </div>

      <NewsDetailCommentStore>
        {/* Одоогоор TableName-ийг хоосон орхив */}
        <CommentBox recordId={newsid} tableName="" />
      </NewsDetailCommentStore>

      <NewsDetailLogStore>
        <LogBox recordId={newsid} tableName="ECM_NEWS" />
      </NewsDetailLogStore>
    </div>
  );
};

export default NewsItem;
