import React, { useContext } from "react";
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

import NewsFilterContext from "context/NewsFilterContext";

const FilterTag = () => {
  const newsFilterContext = useContext(NewsFilterContext);

  function log(e, myKey) {
    // console.log("e", e);
    // console.log("myKey", myKey);
    newsFilterContext.updateParams({ [myKey]: "" });
  }

  return (
    <div key="filtertage" className="gx-my-3">
      {/* <span className="gx-mr-3">Шүүлтүүрүүд</span> */}
      {Object.entries(newsFilterContext.state.filterList).map(function (
        item,
        i
      ) {
        // console.log("itemitem", item);
        return (
          <Tooltip title={item[0]}>
            <Tag
              // key={item.}
              color="orange"
              closable
              onClose={(event) => log(event, item[0])}
              closeIcon={<CloseOutlined />}
            >
              {item[1]}
            </Tag>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default FilterTag;
