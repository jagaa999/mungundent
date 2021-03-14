import React, { useState, useEffect, useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { isEmpty } from "lodash";
import { Button, Divider } from "antd";

import MyIcon from "util/iconFunction";
import UniversalContext from "../../../context/UniversalContext";
import FilterContext from "../../../context/FilterContext";

const UniversalFilter = ({ myUniversalFilterSetting }) => {
  const universalContext = useContext(UniversalContext);
  const filterContext = useContext(FilterContext);

  if (myUniversalFilterSetting === null) return null;

  console.log("myUniversalFilterSetting", myUniversalFilterSetting);

  return (
    <div className="gx-p-3" style={{ height: "100%", width: "99%" }}>
      <h6 className="gx-mb-3 gx-text-uppercase gx-text-orange">Шүүлтүүр</h6>

      {myUniversalFilterSetting.widgets.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}

      {!isEmpty(filterContext.urlSetting.filterList) && (
        <>
          <Divider dashed className="gx-mt-5 gx-mb-4" />
          <Button
            type="dashed"
            className="gx-d-block gx-mx-auto"
            size={isBrowser ? "default" : "small"}
            icon={
              <MyIcon type="icontrash-alt-solid" className="moto-icon-1-3" />
            }
            onClick={(e) => {
              filterContext.clearAll();
            }}
          >
            Арилгах
          </Button>
        </>
      )}
    </div>
  );
};

export default UniversalFilter;
