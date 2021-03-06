import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  Col,
  Row,
  Button,
  Switch,
  Select,
  PageHeader,
  Affix,
  Tooltip,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

import accounting from "accounting";
import toBoolean from "util/booleanFunction";
import AutozarListItem3 from "./AutozarListItem3";
import AutozarListActionHeader from "./AutozarListActionHeader";
import AutozarContext from "context/AutozarContext";
import FilterContext from "context/FilterContext";
import AutozarFilterDrawer from "./Drawer/AutozarFilterDrawer";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import AuctionFilterHeader from "./Drawer/AuctionFilterHeader";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import LoadingList from "./Loading/LoadingList";

const AutozarListType3 = () => {
  const autozarListContext = useContext(AutozarContext);
  const filterContext = useContext(FilterContext);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!autozarListContext.autozarList.loading ? (
        <div className="gx-main-content">
          <AutozarListActionHeader title="Автозар" />
          {/* <AuctionFilterHeader /> */}
          <Row className="gx-d-flex">
            <Col key="dffdf" xs={24}>
              <AutozarListItem3
                key="autozarListItem3"
                autozarItem={autozarListContext.autozarList.autozarList}
              />
            </Col>
          </Row>
          <MotoPagination myClass="gx-mt-2" />
          <AutozarFilterDrawer />
          <AffixButtonInsert link="autozar" />
        </div>
      ) : (
        <LoadingList type="table" />
      )}
    </div>
  );
};

export default AutozarListType3;
