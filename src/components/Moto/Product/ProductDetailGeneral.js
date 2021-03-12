import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
// import CustomScrollbars from "util/CustomScrollbars";
import { Scrollbars } from "react-custom-scrollbars";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Card, Alert, Row, Col, Image, Descriptions } from "antd";
import ProductDetailImages from "./ProductDetailImages";
import ProductListItemMainImage from "./ProductListItemMainImage";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";

const AutozarDetail2General = ({ myItem }) => {
  const htmlEntities = new Html5Entities();

  // console.log("myItem", myItem);

  if (myItem !== null && myItem !== undefined) {
    const myImages = (myItem.imageother || "").split("#");

    //! mgllicensenumberfull: "2825УАА"
    // mgllicensenumbershow: ""
    //! body2vinnumber: "TRN2150019334"
    // body2vinnumbershow: "1"

    //! autozarmilage: "115537"
    //! mglyearmanufactured: "2007-01-01"
    //! mglyearimport: "2019-06-02"
    //! mglfuel: "Бензин"
    //! mgldrivepos: "Баруун"

    //? Машин
    // mglfirm: "Toyota"
    // mglmark: "Hilux"
    // mglbody: "SUV"
    // mglcoloroutside: "Хар"
    // mglcountryorigin: "Япон"

    //? Агрегат
    // mglengine2disp: "2693"
    // drive2transtypename: "Автомат - AT"
    // drive2drivename: "4WD (Full-time)"
    // mgldoor: "4"
    // mglseat: "5"

    // driveid: "95798500"
    // transtypeiid: "1001"

    return <div></div>;
  } else {
    return "";
  }
};

export default AutozarDetail2General;
