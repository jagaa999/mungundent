import React, { useState, useEffect, useContext } from "react";
import { isEmpty } from "lodash";
import { Button, Input, Checkbox, Divider, Select, Radio } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { Html5Entities } from "html-entities";

import CustomScrollbars from "../../../util/CustomScrollbars";
import {
  LoadProcessAuction,
  loadDataviewAuction,
} from "../../../util/axiosFunctionAuction";
import { loadDataview } from "util/axiosFunction";
import FilterContext from "../../../context/FilterContext";

const { Search } = Input;
const { Option } = Select;

const KpiFilterSelect = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);

  const prepareURL2 = (checkedValues, parameterLabel) => {
    console.log("checkedValues ЗЗЗЗЗЗЗЗЗЗЗЗЗ", checkedValues);
    console.log("parameterLabel", parameterLabel);
    console.log(
      "checkedValues encodeURIComponent",
      encodeURIComponent(checkedValues)
    );

    const dfdf = btoa(checkedValues || "");
    console.log("dfdf", dfdf);

    console.log("DDDDDDDDD", atob(dfdf));

    filterContext.updateParams({
      ["*" + parameterLabel]: dfdf,
    });
  };

  // console.log("kpiFilterItem", kpiFilterItem);
  // code: "MotoTireType"
  // id: "16102833255371"
  // kpiindicatorvalue: {0: {…}, 1: {…}, 2: {…}, 3: {…}}
  // lookupmetadataid: "1591877897010671"
  // name: "Дугуйн зориулалт"
  // showtype: ""
  // templateid: "16102833259511"
  //Ийм зүйл байгаа.

  // console.log(
  //   "filterContext.state.filterList?.[kpiFilterItem.code]",
  //   filterContext.state.filterList?.[kpiFilterItem.code]
  // );

  return (
    <>
      <h6 className="gx-my-3 gx-text-orange gx-mt-4">{kpiFilterItem.name}</h6>

      <Select
        className="moto-select-firm gx-w-100"
        // loading={productCategoryList.loading}
        showSearch
        allowClear
        placeholder={kpiFilterItem.name}
        optionFilterProp="children"
        onChange={(e) => prepareURL2(e, kpiFilterItem.code)} //нэмэлт параметр дамжуулж байгаа юм.
        filterOption={(input, option) => {
          if (option.value) {
            return (
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          } else {
            return false;
          }
        }}
        defaultValue={atob(
          filterContext.state.filterList?.["*" + kpiFilterItem.code] || ""
        )}
      >
        {Object.values(kpiFilterItem.kpiindicatorvalue).map((item, index) => (
          <Option
            key={index}
            value={JSON.stringify({
              indicator_id: item.indicatorid,
              value: item.id,
            })}
          >
            {/* {item.name} | indicator_id: {item.indicatorid} | value: {item.id} */}
            {item.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default KpiFilterSelect;
