import React, { useContext } from "react";
import { Button, Drawer } from "antd";
import MyIcon from "util/iconFunction";

import AutozarFilter from "./AutozarFilter";
import AutozarContext from "context/AutozarContext";

const AutozarFilterDrawer = () => {
  const autozarContext = useContext(AutozarContext);

  const toggleFilterDrawer = () => {
    autozarContext.toggleFilterDrawerOpen();
  };

  return (
    <div>
      <Drawer
        title={
          <>
            <MyIcon
              type="iconfilter"
              className="gx-d-inline-flex gx-vertical-align-middle gx-mr-3"
            />
            Шүүлтүүр
          </>
        }
        width="350"
        placement="left"
        closable={true}
        visible={autozarContext.autozarList.isFilterDrawerOpen}
        onClose={toggleFilterDrawer}
        closeIcon={
          <MyIcon type="iconangleleft" style={{ marginTop: "10px" }} />
        }
      >
        <AutozarFilter />
      </Drawer>

      <div className="moto-filter-button" style={{ top: "250px" }}>
        <Button onClick={toggleFilterDrawer} className="gx-btn-warning">
          <MyIcon
            type="iconfilter"
            className="gx-d-block moto-animation-away"
          />
        </Button>
      </div>
    </div>
  );
};

export default AutozarFilterDrawer;
