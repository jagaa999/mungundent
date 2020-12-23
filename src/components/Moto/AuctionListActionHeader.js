import React, { useContext } from "react";

import { Button, PageHeader, Tooltip } from "antd";
import MyIcon from "util/iconFunction";

import FilterContext from "context/FilterContext";
import AuctionContext from "context/AuctionContext";
import CompareContext from "context/CompareContext";
import MotoAuctionSort from "./Sort/MotoAuctionSort";

const AuctionListActionHeader = (props) => {
  const filterContext = useContext(FilterContext);
  const auctionListContext = useContext(AuctionContext);
  const compareContext = useContext(CompareContext);

  const toggleFilterDrawer = () => {
    auctionListContext.toggleFilterDrawerOpen();
  };

  return (
    <PageHeader
      className="moto-pageheader"
      title={
        <h3>
          Аукшины автомашинууд
          {filterContext.totalcount > 0 ? (
            <span className="gx-ml-2 gx-text-grey gx-fs-sm">
              ({filterContext.totalcount})
            </span>
          ) : (
            ""
          )}
        </h3>
      }
      extra={[
        <Tooltip title="Шүүлтүүр нээх">
          <Button
            key="moto-filter-button"
            size="small"
            icon={<MyIcon type="iconfilter" />}
            onClick={toggleFilterDrawer}
            className="gx-mr-0"
            style={{ width: "40px" }}
          ></Button>
        </Tooltip>,
        <Tooltip title="Харьцуулалт нээх">
          <Button
            key="moto-filter-button"
            size="small"
            icon={<MyIcon type="iconcompare" />}
            onClick={compareContext.toggleDrawer}
            className="gx-ml-1 gx-mr-0"
            style={{ width: "40px" }}
          ></Button>
        </Tooltip>,

        <MotoAuctionSort key="motosort" />,
      ]}
    ></PageHeader>
  );
};

export default AuctionListActionHeader;
