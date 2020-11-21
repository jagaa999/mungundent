import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import { Tooltip, Card } from "antd";
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import NewsItemMainImage from "./NewsItemMainImage";

const NewsItem = ({ newsItem, grid }) => {
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
      // style={{ margin: "0 10px", height: "380px" }}
      cover={<NewsItemMainImage width="300" imageMain={newsItem.imagemain} />}
    >
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
      <Tooltip title="Дэлгэрэнгүй унших">
        <h4 className="gx-mt-2">{myTitle}</h4>
      </Tooltip>

      <div className="gx-description gx-fs-sm gx-mt-2 gx-d-none gx-d-sm-block">
        <span dangerouslySetInnerHTML={{ __html: truncatedDescription }}></span>
      </div>
    </Card>
  );
};

export default NewsItem;
