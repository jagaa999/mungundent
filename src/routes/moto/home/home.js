import React, { useContext, useRef, useState } from "react";

import { Carousel, Button, Card, Col, Row } from "antd";

import FilterContext from "context/FilterContext";
import NewsListType1 from "components/Moto/NewsListType1";
import NewsListType2 from "components/Moto/NewsListType2";
import NewsListType3 from "components/Moto/NewsListType3";

import GreenStepItem from "./GreenStepItem";
import CardBox from "components/CardBox/index";
import RoadMapItem from "./RoadMapItem";

const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const greenStepList = [
  {
    id: 1,
    title: "Welcome to roadmap new",
    image:
      "https://www.edrmagazine.eu/wp-content/uploads/2020/02/Mercedes-Benz-G-Class-Swede.jpg",
    subTitle: "Theory of origami",
    desc:
      "Mother nature want you to become a\n" +
      "              part of it and feel the love. There could\n" +
      "              be more which you can take as an\n" +
      "              initiative and collaborate in making this\n" +
      "              world a better world.",
  },
  {
    id: 2,
    title: "Generate coffee to use in your graphic",
    image:
      "https://i.pinimg.com/originals/4a/e4/77/4ae4774c599d773e546e5caa02124d4b.jpg",
    subTitle: "Theory of Coffee",
    desc:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    image:
      "https://cdn.motor1.com/images/mgl/zWBN0/s3/mercedes-g-class-pickup-renderings.jpg",
    title: "A single right green step",
    subTitle: "Theory of green",
    desc:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
  },
];

const mediaList = [
  {
    id: 1,
    postion: 0,
    image:
      "https://www.mercedes-benz.com/en/vehicles/passenger-cars/g-class/_jcr_content/root/mediagallery_1651887/parsys/mediagalleryitem/image/MQ6-0-image-20200108112835/mercedes-benz-g-class-w463-brandhub-g-world-amg-vertical-gallery-01-1280x720-01-2020.jpeg",
    image2: "https://via.placeholder.com/80X80",
    title: "Welcome to roadmap new",
    desc: "Crypto Expert",
  },
  {
    id: 2,
    postion: 0,
    image:
      "https://static1.squarespace.com/static/52db1899e4b0506918731222/5a7a41dc0d92977385658308/5b7cb9e340ec9a4b7342b7af/1534900855644/S__44769298.jpg?format=1500w",
    image2: "https://via.placeholder.com/80X80",
    title: "Welcome to roadmap",
    desc: "Crypto Expert",
  },
  {
    id: 3,
    postion: 0,
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-mercedes-benz-g550-357-1570533121.jpg?crop=0.635xw:0.777xh;0.0561xw,0.223xh&resize=640:*",
    image2: "https://via.placeholder.com/80X80",
    title: "Welcome to roadmap new",
    desc: "Crypto Expert",
  },
];

const NewsListPage = () => {
  // const newsListContext = useContext(NewsListContext);
  const filterContext = useContext(FilterContext);
  const newsSponsorSlider = useRef();
  const [image, setImage] = useState(greenStepList[0].image);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button onClick={() => newsSponsorSlider.current.prev()}>Өмнөх</Button>

      <Carousel
        arrows={true}
        autoplay={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        dots={true}
        // ref={(ref) => {
        //   console.log(ref);
        //   newsSponsorSlider.current = ref;
        // }}
        ref={newsSponsorSlider}
      >
        <div>
          <h3 style={contentStyle}>1</h3>
          {/* <img src="https://static.themoscowtimes.com/image/1360/f7/1536670415_4x4_5d_motive_3.jpg" /> */}
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Button onClick={() => newsSponsorSlider.current.next()}>Дараах</Button>

      <Card classBName="gx-card-full gx-card-widget">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={24}>
            <div className="gx-slick-slider-lt-thumb">
              <img
                className={
                  loading ? "fadeout gx-img-fluid" : "fadein gx-img-fluid"
                }
                src={image}
                alt="..."
              />
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12} xs={24}>
            <Carousel
              className="gx-slick-slider gx-slick-slider-dot-top"
              arrows={false}
              dots={true}
              infinite={true}
              speed={500}
              marginLeft={10}
              marginRight={10}
              slidesToShow={1}
              slidesToScroll={1}
              afterChange={(index) => {
                setLoading(false);
                setImage(greenStepList[index].image);
              }}
              beforeChange={(oldIndex, newIndex) => {
                setLoading(true);
              }}
            >
              {greenStepList.map((data, index) => (
                <GreenStepItem key={index} data={data} />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Card>

      <Row>
        <Col xl={14} lg={12} md={12} sm={12} xs={24}>
          <Card className="gx-widget-bg">
            <span className="gx-widget-badge">Үнэгүй</span>
            <i className="icon icon-camera gx-fs-xlxl" />

            <h1 className="gx-fs-xxxl gx-font-weight-semi-bold gx-mb-3 gx-mb-sm-4">
              1,502 гишүүн
            </h1>
            <p>ГИШҮҮН БАЙНА.</p>
            <p>
              Та ч гэсэн элсэж гишүүн болоорой. Танаас төлбөр гарахгүй, амархан.
            </p>
            <Button className="gx-mb-1 gx-btn-warning" htmlType="submit">
              Бүртгүүлэх
            </Button>
          </Card>
        </Col>
        <Col xl={10} lg={12} md={12} sm={12} xs={24}>
          <CardBox styleName="gx-card-full" heading={""}>
            <Carousel
              className="gx-slick-slider"
              arrows={false}
              dots={true}
              infinite={true}
              speed={500}
              marginLeft={10}
              marginRight={10}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {mediaList.map((media, index) => (
                <RoadMapItem key={index} data={media} />
              ))}
            </Carousel>
          </CardBox>
        </Col>
      </Row>
    </>
  );

  // if (filterContext.state.cardtype.cardtype === "typecard") {
  //   return <NewsListType2 />;
  // } else if (filterContext.state.cardtype.cardtype === "typetable") {
  //   return <NewsListType3 />;
  // } else {
  //   return <NewsListType1 />;
  // }
};

export default NewsListPage;
