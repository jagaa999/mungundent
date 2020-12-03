import React from "react";

import AntBanner101 from "./AntBanner101.js";
import WidgetBanner101 from "./WidgetBanner101.js";
import WidgetMenu01 from "./WidgetMenu01.js";
import WidgetCarousel01 from "./WidgetCarousel01.js";
import WidgetCard07 from "./WidgetCard07.js";
import WidgetBanner07 from "./WidgetBanner07.js";
import { configHome001, configHome } from "./sampleData";

import { Menu, Avatar, Layout, Button, Divider } from "antd";
import "./less/antMotionStyle.less";

const { Header, Footer, Sider, Content } = Layout;

const { detailconfigs } = configHome001;

const HomePage = () => {
  // const myWidgetDtl = configHome[0].widgetDtl;
  // const myResult = configHome[2].result[1].rows[0];
  // console.table("myWidgetDtl", myWidgetDtl);
  // console.table("myResult", myResult);

  return (
    <Layout>
      {detailconfigs.map((widget, index) => {
        if (widget.widgetcode === "WidgetMenu01") {
          return (
            <Header>
              <WidgetMenu01
                key={index}
                widgetconfigs={widget.widgetconfigs}
                data={widget.data}
              />
            </Header>
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

        if (widget.widgetcode === "WidgetCard07") {
          return (
            <WidgetCard07
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data}
            />
          );
        }

        if (widget.widgetcode === "WidgetBanner07") {
          return (
            <WidgetBanner07
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data}
            />
          );
        }
      })}
    </Layout>
  );
};

export default HomePage;
