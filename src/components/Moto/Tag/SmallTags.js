import React from "react";
import { Card, Tag, Tooltip, Badge } from "antd";
import {
  WarningTwoTone,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  StarOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

export const ActiveTag = (props) => {
  return props.type === "dot" ? (
    <Tooltip title="Ноорог">
      <Badge status="warning" className="gx-mx-2" />
    </Tooltip>
  ) : (
    <Tag
      icon={<ExclamationCircleOutlined />}
      color="warning"
      className="gx-mx-2"
    >
      Идэвхгүй (Ноорог)
    </Tag>
  );
};

export const FeaturedTag = (props) => {
  return props.type === "dot" ? (
    <Tooltip title="Спонсор">
      <Badge status="success" className="gx-mx-2" />
    </Tooltip>
  ) : (
    <Tag icon={<StarOutlined />} color="success" className="gx-mx-2">
      Спонсор
    </Tag>
  );
};
