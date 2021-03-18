import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import CarcatalogMarkItem from "./CarcatalogMarkItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import CarcatalogContext from "context/CarcatalogContext";
import FilterContext from "context/FilterContext";
// import FilterDrawer from "./Drawer/FilterDrawer";
// import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const CarcatalogMarkType1 = ({ firmId }) => {
  const carCatalogContext = useContext(CarcatalogContext);
  const [whatTitle, setWhatTitle] = useState([]);

  useEffect(() => {
    carCatalogContext.loadCarMarkList(firmId);
  }, []);

  console.log("carCatalogContext.carMarkList", carCatalogContext.carMarkList);

  const uniqueTags = [];
  carCatalogContext.carMarkList.carMarkList.map((item) => {
    if (uniqueTags.indexOf(item.markname) === -1) {
      uniqueTags.push(item.markname);
    }
  });

  // console.log("uniqueTags", uniqueTags);

  const children = [];
  uniqueTags.sort().map((item, index) => {
    children.push(<Option key={item}>{item}</Option>);
  });

  function handleChange(value) {
    // console.log(`selected ${value}`);
    setWhatTitle(value);
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
            title={<h3>Каталоги - Марк</h3>}
            className="gx-mb-3"
            extra={[
              <Select
                key="mark-filter"
                mode="tags"
                style={{ minWidth: "170px" }}
                placeholder="Маркаар ялгах"
                onChange={handleChange}
              >
                {children}
              </Select>,
            ]}
          ></PageHeader>

          <Row className="gx-d-flex">
            {carCatalogContext.carMarkList.carMarkList.map(
              (markItem, index) => {
                // if (toBoolean(isSpecial) && !toBoolean(markItem.special)) {
                //   return "";
                // }

                if (
                  !whatTitle.includes(markItem.markname) &&
                  whatTitle.length > 0
                ) {
                  return "";
                }

                return (
                  <Col key={index} lg={8} md={8} sm={12} xs={12}>
                    <CarcatalogMarkItem
                      key={index}
                      markItem={markItem}
                      count={markItem.count}
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

export default CarcatalogMarkType1;
