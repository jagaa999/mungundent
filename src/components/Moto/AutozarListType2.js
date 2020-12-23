import React, { useContext } from "react";
import QueueAnim from "rc-queue-anim";

import { Col, Row } from "antd";

import AutozarListItem2 from "./AutozarListItem2";
import AutozarListActionHeader from "./AutozarListActionHeader";
import AutozarContext from "context/AutozarContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import MotoPagination from "./Pagination/MotoPagination";
import AutozarFilterDrawer from "./Drawer/AutozarFilterDrawer";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";

const AutozarListType2 = () => {
  const autozarListContext = useContext(AutozarContext);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      {!autozarListContext.autozarList.loading ? (
        <div className="gx-main-content">
          <AutozarListActionHeader title="Автозар" />

          <Row className="gx-d-flex">
            {autozarListContext.autozarList.autozarList.map(
              (autozarItem, index) => {
                return (
                  <Col
                    key={index}
                    xl={6}
                    md={8}
                    sm={12}
                    xs={12}
                    className="gx-mb-5"
                  >
                    <AutozarListItem2 key={index} autozarItem={autozarItem} />
                  </Col>
                );
              }
            )}
          </Row>

          <MotoPagination myClass="gx-mt-2" />
          <AutozarFilterDrawer />
          <AffixButtonInsert link="autozar" />
        </div>
      ) : (
        <LoadingList type="card" />
      )}
    </div>
  );
};

export default AutozarListType2;
