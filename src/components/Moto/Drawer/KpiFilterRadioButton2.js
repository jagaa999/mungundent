import React, { useState, useEffect, useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { isEmpty } from "lodash";
import {
  Button,
  Input,
  Checkbox,
  Divider,
  Select,
  Radio,
  Row,
  Col,
  Card,
} from "antd";
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

const KpiFilterRadioButton2 = ({ kpiFilterItem }) => {
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

  console.log("kpiFilterItemkpiFilterItem", kpiFilterItem);

  const myDefault =
    atob(filterContext.state.filterList?.["*" + kpiFilterItem.code] || "") ||
    undefined;

  return (
    <>
      {isBrowser && (
        <h6 className="gx-text-orange gx-mt-3">{kpiFilterItem.name}</h6>
      )}

      {myIndicators.map((item, index) => {
        const myValue = JSON.stringify({
          indicator_id: item.indicatorid,
          value: item.id,
        });

        return (
          <Button
            block
            className={`${
              myDefault === myValue ? "gx-bg-orange gx-icon-white" : ""
            }`}
            hoverable
            onClick={() => prepareURL2(myValue, kpiFilterItem.code)} //нэмэлт параметр дамжуулж байгаа юм.
          >
            {item.name}
          </Button>
        );
      })}
    </>
  );
};

export default KpiFilterRadioButton2;
