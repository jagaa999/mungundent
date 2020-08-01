import React from "react";
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
} from "antd";

import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import AvatarMember from "components/Moto/Member/MemberAvatar";

const NewsItem = ({ newsItem, grid }) => {
  // console.log("Манай бараа - ", newsItem);

  const truncatedDescription =
    newsItem.description.substring(0, 120) + "&hellip;";

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
          <span className="gx-link gx-grid-thumb-cover">
            <img alt={newsItem.title} src={newsItem.imageMain} />
          </span>
        </div>
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

        <div className="gx-description">
          <p className="gx-mt-2">
            <span
              dangerouslySetInnerHTML={{ __html: truncatedDescription }}
            ></span>
          </p>
        </div>
      </div>

      <div className="gx-product-footer">
        <AvatarMember
          memberName={newsItem.publishername}
          memberPhoto={newsItem.publisherphoto}
          memberPosition={newsItem.publisherpositionname}
        />
      </div>
    </div>
  );
};

export default NewsItem;
