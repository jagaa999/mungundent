import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Tooltip, Input, Select } from "antd";
import { FilterTitle } from "util/textFunction";

import FilterContext from "../../../context/FilterContext";

const KpiFilterRadioButton2 = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);

  const prepareURL2 = (arriveValue, parameterLabel) => {
    const myValue = arriveValue !== myDefault ? arriveValue : undefined;
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
    atob(
      filterContext.urlSetting.filterList?.["*" + kpiFilterItem.code] || ""
    ) || undefined;

  return (
    <>
      <FilterTitle title={kpiFilterItem.name} className="gx-mt-4" />

      <div className="gx-w-100 gx-p-0">
        {myIndicators.map((item, index) => {
          const myValue = JSON.stringify({
            indicator_id: item.indicatorid,
            value: item.id,
          });

          return (
            <Card
              key={index}
              className={`gx-fs-sm gx-mb-2 gx-card-full gx-p-2 gx-text-center ${
                myDefault === myValue ? "gx-bg-orange gx-icon-white" : ""
              }`}
              style={{
                minHeight: "36px",
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
          );
        })}
      </div>
    </>
  );
};

export default KpiFilterRadioButton2;
