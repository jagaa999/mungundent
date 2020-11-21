import React, { useContext } from "react";
import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";

import { Statistic, Tooltip, Avatar } from "antd";
import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";
import LogsContext from "context/LogsContext";

const NewsDetailHeader = (props) => {
  const logsContext = useContext(LogsContext);
  const newsItem = props.newsItem;

  // console.log("props--------", props);

  const extraContent = (
    <div
      style={{
        display: "flex",
        width: "max-content",
        justifyContent: "flex-end",
      }}
    >
      <Statistic
        key="news_avatar"
        style={{
          marginRight: 32,
        }}
        title="Нийтлэгч"
        prefix={
          <Tooltip title={props.member.name}>
            <Avatar src={props.member.photo} size="small" />
          </Tooltip>
        }
        value=" "
      />
      {Object.entries(logsContext.logList.actionTypes).map(function (item, i) {
        if (item[1].type !== "Идэвхтэй" && item[1].type !== "Спонсор")
          return (
            <Statistic
              key={i}
              style={{
                marginRight: 32,
              }}
              title={item[1].type}
              value={item[1].count}
            />
          );
      })}
    </div>
  );

  return (
    <>
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
        </Tooltip>
      </div>

      <h1 className={toBoolean(newsItem.isfeatured) ? "gx-text-success" : ""}>
        {newsItem.title}
        {toBoolean(newsItem.isfeatured) && <FeaturedTag />}
        {!toBoolean(newsItem.isactive) && <ActiveTag />}
      </h1>

      <div className="gx-media gx-mt-3">
        <Avatar
          src={props.member.photo}
          alt={props.member.name}
          className="gx-mr-3"
        />

        <div className="gx-media-body">
          <h5 className="gx-wall-user-title">{props.member.name}</h5>
          <p className="gx-text-grey gx-fs-sm">
            {moment(newsItem.publisheddate).fromNow()}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsDetailHeader;
