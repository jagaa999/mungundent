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

const KpiFilterSelect = ({ item }) => {
  console.log("CCCCCCCCCCCCCCC");
  const filterContext = useContext(FilterContext);

  const prepareURL2 = (checkedValues, parameterLabel) => {
    // console.log("checkedValues", checkedValues);
    // console.log("parameterLabel", parameterLabel);

    filterContext.updateParams({
      [parameterLabel]: checkedValues,
    });
  };

  console.log("item", item);
  return (
    <>
      <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
        Барааны ангилал fdg fdg dfg dfsg
      </h6>

      {/* <Select
        className="moto-select-firm gx-w-100"
        loading={productCategoryList.loading}
        showSearch
        allowClear
        placeholder="Барааны ангилал"
        optionFilterProp="children"
        onChange={(e) => prepareURL2(e, "itemcategoryname")} //нэмэлт параметр дамжуулж байгаа юм.
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
          filterContext.urlSetting.filterList?.itemcategoryname || undefined
        }
      >
        {productCategoryList.productCategoryList.map((item, index) => (
          <Option key={index} value={item.id} kkk={item.id}>
            {item.itemcategoryname} (KPI: {item.kpitemplateid})
          </Option>
        ))}
      </Select> */}
    </>
  );
};

export default KpiFilterSelect;
