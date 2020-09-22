import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import MotocarListItem1 from "./MotocarListItem1";
import NewsListIActionHeader from "./NewsListIActionHeader";
import MotocarContext from "context/MotocarContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const MotocarListType1 = () => {
  const motocarListContext = useContext(MotocarContext);

  useEffect(() => {
    motocarListContext.loadMotocarList();
  }, []);

  console.log("motocarListContext.motocarList", motocarListContext.motocarList);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      {!motocarListContext.motocarList.loading ? (
        <div className="gx-main-content">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <PageHeader
            title={<h3>Автомашинууд</h3>}
            className="gx-mb-3"
            extra={[]}
          ></PageHeader>

          <Row className="gx-d-flex">
            {motocarListContext.motocarList.motocarList.map(
              (motocarItem, index) => {
                return (
                  <Col key={index} span={24}>
                    <MotocarListItem1 key={index} motocarItem={motocarItem} />
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

export default MotocarListType1;
