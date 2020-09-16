import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import CarCatalogDetailItem from "./CarCatalogDetailItem";
import CarCatalogDetailItemTab from "./CarCatalogDetailItemTab";
import CarCatalogListContext from "context/CarCatalogListContext";

import LoadingList from "./Loading/LoadingList";

const CarCatalogDetailType1 = ({ carId }) => {
  const carCatalogListContext = useContext(CarCatalogListContext);

  useEffect(() => {
    carCatalogListContext.loadCarDetail(carId);
  }, []);

  console.log(
    "carCatalogListContext.carDetailList",
    carCatalogListContext.carDetail
  );

  return (
    <div className="moto-list gx-mb-5">
      {!carCatalogListContext.carDetail.loading ? (
        Object.keys(carCatalogListContext.carDetail.carDetail).length !== 0 && (
          <div className="gx-main-content">
            <Row className="gx-d-flex">
              <Col lg={24} md={24} sm={24} xs={24}>
                <CarCatalogDetailItemTab
                  editionItem={carCatalogListContext.carDetail.carDetail}
                />
              </Col>
            </Row>
          </div>
        )
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default CarCatalogDetailType1;
