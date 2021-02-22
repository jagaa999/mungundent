import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";
import NewsItem2 from "./NewsItem2";
import MyIcon from "util/iconFunction";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

const HomeNewsItems3 = (props) => {
  const topButton = "100px";
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const SamplePrevArrow = (props) => {
    return (
      <div
        style={{
          position: "absolute",
          top: topButton,
          display: "block",
          lineHeight: "0",
          left: "5px",
          zIndex: "12",
        }}
      >
        <Button
          type="primary"
          shape="circle"
          icon={<MyIcon type="iconangleleft" />}
          className="gx-m-0 gx-btn-white"
        />
      </div>
    );
  };

  const SampleNextArrow = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: topButton,
          display: "block",
          lineHeight: "0",
          right: "5px",
          zIndex: "12",
        }}
      >
        <Button
          type="primary"
          shape="circle"
          icon={<MyIcon type="iconangleright" />}
          className="gx-m-0 gx-btn-white"
        />
      </div>
    );
  };

  return (
    <>
      {/* <WidgetHeader
        className="gx-flex-row gx-mt-5"
        title="Шинэ нийтлэл"
        extra={
          <Link to={"/news"}>
            Бүгдийг үзэх{" "}
            <i className="icon icon-long-arrow-right gx-fs-xxl gx-ml-1 gx-d-inline-flex gx-vertical-align-middle" />
          </Link>
        }
      /> */}

      <div className="gx-mt-5 gx-mb-4">
        <span>Шинэ нийтлэл</span>
        <Link to={"/news"}>
          <span className="gx-d-inline-flex gx-vertical-align-middle gx-fs-sm">
            <i className="icon icon-long-arrow-right gx-fs-md gx-ml-3 " />
          </span>
        </Link>
      </div>

      <div>
        <Swiper
          className="moto-filter-swiper"
          spaceBetween={13}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 17,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          centeredSlides={false}
          centeredSlidesBounds={false}
          preloadImages={false}
          // scrollbar={{
          //   draggable: true,
          //   dragSize: "auto",
          // }}
          autoplay={{
            delay: 12000,
          }}
          // pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {props.newsItems.map((item, index) => (
            <SwiperSlide style={{ height: "100%" }}>
              <NewsItem2 key={index} newsItem={item} />
            </SwiperSlide>
          ))}
          <div ref={prevRef}>
            <SamplePrevArrow />
          </div>
          <div ref={nextRef}>
            <SampleNextArrow />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default HomeNewsItems3;
