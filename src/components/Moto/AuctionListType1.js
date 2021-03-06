import React, { useContext, useState } from "react";

import { Col, Row, Divider, Popover, Button, Card } from "antd";

import AuctionListItem1 from "./AuctionListItem1";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import AuctionContext from "context/AuctionContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const AuctionListType1 = () => {
  const auctionListContext = useContext(AuctionContext);

  return (
    <div className="moto-list">
      <div className="gx-mb-2"></div>

      {!auctionListContext.auctionList.loading ? (
        <>
          <AuctionListActionHeader />
          <AuctionFilterHeader />

          <div className="gx-main-content">
            <Row key="row" className="gx-d-flex">
              {auctionListContext.auctionList.auctionList.map(
                (auctionItem, index) => {
                  return (
                    <Col key={index} span={24}>
                      <AuctionListItem1 key={index} auctionItem={auctionItem} />
                    </Col>
                  );
                }
              )}
            </Row>
            <MotoPagination />
            <AuctionFilterDrawer />
          </div>
        </>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default AuctionListType1;
