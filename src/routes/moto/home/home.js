import React, { useContext, useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Carousel,
  Button,
  Card,
  Col,
  Row,
  Space,
  Tooltip,
  Divider,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

import FilterContext from "context/FilterContext";
import NewsListType1 from "components/Moto/NewsListType1";
import NewsListType2 from "components/Moto/NewsListType2";
import NewsListType3 from "components/Moto/NewsListType3";

import GreenStepItem from "./GreenStepItem";
import HomeSponsor from "./HomeSponsor";
import HomeNewsItems from "./HomeNewsItems";
import CardBox from "components/CardBox/index";
import RoadMapItem from "./RoadMapItem";

import MemberBox from "./MemberBox";
import FacebookGadget from "./FacebookGadget";
import Horizontal from "../../components/others/Divider/Horizontal";
import { LoadProcess, loadDataview } from "util/axiosFunction";

const greenStepList = [
  {
    id: 1,
    title: "Welcome to roadmap new",
    image:
      "https://www.edrmagazine.eu/wp-content/uploads/2020/02/Mercedes-Benz-G-Class-Swede.jpg",
    subTitle: "Theory of origami",
    desc: "",
  },
  {
    id: 2,
    title: "Generate coffee to use in your graphic",
    image:
      "https://i.pinimg.com/originals/4a/e4/77/4ae4774c599d773e546e5caa02124d4b.jpg",
    subTitle: "Theory of Coffee",
    desc: "",
  },
  {
    id: 3,
    image:
      "https://cdn.motor1.com/images/mgl/zWBN0/s3/mercedes-g-class-pickup-renderings.jpg",
    title: "A single right green step",
    subTitle: "Theory of green",
    desc: "",
  },
];

const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  margin: "0 10px",
};

const NewsListPage = () => {
  const [image, setImage] = useState(greenStepList[0].image);
  const [loading, setLoading] = useState(false);

  const [newsSponsorItems, setNewsSponsorItems] = useState([]);
  const [newsItems, setNewsItems] = useState([]);

  // * axios-оор Filter-үүдийн анхны утга ERP-аас дуудна.
  const callAllDataAsync = async () => {
    setNewsSponsorItems(
      await loadDataview({
        systemmetagroupid: "1587197820548033",
        criteria: {
          isfeatured: {
            0: {
              operator: "=",
              operand: "1",
            },
          },
        },
        paging: {
          offset: "1",
          pageSize: "3",
          sortColumnNames: {
            publisheddate: {
              sortType: "DESC",
            },
          },
        },
      })
    );

    setNewsItems(
      await loadDataview({
        systemmetagroupid: "1587197820548033",
        criteria: {
          isfeatured: {
            0: {
              operator: "=",
              operand: "0",
            },
          },
        },
        paging: {
          offset: "1",
          pageSize: "10",
          sortColumnNames: {
            publisheddate: {
              sortType: "DESC",
            },
          },
        },
      })
    );
  };

  useEffect(() => {
    callAllDataAsync();
  }, []);

  return (
    <>
      <h1>Нийтлэл</h1>
      <Row className="gx-d-flex gx-mb-5">
        <Col xl={15} lg={15} md={15} sm={12} xs={24}>
          <HomeSponsor newsSponsorItems={newsSponsorItems} />
        </Col>
        <Col xl={9} lg={9} md={9} sm={12} xs={24}>
          <MemberBox />
        </Col>
      </Row>

      <Divider orientation="center" plain={true} className="gx-my-4">
        <Link to={"/news"}>Бүх нийтлэлийг үзэх</Link>
      </Divider>

      <Row className="gx-d-flex gx-mb-5">
        <Col
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="gx-bg-grey_none"
        >
          <HomeNewsItems newsItems={newsItems} />
        </Col>
      </Row>

      <Divider orientation="center" plain={true} className="gx-my-10"></Divider>

      <Row className="gx-d-flex gx-mb-5 gx-mt-10">
        <Col
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="gx-bg-grey_none"
        >
          <FacebookGadget />
        </Col>
      </Row>

      <Card className="gx-card-full gx-card-widget">
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
    </>
  );
};

export default NewsListPage;
