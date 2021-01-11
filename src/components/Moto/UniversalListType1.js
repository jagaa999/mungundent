import React, { useContext, useState } from "react";

import { Col, Row, Divider, Popover, Button, Card } from "antd";

import UniversalListItem1 from "./UniversalListItem1";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import MotoPagination from "./Pagination/MotoPagination";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";

const UniversalListType1 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
  myListContextListList,
  mySettings = {},
  MyFilterDrawer,
}) => {
  return (
    <div className="moto-list">
      <div className="gx-mb-2"></div>

      {!myListContextLoading ? (
        <>
          <UniversalListActionHeader
            myListContext={myListContext}
            mySettings={mySettings}
            myIsFilterDrawerOpen={myListContextList.isFilterDrawerOpen}
          />
          {/* <AuctionFilterHeader /> */}

          <div className="gx-main-content">
            <Row key="row" className="gx-d-flex">
              {myListContextListList.map((myUniversalItem, index) => {
                return (
                  <Col key={index} span={24}>
                    <UniversalListItem1
                      key={index}
                      myUniversalItem={myUniversalItem}
                    />
                  </Col>
                );
              })}
            </Row>

            <MotoPagination />
            <MyFilterDrawer />
            <AffixButtonInsert link={mySettings.menu} />
          </div>
        </>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default UniversalListType1;
