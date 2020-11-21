import React, { useContext } from "react";

import { Col, Row, PageHeader, Alert } from "antd";

import ProductListItem from "./ProductListItem";
import NewsListIActionHeader from "./NewsListIActionHeader";
import ProductContext from "context/ProductContext";
import FilterContext from "context/FilterContext";
// import FilterDrawer from "./Drawer/FilterDrawer";
// import FilterTag from "./Tag/FilterTag";
import MotoPagination from "./Pagination/MotoPagination";
import MotoSort from "components/Moto/Sort/MotoSort";
import LoadingList from "./Loading/LoadingList";

const ProductListType1 = () => {
  const productListContext = useContext(ProductContext);
  const filterContext = useContext(FilterContext);

  return (
    <div className="moto-list">
      {/* <div className="">
        <FilterTag />
      </div> */}

      <Alert
        type="warning"
        showIcon
        message="Анхаар"
        description="Дэлгүүрийн хэсгийг яг одоо хөгжүүлж байна. Та автын бараа сэлбэг борлуулдаг бол холбогдохыг хүсье. Баярлалаа."
      />

      <div className="gx-mb-2"></div>

      {!productListContext.productList.loading ? (
        <div className="gx-main-content gx-p-2 gx-p-sm-0">
          {/* <NewsListIActionHeader title="Нийтлэл" /> */}

          <PageHeader
            title={
              <h3>
                Бараа <small>({filterContext.totalcount})</small>
              </h3>
            }
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
          <MotoPagination />
          {/* <FilterDrawer /> */}
        </div>
      ) : (
        <LoadingList type="card" />
      )}
    </div>
  );
};

export default ProductListType1;
