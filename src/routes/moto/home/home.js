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
          {/* https://medium.com/@Rayyan995/how-to-make-a-background-video-component-in-react-8725e32da272 */}
          <div className={classes.Container}>
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              className={classes.Video}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
              <div className={classes.SubContent}>
                <h1>Reactjs Course</h1>
                <p>Learn how to develope React projects</p>
                <button type="button" className="btn btn-outline-dark">
                  View the course
                </button>
                <img
                  src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt="profile"
                />
              </div>
            </div>
          </div>
          {/* <ReactPlayer
            url="https://www.youtube.com/watch?v=RVzpGKsSbOA"
            light={true}
            muted={true}
            volume={0}
            controls={false}
            loop={true}
            playing={true}
            autoPlay={1}
            width="100%"
            height="100%"
          /> */}
          dfdsg dgd gjfkds gjfskd gjfsdk gjfsdgdfsklg jdfskljg skldfgj skldfg
          jdslkfg jfklsdjg flskdjg flskdj gskdflg jldfkj gkl
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
