import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Alert, Row, Col, Image, Descriptions } from "antd";
import AutozarDetailImages from "./AutozarDetailImages";

const AutozarDetail2General = ({ autozarItem }) => {
  const htmlEntities = new Html5Entities();

  console.log("autozarItem", autozarItem);

  if (autozarItem !== null && autozarItem !== undefined) {
    const myImages = (autozarItem.imageother || "").split("#");

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
        {/* 
           #####  #######    #    ####### 
          #     #    #      # #      #    
          #          #     #   #     #    
           #####     #    #     #    #    
                #    #    #######    #    
          #     #    #    #     #    #    
           #####     #    #     #    #     */}

        <Row>
          <Col sm={{ span: 9, offset: 0 }} xs={{ span: 8, offset: 1 }}>
            <Descriptions
              column={1}
              layout="horizontal"
              className="moto-auction-head-description"
            >
              <Descriptions.Item
                label={<span className="gx-text-grey">Улсын дугаар</span>}
              >
                {autozarItem.mgllicensenumberfull}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Арал</span>}
              >
                {autozarItem.body2vinnumber}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Гүйлт</span>}
              >
                {accounting.formatMoney(autozarItem.autozarmilage, {
                  symbol: "км",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item
                label={<span className="gx-text-grey">Үйлдвэрлэсэн он</span>}
              >
                {autozarItem.mglyearmanufactured}
              </Descriptions.Item>

              <Descriptions.Item
                label={<span className="gx-text-grey">Орж ирсэн он</span>}
              >
                {autozarItem.mglyearimport}
              </Descriptions.Item>

              <Descriptions.Item
                label={<span className="gx-text-grey">Шатахуун</span>}
              >
                {autozarItem.mglfuel}
              </Descriptions.Item>

              <Descriptions.Item
                label={<span className="gx-text-grey">Жолоо</span>}
              >
                {autozarItem.mgldrivepos}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          {/*
             ### #     #    #     #####  ####### 
              #  ##   ##   # #   #     # #       
              #  # # # #  #   #  #       #       
              #  #  #  # #     # #  #### #####   
              #  #     # ####### #     # #       
              #  #     # #     # #     # #       
             ### #     # #     #  #####  #######  */}

          <Col span={15}>
            <Image
              src={`https://cloudapi.moto.mn/${autozarItem.imagemain}`}
              loading="lazy"
              width="300"
              quality="auto"
              className="gx-img-fluid gx-w-100 gx-card-widget gx-mb-4"
              alt={autozarItem.mglmark}
            />
          </Col>
        </Row>

        {/* 
           ### #     #    #     #####  #######  #####  
            #  ##   ##   # #   #     # #       #     # 
            #  # # # #  #   #  #       #       #       
            #  #  #  # #     # #  #### #####    #####  
            #  #     # ####### #     # #             # 
            #  #     # #     # #     # #       #     # 
           ### #     # #     #  #####  #######  #####   */}
        <Row>
          <Col span={24}>
            <AutozarDetailImages
              autozarItem={autozarItem}
              myImages={myImages}
              // myImages={autozarItem.imageother}
            />
          </Col>
        </Row>

        {/* <Descriptions
          layout="horizontal"
          bordered={true}
          size="small"
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          {Object.keys(autozarItem).map((val, k) => {
            return (
              <Descriptions.Item label={val}>
                {autozarItem[val]}
              </Descriptions.Item>
            );
          })}
        </Descriptions> */}

        {/* FINISH
              STATUS	
              AVG_STRING
              SERIAL	
              INFO */}
        {/* {autozarItem.STATUS !== "" && (
          <Alert
            message="STATUS"
            description={`Төлөв: ${autozarItem.STATUS}`}
            type="warning"
            showIcon={true}
          />
        )}
        {autozarItem.FINISH !== "" && (
          <Alert
            message="FINISH"
            description={`Зарагдсан үнэ: ${accounting.formatMoney(
              autozarItem.FINISH,
              "¥",
              0,
              "'"
            )}`}
            type="warning"
            showIcon={true}
          />
        )}
        {autozarItem.SERIAL !== "" && (
          <Alert
            message="Нэмэлт мэдээлэл"
            description={`SERIAL: ${autozarItem.SERIAL}`}
            type="info"
            showIcon={true}
          />
        )}
        {autozarItem.INFO !== "" && (
          <Alert
            message="Нэмэлт мэдээлэл"
            description={`INFO: ${autozarItem.INFO}`}
            type="info"
            showIcon={true}
          />
        )} */}

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
                {autozarItem.mglfirm}
              </Descriptions.Item>
              <Descriptions.Item label="Марк">
                {autozarItem.mglmark}
              </Descriptions.Item>
              <Descriptions.Item label="Хийц">
                {autozarItem.mglbody}
              </Descriptions.Item>
              <Descriptions.Item label="Гадна өнгө">
                {autozarItem.mglcoloroutside}
              </Descriptions.Item>
              <Descriptions.Item label="Улс">
                {autozarItem.mglcountryorigin}
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
                {accounting.formatMoney(autozarItem.mglengine2disp, {
                  symbol: "cc",
                  format: "%v %s",
                  precision: 0,
                  thousand: "'",
                })}
              </Descriptions.Item>
              <Descriptions.Item label="Хроп">
                {autozarItem.drive2transtypename}
              </Descriptions.Item>
              <Descriptions.Item label="Хөтлөгч">
                {autozarItem.drive2drivename}
              </Descriptions.Item>
              <Descriptions.Item label="Хаалга">
                {autozarItem.mgldoor}
              </Descriptions.Item>
              <Descriptions.Item label="Суудал">
                {autozarItem.mglseat}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </div>
    );
  } else {
    return "";
  }
};

export default AutozarDetail2General;
