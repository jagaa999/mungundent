import React from "react";
import ReactJsonSchema from "react-json-schema";

import WidgetMenu01 from "./WidgetMenu01";
import WidgetCarousel01 from "./WidgetCarousel01";
import WidgetCard07 from "./WidgetCard07";
import WidgetBanner07 from "./WidgetBanner07";
import WidgetBanner01 from "./Banner/Banner01";
import WidgetBanner02 from "./Banner/Banner02";
import WidgetBanner03 from "./Banner/Banner03";
import WidgetSection02 from "./Section/Section02";
import WidgetList01 from "./List/List01";
import WidgetList02 from "./List/List02";
import WidgetCard01 from "./Card/Card01";
import WidgetFooter01 from "./Footer/Footer01";
import { configHome001, schema } from "./simpleData";

import {
  Layout,
  Menu,
  Carousel,
  Row,
  Col,
  Card,
  Image,
  Button,
  Avatar,
  Divider,
  List,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;
const view = new ReactJsonSchema();
view.setComponentMap({
  Layout,
  Header,
  Footer,
  Sider,
  Content,
  Menu,
  MenuItem,
  SubMenu,
  Carousel,
  Row,
  Col,
  Card,
  Image,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemMeta,
});

const { detailconfigs } = configHome001;

const HomePage = () => {
  // const myWidgetDtl = configHome[0].widgetDtl;
  // const myResult = configHome[2].result[1].rows[0];
  // console.table("myWidgetDtl", myWidgetDtl);
  // console.table("myResult", myResult);

  return (
    <Layout className="gx-app-layout">
      <Content className="gx-layout-content gx-container-wrap">
        {view.parseSchema(schema)}

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
