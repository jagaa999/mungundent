import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader, Card } from "antd";
import { PlusOutlined, PlusCircleOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import PartcatalogEngineListItem1 from "./PartcatalogEngineListItem1";
import CarcatalogContext from "context/CarcatalogContext";
import LoadingList from "../Loading/LoadingList";

const { Option } = Select;
const { Meta } = Card;

const PartcatalogEngineListType1 = () => {
  const carCatalogContext = useContext(CarcatalogContext);
  const [isAll, setIsAll] = useState(false);
  const [whatCountry, setWhatCountry] = useState([]);

  const uniqueTags = [];
  carCatalogContext.carFirmList.carFirmList.map((item) => {
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

  function firmSelectChange(value) {
    // console.log(`selected ${value}`);
    setWhatCountry(value || []);
  }

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!carCatalogContext.carFirmList.loading ? (
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
                key="firm-select"
                style={{ minWidth: "170px" }}
                allowClear
                placeholder="Марк"
                optionFilterProp="children"
                onChange={firmSelectChange}
                showSearch
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {children}
              </Select>,
            ]}
          ></PageHeader>

          <Row className="gx-d-flex">
            {carCatalogContext.carFirmList.carFirmList.map(
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
                    <PartcatalogEngineListItem1
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

export default PartcatalogEngineListType1;
