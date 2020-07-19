import React, { useContext } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import {
  Button,
  Card,
  Badge,
  Tooltip,
  Row,
  Col,
  Dropdown,
  Menu,
  Checkbox,
  Switch,
  message,
  Divider,
  Spin,
} from "antd";

import {
  WarningTwoTone,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";

import LogBox from "components/Moto/LogBox";
import CommentBox from "components/Moto/CommentBox";

import LogsContext from "context/LogsContext";
import MemberCard02 from "./MemberCard02";
import NewsContext from "context/NewsContext";

const NewsItem = ({ newsId }) => {
  const newsContext = useContext(NewsContext);
  const logsContext = useContext(LogsContext);

  const newsItem = newsContext.state.newsDetail;

  function handleMenuClick(e) {
    message.info("Click on menu item.");
  }

  const menuMemberAction = (myLike, mySave) => (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Таалагдлаа">
        <Checkbox checked={myLike}>Таалагдлаа</Checkbox>
      </Menu.Item>
      <Menu.Item key="Жоорлох">
        <Checkbox checked={mySave}>Жоорлох</Checkbox>
      </Menu.Item>
      <Divider />
      <Menu.Item key="Алдаатай">
        <WarningTwoTone twoToneColor="#eb2f96" /> Алдаа мэдэгдэх
      </Menu.Item>
    </Menu>
  );

  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  const member = {
    publisheddate: newsItem.publisheddate,
    publisherid: newsItem.publisherid,
    publisherphoto: newsItem.publisherphoto,
    publishername: newsItem.publishername,
    publisherpositionname: newsItem.publisherpositionname,
  };

  const myBody1 = newsItem.body || "";
  const myBody = myBody1
    .split('"/storage')
    .join('"https://www.moto.mn/storage');

  return (
    <div>
      <div key={newsItem.newsid} className="gx-main-content news-detail">
        <div className="gx-product-footer">
          <div className="ant-row-flex">
            <div className="gx-module-contact-content">
              <span>
                <Tooltip title={newsItem.publisherpositionname}>
                  <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                    <img
                      src={newsItem.publisherphoto}
                      alt={newsItem.publishername}
                    />
                  </span>
                  <span className="gx-text-grey gx-fs-sm gx-mx-2">
                    {newsItem.publishername}
                  </span>
                </Tooltip>
              </span>
            </div>
            <div className="gx-ml-auto">
              <span style={{ display: "inline-flex" }}>
                <Dropdown
                  overlay={menuMemberAction}
                  placement="bottomRight"
                  trigger={["click"]}
                  arrow
                >
                  <Tooltip title="Таны үйлдлүүд">
                    <i className="gx-icon-btn icon icon-ellipse-v" />
                  </Tooltip>
                </Dropdown>
              </span>
              <span style={{ display: "inline-flex" }}>
                <Dropdown
                  overlay={menuMemberAction}
                  placement="bottomRight"
                  trigger={["click"]}
                  arrow
                >
                  <Tooltip title="Эзний үйлдлүүд">
                    <i className="gx-icon-btn icon icon-setting" />
                  </Tooltip>
                </Dropdown>
              </span>
            </div>
          </div>
        </div>

        <Row>
          <Col xs={24}>
            <Card
              cover={
                <img
                  alt={newsItem.title}
                  src={"https://www.moto.mn/" + newsItem.imagemain}
                />
              }
            >
              <h2>{newsItem.title}</h2>
              <div className="news-header">
                <div className="ant-row-flex">
                  <Tooltip title="Төрөл">
                    <Badge
                      count={newsItem.newstypename}
                      style={{ backgroundColor: "teal" }}
                    />
                  </Tooltip>
                  <Tooltip title="Эх сурвалж">
                    <span className="gx-text-grey gx-fs-sm">
                      {newsItem.newssourcename}
                    </span>
                  </Tooltip>
                  <Tooltip title="Нийтэлсэн огноо">
                    <span className="gx-text-grey gx-fs-sm gx-ml-2">
                      {newsItem.publisheddate}
                    </span>
                  </Tooltip>
                </div>
              </div>

              {/* Таалагдсан. Сэтгэгдэл. Logs */}
              <div className="gx-flex-row gx-mb-2 gx-mb-xl-3">
                {Object.entries(logsContext.state.actionTypes).map(function (
                  item,
                  i
                ) {
                  return (
                    <p
                      key={i}
                      className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey"
                    >
                      {/* <i className="icon icon-chat-bubble gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle" /> */}
                      <span className="gx-d-inline-flex gx-vertical-align-middle">
                        {item[1].count} {item[1].type}
                      </span>
                    </p>
                  );
                })}
              </div>

              <div
                className="news-body"
                dangerouslySetInnerHTML={{
                  __html: htmlEntities.decode(
                    // newsItem.body.replace("storage", "hahaha")
                    myBody
                  ),
                }}
              ></div>
            </Card>
          </Col>
        </Row>

        <div>
          <MemberCard02 member={member} maxWidth="250px" />
        </div>

        {/* Одоогоор TableName-ийг хоосон орхив */}
        <CommentBox recordId={newsItem.newsid} tableName="" />

        <LogBox recordId={newsItem.newsid} tableName="ECM_NEWS" />
      </div>
    </div>
  );
};

export default NewsItem;
