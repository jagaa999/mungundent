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
import { Html5Entities } from "html-entities";
import { FilterTitle } from "util/textFunction";
import { checkKpiCar } from "util/kpiFilterFunction";
import MyIcon from "util/iconFunction";

import CustomScrollbars from "../../../util/CustomScrollbars";
import {
  LoadProcessAuction,
  loadDataviewAuction,
} from "../../../util/axiosFunctionAuction";
import { loadDataview } from "util/axiosFunction";
import FilterContext from "../../../context/FilterContext";
import CarcatalogContext from "context/CarcatalogContext";
import useDidMountEffect from "util/useDidMountEffect";

const { Search } = Input;
const { Option } = Select;

const KpiFilterCheckboxLimit = ({ kpiFilterItem }) => {
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

  // const [myValues, setMyValues] = useState({
  //   values: myIndicators,
  // });

  useEffect(() => {
    const carKpi = checkKpiCar(carDrawer, carDetail, kpiFilterItem);
    console.log("SCrollLimit carKpi", carKpi);
    if (carKpi !== null) setSelected(carKpi);
  }, [carDrawer.onlyThisCar]);

  useDidMountEffect(() => {
    prepareURL2(selected, kpiFilterItem.code);
  }, [selected]);

  const initLimitTool = {
    count: 6,
    showAll: false,
    text: (
      <>
        Бүгдийг харах <MyIcon type="iconangledown" className="gx-ml-2" />
      </>
    ),
  };

  const [limitTool, setLimitTool] = useState(initLimitTool);

  const toggleLimitTool = () => {
    if (limitTool.showAll) {
      setLimitTool(initLimitTool);
    } else {
      setLimitTool({
        count: myIndicators.length,
        showAll: true,
        text: (
          <>
            Нуух <MyIcon type="iconangleup" className="gx-ml-2" />
          </>
        ),
      });
    }
  };

  const LimitText = () => (
    <span
      className="gx-fs-sm gx-show-link gx-mr-4"
      onClick={() => toggleLimitTool()}
    >
      {limitTool.text}
    </span>
  );

  return (
    <>
      <FilterTitle title={kpiFilterItem.name} className="gx-mt-4" />

      <Checkbox.Group
        style={{ width: "100%" }}
        onChange={(e) => prepareURL2(e, kpiFilterItem.code)}
        value={selected}
      >
        <Row>
          {myIndicators.map((item, index) => {
            if (index + 1 > limitTool.count) return null;

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
          <Col span={24}>
            <div className="gx-mt-1">
              <LimitText />
            </div>
          </Col>
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default KpiFilterCheckboxLimit;
