import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Carousel, Card, Col, Row, Divider } from "antd";

import GreenStepItem from "./GreenStepItem";
import HomeSponsor from "./HomeSponsor";
import HomeNewsItems from "./HomeNewsItems";

import MemberBox from "./MemberBox";
import FacebookGadget from "./FacebookGadget";
import { LoadProcess, loadDataview, loadDVObject } from "util/axiosFunction";
import classes from "./BackgroundVideo.module.css";
import Vimeo from "@u-wave/react-vimeo";

const HomePage = () => {
  const [newsSponsorItems, setNewsSponsorItems] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [newMembers, setNewMembers] = useState({});

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

    setNewMembers(
      await loadDVObject({
        systemmetagroupid: "1598934954642",
        criteria: {},
        paging: {
          offset: "1",
          pageSize: "9",
          sortColumnNames: {
            createddate: {
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

  const videoSource = "https://www.w3schools.com/tags/movie.mp4";

  return (
    <>
      <h1>Нийтлэл</h1>
      <Row className="gx-d-flex gx-mb-5">
        <Col xl={15} lg={15} md={15} sm={12} xs={24} className="gx-mb-3">
          <HomeSponsor newsSponsorItems={newsSponsorItems} />
        </Col>
        <Col xl={9} lg={9} md={9} sm={12} xs={24} className="gx-mb-3">
          <MemberBox newMembers={newMembers} />
        </Col>
      </Row>

      <Row className="gx-d-flex gx-mb-5">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 12, offset: 6 }}
        >
          {/* <HomeBanner /> */}
          {/* https://www.npmjs.com/package/react-vimeo-embed */}
          <Vimeo
            video="374644920"
            // video="461834246"
            autoplay={true}
            muted={true}
            background={true}
            width="100%"
            height="auto"
            loop={true}
            showByline={true}
            controls={false}
            responsive={true}
          />
          <div className="gx-mt-2 gx-w-100 gx-text-center">
            <span className="gx-mr-2">Kia K5</span>
            <a
              href="https://www.facebook.com/kiamotorsmongolia/"
              target="_blank"
            >
              <i className="icon icon-long-arrow-right gx-fs-xxl gx-ml-1 gx-d-inline-flex gx-vertical-align-middle" />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="gx-d-flex gx-mb-5">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 24, offset: 0 }}
          className="gx-bg-grey_none"
        >
          <HomeNewsItems newsItems={newsItems} />
        </Col>
      </Row>

      <Divider orientation="center" plain={true} className="gx-my-5"></Divider>

      <Row className="gx-d-flex ">
        <Col
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="gx-bg-grey_none"
        >
          <h3>Facebook дэх манай пэйжийг дагаарай.</h3>
          <FacebookGadget />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
