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
import { FilterTitle } from "util/textFunction";

import CustomScrollbars from "../../../util/CustomScrollbars";
import FilterContext from "../../../context/FilterContext";

const { Search } = Input;
const { Option } = Select;

const KpiFilterCheckboxScroll = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);

  const prepareURL2 = (arriveValue, parameterLabel) => {
    const ddd = arriveValue[0];
    const myValue = ddd !== myDefault ? ddd : null;
    const baseEncodedValues = btoa(myValue || "");
    filterContext.updateParams({
      ["*" + parameterLabel]: baseEncodedValues,
    });
  };

  const myIndicators = Object.values(kpiFilterItem.kpiindicatorvalue);

  const myDefault =
    atob(filterContext.state.filterList?.["*" + kpiFilterItem.code] || "") ||
    undefined;

  console.log("FFFFFFF", kpiFilterItem);

  return (
    <>
      <FilterTitle title={kpiFilterItem.name} className="gx-mt-3" />

      <CustomScrollbars
        // style={{ height: 80 }}
        autoHide={false}
        autoHeight={true}
        autoHeightMin={20}
        autoHeightMax={120}
        thumbSize={37}
      >
        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={(e) => prepareURL2(e, kpiFilterItem.code)}
          defaultValue={myDefault}
        >
          <Row>
            {myIndicators.map((item, index) => {
              const myValue = JSON.stringify({
                indicator_id: item.indicatorid,
                value: item.id,
              });

              return (
                <Col xl={12} lg={12} md={24} sm={24} xs={24} key={index}>
                  <Checkbox className="gx-fs-sm gx-my-1" value={myValue}>
                    {item.name}
                  </Checkbox>
                </Col>
              );
            })}
          </Row>
        </Checkbox.Group>
      </CustomScrollbars>
    </>
  );
};

export default KpiFilterCheckboxScroll;
