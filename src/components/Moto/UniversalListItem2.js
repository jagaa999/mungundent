import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";
import { Html5Entities } from "html-entities";
import { Tooltip, Card, Tag, Image, Badge, Button, Typography } from "antd";
// import { ExclamationCircleOutlined } from "@ant-design/icons";
import TweenOne from "rc-tween-one";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import UniversalListItemMainImage from "./Universal/UniversalListItemMainImage";
// import MotoAuctionStarRatingComponent from "./Auction/MotoAuctionStarRatingComponent";
import CompareContext from "context/CompareContext";
import UniversalListItemButton from "./Universal/UniversalListItemButton";
import { GetSpecData } from "util/getSpecData";

const UniversalListItem2 = ({ myUniversalItem }) => {
  const {
    mainData,
    headerSpec,
    specList1,
    specList2,
    ownerData,
  } = myUniversalItem;
  const compareContext = useContext(CompareContext);

  const RenderHeaderSpec = ({ item }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field, mainData.menu);

      return (
        <div className="gx-d-flex gx-fs-sm">
          <span className="gx-mr-2" style={{ color: "#adb6c7" }}>
            {myItem.label}:
          </span>
          <Tooltip title={myItem.tooltip}>
            <span style={{ color: "#949eb2" }}>{item.value}</span>
          </Tooltip>
        </div>
      );
    }
    return "";
  };

  const RenderSpecList1 = ({ item }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field, mainData.menu);

      return (
        <div className="gx-d-flex gx-fs-sm">
          {/* <span className="gx-mr-2 gx-text-grey"> */}
          <span className="gx-mr-2" style={{ color: "#adb6c7" }}>
            {myItem.label}:
          </span>
          <Tooltip title={myItem.tooltip}>
            <span style={{ color: "#949eb2" }}>{item.value}</span>
          </Tooltip>
        </div>
      );
    }
    return "";
  };

  const RenderSpecList2 = ({ item }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field, mainData.menu);

      return (
        <div className="gx-d-flex gx-fs-sm">
          {/* <span className="gx-mr-2 gx-text-grey"> */}
          <span className="gx-mr-2" style={{ color: "#adb6c7" }}>
            {myItem.label}:
          </span>
          <Tooltip title={myItem.tooltip}>
            <span style={{ color: "#949eb2" }}>{item.value}</span>
          </Tooltip>
        </div>
      );
    }
    return "";
  };

  return (
    <TweenOne
      key={myUniversalItem.id}
      animation={{
        opacity: 0.1,
        marginTop: 100,
        type: "from",
        ease: "easeOutQuad",
        // delay: 50,
        // duration: 50,
      }}
      className="moto-item-card gx-pb-2"
    >
      <Card
        bordered={false}
        className={`moto-item-card gx-rounded-xxl  ${
          toBoolean(mainData?.isfeatured?.value) ? "moto-card-sponsor" : ""
        } ${!toBoolean(mainData?.isactive?.value) ? "border-top" : ""}`}
        hoverable={true}
        // style={{ margin: "0 10px", height: "380px" }}
        cover={
          <Link to={mainData?.link?.value}>
            <div className="moto-product-cover moto-listtype2">
              <UniversalListItemMainImage
                myClass="gx-img-fluid gx-w-100"
                width="auto"
                imageMain={mainData?.imagemain?.value}
                cloudName={mainData?.imagemaincloudname?.value}
              />
            </div>
          </Link>
        }
      >
        {/* <span className="moto-badge-1">{myUniversalItem.LOT}</span> */}
        {/* <Tag color="warning" className="moto-badge-1">
          {myUniversalItem.mgllicensenumberfull}
          fdgfdgd gdf
        </Tag> */}

        {/* <div className="gx-dealclose-header-right">
          <RenderCarSpec1
            value={myUniversalItem.mgllicensenumberfull}
            status="processing"
          />

          <RenderCarSpec1 value={myUniversalItem.mglbody} status="default" />
        </div> */}

        <span className="gx-text-grey gx-fs-sm">
          {mainData?.modifieddate?.value}
        </span>

        <div className={isBrowser ? "h4" : "h6"}>
          <Link to={mainData?.link?.value}>
            <Tooltip title={mainData?.title?.value}>
              <Typography.Paragraph
                ellipsis={{ rows: 3, symbol: "…" }}
                className="gx-m-0 gx-text-primary gx-font-weight-semi-bold"
              >
                {mainData?.title?.value}
              </Typography.Paragraph>
            </Tooltip>
          </Link>
          {toBoolean(mainData?.isfeatured?.value) && <FeaturedTag type="dot" />}
          {!toBoolean(mainData?.isactive?.value) && <ActiveTag type="dot" />}
        </div>

        {/* <div className="gx-text-success gx-font-weight-bold gx-mt-2">
          <Tooltip
            title={
              GetSpecData(mainData.mainnumber.field, mainData.menu)?.tooltip
            }
          >
            {mainData.mainnumber?.value}
          </Tooltip>
        </div> */}

        <div className="gx-description gx-fs-sm gx-mt-2 gx-d-none gx-d-sm-block">
          {headerSpec?.map((item, index) => {
            return <RenderHeaderSpec key={index} item={item} />;
          })}

          {specList1?.map((item, index) => {
            return <RenderSpecList1 key={index} item={item} />;
          })}

          {specList2?.map((item, index) => {
            return <RenderSpecList2 key={index} item={item} />;
          })}
        </div>

        <div className="gx-mt-5">
          <div className="moto-badge-5 gx-d-flex gx-vertical-align-middle">
            <div>
              <Tooltip
                title={
                  GetSpecData(mainData?.mainnumber?.field, mainData?.menu)
                    ?.tooltip
                }
              >
                {mainData?.mainnumber?.value}
              </Tooltip>
            </div>
            <div className="gx-ml-auto" style={{ minWidth: "90px" }}>
              <UniversalListItemButton myUniversalItem={myUniversalItem} />
            </div>
          </div>
        </div>
      </Card>
    </TweenOne>
  );
};

export default UniversalListItem2;
