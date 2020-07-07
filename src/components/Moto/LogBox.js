import React from "react";

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
  message,
} from "antd";
import StarRatingComponent from "react-star-rating-component";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";

import IntlMessages from "util/IntlMessages";

const LogBox = ({ logBoxItem, loading }) => {
  console.log("logBoxItem ====>", logBoxItem);
  // const {
  //   id,
  //   tablename,
  //   recordid,
  //   actionname,
  //   actiondate,
  //   idstring,
  //   description,
  //   memberid,
  //   memberphoto,
  //   membername,
  //   positionname,
  //   userid,
  // } = logBoxItem;

  // useEffect(() => {
  //   logBox.loadNewsDetailLog(newsid, "ECM_NEWS");
  //   console.log("logBoxItem ====> ЭНД ХАРИН?", logBox);
  // }, []);

  // function handleMenuClick(e) {
  //   message.info("Click on menu item.");
  //   // console.log("click", e);
  // }

  // const menu = (
  //   <Menu onClick={handleMenuClick}>
  //     <Menu.Item key="1">Products</Menu.Item>
  //     <Menu.Item key="2">Apps</Menu.Item>
  //     <Menu.Item key="3">Blogs</Menu.Item>
  //   </Menu>
  // );

  return (
    <div className="gx-main-content news-detail">
      {logBoxItem.length && (
        <Row>
          {logBoxItem.map((el, index) => {
            const logItem = el;
            return (
              <Col key={index} span={24}>
                {el.actionname}
                {el.membername}
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default LogBox;
