import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
// import CustomScrollbars from "util/CustomScrollbars";
import { Scrollbars } from "react-custom-scrollbars";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Card, Alert, Row, Col, Image, Descriptions } from "antd";
import AutozarDetailImages from "./AutozarDetailImages";
import AutozarListItemMainImage from "./AutozarListItemMainImage";
import { GetSpecData } from "util/getSpecData";
import { isEmpty } from "lodash";

const AutozarDetail2General = ({ myItem }) => {
  const htmlEntities = new Html5Entities();

  console.log("myItem", myItem);

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

    return (
      <div>
        <Row className="gx-mt-4">
          {/*
            #####  ######  #######  #####  
          #     # #     # #       #     # 
          #       #     # #       #       
           #####  ######  #####   #       
                # #       #       #       
          #     # #       #       #     # 
           #####  #       #######  #####   */}

          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Автомашин</h4>
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={1}
            >
              <Descriptions.Item label="Фирм">
                {myItem.mglfirm}
              </Descriptions.Item>
              <Descriptions.Item label="Марк">
                {myItem.mglmark}
              </Descriptions.Item>
              <Descriptions.Item label="Хийц">
                {myItem.mglbody}
              </Descriptions.Item>
              <Descriptions.Item label="Гадна өнгө">
                {myItem.mglcoloroutside}
              </Descriptions.Item>
              <Descriptions.Item label="Улс">
                {myItem.mglcountryorigin}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          {/* 
           ####### #######  #####  #     # 
              #    #       #     # #     # 
              #    #       #       #     # 
              #    #####   #       ####### 
              #    #       #       #     # 
              #    #       #     # #     # 
              #    #######  #####  #     #  */}

          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Агрегат</h4>
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            >
              <Descriptions.Item label="Хөдөлгүүр">
                {accounting.formatMoney(myItem.mglengine2disp, {
                  symbol: "cc",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item label="Хроп">
                {myItem.drive2transtypename}
              </Descriptions.Item>
              <Descriptions.Item label="Хөтлөгч">
                {myItem.drive2drivename}
              </Descriptions.Item>
              <Descriptions.Item label="Хаалга">
                {myItem.mgldoor}
              </Descriptions.Item>
              <Descriptions.Item label="Суудал">
                {myItem.mglseat}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        {/* </Scrollbars> */}
      </div>
    );
  } else {
    return "";
  }
};

export default AutozarDetail2General;
