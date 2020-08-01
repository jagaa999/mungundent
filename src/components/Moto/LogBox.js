import React, { useEffect, useContext } from "react";

import { Row, Col, message, Alert } from "antd";

import LogsContext from "context/LogsContext";
import LogBoxItems from "./LogBoxItems";

const LogBox = (props) => {
  useEffect(() => {
    if (props) logContext.loadLogs(props.recordId, props.tableName);
  }, []);

  const logContext = useContext(LogsContext);

  return (
    <div className="gx-main-content news-detail">
      {logContext.state.logItems.length && (
        <LogBoxItems logBoxItems={logContext.state.logItems} />
      )}

      {logContext.state.error !== null ? (
        <Alert
          message="Анхаар!"
          description={logContext.state.error}
          type="warning"
          showIcon
          closable
        />
      ) : null}
    </div>
  );
};

export default LogBox;
