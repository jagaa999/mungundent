import React from "react";
import { Link } from "react-router-dom";

import { Card, Tooltip } from "antd";
import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";

import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";

import { defaultSrc } from "util/config";
import { Image } from "cloudinary-react";

const NewsItem2 = ({ newsItem }) => {
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
    <>
      <Card
        className={`moto-item-card ${
          toBoolean(newsItem.isfeatured) ? "moto-card-sponsor" : ""
        } ${!toBoolean(newsItem.isactive) ? "border-top" : ""}`}
        hoverable={true}
        style={{ margin: "0 10px", height: "380px" }}
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
        <div className="gx-d-flex">
          <Tooltip title="Төрөл">
            <span className="moto-label-main ant-tag">
              {newsItem.newstypename}
            </span>
          </Tooltip>
          {/* <Tooltip title="Эх сурвалж">
            <span className="moto-label-main ant-tag">
              {newsItem.newssourcename}
            </span>
          </Tooltip> */}
        </div>
        <span className="gx-text-grey gx-fs-sm">
          {moment(newsItem.publisheddate).fromNow()}
        </span>
        <Tooltip title="Дэлгэрэнгүй унших">
          <h4 className="gx-mt-2">{myTitle}</h4>
        </Tooltip>
      </Card>

      {/* <Card
        className="gx-card-full gx-text-center moto-item-card"
        style={{ margin: "0 10px", height: "290px" }}
      >
        <div className="gx-pt-4 gx-px-3 gx-mb-3">
          <div className="gx-separator gx-bg-grey" />
          <h5 className="gx-mb-4 gx-text-grey">{newsItem.newssourcename}</h5>
          <Link to={"/news/" + newsItem.newsid}>
            <p>{newsItem.title.substring(0, 50)}</p>
          </Link>
        </div>

        <div className="gx-mt-4 gx-ayurveda-thumb">
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
            responsiveUseBreakpoints="true"
            className="gx-img-fluid gx-w-100"
            alt={newsItem.title}
            onError={defaultSrc}
          />
        </div>
      </Card> */}
    </>
  );
};

export default NewsItem2;
