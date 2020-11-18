import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import accounting from "accounting";
import toBoolean from "util/booleanFunction";
import AuctionListItem3 from "./AuctionListItem3";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AuctionContext from "context/AuctionContext";
import FilterContext from "context/FilterContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const AuctionListType3 = () => {
  const auctionListContext = useContext(AuctionContext);
  const filterContext = useContext(FilterContext);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!auctionListContext.auctionList.loading ? (
        <div className="gx-main-content">
          <AuctionListActionHeader />

          <AuctionFilterHeader />

          <Row className="gx-d-flex">
            <Col key="dffdf" xs={24}>
              <AuctionListItem3
                key="newsListItem3"
                auctionItem={auctionListContext.auctionList.auctionList}
              />
            </Col>
          </Row>

          <MotoPagination myClass="gx-mt-2" />
          <AuctionFilterDrawer />
        </div>
      ) : (
        <LoadingList type="table" />
      )}
    </div>
  );
};

export default AuctionListType3;
