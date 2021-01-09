import React, { useContext, useState } from "react";

import { Col, Row, Divider, Popover, Button, Card } from "antd";

import UniversalListItem1 from "./UniversalListItem1";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const UniversalListType1 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
}) => {
  return (
    <div className="moto-list">
      <div className="gx-mb-2"></div>

      {!myListContextLoading ? (
        <>
          {/* <AuctionListActionHeader /> */}
          {/* <AuctionFilterHeader /> */}

          <div className="gx-main-content">
            <Row key="row" className="gx-d-flex">
              {myListContextList.map((myUniversalItem, index) => {
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
            {/* <AuctionFilterDrawer /> */}
          </div>
        </>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default UniversalListType1;
