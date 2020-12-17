import React, { useEffect, useContext, useState } from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { OverPack } from "rc-scroll-anim";

import { Col, Row, Button, Switch, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import AuctionListItem1 from "./AuctionListItem1";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AuctionListInfo from "./AuctionListInfo";
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
    // <OverPack>
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!auctionListContext.auctionList.loading ? (
        <>
          <AuctionListInfo />
          <Divider className="gx-my-3" />
          <AuctionListActionHeader />
          <AuctionFilterHeader />

          <div className="gx-main-content gx-p-2 gx-p-sm-0">
            {/* <OverPack playScale={0.3} key="queueAnim"> */}
            {/* <OverPack style={{ overflow: "hidden", height: 200 }}> */}
            {/* <QueueAnim key="u" type="bottom"> */}
            <Row key="row" className="gx-d-flex">
              {auctionListContext.auctionList.auctionList.map(
                (auctionItem, index) => {
                  return (
                    <Col key={index} span={24}>
                      <AuctionListItem1 key={index} auctionItem={auctionItem} />
                    </Col>

                    // <TweenOne
                    //   component={Col}
                    //   animation={{
                    //     opacity: 0.1,
                    //     marginLeft: 100,
                    //     type: "from",
                    //     ease: "easeOutQuad",
                    //     // delay: 50,
                    //     duration: 90,
                    //   }}
                    //   key={index}
                    //   componentProps={{ span: 24 }}
                    // >
                    //   <AuctionListItem1 key={index} auctionItem={auctionItem} />
                    // </TweenOne>

                    // <QueueAnim
                    //   component={Col}
                    //   key={index}
                    //   componentProps={{ span: 24 }}
                    //   animConfig={[
                    //     { opacity: [1, 0.5], translateY: [0, 30] },
                    //     { height: 0 },
                    //   ]}
                    //   ease={["easeOutQuart", "easeInOutQuart"]}
                    //   duration={[550, 450]}
                    //   interval={150}
                    // >
                    //   <AuctionListItem1 key={index} auctionItem={auctionItem} />
                    // </QueueAnim>
                  );
                }
              )}
            </Row>
            {/* </QueueAnim> */}
            {/* </OverPack> */}
            <MotoPagination />
            <AuctionFilterDrawer />
          </div>
        </>
      ) : (
        <LoadingList />
      )}
    </div>
    // </OverPack>
  );
};

export default AuctionListType1;
