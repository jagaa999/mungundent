import React from "react";
import { Row, Col, Empty } from "antd";

import { isEmpty } from "lodash";

import UniversalDetailPageHeader from "./Universal/UniversalDetailPageHeader";
import UniversalDetailPageCard from "./Universal/UniversalDetailPageCard";

const UniversalDetail = ({
  myDetailContext,
  myDetailContextDetail,
  myDetailContextDetailDetail,
  myDetailSettings,
}) => {
  if (isEmpty(myDetailContextDetailDetail)) return null;

  return (
    <>
      <UniversalDetailPageHeader
        myDetailContext={myDetailContext}
        myItem={myDetailContextDetailDetail}
        myDetailSettings={myDetailSettings}
      />

      <Row className="gx-mt-5">
        <Col span="17">
          <UniversalDetailPageCard
            myItem={myDetailContextDetailDetail}
            myDetailSettings={myDetailSettings}
          />
        </Col>
        <Col span="7" style={{ background: "#f9f9f9" }}>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Мэдээлэл байхгүй"
          />
        </Col>
      </Row>
    </>
  );
};

export default UniversalDetail;
