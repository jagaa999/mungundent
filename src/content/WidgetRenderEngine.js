import React, { useContext, useEffect, Lazy, Suspense } from "react";
import { Link } from "react-router-dom";
// import lazy from "./lazy";
// import ReactJsonSchema from "react-json-schema";
// import WidgetContext from "context/WidgetContext";

// import { schemaHeader, schemaContent, schemaFooter } from "./sux/suhJsonData";

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

// const { Header, Footer, Sider, Content } = Layout;
// const { Title, Paragraph } = Typography;
// const MenuItem = Menu.Item;
// const SubMenu = Menu.SubMenu;
// const ListItem = List.Item;
// const ListItemMeta = List.Item.Meta;
// const { Search } = Input;
// const view = new ReactJsonSchema();
// view.setComponentMap({
//   Link,
//   Layout,
//   Header,
//   Footer,
//   Sider,
//   Content,
//   Menu,
//   MenuItem,
//   SubMenu,
//   Carousel,
//   Row,
//   Col,
//   Card,
//   Image,
//   Button,
//   Avatar,
//   Divider,
//   List,
//   ListItem,
//   ListItemMeta,
//   Input,
//   Search,
//   Title,
//   Paragraph,
//   Statistic,
// });
// import lazy from "./lazy.js";
import { prepareBanner_001 } from "./prepareBanner_001";

const WidgetRenderEngine = ({ myWidgetSetting, myWidgetData }) => {
  console.log("myWidgetSetting", myWidgetSetting);
  console.log("myWidgetData", myWidgetData);

  return (
    <Layout className="gx-app-layouts">
      {Object.keys(myWidgetData).map((item, index) => {
        if (item !== "id") {
          console.log("item", item);
          const myWidgetItemSetting = myWidgetSetting[item];
          const myWidgetItemData = myWidgetData[item];

          console.log(myWidgetItemSetting);
          console.log(myWidgetItemData);

          const widgetName = myWidgetItemSetting.dtltheme;
          console.log("widgetName", `./${widgetName}`);

          // console.log("dfds fds fsd", last);

          switch (widgetName) {
            case "Banner_001":
              console.log("dsf sdf", prepareBanner_001);
              const fff = prepareBanner_001();
              return <>{fff}</>;

              break;
            case "TopMenu":
              // return <TopMenu />;
              break;

            default:
              break;
          }

          // return (
          //   <Suspense fallback={<div>dsf dsf</div>}>
          //     <MyComponent />
          //   </Suspense>
          // );
        }
      })}

      {/* {view.parseSchema(schemaHeader)}
      <Layout className="ant-layout-content gx-layout-content gx-container-wrap">
        <Content className=" gx-main-content-wrapper">
          {view.parseSchema(schemaContent)}
        </Content>
      </Layout>
      {view.parseSchema(schemaFooter)} */}
    </Layout>
  );
};

export default WidgetRenderEngine;
