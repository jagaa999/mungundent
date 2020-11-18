import React, { useRef, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Carousel, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import WidgetHeader from "components/WidgetHeader/index";
import NewsItem2 from "./NewsItem2";

import { LoadProcess, loadDataview } from "util/axiosFunction";

const HomeNewsItems2 = (props) => {
  // const [newsItems, setNewsItems] = useState([]);
  const newsOtherSlider = useRef();

  return (
    <>
      <WidgetHeader
        styleName="gx-flex-row gx-mt-5"
        title="Авто нийтлэлүүд"
        extra={
          <Link to={"/news"}>
            Бүгдийг үзэх{" "}
            <i className="icon icon-long-arrow-right gx-fs-xxl gx-ml-1 gx-d-inline-flex gx-vertical-align-middle" />
          </Link>
        }
      />
      <Carousel
        autoplay={false}
        infinite={false}
        speed={250}
        slidesToShow={4}
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
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ]}
        className="moto-home-slider"
      >
        {props.newsItems.map((newsItem, index) => (
          <NewsItem2 key={index} newsItem={newsItem} />
        ))}
      </Carousel>

      {/* <div className="gx-d-none gx-d-sm-block "> */}
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

export default HomeNewsItems2;
