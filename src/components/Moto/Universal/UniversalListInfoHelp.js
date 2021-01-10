import React, { useState, useContext } from "react";

import { Typography, Row, Col, Empty } from "antd";
import Joyride, { STATUS } from "react-joyride";
import MyIcon from "util/iconFunction";

const { Paragraph } = Typography;

const UniversalListInfoHelp = (props) => {
  return (
    <>
      <Row>
        {/* <Col xl={16} lg={14} md={12} sm={12} xs={24}> */}
        <Col span={24}>
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 60,
            }}
            description={<span>Зөвлөмж алга</span>}
          ></Empty>
          {/* <div className="gx-text-grey gx-fs-sm">
            <Paragraph>
              Япон улсын аукшин системд яг одоогоор тавигдсан байгаа
              автомашинуудыг та харж байна. Японоос орж ирж буй бүх автомашиныг
              эндээс авдаг билээ. Та өөрт таалагдсан хамгийн онцгой автомашиныг
              эндээс шууд үнэ тавин авах боломжтой.
            </Paragraph>
          </div> */}
        </Col>
        {/* <Col xl={8} lg={10} md={12} sm={12} xs={24}>
          <Row gutter={[4, 4]}></Row>
        </Col> */}
      </Row>
    </>
  );
};

export default UniversalListInfoHelp;
