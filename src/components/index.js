import React from "react";

import AntBanner101 from "./AntBanner101.js";
import WidgetBanner101 from "./WidgetBanner101.js";
import WidgetMenu01 from "./WidgetMenu01.js";
import WidgetCarousel01 from "./WidgetCarousel01.js";
import WidgetCard07 from "./WidgetCard07.js";
import WidgetBanner07 from "./WidgetBanner07.js";

/*
 * Section imports
 */
import WidgetBanner01 from './Widgets/Banner/Banner01'
import WidgetBanner02 from './Widgets/Banner/Banner02'
import WidgetBanner03 from './Widgets/Banner/Banner03'

/**
 * Banner imports
 */
import WidgetSection02 from './Widgets/Section/Section02'

/**
 * List imports
 */
import WidgetList01 from './Widgets/List/List01'
import WidgetList02 from './Widgets/List/List02'

/**
 * Card imports
 */
import WidgetCard01 from './Widgets/Card/Card01'

/**
 * Footer imports
 */
import WidgetFooter01 from './Widgets/Footer/Footer01'

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

        if(widget.widgetcode === "WidgetBanner01") {
          return (
            <WidgetBanner01
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data}
            />
          )
        }

        if(widget.widgetcode === "WidgetBanner02") {
          return (
            <WidgetBanner02
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data} />
          )
        }

        if(widget.widgetcode === "WidgetList01") {
          return (
            <WidgetList01
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data} />
          )
        }

        if(widget.widgetcode === "WidgetBanner03") {
          return (
            <WidgetBanner03
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data} />
          )
        }

        if(widget.widgetcode === "WidgetList02") {
          return (
            <WidgetList02
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data} />
          )
        }

        if(widget.widgetcode === "WidgetCard01") {
          return (
            <WidgetCard01
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data}
              />
          )
        }

        if(widget.widgetcode === "WidgetFooter01") {
          return (
            <WidgetFooter01
              key={index}
              widgetconfigs={widget.widgetconfigs}
              data={widget.data}
            />
          )
        }

      })}
    </Layout>
  );
};

export default HomePage;
