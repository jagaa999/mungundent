import React, { useEffect, useContext, useState } from "react";

import { Col, Row, Button, Switch, Select, PageHeader } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import toBoolean from "util/booleanFunction";
import ProductListItem from "./ProductListItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import ProductListContext from "context/ProductListContext";
import FilterContext from "context/FilterContext";
import FilterDrawer from "./Drawer/FilterDrawer";
import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const { Option } = Select;

const ProductListType1 = () => {
  const productListContext = useContext(ProductListContext);
  const [isSpecial, setIsSpecial] = useState(false);
  const [whatCountry, setWhatCountry] = useState([]);

  useEffect(() => {
    productListContext.loadProductList();
  }, []);

  console.log("productListContext.productList", productListContext.productList);

  function handleChange(value) {
    // console.log(`selected ${value}`);
    setWhatCountry(value);
  }

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <div className="gx-mb-2"></div>

      {!productListContext.productList.loading ? (
        <div className="gx-main-content">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <PageHeader
            title={<h3>Шинэхэн гишүүд</h3>}
            className="gx-mb-3"
            extra={[]}
          ></PageHeader>

          <Row className="gx-d-flex">
            {productListContext.productList.productList.map(
              (productItem, index) => {
                return (
                  <Col key={index} lg={8} md={8} sm={12} xs={12}>
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
