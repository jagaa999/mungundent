import React, { useContext } from "react";
import QueueAnim from "rc-queue-anim";

import { Col, Row, Divider } from "antd";

import AuctionListItem2 from "./AuctionListItem2";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AuctionListInfo from "./AuctionListInfo";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import AuctionContext from "context/AuctionContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
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
        <>
          <AuctionListInfo />
          <Divider className="gx-my-3" />
          <AuctionListActionHeader />
          <AuctionFilterHeader />
          <div className="gx-main-content gx-p-2 gx-p-sm-0">
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
        </>
      ) : (
        <LoadingList type="card" />
      )}
    </div>
  );
};

export default AuctionListType2;
