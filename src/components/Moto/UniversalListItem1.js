import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TweenOne from "rc-tween-one";
import { isEmpty } from "lodash";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { Image } from "cloudinary-react";
import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import {
  Card,
  Button,
  Badge,
  Tooltip,
  Row,
  Col,
  Avatar,
  Typography,
} from "antd";

import UniversalListItemMainImage from "./Universal/UniversalListItemMainImage";
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import UniversalListItemButton from "./Universal/UniversalListItemButton";
import { GetSpecData } from "util/getSpecData";

const UniversalListItem1 = ({ myUniversalItem, grid }) => {
  const {
    mainData,
    headerSpec,
    specList1,
    specList2,
    ownerData,
  } = myUniversalItem;

  const RenderHeaderSpec = ({ item }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field, mainData.menu);

      return (
        <span className="gx-mr-3 gx-fs-sm">
          {/* <Badge className="gx-mb-0 gx-mr-0" status={myItem.status} /> */}
          <Tooltip title={myItem.tooltip}>{item.value}</Tooltip>
        </span>
      );
    }
    return "";
  };

  const RenderSpecList1 = ({ item }) => {
    if (item.value !== "") {
      const myItem = GetSpecData(item.field, mainData.menu);

      return (
        <li>
          <span className="moto-spec-list-label">{myItem.label}</span>
          <span className="moto-spec-list-value">
            <Tooltip title={myItem.tooltip}>{item.value}</Tooltip>
          </span>
        </li>
      );
    }
    return "";
  };

  const RenderSpecList2 = ({ item }) => {
    if (item.value !== "" && item.value !== "Invalid date") {
      const myItem = GetSpecData(item.field, mainData.menu);

      return (
        <p className="gx-mb-1 gx-fs-sm">
          <span className="gx-size-8 gx-bg-success gx-rounded-xs gx-d-inline-block  gx-mr-1" />{" "}
          <Tooltip title={myItem.tooltip}>{item.value}</Tooltip>
        </p>
      );
    }
    return "";
  };

  // console.log(myUniversalItem);

  // ######  ####### ####### #     # ######  #     #
  // #     # #          #    #     # #     # ##    #
  // #     # #          #    #     # #     # # #   #
  // ######  #####      #    #     # ######  #  #  #
  // #   #   #          #    #     # #   #   #   # #
  // #    #  #          #    #     # #    #  #    ##
  // #     # #######    #     #####  #     # #     #
  return (
    <TweenOne
      key={mainData.id}
      animation={{
        opacity: 0.1,
        marginLeft: 100,
        type: "from",
        ease: "easeOutQuad",
        // delay: 50,
        // duration: 50,
      }}
    >
      <Card
        bordered={false}
        className={`moto-item-card-1 ${
          toBoolean(mainData.isfeatured.value) ? "moto-card-sponsor" : ""
        } ${!toBoolean(mainData.isactive.value) ? "border-top" : ""}`}
        hoverable={true}
      >
        <Row gutter={[1, 1]}>
          <Col span="9">
            {!isEmpty(mainData.imagemain.value) && (
              <div className="gx-product-image">
                <Link to={mainData.link.value}>
                  <span className="gx-link gx-grid-thumb-cover moto-listtype2">
                    <UniversalListItemMainImage
                      myClass="gx-img-fluid gx-w-100"
                      width="auto"
                      imageMain={mainData.imagemain.value}
                      cloudName={mainData.imagemaincloudname.value}
                    />
                  </span>
                </Link>
              </div>
            )}
          </Col>

          <Col span="15">
            <div className="gx-p-3">
              <Row className="moto-item-card">
                <Col span={24}>
                  <div className="gx-d-flex">
                    <div className={isBrowser ? "h4" : "h6"}>
                      <Link to={mainData.link.value}>
                        <Tooltip title={mainData.title.value}>
                          <Typography.Paragraph
                            ellipsis={{ rows: 3, symbol: "…" }}
                            className="gx-m-0 gx-text-primary gx-font-weight-semi-bold"
                          >
                            {mainData.title.value}
                          </Typography.Paragraph>
                        </Tooltip>
                      </Link>
                      {mainData.isfeatured.value && <FeaturedTag />}
                      {mainData.isactive.value && !mainData.isactive.value && (
                        <ActiveTag />
                      )}
                    </div>

                    {!isEmpty(mainData.mainnumber?.value) && (
                      <div className={`gx-ml-auto  ${isBrowser ? "h4" : "h6"}`}>
                        <Tooltip
                          title={
                            GetSpecData(
                              mainData.mainnumber.field,
                              mainData.menu
                            ).tooltip
                          }
                        >
                          {mainData.mainnumber.value}
                        </Tooltip>
                      </div>
                    )}
                  </div>

                  {/* headerSpec */}
                  {!isEmpty(headerSpec) && (
                    <div className="gx-dealclose-header-right">
                      {[...headerSpec, ...specList2].map((item, index) => {
                        return <RenderHeaderSpec key={index} item={item} />;
                      })}
                    </div>
                  )}

                  {!isEmpty(specList1) && (
                    <div className="gx-mt-2 gx-d-none gx-d-sm-block ">
                      <Row>
                        <Col span={24}>
                          <ul className="moto-spec-list">
                            {specList1.map((item, index) => {
                              return (
                                <RenderSpecList1 key={index} item={item} />
                              );
                            })}
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  )}

                  {!isEmpty(mainData.description) && (
                    <div className="gx-description gx-mt-3 gx-d-none gx-d-sm-block">
                      <p className="gx-mt-2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              mainData.description.value.length > 210
                                ? `${mainData.description.value.substring(
                                    0,
                                    210
                                  )}...`
                                : mainData.description.value,
                          }}
                        ></span>
                      </p>
                    </div>
                  )}

                  <div>
                    <UniversalListItemButton
                      myUniversalItem={myUniversalItem}
                    />
                  </div>

                  {/* <div>
                    {!isEmpty(ownerData) && (
                      <div className="gx-mt-auto gx-d-none gx-d-sm-block">
                        <div className="gx-media gx-mt-3">
                          {!isEmpty(ownerData.photo) && (
                            <Avatar
                              src={ownerData.photo}
                              alt={ownerData.photoalt}
                              className="gx-mr-2"
                              size={30}
                            />
                          )}

                          <div className="gx-media-body">
                            <h5 className=" gx-fs-sm">{ownerData.name}</h5>
                            {!isEmpty(mainData.modifieddate.value) && (
                              <p className="gx-text-grey gx-fs-sm">
                                {mainData.modifieddate.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div> */}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        {/* <div className="moto-badge-4">
          <UniversalListItemButton myUniversalItem={myUniversalItem} />
        </div> */}
      </Card>
    </TweenOne>
  );
};

export default UniversalListItem1;
