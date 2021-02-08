import React, { useState, useEffect, useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
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

const KpiFilterRadio = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);

  const prepareURL2 = (arriveValue, parameterLabel) => {
    const myValue = arriveValue.target.value;
    console.log("myValue ЗЗЗЗЗЗЗЗЗЗЗЗЗ", myValue);
    console.log("parameterLabel", parameterLabel);
    console.log("myValue encodeURIComponent", encodeURIComponent(myValue));
    const baseEncodedValues = btoa(myValue || "");
    filterContext.updateParams({
      ["*" + parameterLabel]: baseEncodedValues,
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

  return (
    <>
      {isBrowser && (
        <h6 className="gx-text-orange gx-mt-3">{kpiFilterItem.name}</h6>
      )}

      <Radio.Group
        buttonStyle="solid"
        size="small"
        onChange={(e) => prepareURL2(e, kpiFilterItem.code)} //нэмэлт параметр дамжуулж байгаа юм.
        defaultValue={
          atob(
            filterContext.state.filterList?.["*" + kpiFilterItem.code] || ""
          ) || undefined
        }
      >
        {Object.values(kpiFilterItem.kpiindicatorvalue).map((item, index) => (
          <Radio.Button
            key={index}
            value={JSON.stringify({
              indicator_id: item.indicatorid,
              value: item.id,
            })}
          >
            {item.name}
          </Radio.Button>
        ))}
      </Radio.Group>

      {/* <Select
        className="moto-select-firm gx-w-100 gx-my-2"
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
        defaultValue={
          atob(
            filterContext.state.filterList?.["*" + kpiFilterItem.code] || ""
          ) || undefined
        }
      >
        {Object.values(kpiFilterItem.kpiindicatorvalue).map((item, index) => (
          <Option
            key={index}
            value={JSON.stringify({
              indicator_id: item.indicatorid,
              value: item.id,
            })}
          >
            {item.name}
          </Option>
        ))}
      </Select> */}
    </>
  );
};

export default KpiFilterRadio;
