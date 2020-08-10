import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";

import {
  Button,
  Badge,
  Tooltip,
  Row,
  Col,
  Dropdown,
  Menu,
  Avatar,
  message,
  Modal,
  Divider,
} from "antd";

import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import AvatarMember from "components/Moto/Member/MemberAvatar";
import AvatarMember02 from "components/Moto/Member/MemberAvatar02";
import NewsDetailModal from "components/Moto/newsDetailModal";

const NewsItem = ({ newsItem, grid }) => {
  const [ddd, setDdd] = useState(false);

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

  // console.log("Манай бараа - ", newsItem);

  const truncatedDescription =
    newsItem.description.substring(0, 150) + " &hellip;";

  return (
    <div
      key={newsItem.newsid}
      className={`gx-product-item  ${
        grid ? "gx-product-vertical" : "gx-product-horizontal"
      } ${toBoolean(newsItem.isfeatured) ? "gx-badge-green-light" : ""} ${
        !toBoolean(newsItem.isactive) ? "gx-badge-grey" : ""
      }`}
    >
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <Link to={"/news/" + newsItem.newsid}>
            <span className="gx-link gx-grid-thumb-cover">
              <img alt={newsItem.title} src={newsItem.imageMain} />
            </span>
          </Link>
        </div>
        <AvatarMember02
          memberName={newsItem.publishername}
          memberPhoto={newsItem.publisherphoto}
          memberPosition={newsItem.publisherpositionname}
        />
      </div>

      <div className="gx-product-body">
        <h3 className="gx-product-title">
          <Link to={"/news/" + newsItem.newsid}>{newsItem.title}</Link>
          {toBoolean(newsItem.isfeatured) && <FeaturedTag />}
          {!toBoolean(newsItem.isactive) && <ActiveTag />}
        </h3>

        <div className="ant-row-flex">
          <Tooltip title="Төрөл">
            <Badge
              count={newsItem.newstypename}
              style={{ backgroundColor: "teal" }}
            />
          </Tooltip>
          <Tooltip title="Эх сурвалж">
            <Badge
              count={newsItem.newssourcename}
              style={{ backgroundColor: "grey" }}
            />
          </Tooltip>
          <Tooltip title="Нийтэлсэн огноо">
            <span className="gx-text-grey gx-fs-sm gx-ml-2">
              {newsItem.publisheddate}
            </span>
          </Tooltip>
        </div>

        <div className="gx-description">
          <p className="gx-mt-2">
            <span
              dangerouslySetInnerHTML={{ __html: truncatedDescription }}
            ></span>
          </p>
        </div>

        <Button size="small" onClick={showModal}>
          Шууд унших
        </Button>
      </div>

      <Modal
        title={newsItem.title}
        visible={ddd}
        footer={null}
        onOk={modalOk}
        onCancel={modalCancel}
        width="80%"
        style={{ width: "100%", resize: "none" }}
      >
        <div>
          <img
            alt="example"
            style={{ width: "100%" }}
            src={newsItem.imageMain}
          />
          <Divider className="gx-my-4" />
          <NewsDetailModal newsId={newsItem.newsid} />
        </div>
      </Modal>

      {/* <div className="gx-product-footer">
        <AvatarMember
          memberName={newsItem.publishername}
          memberPhoto={newsItem.publisherphoto}
          memberPosition={newsItem.publisherpositionname}
        />
      </div> */}
    </div>
  );
};

export default NewsItem;
