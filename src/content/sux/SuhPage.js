import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactJsonSchema from "react-json-schema";
import WidgetContext from "context/WidgetContext";

import { schemaHeader, schemaContent, schemaFooter } from "./suhJsonData";

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
  Input,
  Typography,
  Statistic,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;
const { Search } = Input;
const view = new ReactJsonSchema();
view.setComponentMap({
  Link,
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
  Input,
  Search,
  Title,
  Paragraph,
  Statistic,
});

const SuhPage = () => {
  const widgetContext = useContext(WidgetContext);
  const myWidgetData = widgetContext.widgetData.widgetData;
  const myWidgetSetting = widgetContext.widgetData.widgetSetting;

  useEffect(() => {
    widgetContext.loadWidgetData("16091375164842");
  }, []);

  return (
    <Layout className="gx-app-layouts">
      {console.log("myWidgetData", myWidgetData)}
      {console.log("myWidgetSetting", myWidgetSetting)}

      {view.parseSchema(schemaHeader)}
      <Layout className="ant-layout-content gx-layout-content gx-container-wrap">
        <Content className=" gx-main-content-wrapper">
          {view.parseSchema(schemaContent)}
        </Content>
      </Layout>
      {view.parseSchema(schemaFooter)}
    </Layout>
  );
};

export default SuhPage;
