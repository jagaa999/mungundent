import React from "react";

import AntBanner101 from "./AntBanner101.js";
import WidgetBanner101 from "./WidgetBanner101.js";
import { configHome } from "./sampleData";

import { Avatar, Button, Divider } from "antd";

import "./less/antMotionStyle.less";

const HomePage = () => {
  const myWidgetDtl = configHome[2].widgetDtl;
  // const myResult = configHome[2].result[1].rows[0];

  console.table("myWidgetDtl", myWidgetDtl);
  // console.table("myResult", myResult);

  return (
    <div className="templates-wrapper">
      <WidgetBanner101
        id="WidgetBanner101"
        key="WidgetBanner101"
        myWidgetDtl={myWidgetDtl}
        myResult={configHome[2].result[1].rows[0]}
      />

      <Divider className="gx-my-5" />

      <WidgetBanner101
        id="WidgetBanner101"
        key="WidgetBanner101"
        myWidgetDtl={myWidgetDtl}
        myResult={configHome[2].result[1].rows[1]}
      />

      <Divider className="gx-my-5" />

      <WidgetBanner101
        id="WidgetBanner101"
        key="WidgetBanner101"
        myWidgetDtl={myWidgetDtl}
        myResult={configHome[2].result[1].rows[2]}
      />

      <Divider className="gx-my-5" />

      <WidgetBanner101
        id="WidgetBanner101"
        key="WidgetBanner101"
        myWidgetDtl={myWidgetDtl}
        myResult={configHome[2].result[1].rows[3]}
      />
    </div>
  );
};

export default HomePage;
