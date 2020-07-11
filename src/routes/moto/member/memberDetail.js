import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Col, Row } from "antd";
import About from "components/Moto/profile/About/index";
import Biography from "components/Moto/profile/Biography/index";
import Events from "components/Moto/profile/Events/index";
import Contact from "components/Moto/profile/Contact/index";

import { friendList } from "./data";
import { photoList } from "routes/socialApps/Wall/data";
import Friends from "components/Moto/profile/Friends/index";
import Photos from "components/Moto/profile/Photos/index";
import Auxiliary from "../../../util/Auxiliary";
import ProfileHeader from "components/Moto/profile/ProfileHeader/ProfileHeader";

const MemberPage = (props) => {
  //URL-аас орж ирсэн ID
  const { memberId } = useParams();

  return (
    <Auxiliary>
      <ProfileHeader />

      <div className="gx-profile-content">
        <Row>
          <Col xl={16} lg={14} md={14} sm={24} xs={24}>
            <About />
            <Biography />
            <Events />
          </Col>

          <Col xl={8} lg={10} md={10} sm={24} xs={24}>
            <Contact />
            <Row>
              <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                <Friends friendList={friendList} />
              </Col>
              <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                <Photos photoList={photoList} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Auxiliary>
  );
};

export default MemberPage;
