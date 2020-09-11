import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Affix } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import CarCatalogListItem from "./CarCatalogListItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import CarCatalogListContext from "context/CarCatalogListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const CarCatalogType1 = () => {
  const carCatalogListContext = useContext(CarCatalogListContext);

  useEffect(() => {
    console.log("dddddddd");
    carCatalogListContext.loadCarFirmList();
    console.log("sdsssssssssssssss");
  }, []);

  // console.log(
  //   "carCatalogListContext.carFirmList",
  //   carCatalogListContext.carFirmList
  // );

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      {!carCatalogListContext.carFirmList.loading ? (
        <div className="gx-main-content">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <Row className="gx-d-flex">
            {carCatalogListContext.carFirmList.carFirmList.map(
              (firmItem, index) => {
                return (
                  <Col key={index} lg={6} md={8} sm={8} xs={8}>
                    <CarCatalogListItem key={index} firmItem={firmItem} />
                  </Col>
                );
              }
            )}
          </Row>
          {/* <MotoPagination />
          <FilterDrawer /> */}
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default CarCatalogType1;
