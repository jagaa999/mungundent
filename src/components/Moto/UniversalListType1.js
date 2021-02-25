import React, { useContext, useState } from "react";

import { Layout, Menu, Col, Row, Divider, Popover, Button, Card } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import UniversalListItem1 from "./UniversalListItem1";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import MotoPagination from "./Pagination/MotoPagination";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const UniversalListType1 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
  myListContextListList,
  mySettings = {},
  MyFilterDrawer,
}) => {
  const [sider, setSider] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setSider({ collapsed });
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          width={200}
          collapsible
          collapsed={sider.collapsed}
          onCollapse={onCollapse}
          style={{ background: "#d1d1d1" }}
        >
          <div className="logo" />
          dsf dsf dsf
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
          <div>dfdsf dsfsdf dsf dsf</div>
        </Sider>
        <Layout style={{ padding: "0 24px 24px", background: "#f3f3f3" }}>
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 24, minHeight: 360 }}>Bill is a cat.</div>
          </Content>
        </Layout>
      </Layout>
      <div className="moto-list">
        <div className="gx-mb-2"></div>

        {!myListContextLoading ? (
          <>
            <UniversalListActionHeader
              myListContext={myListContext}
              mySettings={mySettings}
              myIsFilterDrawerOpen={myListContextList.isFilterDrawerOpen}
            />
            {/* <AuctionFilterHeader /> */}

            <div className="gx-main-content">
              <Row key="row" className="gx-d-flex">
                {myListContextListList.map((myUniversalItem, index) => {
                  return (
                    <Col key={index} span={24}>
                      <UniversalListItem1
                        key={index}
                        myUniversalItem={myUniversalItem}
                      />
                    </Col>
                  );
                })}
              </Row>

              <MotoPagination />
              <MyFilterDrawer />
              <AffixButtonInsert link={mySettings.menu} />
            </div>
          </>
        ) : (
          <LoadingList />
        )}
      </div>
    </>
  );
};

export default UniversalListType1;
