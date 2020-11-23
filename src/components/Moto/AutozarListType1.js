import React, { useEffect, useContext } from "react";

import { Col, Row, Select, PageHeader } from "antd";

import AutozarListItem1 from "./AutozarListItem1";
import AutozarContext from "context/AutozarContext";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const AutozarListType1 = () => {
  const autozarListContext = useContext(AutozarContext);

  useEffect(() => {
    autozarListContext.loadAutozarList();
  }, []);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      {!autozarListContext.autozarList.loading ? (
        <div className="gx-main-content">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <PageHeader
            title={<h3>Автомашинууд</h3>}
            className="gx-mb-3"
            extra={[]}
          ></PageHeader>

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
          {/* <MotoPagination />
          <FilterDrawer /> */}
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default AutozarListType1;
