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
} from "antd";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import AvatarMember from "components/Moto/Member/MemberAvatar";
import AvatarMember02 from "components/Moto/Member/MemberAvatar02";
import NewsDetailModal from "components/Moto/newsDetailModal";
import NewsDetailMore from "components/Moto/newsDetailMore";

const NewsItem = ({ newsItem, grid }) => {
  moment.locale("mn");
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
    newsItem.description.substring(0, 150) + " &hellip;";

  return (
    <div
      key={newsItem.newsid}
      className={`gx-product-item   ${
        grid ? "gx-product-vertical" : "gx-product-horizontal"
      } ${toBoolean(newsItem.isfeatured) ? "moto-card-sponsor" : ""} ${
        !toBoolean(newsItem.isactive) ? "border-top" : ""
      }`}
    >
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <Link to={"/news/" + newsItem.newsid}>
            <span className="gx-link gx-grid-thumb-cover">
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
                width="auto"
                gravity="face"
                quality="auto"
                placeHolder="blur"
                responsiveUseBreakpoints="true"
                className="gx-img-fluid gx-w-100"
                default_image="jhannw5jgo2mlvvkvke9"
                alt={newsItem.title}
                onError={defaultSrc}
              />
            </span>
          </Link>
        </div>
        <AvatarMember02
          memberName={newsItem.userfullename}
          memberPhoto={newsItem.userprofilephoto}
          memberPosition="Гишүүнчлэл тодорхойгүй"
          memberId={newsItem.userpublisherid}
          memberUid={newsItem.userfirebaseuid}
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
            <span className="moto-label-main ant-tag">
              {newsItem.newstypename}
            </span>
            {/* <Badge
              count={newsItem.newstypename}
              style={{ backgroundColor: "teal" }}
            /> */}
          </Tooltip>
          <Tooltip title="Эх сурвалж">
            <span className="moto-label-main ant-tag">
              {newsItem.newssourcename}
            </span>
            {/* <Badge
              count={newsItem.newssourcename}
              style={{ backgroundColor: "grey" }}
            /> */}
          </Tooltip>
          <Tooltip title="Нийтэлсэн огноо">
            <span className="gx-text-grey gx-fs-sm gx-ml-2">
              {moment(newsItem.publisheddate).fromNow()}
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

        <div className="gx-d-flex gx-mt-4">
          <Button size="small" onClick={showModalToggle}>
            Нээж унших
          </Button>

          <Button size="small" onClick={showMoreToggle}>
            Эндээ унших
          </Button>
        </div>
      </div>

      {showMore ? (
        <div className="gx-p-3">
          <Divider
            className="gx-mt-3 gx-mb-4"
            dashed
            plain
            orientation="center"
          >
            Дэлгэрэнгүй
          </Divider>
          <NewsDetailMore newsId={newsItem.newsid} />
        </div>
      ) : (
        <></>
      )}

      <Modal
        title={newsItem.title}
        visible={showModal}
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
