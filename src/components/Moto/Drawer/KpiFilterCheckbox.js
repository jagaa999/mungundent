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

const KpiFilterCheckbox = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);

  const prepareURL2 = (arriveValue, parameterLabel) => {
    const ddd = arriveValue[0];
    const myValue = ddd !== myDefault ? ddd : null;
    // console.log("myValue ЗЗЗЗЗЗЗЗЗЗЗЗЗ", myValue);
    // console.log("parameterLabel", parameterLabel);
    // console.log("myValue encodeURIComponent", encodeURIComponent(myValue));
    const baseEncodedValues = btoa(myValue || "");
    filterContext.updateParams({
      ["*" + parameterLabel]: baseEncodedValues,
    });
  };

  const myIndicators = Object.values(kpiFilterItem.kpiindicatorvalue);

  const myDefault =
    atob(filterContext.state.filterList?.["*" + kpiFilterItem.code] || "") ||
    undefined;

  return (
    <>
      {isBrowser && (
        <h6 className="gx-text-orange gx-mt-3">{kpiFilterItem.name}</h6>
      )}

      <Checkbox.Group
        style={{ width: "100%" }}
        onChange={(e) => prepareURL2(e, kpiFilterItem.code)}
        defaultValue={
          atob(
            filterContext.state.filterList?.["*" + kpiFilterItem.code] || ""
          ) || undefined
        }
      >
        <Row>
          {myIndicators.map((item, index) => {
            const myValue = JSON.stringify({
              indicator_id: item.indicatorid,
              value: item.id,
            });

            return (
              <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                <Checkbox className="gx-fs-sm gx-my-1" value={myValue}>
                  {item.name}
                </Checkbox>
              </Col>
            );
          })}
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default KpiFilterCheckbox;
