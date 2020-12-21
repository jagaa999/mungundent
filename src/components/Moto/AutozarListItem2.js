import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import toBoolean from "util/booleanFunction";
import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";
import { Html5Entities } from "html-entities";
import { Tooltip, Card, Tag, Image, Badge, Button } from "antd";
// import { ExclamationCircleOutlined } from "@ant-design/icons";
import TweenOne from "rc-tween-one";

import { FeaturedTag, ActiveTag } from "./Tag/SmallTags";
import AutozarListItemMainImage from "./Autozar/AutozarListItemMainImage";
// import MotoAuctionStarRatingComponent from "./Auction/MotoAuctionStarRatingComponent";
import CompareContext from "context/CompareContext";

const AutozarListItem2 = ({ autozarItem }) => {
  // console.log("Манай Item - ", autozarItem);
  const compareContext = useContext(CompareContext);

  const htmlEntities = new Html5Entities();

  const myYear =
    moment(autozarItem.mglyearmanufactured, "YYYY").isValid() === true
      ? moment(autozarItem.mglyearmanufactured).format("YYYY")
      : "";

  autozarItem.myTitle = `${myYear} ${autozarItem.mglfirm} ${
    autozarItem.mglmark
  } ${autozarItem.cartrim || ""}`;

  const myTitle = (
    <>
      <Link to={"/autozar/" + autozarItem.id}>{autozarItem.myTitle}</Link>
      {toBoolean(autozarItem.isfeatured) && <FeaturedTag type="dot" />}
      {!toBoolean(autozarItem.isactive) && <ActiveTag type="dot" />}
    </>
  );

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

  return (
    <TweenOne
      key={autozarItem.id}
      animation={{
        opacity: 0.1,
        marginTop: 100,
        type: "from",
        ease: "easeOutQuad",
        // delay: 50,
        // duration: 50,
      }}
      className="moto-item-card"
    >
      <Card
        className={`moto-item-card ${
          toBoolean(autozarItem.isfeatured) ? "moto-card-sponsor" : ""
        } ${!toBoolean(autozarItem.isactive) ? "border-top" : ""}`}
        hoverable={true}
        // style={{ margin: "0 10px", height: "380px" }}
        cover={
          <AutozarListItemMainImage
            myClass="gx-img-fluid gx-w-100"
            width="auto"
            imageMain={autozarItem.imagemain}
          />
        }
      >
        {/* <span className="moto-badge-1">{autozarItem.LOT}</span> */}
        <Tag color="warning" className="moto-badge-1">
          {autozarItem.mgllicensenumberfull}
        </Tag>

        {/* <div className="gx-dealclose-header-right">
          <RenderCarSpec1
            value={autozarItem.mgllicensenumberfull}
            status="processing"
          />

          <RenderCarSpec1 value={autozarItem.mglbody} status="default" />
        </div> */}

        <span className="gx-text-grey gx-fs-sm">
          {moment(autozarItem.modifieddate).fromNow()}
        </span>

        <h4>{myTitle}</h4>

        <div className="gx-text-success gx-fs-sm">
          {accounting.formatMoney(autozarItem.financepricerr, "₮", 0, "'")}
        </div>

        <div className="gx-description gx-fs-sm gx-mt-2 gx-d-none gx-d-sm-block">
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Жолоо:</span>
            {autozarItem.mgldrivepos === "1" ? "Зөв" : "Буруу"}
          </div>
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Хөдөлгүүр:</span>
            {`${autozarItem.mglengine2disp} cc`}
          </div>
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Шатахуун:</span>
            {autozarItem.mglfuel}
          </div>
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Хроп:</span>
            {autozarItem.drive2transtypename}
          </div>
          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Хөтлөгч:</span>
            {autozarItem.drive2drivename}
          </div>

          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Орж ирсэн он:</span>
            {moment(autozarItem.mglyearimport).format("YYYY")}
          </div>

          <div className="gx-d-flex gx-fs-sm">
            <span className="gx-mr-2 gx-text-grey">Гүйлт:</span>
            {accounting.formatMoney(autozarItem.autozarmilage, {
              symbol: "км",
              format: "%v %s",
              precision: 0,
              thousand: "'",
            })}
          </div>
        </div>

        {/* {autozarItem.STATUS !== "" && (
          <div className="moto-auction-badge">
            <Tag color="processing">Төлөв: {autozarItem.STATUS}</Tag>
            <Tag icon={<ExclamationCircleOutlined />} color="warning">
              Сүүлийн үнэ:{" "}
              {accounting.formatMoney(autozarItem.FINISH, "¥", 0, "'")}
            </Tag>
          </div>
        )} */}

        <Tooltip title="Харьцуулж харах хайрцагт нэмэх">
          <Button
            type="text"
            className="moto-badge-4"
            size="small"
            onClick={(e) => compareContext.addItem(autozarItem, "autozar")}
          >
            {/* <ApartmentOutlined /> */}
            Харьцуулах
          </Button>
        </Tooltip>
      </Card>
    </TweenOne>
  );
};

export default AutozarListItem2;
