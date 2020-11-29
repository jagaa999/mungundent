import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import AuctionListItem1 from "./AuctionListItem1";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import AuctionContext from "context/AuctionContext";
import FilterContext from "context/FilterContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const AuctionListType1 = () => {
  const auctionListContext = useContext(AuctionContext);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!auctionListContext.auctionList.loading ? (
        <div className="gx-main-content gx-p-2 gx-p-sm-0">
          <AuctionListActionHeader />
          <AuctionFilterHeader />

          <Row className="gx-d-flex">
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
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default AuctionListType1;
