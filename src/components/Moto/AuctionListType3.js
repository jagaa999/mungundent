import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import AuctionListItem3 from "./AuctionListItem3";
import NewsListIActionHeader from "./NewsListIActionHeader";
import AuctionContext from "context/AuctionContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const AuctionListType3 = () => {
  const auctionListContext = useContext(AuctionContext);

  useEffect(() => {
    auctionListContext.loadAuctionList();
  }, []);

  console.log("auctionListContext.auctionList", auctionListContext.auctionList);

  function handleChange(value) {
    // console.log(`selected ${value}`);
  }

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!auctionListContext.auctionList.loading ? (
        <div className="gx-main-content">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}
          <PageHeader
            title={<h3>Бараа</h3>}
            className="gx-mb-3"
            extra={[]}
          ></PageHeader>

          <Row className="gx-d-flex">
            <Col key="dffdf" xs={24}>
              <AuctionListItem3
                key="newsListItem3"
                auctionItem={auctionListContext.auctionList.auctionList}
              />
            </Col>
          </Row>

          {/* <MotoPagination myClass="gx-mt-2" /> */}
          {/* <FilterDrawer /> */}
        </div>
      ) : (
        // <div className="gx-main-content gx-p-2 gx-p-sm-0">

        //   <PageHeader
        //     title={<h3>Бараа</h3>}
        //     className="gx-mb-3"
        //     extra={[]}
        //   ></PageHeader>

        //   <Row className="gx-d-flex">
        //     {auctionListContext.auctionList.auctionList.map(
        //       (auctionItem, index) => {
        //         return (
        //           <Col
        //             key={index}
        //             xl={6}
        //             md={8}
        //             sm={12}
        //             xs={12}
        //             className="gx-mb-5"
        //           >
        //             <AuctionListItem3 key={index} auctionItem={auctionItem} />
        //           </Col>
        //         );
        //       }
        //     )}
        //   </Row>
        // </div>
        <LoadingList type="table" />
      )}
    </div>
  );
};

export default AuctionListType3;
