import React, { useEffect, useContext, useState } from "react";

import {
  Col,
  Row,
  Button,
  Switch,
  Select,
  PageHeader,
  Slider,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

import toBoolean from "util/booleanFunction";
import CarCatalogIndexItem from "./CarCatalogIndexItem";

import CarCatalogListContext from "context/CarCatalogListContext";

import LoadingList from "./Loading/LoadingList";

const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

const CarCatalogIndexType1 = ({ markId }) => {
  const carCatalogListContext = useContext(CarCatalogListContext);
  const [whatDate, setWhatDate] = useState(["1900-01-01", "2090-12-31"]);

  useEffect(() => {
    carCatalogListContext.loadCarIndexList(markId);
  }, []);

  console.log(
    "carCatalogListContext.carIndexList",
    carCatalogListContext.carIndexList
  );

  return (
    <div className="moto-list">
      <div className="gx-mb-2"></div>

      {!carCatalogListContext.carIndexList.loading ? (
        <div className="gx-main-content">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <PageHeader
            title={<h3>Каталоги - Цуврал</h3>}
            className="gx-mb-3"
            extra={[
              <Select
                className="gx-mr-2"
                style={{ width: 120 }}
                allowClear
                placeholder="Доод"
                onChange={(value) => {
                  console.log(value);
                  setWhatDate([
                    moment(
                      value !== undefined ? value + "-01-01" : "1900-01-01"
                    ).format(dateFormat),
                    whatDate[1],
                  ]);
                }}
              >
                {Array.from(Array(30), (e, i) => {
                  return <Option value={i + 1990}>{i + 1990}</Option>;
                })}
              </Select>,
              <Select
                style={{ width: 120 }}
                allowClear
                placeholder="Дээд"
                onChange={(value) => {
                  console.log(value);
                  setWhatDate([
                    whatDate[0],
                    moment(
                      value !== undefined ? value + "-12-31" : "2090-12-31"
                    ).format(dateFormat),
                  ]);
                }}
              >
                {Array.from(Array(30), (e, i) => {
                  return <Option value={i + 2000}>{i + 2000}</Option>;
                })}
              </Select>,
            ]}
          ></PageHeader>

          <Row className="gx-d-flex">
            {carCatalogListContext.carIndexList.carIndexList.map(
              (indexItem, index) => {
                if (
                  !moment(indexItem.maindate).isBetween(
                    whatDate[0],
                    whatDate[1]
                  )
                ) {
                  return "";
                }

                return (
                  <Col
                    key={index}
                    lg={8}
                    md={12}
                    sm={12}
                    xs={12}
                    className="gx-mb-5"
                  >
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
