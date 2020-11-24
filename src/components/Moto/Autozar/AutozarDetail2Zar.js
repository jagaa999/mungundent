import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";

import { Alert, Divider, Row, Col, Image, Descriptions } from "antd";

const AutozarDetail2Zar = ({ autozarItem }) => {
  const htmlEntities = new Html5Entities();

  if (Object.keys(autozarItem).length !== 0) {
    // autozarconditionid: "1030"
    //! autozarconditionname: "Монголд бага явсан"

    //! autozarid: "1587535609962815"

    //! financecondition: "Бэлнээр ярина"
    //! autozarleasing: ""
    //! financepricerr: "39000000"

    //! autozarinspection: "1"
    //! autozarpenalty: "1"
    //! autozartax: "1"

    //! isactive: "1"
    //! iscomment: "1"
    //! isfeatured: "0"

    // createdby: "1587535124048720"
    // createddate: "2020-04-22 14:06:49"
    // modifiedby: "1587535124048720"
    // modifieddate: "2020-04-22 14:06:49"

    return (
      <div>
        <Row>
          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Аукшин мэдээлэл</h4>
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={1}
            >
              <Descriptions.Item label="Нөхцөл">
                {autozarItem.autozarconditionname}
              </Descriptions.Item>
              <Descriptions.Item label="Зарын дугаар">
                {autozarItem.autozarid}
              </Descriptions.Item>

              <Descriptions.Item label="Зарах нөхцөл">
                {autozarItem.financecondition}
              </Descriptions.Item>

              <Descriptions.Item label="Лизингтэй?">
                {autozarItem.autozarinspection}
              </Descriptions.Item>

              <Descriptions.Item label="Зарах үнэ">
                {accounting.formatMoney(
                  autozarItem.financepricerr,
                  "₮",
                  0,
                  "'"
                )}
              </Descriptions.Item>
            </Descriptions>
          </Col>

          <Col
            md={{ span: 12, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 1 }}
            className="gx-mt-4 gx-mt-md-0"
          >
            <h4>Аукшин мэдээлэл</h4>
            <Descriptions
              className="moto-car-spec1"
              layout="horizontal"
              bordered={true}
              size="small"
              column={1}
            >
              <Descriptions.Item label="Оношилгоо?">
                {autozarItem.autozarinspection}
              </Descriptions.Item>
              <Descriptions.Item label="Торгуульгүй?">
                {autozarItem.autozarpenalty}
              </Descriptions.Item>
              <Descriptions.Item label="Татвар төлсөн?">
                {autozarItem.autozartax}
              </Descriptions.Item>

              {/* <Descriptions.Item label="Дундаж үнэ">
                {moment(autozarItem.financecondition).format("MM-DD HH:mm")}
              </Descriptions.Item> */}

              <Descriptions.Item label="Идэвхтэй?">
                {autozarItem.isactive}
              </Descriptions.Item>
              <Descriptions.Item label="Коммент?">
                {autozarItem.iscomment}
              </Descriptions.Item>
              <Descriptions.Item label="Спонсор?">
                {autozarItem.isfeatured}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Divider className="gx-my-4" />

        <Row>
          <Col span={24}>
            <div>Үүсгэсэн огноо: {autozarItem.createddate}</div>
            <div>Шинэчилсэн огноо: {autozarItem.modifieddate}</div>
          </Col>
        </Row>
      </div>
    );
  } else {
    return "";
  }
};

export default AutozarDetail2Zar;
