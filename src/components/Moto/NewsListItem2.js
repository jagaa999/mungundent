import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Image } from "cloudinary-react";
import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import { defaultSrc } from "util/config";

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
  moment.locale("mn");

  // console.log("Манай Нийтлэл - ", newsItem);

  const truncatedDescription =
    newsItem.description.substring(0, 100) + " &hellip;";

  const myTitle = (
    <>
      <Link to={"/news/" + newsItem.newsid}>{newsItem.title}</Link>
      {toBoolean(newsItem.isfeatured) && <FeaturedTag type="dot" />}
      {!toBoolean(newsItem.isactive) && <ActiveTag type="dot" />}
    </>
  );

  newsItem.imagemain =
    newsItem.imagemain === ""
      ? "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
      : newsItem.imagemain;

  return (
    <Card
      className={`moto-item-card ${
        toBoolean(newsItem.isfeatured) ? "moto-card-sponsor" : ""
      } ${!toBoolean(newsItem.isactive) ? "border-top" : ""}`}
      hoverable={true}
      cover={
        <Image
          cloudName="motomn"
          publicId={newsItem.imagemain
            .slice(
              newsItem.imagemain.indexOf("upload/") + 7,
              newsItem.imagemain.length
            )
            .split(".")
            .shift()}
          crop="fill"
          loading="lazy"
          dpr="auto"
          responsive
          width="300"
          gravity="face"
          quality="auto"
          // placeholder="blur"
          responsiveUseBreakpoints="true"
          className="gx-img-fluid gx-w-100"
          default_image="jhannw5jgo2mlvvkvke9"
          alt={newsItem.title}
          onError={defaultSrc}
        />
      }
    >
      <Meta
        // avatar={
        //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        // }
        title={myTitle}
        description={
          <>
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

            <span className="gx-text-grey gx-fs-sm">
              {moment(newsItem.publisheddate).fromNow()}
            </span>

            <div className="gx-description gx-fs-sm gx-mt-2 gx-d-none gx-d-sm-block">
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
