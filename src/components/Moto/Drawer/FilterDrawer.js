import React, { useContext } from "react";
import { Button, Drawer } from "antd";
import NewsFilter from "./NewsFilter";
import NewsListContext from "context/NewsListContext";

const FilterDrawer = () => {
  const newsListContext = useContext(NewsListContext);

  const toggleFilterDrawer = () => {
    newsListContext.toggleFilterDrawerOpen();
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
        visible={newsListContext.state.isFilterDrawerOpen}
        onClose={toggleFilterDrawer}
      >
        <NewsFilter />
      </Drawer>

      <div className="moto-filter-button" style={{ top: "250px" }}>
        <Button onClick={toggleFilterDrawer} className="gx-btn-warning">
          <i className="icon icon-filter gx-d-block moto-animation-away" />
        </Button>
      </div>
    </div>
  );
};

export default FilterDrawer;
