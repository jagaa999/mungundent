import React from "react";

import { Card, Table, Row, Col } from "antd";

const columns = [
  {
    title: "Гишүүн",
    dataIndex: "membername",
    key: "membername",
    sorter: (a, b) => a.membername.length - b.membername.length,
  },

  {
    title: "Огноо",
    dataIndex: "actiondate",
    key: "date",
    sorter: (a, b) => new Date(a.actiondate) - new Date(b.actiondate),
  },
  {
    title: "Үйлдэл",
    dataIndex: "actionname",
    key: "action",
    sorter: (a, b) => a.actionname.length - b.actionname.length,
  },
];

const LogBoxItems = ({ logBoxItems }) => {
  return (
    <div>
      <Card title="Үзсэн түүх">
        <Table
          className="gx-table-responsive"
          size="small"
          // rowSelection={rowSelection}
          columns={columns}
          rowKey="id" // key тавьж өгч байна.
          dataSource={logBoxItems}
        />
      </Card>
    </div>
  );
};

export default LogBoxItems;
