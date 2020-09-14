import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import CarCatalogDetailItem from "./CarCatalogDetailItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import CarCatalogListContext from "context/CarCatalogListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const CarCatalogDetailType1 = ({ carId }) => {
  const carCatalogListContext = useContext(CarCatalogListContext);
  const [isSpecial, setIsSpecial] = useState(false);
  const [whatCountry, setWhatCountry] = useState([]);

  useEffect(() => {
    carCatalogListContext.loadCarDetail(carId);
  }, []);

  // console.log(
  //   "carCatalogListContext.carDetailList",
  //   carCatalogListContext.carDetail
  // );

  const uniqueTags = [];
  carCatalogListContext.carDetail.carDetail.map((item) => {
    if (uniqueTags.indexOf(item.firmcountrymon) === -1) {
      uniqueTags.push(item.firmcountrymon);
    }
  });

  // console.log("uniqueTags", uniqueTags);

  const children = [];
  uniqueTags.sort().map((item, index) => {
    children.push(<Option key={item}>{item}</Option>);
  });

  function handleChange(value) {
    // console.log(`selected ${value}`);
    setWhatCountry(value);
  }

  return (
    <div className="moto-list">
      {!carCatalogListContext.carDetail.loading ? (
        <div className="gx-main-content">
          <PageHeader
            title={<h3>Хувилбар</h3>}
            className="gx-mb-3"
          ></PageHeader>

          <Row className="gx-d-flex">
            {carCatalogListContext.carDetail.carDetail.map(
              (editionItem, index) => {
                return (
                  <Col key={index} lg={24} md={24} sm={24} xs={24}>
                    <CarCatalogDetailItem
                      key={index}
                      editionItem={editionItem}
                    />
                  </Col>
                );
              }
            )}
          </Row>
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default CarCatalogDetailType1;
