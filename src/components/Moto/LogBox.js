import React, { useEffect, useContext } from "react";

import { Row, Col } from "antd";

import LogsContext from "context/LogsContext";
import LogBoxItems from "./LogBoxItems";

const LogBox = (props) => {
  useEffect(() => {
    if (props) logBox.loadLogs(props.recordId, props.tableName);
  }, []);

  const logBox = useContext(LogsContext);

  return (
    <div className="gx-main-content news-detail">
      {logBox.state.logItems.length && (
        <LogBoxItems logBoxItems={logBox.state.logItems} />
      )}
    </div>
  );
};

export default LogBox;
