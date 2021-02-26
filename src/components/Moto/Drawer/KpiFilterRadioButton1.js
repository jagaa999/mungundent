import React, { useState, useEffect, useContext } from "react";
import { Input, Select, Tooltip, Row, Col, Card } from "antd";
import { FilterTitle } from "util/textFunction";

import FilterContext from "../../../context/FilterContext";

const { Search } = Input;
const { Option } = Select;

const KpiFilterRadioButton1 = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);

  const prepareURL2 = (arriveValue, parameterLabel) => {
    const myValue = arriveValue !== myDefault ? arriveValue : null;
    // console.log("myValue ЗЗЗЗЗЗЗЗЗЗЗЗЗ", myValue);
    // console.log("parameterLabel", parameterLabel);
    // console.log("myValue encodeURIComponent", encodeURIComponent(myValue));
    const baseEncodedValues = btoa(myValue || "");
    filterContext.updateParams({
      ["*" + parameterLabel]: baseEncodedValues,
    });
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const myIndicators = Object.values(kpiFilterItem.kpiindicatorvalue);

  // console.log("kpiFilterItemkpiFilterItem", kpiFilterItem);

  const myDefault =
    atob(filterContext.state.filterList?.["*" + kpiFilterItem.code] || "") ||
    undefined;

  return (
    <>
      <FilterTitle title={kpiFilterItem.name} className="gx-mt-4" />

      <Row gutter={[10, 10]} type="flex" justify="left" align="middle">
        {myIndicators.map((item, index) => {
          const myValue = JSON.stringify({
            indicator_id: item.indicatorid,
            value: item.id,
          });

          return (
            <Col xl={8} lg={8} md={8} sm={8} xs={12} key={index}>
              <Card
                className={`gx-fs-sm gx-m-0 gx-card-full gx-p-2 gx-text-center ${
                  myDefault === myValue ? "gx-bg-orange gx-icon-white" : ""
                }`}
                style={{
                  minHeight: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                hoverable
                onClick={() => prepareURL2(myValue, kpiFilterItem.code)} //нэмэлт параметр дамжуулж байгаа юм.
              >
                <Tooltip title={item.name} placement="top">
                  {item.name}
                </Tooltip>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default KpiFilterRadioButton1;
