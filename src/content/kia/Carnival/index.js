import React from "react";

import AntBanner101 from "./AntBanner101.js";
import WidgetBanner101 from "./WidgetBanner101.js";
import WidgetMenu01 from "./WidgetMenu01.js";
import WidgetCarousel01 from "./WidgetCarousel01.js";
import { configHome001, configHome } from "./sampleData";

import { Menu, Avatar, Button, Divider } from "antd";
import "./less/antMotionStyle.less";

const { detailconfigs } = configHome001;

const HomePage = () => {
  // const myWidgetDtl = configHome[0].widgetDtl;
  // const myResult = configHome[2].result[1].rows[0];
  // console.table("myWidgetDtl", myWidgetDtl);
  // console.table("myResult", myResult);

  return (
    <div>
      {detailconfigs.map((widget, index) => {
        if (widget.widgetcode === "WidgetMenu01") {
          return (
            <WidgetMenu01
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data}
            />
          );
        }

        if (widget.widgetcode === "WidgetCarousel01") {
          return (
            <WidgetCarousel01
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data}
            />
          );
        }
      })}
    </div>
  );
};

export default HomePage;
