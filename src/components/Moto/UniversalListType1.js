import React, { useContext, useState } from "react";

import { Layout, Col, Row } from "antd";

import UniversalListItem1 from "./UniversalListItem1";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import MotoPagination from "./Pagination/MotoPagination";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";

const { Content, Sider } = Layout;

const UniversalListType1 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
  myListContextListList,
  mySettings = {},
  MyFilter = null,
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
    <Layout>
      {MyFilter && (
        <Sider
          className="moto-layout-sider"
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
        <Content style={{ margin: "24px 16px 0", minHeight: "100vw" }}>
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default UniversalListType1;
