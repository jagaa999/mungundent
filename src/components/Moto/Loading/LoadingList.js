import React from "react";
import { Skeleton, Divider, Card, Row, Col } from "antd";

const myLoop = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const LoadingList = (props) => {
  return props.type === "card" ? (
    <Row>
      {myLoop.map((item) => (
        <Col xl={6} md={8} sm={12} xs={24} className="gx-mb-2">
          <Card loading={true}></Card>
        </Col>
      ))}
    </Row>
  ) : (
    <div className={`${props.className}`}>
      <>
        <Skeleton
          avatar
          paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
          active
        />
        <Divider />
        <Skeleton
          avatar
          paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
          active
        />
        <Divider />
        <Skeleton
          avatar
          paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
          active
        />
        <Skeleton
          avatar
          paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
          active
        />
        <Skeleton
          avatar
          paragraph={{ rows: Math.floor(Math.random() * 2) + 3 }}
          active
        />
      </>
    </div>
  );
};
export default LoadingList;
