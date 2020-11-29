import React, { useContext } from "react";

import { Button, PageHeader } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import MyIcon from "util/iconFunction";

import FilterContext from "context/FilterContext";
import AuctionContext from "context/AuctionContext";
import MotoAuctionSort from "./Sort/MotoAuctionSort";

const AuctionListActionHeader = (props) => {
  const filterContext = useContext(FilterContext);
  const auctionListContext = useContext(AuctionContext);

  const toggleFilterDrawer = () => {
    auctionListContext.toggleFilterDrawerOpen();
  };

  return (
    <>
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
          <Button
            key="moto-filter-button"
            size="small"
            icon={<MyIcon type="iconfilter" />}
            onClick={toggleFilterDrawer}
            className="gx-mr-0"
          >
            Шүүлтүүр
          </Button>,

          <MotoAuctionSort key="motosort" />,
        ]}
      ></PageHeader>

      {/* <div className="gx-mb-3">
        <div className="gx-text-grey gx-fs-sm gx-mr-2 gx-mb-2">Шүүлтүүр</div>
        <div>
          <Input.Group compact></Input.Group>
        </div>
      </div> */}
    </>
  );
};

export default AuctionListActionHeader;
