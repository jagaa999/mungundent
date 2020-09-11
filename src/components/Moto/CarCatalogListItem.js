import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

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
  Card,
  message,
  Modal,
  Divider,
} from "antd";

import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import AvatarMember from "components/Moto/Member/MemberAvatar";
import AvatarMember02 from "components/Moto/Member/MemberAvatar02";
import NewsDetailModal from "components/Moto/newsDetailModal";
import NewsDetailMore from "components/Moto/newsDetailMore";

const { Meta } = Card;

const NewsItem = ({ firmItem }) => {
  console.log("Манай Фирм - ", firmItem);

  return (
    <Link to={"/carcatalog/" + firmItem.id}>
      <Card
        className=""
        hoverable={true}
        cover={
          null
          // <img alt="example" src={"https://via.placeholder.com/576X383"} />
        }
      >
        <Meta
          avatar={null}
          title={firmItem.name}
          description={firmItem.code + " • " + firmItem.id}
        />
      </Card>
    </Link>
  );
};

export default NewsItem;
