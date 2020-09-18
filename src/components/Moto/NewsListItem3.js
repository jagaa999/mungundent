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
  // moment.locale("mn");

  // console.log("newsItemsnewsItems", newsItems);
  // const [showModal, setShowModal] = useState(false);
  // const [showMore, setShowMore] = useState(false);

  // const showModalToggle = () => {
  //   setShowModal(!showModal);
  // };

  // const showMoreToggle = () => {
  //   setShowMore(!showMore);
  // };

  // const modalOk = (e) => {
  //   console.log(e);
  //   setShowModal(true);
  // };

  // const modalCancel = (e) => {
  //   console.log(e);
  //   setShowModal(false);
  // };

  // // console.log("Манай бараа - ", newsItem);

  // const truncatedDescription =
  //   newsItem.description.substring(0, 100) + " &hellip;";

  // const myTitle = (
  //   <>
  //     <Link to={"/news/" + newsItem.newsid}>{newsItem.title}</Link>
  //     {toBoolean(newsItem.isfeatured) && <FeaturedTag type="dot" />}
  //     {!toBoolean(newsItem.isactive) && <ActiveTag type="dot" />}
  //   </>
  // );

  // createddate: "2020-08-20 13:45:39"
  // creatorid: "1493006644797290"
  // creatorname: "Moto админ"
  // creatorphoto: "https://lh5.googleusercontent.com/-h8hsPdLY2ik/AAAAAAAAAAI/AAAAAAAAAAA/oPqdzj0ptvs/photo.jpg"
  // creatorpositionname: "Гишүүн"
  // description: "Ландкруйзер100 / Лексус470 2UZ-FE 4700cc хэрэглэгчдээ аялалд гарахад нь зөвлөгөө  болон өөрт тулгарч байсан асуудлаасаа бичье гэж бодлоо."
  // imagemain: "https://res.cloudinary.com/motomn/image/upload/v1597898671/members/k0N5PBF1tdM19uSevWsxD0KxkMx1/gguohlypacqbvjbdk3fv.jpg"
  // isactive: "1"
  // iscomment: "1"
  // isfacebook: "1"
  // isfeatured: "1"
  // istwitter: "1"
  // newsid: "1595995541241"
  // newssourceid: "1595995544008"
  // newssourcelogo: "storage/uploads/process/file_1597900790429222_15850461208931.png"
  // newssourcename: "Facebook"
  // newssourcetype: "Social"
  // newstypeid: "207"
  // newstypename: "Авто Тойм"
  // publisheddate: "2020-08-20 14:24:41"
  // publisherid: "1595992832228"
  // publishername: ""
  // publisherphoto: ""
  // publisherpositionname: ""
  // title: "Х.Эрдэнэбаяр: Toyota Land Cruiser 100, LX470-ын хэрэглэгчийн тойм"
  // userfirebaseuid: "k0N5PBF1tdM19uSevWsxD0KxkMx1"
  // userfullname: "Jargal Tumurbaatar"
  // username: "k0N5PBF1tdM19uSevWsxD0KxkMx1"
  // userpersonid: "1595992832226"
  // userprofilephoto: "https://lh3.googleusercontent.com/a-/AOh14Gjn63clMYAwCpGOKAyRZ7EjhP1w4A9SKr6tI32fzw"
  // userpublisherid: "1595992832228"

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
          placeHolder="blur"
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
