import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Image } from "cloudinary-react";
import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";
import { defaultSrc, prepareImageSrc } from "util/config";

import { Button, Badge, Tooltip, Row, Col, Avatar } from "antd";

import AutozarListItemMainImage from "./Autozar/AutozarListItemMainImage";
import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import AvatarMember from "./Member/MemberAvatar";
import AvatarMember02 from "./Member/MemberAvatar02";
import AvatarMember03 from "./Member/MemberAvatar03";

const AutozarListItem1 = ({ autozarItem, grid }) => {
  const truncatedDescription = autozarItem.description.substring(0, 250);

  const myMainImage = prepareImageSrc(autozarItem.imagemain);
  const myYear =
    moment(autozarItem.mglyearmanufactured, "YYYY").isValid() === true
      ? moment(autozarItem.mglyearmanufactured).format("YYYY")
      : "";

  const RenderCarSpec1 = (props) => {
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

  const RenderCarSpec2 = (props) => {
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

  const RenderCarSpec3 = (props) => {
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

  // console.log(autozarItem);

  // ######  ####### ####### #     # ######  #     #
  // #     # #          #    #     # #     # ##    #
  // #     # #          #    #     # #     # # #   #
  // ######  #####      #    #     # ######  #  #  #
  // #   #   #          #    #     # #   #   #   # #
  // #    #  #          #    #     # #    #  #    ##
  // #     # #######    #     #####  #     # #     #
  return (
    <div
      key={autozarItem.id}
      className={`gx-product-item gx-autozar-list-item  ${
        grid ? "gx-product-vertical" : "gx-product-horizontal"
      } ${toBoolean(autozarItem.isfeatured) ? "moto-card-sponsor" : ""} ${
        !toBoolean(autozarItem.isactive) ? "border-top" : ""
      }`}
    >
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <Link to={"/autozar/" + autozarItem.id}>
            <span className="gx-link gx-grid-thumb-cover">
              <AutozarListItemMainImage
                myClass="gx-img-fluid gx-w-100"
                width="auto"
                imageMain={autozarItem.imagemain}
              />
            </span>
          </Link>
        </div>
      </div>

      <div className="gx-product-body">
        <Row className="moto-item-card">
          <Col xl={17} md={16} sm={15} xs={24}>
            <h3 className="gx-product-title">
              <Link to={"/autozar/" + autozarItem.id}>
                {myYear} {autozarItem.mglfirm} {autozarItem.mglmark}{" "}
                {autozarItem.cartrim}
              </Link>
              {toBoolean(autozarItem.isfeatured) && <FeaturedTag />}
              {!toBoolean(autozarItem.isactive) && <ActiveTag />}
            </h3>

            <div className="gx-dealclose-header-right">
              <RenderCarSpec1
                value={autozarItem.mgllicensenumberfull}
                status="processing"
              />

              <RenderCarSpec1 value={autozarItem.mglbody} status="default" />
            </div>

            {/* <div className="gx-mt-3">
              <span className="moto-label-main ant-tag">
                {autozarItem.body2bodyname}
              </span>
              <Tooltip title="Улсын дугаар">
                <span className="moto-label-main ant-tag">
                  {autozarItem.mgllicensenumberfull}
                </span>
              </Tooltip>
            </div> */}

            <div className="gx-mt-3">
              <Row>
                <Col span={24}>
                  <ul className="moto-spec-list">
                    <RenderCarSpec2
                      value={autozarItem.mgldrivepos === "1" ? "Зөв" : "Буруу"}
                      label="Жолоо"
                    />
                    <RenderCarSpec2
                      value={`${autozarItem.mglengine2disp} cc, ${autozarItem.mglfuel}`}
                      label="Хөдөлгүүр"
                    />
                    <RenderCarSpec2
                      value={autozarItem.drive2transtypename}
                      label="Хроп"
                    />
                    <RenderCarSpec2
                      value={autozarItem.drive2drivename}
                      label="Хөтлөгч"
                    />
                  </ul>
                </Col>
              </Row>
            </div>

            {/* <div className="gx-description gx-mt-3">
              <p className="gx-mt-2">
                <span
                  dangerouslySetInnerHTML={{ __html: truncatedDescription }}
                ></span>
              </p>
            </div> */}
          </Col>
          <Col
            xl={7}
            md={8}
            sm={9}
            xs={24}
            className="gx-d-flex gx-flex-column"
          >
            <div>
              <h3 className="gx-text-primary gx-font-weight-medium gx-mb-1">
                {accounting.formatMoney(
                  autozarItem.financepricerr,
                  "₮",
                  0,
                  "'"
                )}
              </h3>
              <RenderCarSpec3
                value={moment(autozarItem.mglyearimport).format("YYYY")}
                suffix="он"
              />
              <RenderCarSpec3
                value={accounting.formatMoney(autozarItem.autozarmilage, {
                  symbol: "км",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              />
            </div>

            <div className="gx-mt-auto">
              <div className="gx-media gx-mt-3">
                <Avatar
                  src={autozarItem.memberprofilephoto}
                  alt={autozarItem.memberuserfullname}
                  className="gx-mr-2"
                  size={30}
                />

                <div className="gx-media-body">
                  <h5 className=" gx-fs-sm">
                    {autozarItem.memberuserfullname}
                  </h5>
                  <p className="gx-text-grey gx-fs-sm">
                    {moment(autozarItem.modifieddate).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* <div className="gx-product-footer">
        <AvatarMember02
          memberName={autozarItem.memberuserfullname}
          memberPhoto={autozarItem.memberprofilephoto}
          memberPosition="Гишүүнчлэл тодорхойгүй"
          memberId={autozarItem.memberpersonid}
          memberUid={autozarItem.memberfirebaseuid}
        />
      </div> */}
    </div>
  );
};

export default AutozarListItem1;

// id
// mglLicensenumberFull
// title
// imageMain
// imageOther
// description
// firmid
// markid
// mainid
// carid
// firmName
// firmCountryMon
// markName
// indexImage
// indexDate
// gooCartrim
// gooCarDate
// gooUntilnow
// gooPriceNewUsd
// gooBody2Door
// gooBody2Seat
// gooBody2ModelCodeFull
// gooModelCode
// gooEngine2Code
// gooEngine2PowerHp
// gooEngine2Disp
// gooEngine2Fueltank
// gooEngine2Fuelname
// gooDrive2Transtypename
// carYearManufactured
// carYearImport
// carMilageImport
// carMilageNow
// carColorOutside
// carColorInside
// bodyid
// body2Bodyname
// engine2Disp
// engine2Cylinder
// fueltypeid
// engine2Fuelname
// engine2PowerHp
// mglCountyOrigin
// carCountryImport
// body2Door
// body2Seat
// transtypeid
// drive2Transtypename
// drive2TransmissionStep
// driveid
// drive2Drivename
// driverposid
// body2Driverposname
// engineTurboid
// engineTurboName
// engine2Type
// mglLicensenumberNumber
// mglLicensenumberSeries
// vehicleType
// createdDate
// createdBy
// modifiedDate
// modifiedBy
// carFirm
// carMark
// cartrim
// tempLeasing
// tempSalecondition
// tempPrice
// tempPhone
// tempUnaaid
// tempUneguiid
// tempNuxtsul
// tempMiningurl
// tempMiningpagetitle
// tempMiningdate
// body2ModelCodeFull
// modelCode
// body2VinNumber
// engine2Code
// temp
// oldMotoGooAllcarCarid
// isActive
// ownerid
// personId
// systemUserId
// memberusername
// memberPersonId
// memberuserFullName
// memberprofilePhoto
// memberfirebaseUid
// companyId
