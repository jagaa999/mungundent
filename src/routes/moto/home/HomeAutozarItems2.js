import React, { useRef, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import WidgetHeader from "components/WidgetHeader/index";
import AutozarItem2 from "./AutozarItem2";
import { isMobile } from "util/config";

const HomeAutozarItems2 = (props) => {
  const newsOtherSlider = useRef();

  return (
    <>
      <WidgetHeader
        styleName="gx-flex-row gx-mt-5"
        title="Сүүлд нэмэгдсэн автозар"
        extra={
          <Link to={"/autozar"}>
            Бүгдийг үзэх{" "}
            <i className="icon icon-long-arrow-right gx-fs-xxl gx-ml-1 gx-d-inline-flex gx-vertical-align-middle" />
          </Link>
        }
      />
      <Carousel
        autoplay={false}
        infinite={true}
        speed={250}
        centerMode={isMobile()}
        slidesToShow={5}
        slidesToScroll={1}
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
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        className="moto-home-slider"
      >
        {props.autozarItems.map((autozarItem, index) => (
          <AutozarItem2 key={index} autozarItem={autozarItem} />
        ))}
      </Carousel>

      <div className=" gx-d-sm-block moto-homecarousel-news-button">
        <Button
          type="primary"
          shape="circle"
          size="large"
          style={{ marginLeft: "-20px" }}
          icon={<LeftOutlined />}
          onClick={() => newsOtherSlider.current.prev()}
        />

        <Button
          type="primary"
          shape="circle"
          size="large"
          style={{ marginRight: "-20px" }}
          icon={<RightOutlined />}
          onClick={() => newsOtherSlider.current.next()}
          className="gx-float-right"
        />
      </div>
    </>
  );
};

export default HomeAutozarItems2;
