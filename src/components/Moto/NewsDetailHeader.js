import React, { useContext } from "react";
import toBoolean from "util/booleanFunction";
import {
  PageHeader,
  Button,
  Descriptions,
  Statistic,
  Tooltip,
  Badge,
  Avatar,
  Divider,
} from "antd";
import {
  ClockCircleOutlined,
  MinusCircleOutlined,
  WarningTwoTone,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  EditOutlined,
} from "@ant-design/icons";
import NewsHeaderButton from "components/Moto/Button/NewsHeaderButton";
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
      {Object.entries(logsContext.state.actionTypes).map(function (item, i) {
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
      {newsItem.publisheddate}
      <h1 className={toBoolean(newsItem.isfeatured) ? "gx-text-success" : ""}>
        {newsItem.title}
        {toBoolean(newsItem.isfeatured) && <FeaturedTag />}
        {!toBoolean(newsItem.isactive) && <ActiveTag />}
      </h1>
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
      </div>

      <div className="gx-mt-4 gx-mb-3">{extraContent}</div>
    </>
  );
};

export default NewsDetailHeader;
