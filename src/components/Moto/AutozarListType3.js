import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import accounting from "accounting";
import toBoolean from "util/booleanFunction";
import AutozarListItem3 from "./AutozarListItem3";
import AuctionListActionHeader from "./AuctionListActionHeader";
import AutozarContext from "context/AutozarContext";
import FilterContext from "context/FilterContext";
import AuctionFilterDrawer from "./Drawer/AuctionFilterDrawer";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const AutozarListType3 = () => {
  const autozarListContext = useContext(AutozarContext);
  const filterContext = useContext(FilterContext);

  useEffect(() => {
    autozarListContext.loadAutozarList();
  }, []);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!autozarListContext.autozarList.loading ? (
        <div className="gx-main-content">
          {/* <AuctionListActionHeader /> */}

          {/* <AuctionFilterHeader /> */}

          <Row className="gx-d-flex">
            <Col key="dffdf" xs={24}>
              <AutozarListItem3
                key="autozarListItem3"
                autozarItem={autozarListContext.autozarList.autozarList}
              />
            </Col>
          </Row>

          {/* <MotoPagination myClass="gx-mt-2" /> */}
          {/* <AuctionFilterDrawer /> */}
        </div>
      ) : (
        <LoadingList type="table" />
      )}
    </div>
  );
};

export default AutozarListType3;
