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
import FilterCheckbox from "./FilterWidget/FilterCheckbox";

const UniversalFilter = (props) => {
  const universalContext = useContext(UniversalContext);
  const filterContext = useContext(FilterContext);

  return (
    <div className="gx-p-3" style={{ height: "100%", width: "99%" }}>
      <h6 className="gx-mt-5 gx-mb-3 gx-text-uppercase gx-text-orange">
        Шүүлтүүр
      </h6>

      <FilterCheckbox
        metaListId="16147438441621"
        title="Үйлдвэрлэгч"
        placeholder="Хөдөлгүүр үйлдвэрлэгч"
        urlparamfield="manufacturerid"
        labelfield="description"
        valuefield="id"
      />

      {!isEmpty(filterContext.urlSetting.filterList) && (
        <>
          <Divider dashed className="gx-mt-5" />
          <Button
            type="dashed"
            size={isBrowser ? "default" : "small"}
            icon={<MyIcon type="icontrash-alt-solid" />}
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
