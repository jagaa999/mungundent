import React, { useRef, useEffect, useContext, useState } from "react";

import { Carousel, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import CarCatalogImagesSliderItem from "./CarCatalogImagesSliderItem";

import { LoadProcess, loadDataview } from "util/axiosFunction";

const HomeNewsItems = ({ images }) => {
  // const [newsItems, setNewsItems] = useState([]);
  const newsOtherSlider = useRef();
  console.log(images);

  return (
    <>
      <Carousel
        autoplay={false}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
        dots={false}
        arrows={false}
        ref={newsOtherSlider}
        style={{
          marginLeft: "-10px",
          marginRight: "-10px",
          marginBottom: "13px",
        }}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
        className="moto-home-slider"
      >
        {images.map((image, index) => (
          <CarCatalogImagesSliderItem key={index} image={image} />
        ))}
      </Carousel>

      <div className="gx-d-none gx-d-sm-block">
        <Button
          type="dashed"
          shape="circle"
          icon={<LeftOutlined />}
          onClick={() => newsOtherSlider.current.prev()}
        />

        <Button
          type="dashed"
          shape="circle"
          icon={<RightOutlined />}
          onClick={() => newsOtherSlider.current.next()}
          className="gx-float-right"
        />
      </div>
    </>
  );
};

export default HomeNewsItems;
