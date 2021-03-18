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
import CarcatalogIndexListView1 from "./MotoCar/CarcatalogIndexListView1";
import CarcatalogIndexListView2 from "./MotoCar/CarcatalogIndexListView2";
import CarcatalogContext from "context/CarcatalogContext";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

const CarcatalogIndexType1 = ({ markId }) => {
  const carCatalogContext = useContext(CarcatalogContext);
  const [whatDate, setWhatDate] = useState(["1900-01-01", "2090-12-31"]);

  useEffect(() => {
    carCatalogContext.loadCarIndexList(markId);
  }, []);

  console.log("carCatalogContext.carIndexList", carCatalogContext.carIndexList);

  return (
    <div className="moto-list">
      <div className="gx-mb-2"></div>

      {!carCatalogContext.carIndexList.loading ? (
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
            <CarcatalogIndexListView2
              carIndexList={carCatalogContext.carIndexList.carIndexList}
              whatDate={whatDate}
            />
          </Card>

          {/* <CarcatalogIndexListView1
            carIndexList={carCatalogContext.carIndexList.carIndexList}
          /> */}
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default CarcatalogIndexType1;
