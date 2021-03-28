import React, { useState, useEffect } from "react";
import { Row, Col, Tabs, Collapse } from "antd";
import { callData } from "util/googleSheetFunction";
import WidgetFaq from "./WidgetFaq";

const myWidgetInfoData = [
  {
    tabTitle: "Үзлэг",
    desc:
      "Бид гэр бүлийн бүх гишүүдийг жигд хянаж, насанд туршид нь халамжлах бодлого барьдаг.",
    faq: [
      { title: "Ерөнхий үзлэг гэж юу вэ?", desc: "Ерөнхий үзлэгийн тухай" },
      {
        title: "Хэдийн хугацааны давтамжтай үзүүлж байх нь оновчтой вэ?",
        desc: "Ерөнхий үзлэгийн тухай",
      },
    ],
  },
  {
    tabTitle: "Циркон",
    desc:
      "Бид гэр бүлийн бүх гишүүдийг жигд хянаж, насанд туршид нь халамжлах бодлого барьдаг.",
    faq: [
      { title: "Циркон гэж юу вэ?", desc: "Цирконы тухай" },
      { title: "Циркон гэж юу вэ?", desc: "Цирконы тухай" },
    ],
  },
  {
    tabTitle: "Имплант",
    desc:
      "Бид гэр бүлийн бүх гишүүдийг жигд хянаж, насанд туршид нь халамжлах бодлого барьдаг.",
    faq: [
      { title: "Имплант гэж юу вэ?", desc: "Имплантын тухай" },
      { title: "Имплант гэж юу вэ?", desc: "Имплантын тухай" },
    ],
  },
];

const WidgetInfo = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData);
  }, [doc]);

  // console.log("myData", myData);
  return (
    <>
      <Row type="flex" style={{ marginTop: "120px" }}>
        <Col md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <div
            style={{
              margin: "70px 0 0",
              fontSize: "1rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Аз жаргалтай амьдрахад туслах гурван үйлчилгээ
          </div>
          <Tabs defaultActiveKey="0" centered className="gx-mt-5" type="line">
            {myData.map((item, index) => (
              <Tabs.TabPane
                tab={item.title.value}
                key={index}
                className="gx-pt-5"
                style={{
                  ...JSON.parse(item.title.note || "{}"),
                }}
              >
                <Row>
                  <Col md={{ span: 13 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <div
                      style={{
                        marginTop: "20px",
                        ...JSON.parse(item.desc.note || "{}"),
                      }}
                    >
                      {item.desc.value}
                    </div>
                  </Col>
                  <Col md={{ span: 11 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <WidgetFaq
                      doc={doc}
                      sheetName={`*FAQ${item.title.value}`}
                    />
                    {/* <Collapse
                      defaultActiveKey={["0"]}
                      className="mungundent-collapse"
                    >
                      {item.faq.map((item2, index2) => (
                        <Collapse.Panel header={item2.title} key={index2}>
                          <p>{item2.desc}</p>
                        </Collapse.Panel>
                      ))}
                    </Collapse> */}
                  </Col>
                </Row>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default WidgetInfo;
