import React, { useState, useEffect, useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Input, Checkbox, Select, Row, Col } from "antd";
import { FilterTitle } from "util/textFunction";
import { checkKpiCar } from "util/kpiFilterFunction";

import CustomScrollbars from "../../../util/CustomScrollbars";
import FilterContext from "../../../context/FilterContext";
import CarcatalogContext from "context/CarcatalogContext";
import useDidMountEffect from "util/useDidMountEffect";

const { Search } = Input;
const { Option } = Select;

const KpiFilterCheckboxScroll = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);
  const carCatalogContext = useContext(CarcatalogContext);
  const [selected, setSelected] = useState(
    atob(
      filterContext.urlSetting.filterList?.["*" + kpiFilterItem.code] || ""
    ) || undefined
  );

  const carDrawer = carCatalogContext.carDrawer;
  const carDetail = carCatalogContext.carDetail.carDetail;
  console.log("carDetail", carDetail);

  const prepareURL2 = (arriveValue, parameterLabel) => {
    const myValue = arriveValue;
    const baseEncodedValues = btoa(myValue || "");
    filterContext.updateParams({
      ["*" + parameterLabel]: baseEncodedValues,
    });
  };

  const myIndicators = Object.values(kpiFilterItem.kpiindicatorvalue);

  // const myDefault =
  //   atob(filterContext.urlSetting.filterList?.["*" + kpiFilterItem.code] || "") ||
  //   undefined;

  useEffect(() => {
    const carKpi = checkKpiCar(carDrawer, carDetail, kpiFilterItem);
    console.log("SCroll carKpi", carKpi);
    if (carKpi !== null) setSelected(carKpi);
  }, [carDrawer.onlyThisCar]);

  useDidMountEffect(() => {
    prepareURL2(selected, kpiFilterItem.code);
  }, [selected]);

  return (
    <>
      <FilterTitle title={kpiFilterItem.name} className="gx-mt-4" />

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
          // defaultValue={myDefault}
          value={selected}
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
