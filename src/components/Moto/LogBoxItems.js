import React from "react";

import { Card, Table, Row, Col, Avatar } from "antd";

const columns = [
  {
    title: "",
    dataIndex: "userprofilephoto",
    key: "userprofilephoto",
    fixed: "left",
    render: (userprofilephoto) => (
      <Avatar src={userprofilephoto} alt={userprofilephoto} size="small" />
    ),
  },
  {
    title: "Гишүүн",
    dataIndex: "userfullname",
    key: "userfullname",
    sorter: (a, b) => a.userfullname.length - b.userfullname.length,
  },

  {
    title: "Огноо",
    dataIndex: "actiondate",
    key: "date",
    sorter: (a, b) => new Date(a.actiondate) - new Date(b.actiondate),
    render: (actiondate) => <small>{actiondate}</small>,
  },
  {
    title: "Үйлдэл",
    dataIndex: "actionname",
    key: "action",
    sorter: (a, b) => a.actionname.length - b.actionname.length,
  },
];

const LogBoxItems = ({ logBoxItems }) => {
  // console.log("logBoxItems", logBoxItems);
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
