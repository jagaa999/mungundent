import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Empty } from "antd";

import UniversalListItem3 from "./UniversalListItem3";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import AutozarContext from "context/AutozarContext";
import FilterContext from "context/FilterContext";
import MotoPagination from "./Pagination/MotoPagination";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";

const UniversalListType3 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
  myListContextListList,
  mySettings = {},
  MyFilterDrawer,
}) => {
  const autozarListContext = useContext(AutozarContext);
  const filterContext = useContext(FilterContext);

  const { menu } = mySettings;
  const myCapitalizeName = menu.charAt(0).toUpperCase() + menu.slice(1);

  const MyFilterHeaderComponent = React.lazy(() =>
    import(`./Drawer/${myCapitalizeName}FilterHeader`).catch(() => ({
      default: () => <></>,
    }))
  );

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!myListContextLoading ? (
        <div className="gx-main-content">
          <UniversalListActionHeader
            myListContext={myListContext}
            mySettings={mySettings}
            myIsFilterDrawerOpen={myListContextList.isFilterDrawerOpen}
          />

          <MyFilterHeaderComponent />

          <Row className="gx-d-flex">
            <Col key="dffdf" xs={24}>
              <UniversalListItem3
                myListContextListList={myListContextListList}
              />
            </Col>
          </Row>

          <MotoPagination myClass="gx-mt-2" />
          <MyFilterDrawer />
          <AffixButtonInsert link={mySettings.menu} />
        </div>
      ) : (
        <LoadingList type="table" />
      )}
    </div>
  );
};

export default UniversalListType3;
