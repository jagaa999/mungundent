import React, { useContext } from "react";
import { Button, Drawer, Tooltip } from "antd";
import MyIcon from "util/iconFunction";

import AuctionFilter from "./AuctionFilter";
import AuctionContext from "context/AuctionContext";

const AuctionFilterDrawer = () => {
  const auctionListContext = useContext(AuctionContext);

  const toggleFilterDrawer = () => {
    auctionListContext.toggleFilterDrawerOpen();
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
        visible={auctionListContext.auctionList.isFilterDrawerOpen}
        onClose={toggleFilterDrawer}
      >
        <AuctionFilter />
      </Drawer>

      <div className="moto-filter-button" style={{ top: "250px" }}>
        <Tooltip title="Шүүлтүүрийн багаж" placement="right">
          <Button onClick={toggleFilterDrawer} className="gx-btn-warning">
            <MyIcon
              type="iconfilter"
              className="gx-d-block moto-animation-away"
            />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default AuctionFilterDrawer;
