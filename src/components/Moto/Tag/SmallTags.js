import React from "react";
import { Card, Tag, Tooltip } from "antd";
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

export const ActiveTag = () => {
  return (
    <Tag
      icon={<ExclamationCircleOutlined />}
      color="warning"
      className="gx-mx-2"
    >
      Идэвхгүй (Ноорог)
    </Tag>
  );
};

export const FeaturedTag = () => {
  return (
    <Tag icon={<StarOutlined />} color="success" className="gx-mx-2">
      Спонсор
    </Tag>
  );
};
