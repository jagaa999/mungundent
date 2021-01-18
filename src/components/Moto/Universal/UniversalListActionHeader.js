import React, { useContext, useState } from "react";

import { Button, PageHeader, Tooltip, Divider } from "antd";
import MyIcon from "util/iconFunction";

import UniversalListInfoHelp from "./UniversalListInfoHelp";

import FilterContext from "context/FilterContext";
import AuctionContext from "context/AuctionContext";
import CompareContext from "context/CompareContext";
import UniversalListSort from "../Universal/UniversalListSort";

const UniversalListActionHeader = ({
  myListContext,
  mySettings,
  myIsFilterDrawerOpen,
}) => {
  // console.log("mySettings", mySettings);

  const filterContext = useContext(FilterContext);
  // const auctionListContext = useContext(AuctionContext);
  const compareContext = useContext(CompareContext);

  // const toggleFilterDrawer = () => {
  //   auctionListContext.toggleFilterDrawerOpen();
  // };

  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {showInfo && (
        <div>
          <UniversalListInfoHelp mySettings={mySettings} />
          <Divider className="gx-my-3" />
        </div>
      )}

      <PageHeader
        className="moto-pageheader"
        title={
          <h3>
            {mySettings.pagetitle}
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
          <Tooltip title="Зөвлөмж нээх" key="01">
            <Button
              icon={<MyIcon type="iconhelp" className="moto-icon-1-3" />}
              type={showInfo ? "primary" : "default"}
              onClick={(e) => setShowInfo(!showInfo)}
              className="gx-mr-0"
              style={{ width: "40px" }}
            ></Button>
          </Tooltip>,
          <Tooltip title="Шүүлтүүр нээх" key="02">
            <Button
              icon={<MyIcon type="iconfilter" className="moto-icon-1-3" />}
              type={myIsFilterDrawerOpen ? "primary" : "default"}
              onClick={(e) => myListContext.toggleFilterDrawerOpen()}
              className="gx-ml-2 gx-mr-0"
              style={{ width: "40px" }}
            ></Button>
          </Tooltip>,
          <Tooltip title="Харьцуулалт нээх" key="03">
            <Button
              icon={<MyIcon type="iconflag-solid" className="moto-icon-1-3" />}
              type={compareContext.compareList.isOpen ? "primary" : "default"}
              onClick={compareContext.toggleDrawer}
              className="gx-ml-2 gx-mr-0"
              style={{ width: "40px" }}
            ></Button>
          </Tooltip>,

          <UniversalListSort key="motosort" mySettings={mySettings} />,
        ]}
      ></PageHeader>
    </>
  );
};

export default UniversalListActionHeader;
