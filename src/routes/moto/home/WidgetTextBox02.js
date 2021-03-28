import React, { useState, useEffect } from "react";

import { Row, Col } from "antd";
import { callData } from "util/googleSheetFunction";

const WidgetTextBox02 = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData);
  }, [doc]);

  // console.log("myData", myData);

  return (
    <>
      <Row type="flex">
        <Col md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          {/* dsfdsfds */}
          <div
            style={{
              // backgroundColor: "#343434",
              background:
                "linear-gradient(317deg, rgba(19,84,122,1) 0%, rgba(128,208,199,1) 100%)",
              borderRadius: "30px",
              width: "100%",
              minHeight: "250px",
              padding: "12% 20%",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "300",
                lineHeight: "1.4",
                color: "#fff",
              }}
            >
              {myData.map((item, index) => (
                <span
                  style={{ ...JSON.parse(item.desc.note || "{}") }}
                  key={index}
                >
                  {item.desc.value}
                </span>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WidgetTextBox02;
