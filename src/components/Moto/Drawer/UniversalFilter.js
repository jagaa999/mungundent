import React, { useState, useEffect, useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { isEmpty } from "lodash";
import { Button, Input, Checkbox, Divider, Select, Radio } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { Html5Entities } from "html-entities";

import MyIcon from "util/iconFunction";

import { loadDataview } from "util/axiosFunction";

import UniversalContext from "../../../context/UniversalContext";
import FilterContext from "../../../context/FilterContext";

const { Search } = Input;
const { Option } = Select;

const UniversalFilter = (props) => {
  const htmlEntities = new Html5Entities();
  const universalContext = useContext(UniversalContext);
  const filterContext = useContext(FilterContext);

  //  ######  ####### ####### #     # ######  #     #
  //  #     # #          #    #     # #     # ##    #
  //  #     # #          #    #     # #     # # #   #
  //  ######  #####      #    #     # ######  #  #  #
  //  #   #   #          #    #     # #   #   #   # #
  //  #    #  #          #    #     # #    #  #    ##
  //  #     # #######    #     #####  #     # #     #
  return (
    <div className="gx-p-3" style={{ height: "100%", width: "99%" }}>
      <h6 className="gx-mt-5 gx-mb-3 gx-text-uppercase gx-text-orange">
        Шүүлтүүр
      </h6>

      {isEmpty(filterContext.urlSetting.filterList) ? (
        <></>
      ) : (
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
