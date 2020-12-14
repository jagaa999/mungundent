import React from "react";

// import AntBanner101 from "./AntBanner101";
// import WidgetBanner101 from "./WidgetBanner101";
import WidgetMenu01 from "./WidgetMenu01";
import WidgetCarousel01 from "./WidgetCarousel01";
import WidgetCard07 from "./WidgetCard07";
import WidgetBanner07 from "./WidgetBanner07";

/*
 * Section imports
 */
import WidgetBanner01 from "./Banner/Banner01";
import WidgetBanner02 from "./Banner/Banner02";
import WidgetBanner03 from "./Banner/Banner03";

/**
 * Banner imports
 */
import WidgetSection02 from "./Section/Section02";

/**
 * List imports
 */
import WidgetList01 from "./List/List01";
import WidgetList02 from "./List/List02";

/**
 * Card imports
 */
import WidgetCard01 from "./Card/Card01";

/**
 * Footer imports
 */
import WidgetFooter01 from "./Footer/Footer01";

import { configHome001, configHome } from "./simpleData";

import { Menu, Avatar, Layout, Button, Divider } from "antd";
// import "./less/antMotionStyle.less";

const { Header, Footer, Sider, Content } = Layout;

const { detailconfigs } = configHome001;

const HomePage = () => {
  // const myWidgetDtl = configHome[0].widgetDtl;
  // const myResult = configHome[2].result[1].rows[0];
  // console.table("myWidgetDtl", myWidgetDtl);
  // console.table("myResult", myResult);

  return (
    <Layout className="gx-app-layout">
      <Content className="gx-layout-content gx-container-wrap">
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

          if (widget.widgetcode === "WidgetBanner01") {
            return (
              <WidgetBanner01
                key={index}
                widgetconfigs={widget.widgetconfigs}
                data={widget.data}
              />
            );
          }

          if (widget.widgetcode === "WidgetBanner02") {
            return (
              <WidgetBanner02
                key={index}
                widgetconfigs={widget.widgetconfigs}
                data={widget.data}
              />
            );
          }

          if (widget.widgetcode === "WidgetList01") {
            return (
              <WidgetList01
                key={index}
                widgetconfigs={widget.widgetconfigs}
                data={widget.data}
              />
            );
          }

          if (widget.widgetcode === "WidgetBanner03") {
            return (
              <WidgetBanner03
                key={index}
                widgetconfigs={widget.widgetconfigs}
                data={widget.data}
              />
            );
          }

          if (widget.widgetcode === "WidgetList02") {
            return (
              <WidgetList02
                key={index}
                widgetconfigs={widget.widgetconfigs}
                data={widget.data}
              />
            );
          }

          if (widget.widgetcode === "WidgetCard01") {
            return (
              <WidgetCard01
                key={index}
                widgetconfigs={widget.widgetconfigs}
                data={widget.data}
              />
            );
          }

          if (widget.widgetcode === "WidgetFooter01") {
            return (
              <WidgetFooter01
                key={index}
                widgetconfigs={widget.widgetconfigs}
                data={widget.data}
              />
            );
          }
        })}
      </Content>
    </Layout>
  );
};

export default HomePage;
