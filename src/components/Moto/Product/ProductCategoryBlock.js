import React, { useState, useContext, useRef } from "react";
import { Card, Button } from "antd";
import ProductContext from "context/ProductContext";
import FilterContext from "../../../context/FilterContext";
import MyIcon from "util/iconFunction";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductCategoryBlock = () => {
  const productContext = useContext(ProductContext);
  const filterContext = useContext(FilterContext);

  const changeCategory = (checkedValues, parameterLabel) => {
    const myValue = checkedValues !== myDefault ? checkedValues : "";
    //Category List дотроос сонгогдсон утгыг хайж олоод kpitemplateid-г олж авна. kpitemplateid-аа бас URL руу дамжуулах ёстой.
    let myKpiTemplateId = "";
    productContext.productCategoryList.productCategoryList.map(
      (item, index) => {
        if (item.id === myValue) {
          myKpiTemplateId = item.kpitemplateid;
        }
      }
    );

    filterContext.updateParams(
      {
        [parameterLabel]: myValue,
        kpitemplateid: myKpiTemplateId,
      },
      true
    );
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const SamplePrevArrow = (props) => {
    return (
      <div
        style={{
          position: "absolute",
          top: "18px",
          display: "block",
          lineHeight: "0",
          left: "5px",
          zIndex: "12",
        }}
      >
        <Button
          type="text"
          shape="circle"
          icon={<MyIcon type="iconangleleft" />}
          className="gx-m-0 gx-text-warning"
        />
      </div>
    );
  };

  const SampleNextArrow = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "18px",
          display: "block",
          lineHeight: "0",
          right: "5px",
          zIndex: "12",
        }}
      >
        <Button
          type="text"
          shape="circle"
          icon={<MyIcon type="iconangleright" />}
          className="gx-m-0 gx-text-warning"
        />
      </div>
    );
  };

  const myDefault =
    filterContext.state.filterList?.generalcategoryid || undefined;

  return (
    <div className="gx-mb-4">
      <Swiper
        className="moto-filter-swiper"
        spaceBetween={10}
        slidesPerView={5}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {productContext.productCategoryList.productCategoryList.map(
          (item, index) => (
            <SwiperSlide>
              <Card
                className={`gx-fs-sm gx-m-0 gx-card-full gx-p-2 ${
                  myDefault === item.id ? "gx-bg-orange gx-icon-white" : ""
                }`}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  width: "100%",
                  height: "70px",
                }}
                hoverable
                onClick={(e) => changeCategory(item.id, "generalcategoryid")}
              >
                {item.itemcategoryname}
              </Card>
            </SwiperSlide>
          )
        )}
        <div ref={prevRef}>
          <SamplePrevArrow />
        </div>
        <div ref={nextRef}>
          <SampleNextArrow />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductCategoryBlock;
