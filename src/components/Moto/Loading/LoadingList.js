import React from "react";
import { Skeleton, Divider, Card, Row, Col, Table } from "antd";

const myLoop = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const sampleColumns = [
  {
    title: "Багана",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Багана",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Багана",
    dataIndex: "address",
    key: "address",
  },
];

const sampleData = [
  {
    key: "1",
    name: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 150) + 50 }}
        active={true}
        size="small"
      />
    ),
    age: <Skeleton.Avatar active={true} size="small" shape="circle" />,
    address: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 100) + 100 }}
        active={true}
        size="small"
      />
    ),
  },
  {
    key: "2",
    name: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 150) + 50 }}
        active={true}
        size="small"
      />
    ),
    age: <Skeleton.Avatar active={true} size="small" shape="circle" />,
    address: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 100) + 100 }}
        active={true}
        size="small"
      />
    ),
  },
  {
    key: "3",
    name: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 150) + 50 }}
        active={true}
        size="small"
      />
    ),
    age: <Skeleton.Avatar active={true} size="small" shape="circle" />,
    address: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 100) + 100 }}
        active={true}
        size="small"
      />
    ),
  },
  {
    key: "4",
    name: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 150) + 50 }}
        active={true}
        size="small"
      />
    ),
    age: <Skeleton.Avatar active={true} size="small" shape="circle" />,
    address: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 100) + 100 }}
        active={true}
        size="small"
      />
    ),
  },
  {
    key: "5",
    name: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 150) + 50 }}
        active={true}
        size="small"
      />
    ),
    age: <Skeleton.Avatar active={true} size="small" shape="circle" />,
    address: (
      <Skeleton.Input
        style={{ width: Math.floor(Math.random() * 100) + 100 }}
        active={true}
        size="small"
      />
    ),
  },
];

const LoadingList = (props) => {
  if (props.type === "card") {
    return (
      <Row>
        {myLoop.map((item, index) => (
          <Col key={index} xl={6} md={8} sm={12} xs={24} className="gx-mb-2">
            <Card loading={true}></Card>
          </Col>
        ))}
      </Row>
    );
  } else if (props.type === "table") {
    return (
      <Table
        columns={sampleColumns}
        dataSource={sampleData}
        pagination={false}
        // loading={true}
      />
    );
  } else {
    return (
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
  }
};
export default LoadingList;
