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
  const [whatDate, setWhatDate] = useState(["1900-01-01", "2090-12-30"]);

  useEffect(() => {
    carCatalogListContext.loadCarIndexList(markId);
  }, []);

  console.log(
    "carCatalogListContext.carIndexList",
    carCatalogListContext.carIndexList
  );

  function onChange(dates, dateStrings) {
    // console.log("dfdfdfd", dates);

    setWhatDate([
      moment(dates?.length ? dateStrings[0] : "1900-01-01").format(dateFormat),
      moment(dates?.length ? dateStrings[1] : "2090-01-01")
        .add(363, "days")
        .format(dateFormat),
    ]);
  }

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
              <RangePicker
                picker="year"
                // defaultValue={[
                //   moment(
                //     carCatalogListContext.carIndexList.carIndexList[
                //       carCatalogListContext.carIndexList.carIndexList.length
                //     ].maindate,
                //     dateFormat
                //   ),
                //   moment(
                //     carCatalogListContext.carIndexList.carIndexList[0]
                //       .maindate,
                //     dateFormat
                //   ),
                // ]}
                placeholder={["Эхлэх он", "Сүүл он"]}
                allowEmpty={true}
                onChange={onChange}
              />,
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
