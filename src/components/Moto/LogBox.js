import React, { useEffect, useContext } from "react";

import { Row, Col } from "antd";

import NewsContext from "../../context/NewsContext";
import LogBoxItems from "./LogBoxItems";

const LogBox = (props) => {
  useEffect(() => {
    if (props) logBox.loadNewsDetailLog(props.recordId, props.tableName);
  }, []);

  const logBox = useContext(NewsContext);

  return (
    <div className="gx-main-content news-detail">
      {logBox.state.logItems.length && (
        <LogBoxItems logBoxItems={logBox.state.logItems} />
      )}
    </div>
  );
};

export default LogBox;
