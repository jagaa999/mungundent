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
import KpiFilterSelect from "./KpiFilterSelect";

const { Search } = Input;
const { Option } = Select;

const KpiFilter = ({ kpiFilterList }) => {
  const filterContext = useContext(FilterContext);

  const prepareURL2 = (checkedValues, parameterLabel) => {
    // console.log("checkedValues", checkedValues);
    // console.log("parameterLabel", parameterLabel);

    filterContext.updateParams({
      [parameterLabel]: checkedValues,
    });
  };

  // console.log("kpiFilterList", kpiFilterList);

  //  ######  ####### ####### #     # ######  #     #
  //  #     # #          #    #     # #     # ##    #
  //  #     # #          #    #     # #     # # #   #
  //  ######  #####      #    #     # ######  #  #  #
  //  #   #   #          #    #     # #   #   #   # #
  //  #    #  #          #    #     # #    #  #    ##
  //  #     # #######    #     #####  #     # #     #
  return (
    <>
      {Object.values(kpiFilterList.kpiFilterList?.kpiindicator || {}).map(
        (item, index) => {
          // console.log("item", item);
          // code: "MotoTireSizeWidth"
          // id: "16102833420031"
          // kpiindicatorvalue: {0: {…}, 1: {…}, 2: {…}}
          // lookupmetadataid: "1591877897010671"
          // name: "Дугуйн width"
          // showtype: ""
          // templateid: "16102833259511"

          return <KpiFilterSelect key={index} kpiFilterItem={item} />;
        }
      )}
    </>
  );
};

export default KpiFilter;

//Todo ЭНД ДУУСАВ.
//Todo Одоо Дугуйгаар шүүлтүүр хийнгүүт бараануудаа шүүж харуулна. Тоогийгийн өгснийг ашиглана.
