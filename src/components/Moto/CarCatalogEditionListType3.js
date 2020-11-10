import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import CarCatalogEditionItem3 from "./CarCatalogEditionItem3";
import NewsListIActionHeader from "./NewsListIActionHeader";
import CarCatalogListContext from "context/CarCatalogListContext";
import FilterContext from "context/FilterContext";
// import FilterDrawer from "./Drawer/FilterDrawer";
// import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const CarCatalogEditionType1 = ({ indexId }) => {
  const carCatalogListContext = useContext(CarCatalogListContext);
  const [isSpecial, setIsSpecial] = useState(false);
  const [whatCountry, setWhatCountry] = useState([]);

  useEffect(() => {
    carCatalogListContext.loadCarEditionList(indexId);
  }, []);

  console.log(
    "carCatalogListContext.carEditionList",
    carCatalogListContext.carEditionList
  );

  const uniqueTags = [];
  carCatalogListContext.carEditionList.carEditionList.map((item) => {
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
            title={<h3>Каталоги - Хувилбар</h3>}
            className="gx-mb-3"
            extra={[]}
          ></PageHeader>

          {/* <Row className="gx-d-flex">
            {carCatalogListContext.carEditionList.carEditionList.map(
              (editionItem, index) => {
                return (
                  <Col
                    key={index}
                    lg={8}
                    md={12}
                    sm={12}
                    xs={12}
                    className="gx-mb-5"
                  >
                    <CarCatalogEditionItem3
                      key={index}
                      editionItem={editionItem}
                      count={editionItem.count}
                    />
                  </Col>
                );
              }
            )}
          </Row> */}

          <Row className="gx-d-flex">
            <Col key="dffdf" xs={24}>
              <CarCatalogEditionItem3
                key="dfdfd"
                editionItems={
                  carCatalogListContext.carEditionList.carEditionList
                }
              />
            </Col>
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

export default CarCatalogEditionType1;
