import React, { useContext } from "react";
import { Button, Drawer } from "antd";
import MyIcon from "util/iconFunction";

import NewsFilter from "./NewsFilter";
import NewsListContext from "context/NewsListContext";

const NewsFilterDrawer = () => {
  const newsListContext = useContext(NewsListContext);

  const toggleFilterDrawer = () => {
    newsListContext.toggleFilterDrawerOpen();
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
        // width="40%"
        // style={{ maxWidth: "350px" }}
        placement="left"
        closable={true}
        visible={newsListContext.newsList.isFilterDrawerOpen}
        onClose={toggleFilterDrawer}
      >
        <NewsFilter />
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

export default NewsFilterDrawer;
