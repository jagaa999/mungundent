import React, { useEffect, useContext } from "react";

import { Row, Col, message, Alert, Empty } from "antd";

import LogsContext from "context/LogsContext";
import LogBoxItems from "./LogBoxItems";
import { isEmpty } from "lodash";

const LogBox = ({ recordId, tableName }) => {
  useEffect(() => {
    logContext.loadLogsRecordId(recordId, tableName);
  }, []);

  const logContext = useContext(LogsContext);

  return (
    // <div className="gx-main-content news-detail">
    <div className="">
      {!isEmpty(logContext.logList.logList) ? (
        <LogBoxItems logBoxItems={logContext.logList.logList} />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Үзсэн түүхгүй"
        ></Empty>
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
