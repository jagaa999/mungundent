import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Affix, Switch, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import CarCatalogListItem from "./CarCatalogListItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import CarCatalogListContext from "context/CarCatalogListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const CarCatalogType1 = () => {
  const carCatalogListContext = useContext(CarCatalogListContext);
  const [isSpecial, setIsSpecial] = useState(false);

  useEffect(() => {
    carCatalogListContext.loadCarFirmList();
  }, []);

  console.log(
    "carCatalogListContext.carFirmList",
    carCatalogListContext.carFirmList
  );

  const uniqueTags = [];
  carCatalogListContext.carFirmList.carFirmList.map((item) => {
    if (uniqueTags.indexOf(item.firmcountrymon) === -1) {
      uniqueTags.push(item.firmcountrymon);
    }
  });

  console.log("uniqueTags", uniqueTags);

  const children = [];
  uniqueTags.map((item, index) => {
    children.push(<Option key={item}>{item}</Option>);
  });
  // for (let i = 10; i < 36; i++) {
  //   children.push(
  //     <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  //   );
  // }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}
      <span className="gx-fs-sm gx-mr-2">Зөвхөн нийтлэг</span>
      <Switch size="small" onChange={() => setIsSpecial(!isSpecial)} />

      <Select
        mode="tags"
        style={{ width: "100%" }}
        placeholder="Tags Mode"
        onChange={handleChange}
      >
        {children}
      </Select>
      <div className="gx-mb-2"></div>

      {!carCatalogListContext.carFirmList.loading ? (
        <div className="gx-main-content">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <Row className="gx-d-flex">
            {carCatalogListContext.carFirmList.carFirmList.map(
              (firmItem, index) => {
                if (toBoolean(isSpecial) && !toBoolean(firmItem.special)) {
                  return "";
                }

                return (
                  <Col key={index} lg={6} md={8} sm={8} xs={8}>
                    <CarCatalogListItem
                      key={index}
                      firmItem={firmItem}
                      isSpecial={isSpecial}
                    />
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
