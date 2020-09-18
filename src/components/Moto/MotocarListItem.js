import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/mn";
import toBoolean from "util/booleanFunction";
import { Card, Badge, Tag } from "antd";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";
const { Meta } = Card;

const NewsItem = ({ motocarItem }) => {
  console.log("Манай машин - ", motocarItem);

  return (
    // <Link to={"/member/" + motocarItem.itemid}>
    // <Badge.Ribbon
    //   text={
    //     <>
    //       {motocarItem.email !== "" && <MailOutlined className="gx-mr-2" />}
    //       {motocarItem.phonenumber !== "" && (
    //         <MobileOutlined className="gx-mr-2" />
    //       )}
    //     </>
    //   }
    //   color="#d1d1d1"
    //   placement="end"
    // >
    <Card
      className="gx-card-full gx-dot-arrow-hover"
      style={{ height: "250px" }}
    >
      <div className="gx-user-wid-row">
        <div className="gx-user-wid gx-mr-3">
          <img
            alt="..."
            src={`https://cloudapi.moto.mn/${motocarItem.imagemain}`}
            className="gx-object-cover"
          />
        </div>
        <div className="gx-user-wid-body gx-py-3 gx-pr-3">
          <div className="ant-row-flex">
            <h2 className="h4 gx-mr-1 gx-mb-1">
              {motocarItem.firmname} {motocarItem.markname}{" "}
              {motocarItem.cartrim}
            </h2>
          </div>
          <p className="gx-mb-1 gx-text-grey gx-fs-sm">
            Жолооны байрлал: {motocarItem.body2driverposname}
            <br />
            Хөтлөгч: {motocarItem.drive2drivename}
            <br />
            Шатахуун: {motocarItem.engine2fuelname}
            <br />
            Хроп: {motocarItem.drive2transtypename}
            <br />
            itemtypename: {motocarItem.itemtypename}
          </p>
        </div>
      </div>
    </Card>
    // </Badge.Ribbon>
    // </Link>
  );
};

export default NewsItem;

// motocarid
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
// carCountyOrigin
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
