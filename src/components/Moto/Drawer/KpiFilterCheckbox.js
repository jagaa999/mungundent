import React, { useState, useEffect, useContext } from "react";
import { isEmpty } from "lodash";
import { Input, Checkbox, Select, Row, Col } from "antd";
import { Html5Entities } from "html-entities";
import { FilterTitle } from "util/textFunction";
import { checkKpiCar } from "util/kpiFilterFunction";

import FilterContext from "../../../context/FilterContext";
import CarcatalogContext from "context/CarcatalogContext";
import useDidMountEffect from "util/useDidMountEffect";

const KpiFilterCheckbox = ({ kpiFilterItem }) => {
  const filterContext = useContext(FilterContext);
  const carCatalogContext = useContext(CarcatalogContext);
  const [selected, setSelected] = useState(
    atob(filterContext.state.filterList?.["*" + kpiFilterItem.code] || "") ||
      undefined
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

  const myIndicators = Object.values(kpiFilterItem.kpiindicatorvalue);

  useEffect(() => {
    const carKpi = checkKpiCar(carDrawer, carDetail, kpiFilterItem);
    if (carKpi !== null) setSelected(carKpi);
  }, [carDrawer.onlyThisCar]);

  useDidMountEffect(() => {
    prepareURL2(selected, kpiFilterItem.code);
  }, [selected]);

  // console.log("selected", selected);

  return (
    <>
      <FilterTitle title={kpiFilterItem.name} className="gx-mt-4" />

      <Checkbox.Group
        style={{ width: "100%" }}
        // onChange={(e) => prepareURL2(e, kpiFilterItem.code)}
        onChange={(e) => setSelected(e)}
        // onSelect={(e) => prepareURL2(e, kpiFilterItem.code)}
        // defaultValue={myDefault}
        value={selected}
        // value={myDefault}
      >
        <Row>
          {myIndicators.map((item, index) => {
            // console.log("dddddd", item);
            //Энд Item нь бүх KPI indicator утгыг агуулж байгаа.
            // code: "R18"
            // color: ""
            // id: "16102833423911"
            // indicatorid: "16102833423851"
            // name: "R18"

            /* Ийм бүтэц бий. Эндээс бид indicatorid, id хоёрыг шүүлтүүртээ ашигладаг.
             */

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
    </>
  );
};

export default KpiFilterCheckbox;
