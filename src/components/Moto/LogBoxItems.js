import React, { useState } from "react";

import { Card, Table, Row, Col, Avatar, Switch } from "antd";
import moment from "moment";
import "moment/locale/mn";

const LogBoxItems = ({ logBoxItems }) => {
  const [withTime, setWithTime] = useState(false);
  // console.log("logBoxItems", logBoxItems);

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
            {withTime && (
              <p className="gx-text-grey gx-fs-sm">
                {moment(record.actiondate).fromNow()}
              </p>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Үйлдэл",
      dataIndex: "actionname",
      key: "action",
      align: "right",
      sorter: (a, b) => a.actionname.length - b.actionname.length,
    },
  ];

  return (
    <div>
      <Card
        title="Үзсэн түүх"
        extra={
          <>
            <span className="gx-fs-sm gx-mr-2">Огноо</span>
            <Switch size="small" onClick={() => setWithTime(!withTime)} />
          </>
        }
      >
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
