import React, { useState, useEffect, useContext } from "react";
import { isEmpty } from "lodash";
import { Button, Input, Checkbox, Divider, Select, Radio } from "antd";
import { FilterTitle } from "util/textFunction";
import { checkKpiCar } from "util/kpiFilterFunction";

import FilterContext from "../../../context/FilterContext";
import CarcatalogContext from "context/CarcatalogContext";
import useDidMountEffect from "util/useDidMountEffect";

const { Search } = Input;
const { Option } = Select;

const KpiFilterSelect = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);
  const carCatalogContext = useContext(CarcatalogContext);
  const [selected, setSelected] = useState(
    atob(
      filterContext.urlSetting.filterList?.["*" + kpiFilterItem.code] || ""
    ) || undefined
  );

  const carDrawer = carCatalogContext.carDrawer;
  const carDetail = carCatalogContext.carDetail.carDetail;

  const prepareURL2 = (arriveValue, parameterLabel) => {
    const myValue = arriveValue;
    const baseEncodedValues = btoa(myValue || "");
    filterContext.updateParams({
      ["*" + parameterLabel]: baseEncodedValues,
    });
  };

  useEffect(() => {
    const carKpi = checkKpiCar(carDrawer, carDetail, kpiFilterItem);
    console.log("SCroll carKpi", carKpi);
    if (carKpi !== null) setSelected(carKpi);
  }, [carDrawer.onlyThisCar]);

  useDidMountEffect(() => {
    prepareURL2(selected, kpiFilterItem.code);
  }, [selected]);

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
      <FilterTitle title={kpiFilterItem.name} className="gx-mt-4" />

      <Select
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
        value={selected}
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
      </Select>
    </>
  );
};

export default KpiFilterSelect;
