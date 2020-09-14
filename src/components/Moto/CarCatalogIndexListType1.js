import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import CarCatalogIndexItem from "./CarCatalogIndexItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import CarCatalogListContext from "context/CarCatalogListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const CarCatalogIndexType1 = ({ markId }) => {
  const carCatalogListContext = useContext(CarCatalogListContext);
  const [isSpecial, setIsSpecial] = useState(false);
  const [whatCountry, setWhatCountry] = useState([]);

  useEffect(() => {
    carCatalogListContext.loadCarIndexList(markId);
  }, []);

  console.log(
    "carCatalogListContext.carIndexList",
    carCatalogListContext.carIndexList
  );

  const uniqueTags = [];
  carCatalogListContext.carIndexList.carIndexList.map((item) => {
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
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!carCatalogListContext.carFirmList.loading ? (
        <div className="gx-main-content">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <PageHeader
            title={<h3>Каталоги - Цуврал</h3>}
            className="gx-mb-3"
            extra={[
              <Select
                mode="tags"
                style={{ minWidth: "170px" }}
                placeholder="Үгээр хайх"
                onChange={handleChange}
              >
                {children}
              </Select>,
            ]}
          ></PageHeader>

          <Row className="gx-d-flex">
            {carCatalogListContext.carIndexList.carIndexList.map(
              (indexItem, index) => {
                // if (toBoolean(isSpecial) && !toBoolean(indexItem.special)) {
                //   return "";
                // }

                // if (
                //   !whatCountry.includes(indexItem.indexcountrymon) &&
                //   whatCountry.length > 0
                // ) {
                //   return "";
                // }

                return (
                  <Col key={index} lg={8} md={12} sm={12} xs={12}>
                    <CarCatalogIndexItem
                      key={index}
                      indexItem={indexItem}
                      count={indexItem.count}
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

export default CarCatalogIndexType1;
