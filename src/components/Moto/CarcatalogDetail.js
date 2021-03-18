import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import CarcatalogDetailItem from "./CarcatalogDetailItem";
import CarcatalogDetailItemTab from "./CarcatalogDetailItemTab";
import CarcatalogContext from "context/CarcatalogContext";

import LoadingList from "./Loading/LoadingList";

const CarcatalogDetail = ({ carId }) => {
  const carCatalogContext = useContext(CarcatalogContext);

  useEffect(() => {
    carCatalogContext.loadCarDetail(carId);
  }, []);

  return (
    <div className="moto-list gx-mb-5">
      {!carCatalogContext.carDetail.loading ? (
        Object.keys(carCatalogContext.carDetail.carDetail).length !== 0 && (
          <div className="gx-main-content">
            <Row className="gx-d-flex">
              <Col lg={24} md={24} sm={24} xs={24}>
                <CarcatalogDetailItemTab
                  detailItem={carCatalogContext.carDetail.carDetail}
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

export default CarcatalogDetail;
