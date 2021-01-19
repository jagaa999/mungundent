import React, { useEffect, useContext, useState } from "react";

import {
  Col,
  Row,
  Button,
  Switch,
  Select,
  PageHeader,
  Slider,
  Card,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

import toBoolean from "util/booleanFunction";
import CarCatalogIndexListView1 from "./MotoCar/CarCatalogIndexListView1";
import CarCatalogIndexListView2 from "./MotoCar/CarCatalogIndexListView2";
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
        <div className="moto-carcatalog-timeline">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <PageHeader
            title={<h3>Каталоги - Цуврал</h3>}
            className="gx-mb-3"
            extra={[
              <Select
                key="start-date"
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
                {Array.from(Array(30), (item, index) => {
                  return (
                    <Option key={index} value={index + 1990}>
                      {index + 1990}
                    </Option>
                  );
                })}
              </Select>,
              <Select
                key="end-date"
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
                {Array.from(Array(30), (item, index) => {
                  return (
                    <Option key={index} value={index + 2000}>
                      {index + 2000}
                    </Option>
                  );
                })}
              </Select>,
            ]}
          ></PageHeader>

          <Card>
            <CarCatalogIndexListView2
              carIndexList={carCatalogListContext.carIndexList.carIndexList}
              whatDate={whatDate}
            />
          </Card>

          {/* <CarCatalogIndexListView1
            carIndexList={carCatalogListContext.carIndexList.carIndexList}
          /> */}
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default CarCatalogIndexType1;
