import React from "react";
import { Link } from "react-router-dom";

import { Card, Tooltip, Typography } from "antd";
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
        bordered={false}
        className={`moto-item-card gx-m-0 ${
          toBoolean(newsItem.isfeatured) ? "moto-card-sponsor" : ""
        } ${!toBoolean(newsItem.isactive) ? "border-top" : ""}`}
        hoverable={true}
        bodyStyle={{ padding: "10px" }}
        cover={
          <Link to={"/news/" + newsItem.newsid}>
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
              width="300"
              gravity="face"
              quality="auto"
              responsiveUseBreakpoints="true"
              className="gx-img-fluid gx-w-100"
              default_image="jhannw5jgo2mlvvkvke9"
              alt={newsItem.title}
              onError={defaultSrc}
            />
          </Link>
        }
      >
        <span className="gx-text-grey gx-fs-sm">
          {moment(newsItem.publisheddate).fromNow()}
        </span>
        <Tooltip title={newsItem.title}>
          {/* <h4 className="gx-mt-2">{myTitle}</h4> */}
          <h6 className="gx-mt-2">
            <Link to={"/news/" + newsItem.newsid}>
              <Typography.Paragraph
                ellipsis={{ rows: 3, symbol: "…" }}
                className="gx-m-0 gx-text-primary gx-font-weight-semi-bold gx-fs-sm"
              >
                {newsItem.title}
              </Typography.Paragraph>
            </Link>
          </h6>
        </Tooltip>
      </Card>
    </>
  );
};

export default NewsItem2;
