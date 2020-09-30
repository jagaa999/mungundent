import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader, Card } from "antd";
import { PlusOutlined, PlusCircleOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import CarCatalogFirmListItem1 from "./CarCatalogFirmListItem1";
import NewsListIActionHeader from "./NewsListIActionHeader";
import CarCatalogListContext from "context/CarCatalogListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;
const { Meta } = Card;

const CarCatalogType1 = () => {
  const carCatalogListContext = useContext(CarCatalogListContext);
  const [isAll, setIsAll] = useState(false);
  const [whatCountry, setWhatCountry] = useState([]);

  useEffect(() => {
    carCatalogListContext.loadCarFirmList();
  }, []);

  // console.log(
  //   "carCatalogListContext.carFirmList",
  //   carCatalogListContext.carFirmList
  // );

  const uniqueTags = [];
  carCatalogListContext.carFirmList.carFirmList.map((item) => {
    if (uniqueTags.indexOf(item.firmcountrymon) === -1) {
      uniqueTags.push(item.firmcountrymon);
    }
  });

  // console.log("uniqueTags", uniqueTags);

  const children = [];
  uniqueTags.sort().map((item, index) => {
    children.push(
      <Option key={index} value={item}>
        {item}
      </Option>
    );
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
            key="catalog_header"
            title={<h3>Каталоги - Фирм</h3>}
            className="gx-mb-3"
            extra={[
              <span className="gx-mr-4" key="extra_01">
                <span className="gx-fs-sm gx-mr-1">Бүгд</span>
                <Switch
                  size="small"
                  onChange={() => setIsAll(!isAll)}
                  checked={isAll}
                />
              </span>,
              <Select
                key="extra_02"
                mode="tags"
                style={{ minWidth: "170px" }}
                placeholder="Улс"
                onChange={handleChange}
              >
                {children}
              </Select>,
            ]}
          ></PageHeader>

          <Row className="gx-d-flex">
            {carCatalogListContext.carFirmList.carFirmList.map(
              (firmItem, index) => {
                if (!toBoolean(isAll) && !toBoolean(firmItem.special)) {
                  return "";
                }

                //  if (firmItem.firmcountrymon  whatCountry[])

                if (
                  !whatCountry.includes(firmItem.firmcountrymon) &&
                  whatCountry.length > 0
                ) {
                  return "";
                }

                return (
                  <Col key={index} lg={6} md={8} sm={8} xs={8}>
                    <CarCatalogFirmListItem1
                      key={index}
                      firmItem={firmItem}
                      isAll={isAll}
                    />
                  </Col>
                );
              }
            )}

            {!isAll && (
              <Col key="more-full" lg={6} md={8} sm={8} xs={8}>
                <Card
                  key="more-full"
                  className="moto-card-type1 gx-bg-amber-light"
                  hoverable={true}
                  onClick={() => setIsAll(true)}
                >
                  <Meta
                    avatar={null}
                    title={<PlusCircleOutlined style={{ fontSize: "24px" }} />}
                    description="Бусдыг үзэх"
                  />
                </Card>
              </Col>
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
