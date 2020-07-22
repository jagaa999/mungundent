import React, { useState } from "react";
import { Button, Drawer, Radio, Space, Row, Col } from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import NewsFilter from "components/Moto/Drawer/NewsFilter";

const FilterDrawer = () => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(true);

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };

  return (
    <>
      <Drawer
        title="Шүүлтүүр"
        width="640"
        placement="left"
        closable={true}
        visible={isFilterDrawerOpen}
        onClose={toggleFilterDrawer}
      >
        <NewsFilter />
      </Drawer>

      <div className="gx-customizer-option" style={{ top: "250px" }}>
        <Button
          type="primary"
          onClick={toggleFilterDrawer}
          style={{ background: "#d1d1d1" }}
        >
          <i className="icon icon-filter  gx-d-block moto-animation-away" />
        </Button>
      </div>
    </>
  );
};

export default FilterDrawer;
