import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
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

const NewsItem = ({ newsItem, grid }) => {
  const {
    newsid,
    imageMain,
    title,
    description,
    isfeatured,
    isactive,
    newstypeid,
    newstypename,
    newssourceid,
    newssourcename,
    newssourcelogo,
    newssourcetype,
    publisheddate,
    publisherid,
    publisherphoto,
    publishername,
    publisherpositionname,
    createddate,
    creatorid,
    creatorname,
    creatorphoto,
    creatorpositionname,
    modifieddate,
    modifierid,
    modifiername,
    modifierphoto,
    modifierpositionname,
    iscomment,
    isfacebook,
    istwitter,

    price,
    mrp,
    offer,
    variant,
    rating,
  } = newsItem;

  // console.log("Манай бараа - ", newsItem);

  const truncatedDescription = description.substring(0, 120) + "&hellip;";

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    // console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Products</Menu.Item>
      <Menu.Item key="2">Apps</Menu.Item>
      <Menu.Item key="3">Blogs</Menu.Item>
    </Menu>
  );

  return (
    <div
      key={newsid}
      className={`gx-product-item  ${
        grid ? "gx-product-vertical" : "gx-product-horizontal"
      }`}
    >
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img alt={title} src={imageMain} />
          </span>
        </div>
      </div>

      <div className="gx-product-body">
        <h3 className="gx-product-title">
          <Link to={"/news/" + newsid}>{title}</Link>
          {/* <small className="gx-text-grey">{"  " + newstypename}</small> */}
        </h3>

        <div className="ant-row-flex">
          <Tooltip title="Төрөл">
            <Badge count={newstypename} style={{ backgroundColor: "teal" }} />
          </Tooltip>
          <Tooltip title="Эх сурвалж">
            <span className="gx-text-grey gx-fs-sm">{newssourcename}</span>
          </Tooltip>
          <Tooltip title="Нийтэлсэн огноо">
            <span className="gx-text-grey gx-fs-sm gx-ml-2">
              {publisheddate}
            </span>
          </Tooltip>
        </div>

        <div className="gx-description">
          <p className="gx-mt-2">
            <p dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
          </p>

          <ul className="gx-list-inline gx-btn-list">
            <li>
              <span className="gx-link gx-meta-like">
                <i className="icon icon-like-o gx-text-red" />
                12 таалагдсан
              </span>
            </li>
            <li>
              <span className="gx-link gx-meta-comment">
                <i className="icon icon-chat-new" />3 сэтгэгдэл
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="gx-product-footer">
        <div className="ant-row-flex">
          {/* <Row>
          <Col xs={8} sm={12} md={12} lg={24} xl={24}> */}
          <div className="gx-module-contact-content">
            <span>
              <Tooltip title={publisherpositionname}>
                <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                  <img src={publisherphoto} alt={publishername} />
                </span>
                <span className="gx-text-grey gx-fs-sm gx-mx-2">
                  {publishername}
                </span>
              </Tooltip>
            </span>
          </div>
          {/* </Col>
          <Col xs={16} sm={12} md={12} lg={24} xl={24}> */}
          <div className="gx-ml-auto">
            <span style={{ display: "inline-flex" }}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <i className="gx-icon-btn icon icon-ellipse-v" />
              </Dropdown>
            </span>
            <span style={{ display: "inline-flex" }}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <i className="gx-icon-btn icon icon-setting" />
              </Dropdown>
            </span>
          </div>
          {/* </Col>
        </Row> */}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
