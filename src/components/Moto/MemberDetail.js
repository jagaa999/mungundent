import React, { useContext, useEffect, useState } from "react";

import { Image } from "cloudinary-react";
//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
import Output from "editorjs-react-renderer";

import toBoolean from "util/booleanFunction";
import { defaultSrc } from "util/config";

import { Card, Row, Col, Typography, Tabs } from "antd";
import MotoMemberProfileTab from "./profile/About/MotoMemberProfileTab";
import MotoMemberDetailBiography from "./profile/Biography/MotoMemberDetailBiography";
import Events from "./profile/Events/index";
import MotoMemberDetailProfileContact from "./profile/Contact/MotoMemberDetailProfileContact";

import { friendList } from "routes/moto/member/data";
import { photoList } from "routes/socialApps/Wall/data";
import Friends from "./profile/Friends/index";
import Photos from "./profile/Photos/index";
import MotoMemberDetailProfileHeader from "./profile/ProfileHeader/MotoMemberDetailProfileHeader";

import MemberContext from "context/MemberContext";

const MemberDetailComponent = () => {
  const memberDetailContext = useContext(MemberContext);
  const memberContext = useContext(MemberContext);
  const myMemberDetail = memberDetailContext.memberDetail.memberDetail;

  console.log("myMemberDetail", myMemberDetail);

  if (Object.keys(myMemberDetail).length !== 0) {
    // let myMainImage = "";
    // try {
    //   myMainImage = newsItem.imagemain;
    // } catch (e) {
    //   myMainImage = "";
    // }

    myMemberDetail.imagemain =
      myMemberDetail.imagemain === ""
        ? "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
        : myMemberDetail.imagemain;

    return (
      <>
        <MotoMemberDetailProfileHeader myMemberDetail={myMemberDetail} />

        <div className="gx-profile-content">
          <Row>
            <Col xl={16} lg={14} md={14} sm={24} xs={24}>
              <MotoMemberProfileTab myMemberDetail={myMemberDetail} />
              <MotoMemberDetailBiography myMemberDetail={myMemberDetail} />
              <Events />
            </Col>

            <Col xl={8} lg={10} md={10} sm={24} xs={24}>
              {/* <MotoMemberDetailProfileContact myMemberDetail={myMemberDetail} /> */}
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
      </>
    );
  } else {
    return "";
  }
};

export default MemberDetailComponent;
