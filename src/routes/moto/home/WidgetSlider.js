import React, { useRef, useState, useEffect } from "react";
import { Button } from "antd";
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
import { callData } from "util/googleSheetFunction";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

const WidgetSlider = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData);
  }, [doc]);

  //!--------------------
  const topButton = "290px";
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
          left: "25px",
          zIndex: "12",
          opacity: "0.5",
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
          right: "25px",
          zIndex: "12",
          opacity: "0.5",
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

  // console.log("myData", myData);

  return (
    <>
      <div>
        <Swiper
          className="moto-filter-swiper"
          slidesPerView={1}
          centeredSlides={false}
          centeredSlidesBounds={false}
          preloadImages={true}
          effect="fade"
          loop={true}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          autoplay={{
            delay: 12000,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {myData.map((item, index) => {
            return (
              <SwiperSlide
                style={{ height: "550px", width: "auto" }}
                key={index}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    backgroundImage: `url(${item.image.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    width: "100%",
                    height: "100%",
                    ...JSON.parse(item.image.note || "{}"),
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      fontSize: "2rem",
                      fontWeight: "500",
                      textAlign: "left",
                      lineHeight: "1.3",
                      margin: "5% 0 0 5%",
                      ...JSON.parse(item.title.note || "{}"),
                    }}
                  >
                    {item.title.value}
                  </div>
                  <div
                    style={{
                      width: "40%",
                      fontSize: "1rem",
                      fontWeight: "500",
                      textAlign: "left",
                      lineHeight: "1.3",
                      margin: "3% 0 0 5%",
                      ...JSON.parse(item.desc.note || "{}"),
                    }}
                  >
                    {item.desc.value}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div style={{ bottom: "30px" }} className="swiper-pagination"></div>

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

export default WidgetSlider;
