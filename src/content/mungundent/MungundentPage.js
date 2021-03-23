import React from "react";
import ReactJsonSchema from "react-json-schema";
import CustomScrollbars from "../../util/CustomScrollbars";

import { Link } from "react-router-dom";

import {
  schemaHeader,
  schemaBody,
  schemaBodyParams,
  schemaContent,
  xminHome01,
  // xminAbout01,
  // xminPorfolio01,
} from "./mungundentJsonData";

import {
  Button,
  Card,
  Carousel,
  Col,
  Layout,
  Menu,
  Row,
  Image,
  Avatar,
  Divider,
  List,
  Input,
  Typography,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;
const { Search } = Input;
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
  Search,
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
  Link,
  List,
  ListItem,
  ListItemMeta,
  Title,
  Paragraph,
  CustomScrollbars,
});

const MungundentPage = () => {
  return (
    <Layout className="gx-app-layouts">
      {view.parseSchema(schemaHeader)}
      <Layout>
        <Content>
          <div {...schemaBodyParams}>
            {view.parseSchema(schemaContent)}
            {view.parseSchema(xminHome01)}
            {/* {view.parseSchema(xminAbout01)}
          {view.parseSchema(xminPorfolio01)} */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MungundentPage;
