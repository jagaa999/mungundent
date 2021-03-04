import React, { useEffect, useContext, useState, lazy } from "react";

import { Layout, Col, Row } from "antd";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import UniversalListItem3 from "./UniversalListItem3";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import AutozarContext from "context/AutozarContext";
import FilterContext from "context/FilterContext";
import MotoPagination from "./Pagination/MotoPagination";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";

const { Content, Sider } = Layout;

const ProductCategoryBlock = lazy(() =>
  import("./Product/ProductCategoryBlock")
);

const UniversalListType3 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
  myListContextListList,
  mySettings = null,
  MyFilter = null,
  MyFilterDrawer,
}) => {
  const autozarListContext = useContext(AutozarContext);
  const filterContext = useContext(FilterContext);

  const { menu } = mySettings;
  const myCapitalizeName = menu.charAt(0).toUpperCase() + menu.slice(1);

  const MyFilterHeaderComponent = React.lazy(() =>
    import(`./Drawer/${myCapitalizeName}FilterHeader`).catch(() => ({
      default: () => <></>,
    }))
  );

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
            {MyFilter && <MyFilter />}
          </Sider>
        )}
        <Layout>
          <Content style={{ minHeight: "100vw" }}>
            <div className="moto-list">
              {!myListContextLoading ? (
                <>
                  <Row className="gx-d-flex">
                    <Col key="dffdf" xs={24}>
                      <UniversalListItem3
                        myListContextListList={myListContextListList}
                      />
                    </Col>
                  </Row>

                  <MotoPagination myClass="gx-mt-2" />
                  <MyFilterDrawer />
                  <AffixButtonInsert link={mySettings.menu} />
                </>
              ) : (
                <LoadingList type="table" />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default UniversalListType3;
