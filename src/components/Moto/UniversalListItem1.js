import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TweenOne from "rc-tween-one";
import { isEmpty } from "lodash";

import { Image } from "cloudinary-react";
import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Button, Badge, Tooltip, Row, Col, Avatar } from "antd";

import UniversalListItemMainImage from "./Universal/UniversalListItemMainImage";
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import UniversalListItemButton from "./Universal/UniversalListItemButton";

const UniversalListItem1 = ({ myUniversalItem, grid }) => {
  const {
    mainData,
    headerSpec,
    specList1,
    specList2,
    ownerData,
  } = myUniversalItem;

  const RenderHeaderSpec = (props) => {
    if (props.value !== "") {
      return (
        <p className="gx-mr-3 gx-mb-2">
          <Badge className="gx-mb-0" status={props.status} />
          {props.value}
        </p>
      );
    }
    return "";
  };

  const RenderSpecList1 = (props) => {
    if (props.value !== "") {
      return (
        <li>
          <span className="moto-spec-list-label">{props.label}</span>
          <span className="moto-spec-list-value">{props.value}</span>
        </li>
      );
    }
    return "";
  };

  const RenderSpecList2 = (props) => {
    if (props.value !== "" && props.value !== "Invalid date") {
      return (
        <p className="gx-mb-1 gx-fs-sm">
          <span className="gx-size-8 gx-bg-success gx-rounded-xs gx-d-inline-block  gx-mr-1" />{" "}
          {props.value} {props.suffix}
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
      <div
        key={mainData.id}
        className={`gx-product-item gx-autozar-list-item  ${
          grid ? "gx-product-vertical" : "gx-product-horizontal"
        } ${mainData.isfeatured ? "moto-card-sponsor" : ""} ${
          !mainData.isactive ? "border-top" : ""
        }`}
      >
        {!isEmpty(mainData.imagemain) && (
          <div className="gx-product-image">
            <div className="gx-grid-thumb-equal">
              <Link to={`/${mainData.menu}/${mainData.id}`}>
                <span className="gx-link gx-grid-thumb-cover">
                  <UniversalListItemMainImage
                    myClass="gx-img-fluid gx-w-100"
                    width="auto"
                    imageMain={mainData.imagemain}
                    cloudName={mainData.imagemaincloudname}
                  />
                </span>
              </Link>
            </div>
          </div>
        )}

        <div className="gx-product-body">
          <Row className="moto-item-card">
            <Col xl={17} md={16} sm={15} xs={24}>
              <h3 className="gx-product-title">
                <Link to={`/${mainData.menu}/${mainData.id}`}>
                  {mainData.title}
                </Link>
                {mainData.isfeatured && <FeaturedTag />}
                {mainData.isactive && !mainData.isactive && <ActiveTag />}
              </h3>

              {/* headerSpec */}
              {!isEmpty(headerSpec) && (
                <div className="gx-dealclose-header-right">
                  {headerSpec.map((item, index) => {
                    return (
                      <RenderHeaderSpec
                        key={index}
                        value={item.value}
                        status={item.status}
                      />
                    );
                  })}
                </div>
              )}

              {!isEmpty(specList1) && (
                <div className="gx-mt-3">
                  <Row>
                    <Col span={24}>
                      <ul className="moto-spec-list">
                        {specList1.map((item, index) => {
                          return (
                            <RenderSpecList1
                              key={index}
                              label={item.label}
                              value={item.value}
                            />
                          );
                        })}
                      </ul>
                    </Col>
                  </Row>
                </div>
              )}

              {!isEmpty(mainData.description) && (
                <div className="gx-description gx-mt-3">
                  <p className="gx-mt-2">
                    <span
                      dangerouslySetInnerHTML={{ __html: mainData.description }}
                    ></span>
                  </p>
                </div>
              )}

              <UniversalListItemButton myUniversalItem={myUniversalItem} />
            </Col>
            <Col
              xl={7}
              md={8}
              sm={9}
              xs={24}
              className="gx-d-flex gx-flex-column"
            >
              <div>
                {!isEmpty(mainData.mainnumber) && (
                  <h3 className="gx-text-primary gx-font-weight-medium gx-mb-1">
                    {mainData.mainnumber}
                  </h3>
                )}

                {!isEmpty(specList2) && (
                  <div className="specList2">
                    {specList2.map((item, index) => {
                      return (
                        <RenderSpecList2
                          key={index}
                          label={item.label}
                          value={item.value}
                          suffix={item.suffix}
                        />
                      );
                    })}
                  </div>
                )}
              </div>

              {!isEmpty(ownerData) && (
                <div className="gx-mt-auto">
                  <div className="gx-media gx-mt-3">
                    <Avatar
                      src={ownerData.photo}
                      alt={ownerData.photoalt}
                      className="gx-mr-2"
                      size={30}
                    />

                    <div className="gx-media-body">
                      <h5 className=" gx-fs-sm">{ownerData.name}</h5>
                      <p className="gx-text-grey gx-fs-sm">
                        {mainData.modifieddate}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </div>

        {/* <div className="gx-product-footer">
        <AvatarMember02
          memberName={myUniversalItem.memberuserfullname}
          memberPhoto={myUniversalItem.memberprofilephoto}
          memberPosition="Гишүүнчлэл тодорхойгүй"
          memberId={myUniversalItem.memberpersonid}
          memberUid={myUniversalItem.memberfirebaseuid}
        />
      </div> */}
      </div>
    </TweenOne>
  );
};

export default UniversalListItem1;
