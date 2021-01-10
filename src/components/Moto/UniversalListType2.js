import React, { useContext } from "react";
import QueueAnim from "rc-queue-anim";

import { Col, Row } from "antd";

import UniversalListItem2 from "./UniversalListItem2";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import AutozarContext from "context/AutozarContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import MotoPagination from "./Pagination/MotoPagination";
import AutozarFilterDrawer from "./Drawer/AutozarFilterDrawer";
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
  const autozarListContext = useContext(AutozarContext);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      {!autozarListContext.autozarList.loading ? (
        <div className="gx-main-content">
          <UniversalListActionHeader
            myListContext={myListContext}
            mySettings={mySettings}
            myIsFilterDrawerOpen={myListContextList.isFilterDrawerOpen}
          />

          <Row className="gx-d-flex">
            {myListContextListList.map((myUniversalItem, index) => {
              return (
                <Col
                  key={index}
                  xl={6}
                  md={8}
                  sm={12}
                  xs={12}
                  className="gx-mb-5"
                >
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
