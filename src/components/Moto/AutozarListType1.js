import React, { useEffect, useContext } from "react";

import { Col, Row, Select, PageHeader } from "antd";

import AutozarListItem1 from "./AutozarListItem1";
import AutozarListActionHeader from "./AutozarListActionHeader";
import AutozarContext from "context/AutozarContext";
import LoadingList from "./Loading/LoadingList";
import MotoPagination from "./Pagination/MotoPagination";
import AutozarFilterDrawer from "./Drawer/AutozarFilterDrawer";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";

const { Option } = Select;

const AutozarListType1 = () => {
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
                  <Col key={index} span={24}>
                    <AutozarListItem1 key={index} autozarItem={autozarItem} />
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
        <LoadingList />
      )}
    </div>
  );
};

export default AutozarListType1;
