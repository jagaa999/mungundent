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
            size={15}
            className="gx-mr-3"
          />

          <div className="gx-media-body">
            <span className="gx-fs-sm gx-font-weight-light">
              {record.userfullname}
            </span>
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
      render: (actionname, record) => (
        <span className="gx-fs-sm gx-font-weight-light">{actionname}</span>
      ),
    },
  ];

  return (
    <div>
      <Card
        title={
          <span className="gx-fs-sm gx-font-weight-light">Үзсэн түүх</span>
        }
        size="small"
        extra={
          <>
            <span className="gx-fs-sm gx-font-weight-light gx-mr-2">Огноо</span>
            <Switch size="small" onClick={() => setWithTime(!withTime)} />
          </>
        }
      >
        <Table
          showHeader={false}
          className=" gx-table-no-bordered"
          size="small"
          columns={columns}
          rowKey="id" // key тавьж өгч байна.
          dataSource={logBoxItems}
          bordered={false}
          pagination={{
            className: "gx-fs-sm gx-font-weight-light gx-ml-auto",
            style: { display: "table" },
            showSizeChanger: false,
            size: "small",
            simple: true,
            position: ["none", "bottomRight"],
          }}
        />
      </Card>
    </div>
  );
};

export default LogBoxItems;
