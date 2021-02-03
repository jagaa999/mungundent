import React, { useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { Button, Drawer } from "antd";
import MyIcon from "util/iconFunction";

import ProductFilter from "./ProductFilter";
import ProductContext from "context/ProductContext";

const ProductFilterDrawer = () => {
  const productContext = useContext(ProductContext);

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
        visible={productContext.productList.isFilterDrawerOpen}
        onClose={(e) => productContext.toggleFilterDrawerOpen()}
        closeIcon={
          <MyIcon type="iconangleleft" style={{ marginTop: "10px" }} />
        }
      >
        <ProductFilter />
      </Drawer>

      <div className="moto-filter-button" style={{ top: "250px" }}>
        <Button
          onClick={(e) => productContext.toggleFilterDrawerOpen()}
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

export default ProductFilterDrawer;
