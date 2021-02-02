import React, { useContext } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import QueueAnim from "rc-queue-anim";

import { Col, Row } from "antd";

import UniversalListItem2 from "./UniversalListItem2";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import MotoPagination from "./Pagination/MotoPagination";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";

const UniversalListType2 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
  myListContextListList,
  mySettings = {},
  MyFilterDrawer,
}) => {
  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      {!myListContextLoading ? (
        <div className="gx-main-content">
          <UniversalListActionHeader
            myListContext={myListContext}
            mySettings={mySettings}
            myIsFilterDrawerOpen={myListContextList.isFilterDrawerOpen}
          />

          <Row gutter={isBrowser ? [20, 30] : [7, 10]} type="flex">
            {myListContextListList.map((myUniversalItem, index) => {
              return (
                <Col key={index} xl={6} md={8} sm={12} xs={12}>
                  <UniversalListItem2
                    key={index}
                    myUniversalItem={myUniversalItem}
                  />
                </Col>
              );
            })}
          </Row>

          <MotoPagination myClass="gx-mt-2" />
          <MyFilterDrawer />
          <AffixButtonInsert link={mySettings.menu} />
        </div>
      ) : (
        <LoadingList type="card" />
      )}
    </div>
  );
};

export default UniversalListType2;
