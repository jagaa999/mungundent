import React, { useState, useEffect } from "react";

import { Col, Row, Divider } from "antd";

// import GreenStepItem from "./GreenStepItem";
// import HomeSponsor from "./HomeSponsor";
// import HomeNewsItems from "./HomeNewsItems";
import HomeNewsItems2 from "./HomeNewsItems2";
import HomeAuctionItems2 from "./HomeAuctionItems2";
import HomeAutozarItems2 from "./HomeAutozarItems2";

import MemberBox from "./MemberBox";
// import FacebookGadget from "./FacebookGadget";
import HomeBanner from "../../../components/Banner/HomeBanner";
import { loadDataview, loadDVObject } from "util/axiosFunction";
// import classes from "./BackgroundVideo.module.css";
// import Vimeo from "@u-wave/react-vimeo";

const HomePage = () => {
  const [newsSponsorItems, setNewsSponsorItems] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [newMembers, setNewMembers] = useState({});
  const [auctionItems, setAuctionItems] = useState([]);
  const [autozarItems, setAutozarItems] = useState([]);

  // * axios-оор Filter-үүдийн анхны утга ERP-аас дуудна.
  const callAllDataAsync = async () => {
    // setNewsSponsorItems(
    //   await loadDataview({
    //     systemmetagroupid: "1587197820548033",
    //     criteria: {
    //       isfeatured: {
    //         0: {
    //           operator: "=",
    //           operand: "1",
    //         },
    //       },
    //     },
    //     paging: {
    //       offset: "1",
    //       pageSize: "3",
    //       sortColumnNames: {
    //         publisheddate: {
    //           sortType: "DESC",
    //         },
    //       },
    //     },
    //   })
    // );

    setNewsItems(
      await loadDataview({
        systemmetagroupid: "1587197820548033", //news
        criteria: {
          // isfeatured: {
          //   0: {
          //     operator: "=",
          //     operand: "0",
          //   },
          // },
        },
        paging: {
          offset: "1",
          pageSize: "7",
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
        systemmetagroupid: "1598934954642", //member
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

    setAuctionItems(
      await loadDataview({
        systemmetagroupid: "1588323654372494", //member
        criteria: { tablename: "Auction", actionname: "Үзэв" },
        paging: {
          offset: "1",
          pageSize: "7",
          sortColumnNames: {
            actiondate: {
              sortType: "DESC",
            },
          },
        },
      })
    );

    setAutozarItems(
      await loadDataview({
        systemmetagroupid: "1605592797379",
        criteria: {
          isactive: {
            0: {
              operator: "=",
              operand: "1", // зөвхөн идэвхтэйг харуулна
            },
          },
        },
        paging: {
          offset: "1",
          pageSize: "7",
          sortColumnNames: {
            modifieddate: {
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
      {/* <Row className="gx-d-flex">
        <Col
          xl={{ span: 15, offset: 0 }}
          lg={{ span: 15, offset: 0 }}
          md={{ span: 15, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          xs={{ span: 20, offset: 2 }}
          className="gx-mb-3"
        >
          <HomeSponsor newsSponsorItems={newsSponsorItems} />
        </Col>
        <Col xl={9} lg={9} md={9} sm={12} xs={24} className="gx-mb-3">
          <MemberBox newMembers={newMembers} />
        </Col>
      </Row> */}
      <Row className="gx-d-flex">
        <Col
          md={{ span: 18, offset: 3 }}
          sm={{ span: 20, offset: 2 }}
          xs={{ span: 22, offset: 1 }}
        >
          <MemberBox newMembers={newMembers} />
        </Col>
      </Row>
      <Divider className="gx-my-3" />
      <Row className="gx-d-flex gx-mt-5">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 12, offset: 6 }}
        >
          <HomeBanner />
        </Col>
      </Row>
      <Row className="gx-d-flex gx-mt-5">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 24, offset: 0 }}
          className="gx-bg-grey_none"
        >
          <HomeNewsItems2 newsItems={newsItems} />
          {/* <HomeNewsItems newsItems={newsItems} /> */}
        </Col>
      </Row>
      {/* <Divider className="gx-my-3" /> */}
      <Row className="gx-d-flex gx-mt-4">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 24, offset: 0 }}
          className="gx-bg-grey_none"
        >
          <HomeAuctionItems2 auctionItems={auctionItems} />
        </Col>
      </Row>

      <Row className="gx-d-flex gx-mt-4">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 24, offset: 0 }}
          className="gx-bg-grey_none"
        >
          <HomeAutozarItems2 autozarItems={autozarItems} />
        </Col>
      </Row>

      <Divider orientation="center" plain={true} className="gx-my-5" />

      {/* <Row className="gx-d-flex  gx-d-none gx-d-sm-block">
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
      </Row> */}
    </>
  );
};

export default HomePage;
