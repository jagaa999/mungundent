import React, { useState } from "react";
import { Button, Drawer, Radio, Space, Row, Col, Affix } from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import NewsFilter from "components/Moto/Drawer/NewsFilter";

const FilterDrawer = () => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [container, setContainer] = useState(null);

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };

  return (
    <div>
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
        <Button onClick={toggleFilterDrawer} className="gx-btn-warning">
          <i className="icon icon-filter gx-d-block moto-animation-away" />
        </Button>
      </div>
    </div>
  );
};

export default FilterDrawer;
