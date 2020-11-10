import React, { useContext } from "react";
import { Button, Drawer } from "antd";
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
            <i className="icon icon-filter gx-d-inline-flex gx-vertical-align-middle gx-mr-3" />{" "}
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
        <Button onClick={toggleFilterDrawer} className="gx-btn-warning">
          <i className="icon icon-filter gx-d-block moto-animation-away" />
        </Button>
      </div>
    </div>
  );
};

export default AuctionFilterDrawer;
