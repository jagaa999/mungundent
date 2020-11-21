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
import NewsControlButton from "components/Moto/Button/NewsControlButton";
import { FeaturedTag, ActiveTag } from "components/Moto/Tag/SmallTags";
import LogsContext from "context/LogsContext";

const NewsDetailHeader = (props) => {
  const logsContext = useContext(LogsContext);
  const newsItem = props.newsItem;

  console.log("props--------", props);

  const renderContent = (column = 1) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item>
        <Tooltip title="Төрөл">
          <Badge
            count={newsItem.newstypename}
            style={{ backgroundColor: "teal" }}
          />
        </Tooltip>
      </Descriptions.Item>
      <Descriptions.Item>
        <Tooltip title="Эх сурвалж">
          <Badge
            count={newsItem.newssourcename}
            style={{ backgroundColor: "grey" }}
          />
        </Tooltip>
      </Descriptions.Item>
      {/* <Descriptions.Item>
        <Tooltip title="Огноо">{newsItem.publisheddate}</Tooltip>
      </Descriptions.Item> */}
    </Descriptions>
  );

  const extraContent = (
    <div
      style={{
        display: "flex",
        width: "max-content",
        justifyContent: "flex-end",
      }}
    >
      {Object.entries(logsContext.logItems.actionTypes).map(function (item, i) {
        if (item[1].type !== "Идэвхтэй" && item[1].type !== "Спонсор")
          return (
            <Statistic
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

  const Content = ({ children, extra }) => {
    return (
      <div className="content gx-d-flex gx-align-items-center gx-justify-content-center">
        <div className="main">{children}</div>
        <div className="gx-ml-auto">{extra}</div>
      </div>
    );
  };

  return (
    <PageHeader
      className="site-page-header-responsive"
      // onBack={() => window.history.back()}
      title={
        <h1 className={toBoolean(newsItem.isfeatured) ? "gx-text-success" : ""}>
          {newsItem.title}
          {toBoolean(newsItem.isfeatured) && <FeaturedTag />}
          {!toBoolean(newsItem.isactive) && <ActiveTag />}
        </h1>
      }
      // subTitle="This is a subtitle"
      extra={<NewsControlButton />}
    >
      <Content extra={extraContent}>{renderContent()}</Content>

      <Divider className="gx-my-3" dashed />

      <div className="gx-text-center gx-w-100 gx-mt-5">
        <Statistic
          title="Нийтлэгч"
          className="gx-mb-5"
          prefix={
            <Tooltip title={props.member.name}>
              <Avatar src={props.member.photo} />
            </Tooltip>
          }
          value=" "
        />

        <Tooltip title="Огноо">{newsItem.publisheddate}</Tooltip>
      </div>
    </PageHeader>
  );
};

export default NewsDetailHeader;
