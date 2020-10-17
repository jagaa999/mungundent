import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Carousel, Card, Col, Row, Divider } from "antd";

import GreenStepItem from "./GreenStepItem";
import HomeSponsor from "./HomeSponsor";
import HomeNewsItems from "./HomeNewsItems";

import MemberBox from "./MemberBox";
import FacebookGadget from "./FacebookGadget";
import { LoadProcess, loadDataview, loadDVObject } from "util/axiosFunction";

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

      {/* <Divider orientation="center" plain={true} className="gx-my-4">
        <Link to={"/news"}>Бүх нийтлэлийг үзэх</Link>
      </Divider> */}

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
