import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Image } from "cloudinary-react";
import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import { defaultSrc } from "util/config";
import { Tooltip, Avatar, Table } from "antd";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";

import NewsItemMainImage from "./NewsItemMainImage";

const NewsItem = ({ newsItems }) => {
  // console.log("newsItems", newsItems);

  const columns = [
    {
      title: "Гарчиг",
      dataIndex: "title",
      key: "title",
      render: (title, record) => (
        <>
          <li className="gx-media">
            <NewsItemMainImage width="64" imageMain={record.imagemain} />

            <div className="gx-media-body gx-align-self-center">
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
            </div>
          </li>
        </>
      ),
    },
    {
      title: "Нийтлэгч",
      dataIndex: "userprofilephoto",
      key: "userprofilephoto",
      align: "center",
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
      showHeader={false}
    />
  );
};

export default NewsItem;
