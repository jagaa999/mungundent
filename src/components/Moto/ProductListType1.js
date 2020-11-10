import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import ProductListItem from "./ProductListItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import ProductContext from "context/ProductContext";
import FilterContext from "context/FilterContext";
// import FilterDrawer from "./Drawer/FilterDrawer";
// import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const ProductListType1 = () => {
  const productListContext = useContext(ProductContext);

  useEffect(() => {
    productListContext.loadProductList();
  }, []);

  console.log("productListContext.productList", productListContext.productList);

  function handleChange(value) {
    // console.log(`selected ${value}`);
  }

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!productListContext.productList.loading ? (
        <div className="gx-main-content gx-p-2 gx-p-sm-0">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <PageHeader
            title={<h3>Бараа</h3>}
            className="gx-mb-3"
            extra={[]}
          ></PageHeader>

          <Row className="gx-d-flex">
            {productListContext.productList.productList.map(
              (productItem, index) => {
                return (
                  <Col
                    key={index}
                    xl={6}
                    md={8}
                    sm={12}
                    xs={12}
                    className="gx-mb-5"
                  >
                    <ProductListItem key={index} productItem={productItem} />
                  </Col>
                );
              }
            )}
          </Row>
          {/* <MotoPagination />
          <FilterDrawer /> */}
        </div>
      ) : (
        <LoadingList />
      )}
    </div>
  );
};

export default ProductListType1;
