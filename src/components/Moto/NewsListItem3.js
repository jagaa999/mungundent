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
  Table,
  Tag,
  Space,
} from "antd";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import AvatarMember from "components/Moto/Member/MemberAvatar";
import AvatarMember02 from "./Member/MemberAvatar02";
import NewsDetailModal from "components/Moto/newsDetailModal";
import NewsDetailMore from "components/Moto/newsDetailMore";
const { Meta } = Card;

const NewsItem = ({ newsItems }) => {
  const columns = [
    {
      title: "",
      dataIndex: "imagemain",
      key: "imagemain",
      fixed: "left",
      render: (imagemain) => (
        <Image
          cloudName="motomn"
          publicId={imagemain
            .slice(imagemain.indexOf("upload/") + 7, imagemain.length)
            .split(".")
            .shift()}
          crop="fill"
          loading="lazy"
          dpr="auto"
          responsive
          width="64"
          gravity="face"
          quality="auto"
          // placeholder="blur"
          responsiveUseBreakpoints="true"
          className="gx-d-block"
          default_image="jhannw5jgo2mlvvkvke9"
          alt={imagemain}
          onError={defaultSrc}
        />
      ),
      // render: (imagemain) => (
      //   <Avatar
      //     src={
      //       imagemain ||
      //       "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
      //     }
      //     alt={imagemain}
      //     size={64}
      //     shape="square"
      //   />
      // ),
    },

    {
      title: "Гарчиг",
      dataIndex: "title",
      key: "title",
      render: (title, record) => (
        <>
          <Link to={"/news/" + record.newsid}>{title}</Link>
          {toBoolean(record.isfeatured) && <FeaturedTag type="dot" />}
          {!toBoolean(record.isactive) && <ActiveTag type="dot" />}
          <div className="gx-d-flex">
            <Tooltip title="Төрөл">
              <span className="moto-label-main ant-tag">
                {record.newstypename}
              </span>
            </Tooltip>
            <Tooltip title="Эх сурвалж">
              <span className="moto-label-main ant-tag">
                {record.newssourcename}
              </span>
            </Tooltip>
            <span className="gx-fs-sm">
              {moment(record.publisheddate).fromNow()}
            </span>
          </div>
        </>
      ),
    },
    {
      title: "Нийтлэгч",
      dataIndex: "userprofilephoto",
      key: "userprofilephoto",
      render: (userprofilephoto, userfullname) => (
        // <Tooltip title={userfullname}>
        <Avatar src={userprofilephoto} alt={userprofilephoto} size="small" />
        // </Tooltip>
      ),
    },
  ];

  return (
    <Table
      rowKey="newsid"
      columns={columns}
      dataSource={newsItems}
      pagination={false}
    />
  );
};

export default NewsItem;
