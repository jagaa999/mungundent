import React, { useContext, useState, lazy } from "react";

import { Layout, Col, Row } from "antd";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import UniversalListItem1 from "./UniversalListItem1";
import UniversalListActionHeader from "./Universal/UniversalListActionHeader";
import MotoPagination from "./Pagination/MotoPagination";
import AffixButtonInsert from "./AffixButton/AffixButtonInsert";
import LoadingList from "./Loading/LoadingList";
import FilterContext from "context/FilterContext";

const { Content, Sider } = Layout;

const ProductCategoryBlock = lazy(() =>
  import("./Product/ProductCategoryBlock")
);

const UniversalListType1 = ({
  myListContext,
  myListContextLoading,
  myListContextList,
  myListContextListList,
  mySettings = null,
  myUniversalFilterSetting = null,
  MyFilter = null,
  MyFilterDrawer,
}) => {
  const filterContext = useContext(FilterContext);

  const [sider, setSider] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setSider({ collapsed });
  };

  console.log("DDDDDDDDDDDDDDD", MyFilter);
  console.log("БББББЫЫЫЫЫЫЫЫЫ", myUniversalFilterSetting);

  return (
    <>
      <UniversalListActionHeader
        myListContext={myListContext}
        mySettings={mySettings}
        myIsFilterDrawerOpen={myListContextList.isFilterDrawerOpen}
      />

      <Layout>
        {/* {MyFilter !== null && myUniversalFilterSetting !== null && isBrowser && ( */}
        {isBrowser && (
          <Sider
            className="moto-layout-sider gx-mr-lg-4"
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              // console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              // console.log(collapsed, type);
            }}
          >
            {/* {MyFilter && (
              <MyFilter myUniversalFilterSetting={myUniversalFilterSetting} />
            )} */}
            {/* Product дээр гарахгүй байгаа тул энийг түр авлаа. */}
            <MyFilter myUniversalFilterSetting={myUniversalFilterSetting} />
          </Sider>
        )}
        <Layout>
          <Content style={{ minHeight: "100vw" }}>
            <div className="moto-list">
              {!myListContextLoading ? (
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
                  {MyFilterDrawer && (
                    <MyFilterDrawer
                      myUniversalFilterSetting={myUniversalFilterSetting}
                    />
                  )}
                  <AffixButtonInsert link={mySettings.menu} />
                </div>
              ) : (
                <LoadingList />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default UniversalListType1;
