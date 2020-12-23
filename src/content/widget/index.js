import React from "react";
import { Link } from "react-router-dom";
import ReactJsonSchema from "react-json-schema";

import {
  schemaHeader,
  schemaContent,
  schemaFooter,
  engitechCarousel02,
  engitechCarousel03,
  engitechCard02,
  engitechCard03,
  engitechCard04,
  engitechBanner02,
  engitechCarousel04,
  engitechBanner03,
  engitechBanner05,
  engitechFooter02,
} from "./simpleData";

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
});

const HomePage = () => {
  return (
    <Layout className="gx-app-layouts">
      <Header style={{ height: "48px" }}>
        {view.parseSchema(schemaHeader)}
      </Header>
      <Layout className="ant-layout-content gx-layout-content gx-container-wrap">
        <Content className=" gx-main-content-wrapper">
          {view.parseSchema(schemaContent)}
        </Content>
      </Layout>

      <Layout>
        <Content>
          {view.parseSchema(engitechCarousel02)}
          {view.parseSchema(engitechCarousel03)}
          {view.parseSchema(engitechCard02)}
          {view.parseSchema(engitechCard03)}
          {view.parseSchema(engitechCard04)}
          {view.parseSchema(engitechBanner02)}
          {view.parseSchema(engitechCarousel04)}
          {view.parseSchema(engitechBanner03)}
          {view.parseSchema(engitechBanner05)}
          {view.parseSchema(engitechFooter02)}
        </Content>
      </Layout>

      <Footer>{view.parseSchema(schemaFooter)}</Footer>
    </Layout>
  );
};

export default HomePage;
