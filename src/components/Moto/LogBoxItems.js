import React from "react";

import { Card, Table, Row, Col, Avatar } from "antd";
import moment from "moment";
import "moment/locale/mn";

const columns = [
  {
    title: "",
    dataIndex: "userprofilephoto",
    key: "userprofilephoto",
    fixed: "left",
    render: (text, record) => (
      <div className="gx-media">
        <Avatar
          src={record.userprofilephoto}
          alt={record.userfullname}
          className="gx-mr-3"
        />

        <div className="gx-media-body">
          <h5 className="gx-wall-user-title">{record.userfullname}</h5>
          <p className="gx-text-grey gx-fs-sm">
            {moment(record.actiondate).fromNow()}
          </p>
        </div>
      </div>
    ),
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
          showHeader={false}
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
