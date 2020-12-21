import React, { useState, useEffect, useContext } from "react";

import { Row, Col, Tabs, Button, Table } from "antd";
import CompareContext from "context/CompareContext";
import MotoSmartHomeCard2 from "../Widgets/MotoSmartHomeCard2";
import MotoSmartHomeCard3 from "../Widgets/MotoSmartHomeCard3";

const CompareItems = () => {
  const compareContext = useContext(CompareContext);

  return (
    <>
      <h2>Харьцуулах</h2>
      <Button onClick={compareContext.toggleDrawer}>Харьцуулах </Button>
      {compareContext.compareList.compareList.map((item, index) => (
        <div key={index}>ddsf dsf ds</div>
      ))}

      <Table dataSource={compareContext.compareList.compareList} />
    </>
  );
};

export default CompareItems;
