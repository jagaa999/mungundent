import React, { useState, useContext, useRef } from "react";
import { Image, Row, Col, Card, Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { isMobile } from "util/config";
import { defaultSrc } from "util/config";
import ProductContext from "context/ProductContext";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.less";
// import "swiper/components/navigation/navigation.less";
// import "swiper/components/pagination/pagination.less";
// import "swiper/components/scrollbar/scrollbar.less";
// import "swiper/components/controller/controller.less";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductCategoryBlock = () => {
  const productContext = useContext(ProductContext);
  const newsOtherSlider = useRef();

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      height={50}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={`https://picsum.photos/id/5/500`} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`https://picsum.photos/id/6/500`} />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 10</SwiperSlide>
    </Swiper>
  );
};

export default ProductCategoryBlock;

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: "25px",
//         display: "block",
//         lineHeight: "0",
//         left: "-18px",
//         zIndex: "12",
//       }}
//     >
//       <Button
//         type="dashed"
//         shape="circle"
//         icon={<LeftOutlined />}
//         onClick={onClick}
//         className="gx-m-0"
//       />
//     </div>
//   );
// };

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: "25px",
//         display: "block",
//         lineHeight: "0",
//         right: "-18px",
//         zIndex: "12",
//       }}
//     >
//       <Button
//         type="dashed"
//         shape="circle"
//         icon={<RightOutlined />}
//         onClick={onClick}
//         className="gx-m-0"
//       />
//     </div>
//   );
// };

// <div className="gx-d-block gx-w-100 gx-position-relative">
//   <Slider
//     className="slider"
//     autoplay={false}
//     infinite={false}
//     speed={250}
//     centerMode={false}
//     slidesToShow={5}
//     slidesToScroll={1}
//     initialSlide={0}
//     swipeToSlide={true}
//     dots={false}
//     rows={1}
//     // variableWidth={true}
//     nextArrow={<SampleNextArrow />}
//     prevArrow={<SamplePrevArrow />}
//     className="moto-kpi-filter-category"
//     responsive={[
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//     ]}
//   >
//     {[
//       ...productContext.productCategoryList.productCategoryList,
//       ...productContext.productCategoryList.productCategoryList,
//       ...productContext.productCategoryList.productCategoryList,
//       ...productContext.productCategoryList.productCategoryList,
//       ...productContext.productCategoryList.productCategoryList,
//       ...productContext.productCategoryList.productCategoryList,
//     ].map((item, index) => (
//       // <Card
//       //   key={index}
//       //   value={item.id}
//       //   bodyStyle={{ padding: "10px", height: "80px" }}
//       // >
//       //   <div
//       //     style={{
//       //       alignItems: "center",
//       //       display: "inline-flex",
//       //       height: "100%",
//       //       textAlign: "center",
//       //       // width: "100%",
//       //     }}
//       //   >
//       //     {item.itemcategoryname}
//       //   </div>
//       // </Card>
//       <div className="gx-bg-success gx-border-warning gx-mr-2">
//         {item.itemcategoryname}
//       </div>
//     ))}
//   </Slider>
// </div>
