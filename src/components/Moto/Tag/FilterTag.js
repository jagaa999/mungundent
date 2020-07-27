import React from "react";
import { Card, Tag, Tooltip } from "antd";
import {
  ClearOutlined,
  CloseOutlined,
  DeleteOutlined,
  DeleteFilled,
  StopOutlined,
  PoweroffOutlined,
  CloseSquareOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const FilterTag = () => {
  function log(e) {
    console.log(e);
  }

  return (
    <div key="filtertage" className="gx-my-3">
      {/* <span className="gx-mr-3">Шүүлтүүрүүд</span> */}

      <Tooltip title="Төрөл">
        <Tag
          color="orange"
          closable
          onClose={log}
          closeIcon={<CloseOutlined />}
        >
          Үйл ажиллагаа
        </Tag>
      </Tooltip>
      <Tooltip title="Эх сурвалж">
        <Tag
          color="orange"
          closable
          onClose={log}
          closeIcon={<CloseOutlined />}
        >
          Moto.mn
        </Tag>
      </Tooltip>
      <Tooltip title="Нийтлэгч">
        <Tag
          color="orange"
          closable
          onClose={log}
          closeIcon={<CloseOutlined />}
        >
          Эрдэнэ Эрдэнэс
        </Tag>
      </Tooltip>
    </div>
  );
};

export default FilterTag;
