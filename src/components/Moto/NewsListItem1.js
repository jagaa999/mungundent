import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Image } from "cloudinary-react";
import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import { defaultSrc } from "util/config";

import { Button, Tooltip, Avatar, Modal, Divider } from "antd";
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import NewsDetailModal from "./newsDetailModal";
import NewsDetailMore from "./newsDetailMore";
import NewsItemMainImage from "./NewsItemMainImage";

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

  newsItem.imagemain =
    newsItem.imagemain === ""
      ? "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
      : newsItem.imagemain;

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
              <NewsItemMainImage width="300" imageMain={newsItem.imagemain} />
            </span>
          </Link>
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

        <div className="gx-description gx-d-none gx-d-sm-block">
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

        <div className="moto-bottom-right">
          {/* <AvatarMember02
            memberName={newsItem.userfullename}
            memberPhoto={newsItem.userprofilephoto}
            memberPosition="Гишүүнчлэл тодорхойгүй"
            memberId={newsItem.userpublisherid}
            memberUid={newsItem.userfirebaseuid}
          /> */}
          <Avatar
            src={newsItem.userprofilephoto}
            size="small"
            alt={newsItem.userfullename}
          />
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
