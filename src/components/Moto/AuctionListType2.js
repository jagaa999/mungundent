import React, { useContext } from "react";

import { Col, Row } from "antd";

import AuctionListItem2 from "./AuctionListItem2";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AuctionContext from "context/AuctionContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const AuctionListType2 = () => {
  const auctionListContext = useContext(AuctionContext);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      {!auctionListContext.auctionList.loading ? (
        <div className="gx-main-content gx-p-2 gx-p-sm-0">
          <AuctionListActionHeader />
          <AuctionFilterHeader />

          <Row className="gx-d-flex">
            {auctionListContext.auctionList.auctionList.map(
              (auctionItem, index) => {
                return (
                  <Col
                    key={index}
                    xl={6}
                    md={8}
                    sm={12}
                    xs={12}
                    className="gx-mb-5"
                  >
                    <AuctionListItem2 key={index} auctionItem={auctionItem} />
                  </Col>
                );
              }
            )}
          </Row>

          <MotoPagination myClass="gx-mt-2" />
          <AuctionFilterDrawer />
        </div>
      ) : (
        <LoadingList type="card" />
      )}
    </div>
  );
};

export default AuctionListType2;
