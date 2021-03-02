import React from "react";
import { Link } from "react-router-dom";

import { Button, Affix, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AffixButtonInsert = (props) => {
  return (
    <Affix style={{ position: "fixed", bottom: "50px", right: "50px" }}>
      <Link
        key="keyinsertbutton"
        to={`/${props.link || "news"}/insert`}
        className="gx-ml-1 gx-mr-0"
      >
        <Tooltip title="Шинээр нэмэх">
          <Button
            icon={<PlusOutlined />}
            className="gx-bg-success gx-text-white button-pulse-animation"
            shape="circle"
          />
        </Tooltip>
      </Link>
    </Affix>
  );
};

export default AffixButtonInsert;
