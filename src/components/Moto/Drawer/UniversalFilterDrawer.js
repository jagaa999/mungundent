import React, { useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { Button, Drawer } from "antd";
import MyIcon from "util/iconFunction";
import CustomScrollbars from "../../../util/CustomScrollbars";

import UniversalFilter from "./UniversalFilter";
import UniversalContext from "context/UniversalContext";

const UniversalFilterDrawer = ({ myUniversalFilterSetting }) => {
  const universalContext = useContext(UniversalContext);

  console.log("sssss", myUniversalFilterSetting);

  return (
    <div>
      <Drawer
        title={
          <>
            <MyIcon
              type="iconfilter"
              className="gx-d-inline-flex gx-vertical-align-middle gx-mr-2"
            />
            <span className={`  ${isBrowser ? "gx-fs-md" : "gx-fs-sm"}`}>
              Шүүлтүүр
            </span>
          </>
        }
        headerStyle={{ padding: "16px 5px" }}
        // width="350"
        className="moto-filter-drawer"
        placement="left"
        closable={true}
        visible={universalContext.universalList.isFilterDrawerOpen}
        onClose={(e) => universalContext.toggleFilterDrawerOpen()}
        closeIcon={
          <MyIcon type="iconangleleft" style={{ marginTop: "10px" }} />
        }
      >
        <CustomScrollbars className="gx-p-1">
          <UniversalFilter
            myUniversalFilterSetting={myUniversalFilterSetting}
          />
        </CustomScrollbars>
      </Drawer>

      <div
        className="moto-filter-button gx-d-block gx-d-lg-none"
        style={{ top: "250px" }}
      >
        <Button
          onClick={(e) => universalContext.toggleFilterDrawerOpen()}
          className="gx-btn-warning"
        >
          <MyIcon
            type="iconfilter"
            className="gx-d-block moto-animation-away"
          />
        </Button>
      </div>
    </div>
  );
};

export default UniversalFilterDrawer;
