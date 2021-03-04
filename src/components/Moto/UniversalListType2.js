import React, { useContext, lazy } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { isEmpty } from "lodash";

import { Layout, Col, Row } from "antd";

import UniversalListItem2 from "./UniversalListItem2";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import MotoPagination from "./Pagination/MotoPagination";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";

const { Content, Sider } = Layout;

const UniversalListType2 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
  myListContextListList,
  mySettings = null,
  MyFilter = null,
  MyFilterDrawer = null,
}) => {
  return (
    <>
      <UniversalListActionHeader
        myListContext={myListContext}
        mySettings={mySettings}
        myIsFilterDrawerOpen={myListContextList.isFilterDrawerOpen}
      />
      <Layout>
        {MyFilter && isBrowser && (
          <Sider
            className="moto-layout-sider gx-mr-lg-4"
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <MyFilter />
          </Sider>
        )}
        <Layout>
          <Content style={{ minHeight: "100vw" }}>
            <div className="moto-list">
              {!myListContextLoading ? (
                <div className="gx-main-content">
                  <Row gutter={isBrowser ? [20, 20] : [7, 9]} type="flex">
                    {myListContextListList.map((myUniversalItem, index) => {
                      return (
                        <Col
                          key={index}
                          xxl={6}
                          xl={8}
                          lg={12}
                          md={8}
                          sm={12}
                          xs={12}
                        >
                          <UniversalListItem2
                            key={index}
                            myUniversalItem={myUniversalItem}
                          />
                        </Col>
                      );
                    })}
                  </Row>

                  <MotoPagination myClass="gx-mt-2" />

                  {MyFilterDrawer && <MyFilterDrawer />}
                  <AffixButtonInsert link={mySettings.menu} />
                </div>
              ) : (
                <LoadingList type="card" />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default UniversalListType2;
