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
  Card,
} from "antd";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import AvatarMember from "components/Moto/Member/MemberAvatar";
import AvatarMember02 from "./Member/MemberAvatar02";
import NewsDetailModal from "components/Moto/newsDetailModal";
import NewsDetailMore from "components/Moto/newsDetailMore";
const { Meta } = Card;

const NewsItem = ({ newsItem, grid }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const showModalToggle = () => {
    setShowModal(!showModal);
  };

  const showMoreToggle = () => {
    setShowMore(!showMore);
  };

  const modalOk = (e) => {
    console.log(e);
    setShowModal(true);
  };

  const modalCancel = (e) => {
    console.log(e);
    setShowModal(false);
  };

  // console.log("Манай бараа - ", newsItem);

  const truncatedDescription =
    newsItem.description.substring(0, 100) + " &hellip;";

  const myTitle = (
    <>
      <Link to={"/news/" + newsItem.newsid}>{newsItem.title}</Link>
      {toBoolean(newsItem.isfeatured) && <FeaturedTag type="dot" />}
      {!toBoolean(newsItem.isactive) && <ActiveTag type="dot" />}
    </>
  );

  return (
    <Card
      className="moto-item-card"
      hoverable={true}
      cover={<img alt={newsItem.title} src={newsItem.imageMain} />}
    >
      <Meta
        // avatar={
        //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        // }
        title={myTitle}
        description={
          <>
            <Tooltip title="Нийтэлсэн огноо">
              <span className="gx-text-grey gx-fs-sm gx-ml-2">
                {newsItem.publisheddate}
              </span>
            </Tooltip>
            <div className="gx-d-flex">
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
            <div className="gx-description gx-fs-sm gx-mt-2">
              <span
                dangerouslySetInnerHTML={{ __html: truncatedDescription }}
              ></span>
            </div>
          </>
        }
      />
    </Card>
  );
};

export default NewsItem;
