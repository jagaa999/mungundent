import React, { useEffect, useContext } from "react";

import { Row, Col, message, Alert } from "antd";

import LogsContext from "context/LogsContext";
import LogBoxItems from "./LogBoxItems";

const LogBox = (props) => {
  useEffect(() => {
    if (props) logContext.loadLogsRecordId(props.recordId, props.tableName);
  }, []);

  const logContext = useContext(LogsContext);

  return (
    <div className="gx-main-content news-detail">
      {logContext.logList.logList.length && (
        <LogBoxItems logBoxItems={logContext.logList.logList} />
      )}

      {logContext.logList.error !== null ? (
        <Alert
          message="Анхаар!"
          description={logContext.logList.error}
          type="warning"
          showIcon
          closable
        />
      ) : null}
    </div>
  );
};

export default LogBox;
