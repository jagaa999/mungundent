import React, { useContext, useEffect, useState } from "react";

import { Image } from "cloudinary-react";
//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.

import { Row, Col, Button, message, Descriptions } from "antd";
import MotoMemberProfileTab from "./profile/About/MotoMemberProfileTab";
import MotoMemberDetailBiography from "./profile/Biography/MotoMemberDetailBiography";
import Events from "./profile/Events/index";
import MemberProfileItems from "./profile/Events/MemberProfileItems";
import MotoMemberDetailProfileContact from "./profile/Contact/MotoMemberDetailProfileContact";
import MotoMemberDetailProfileImage from "./profile/Contact/MotoMemberDetailProfileImage";
import MotoMemberDetailProfileRef from "./profile/Contact/MotoMemberDetailProfileRef";

import MotoMemberDetailProfileHeader from "./profile/ProfileHeader/MotoMemberDetailProfileHeader";

import MemberContext from "context/MemberContext";

const MemberDetailComponent = () => {
  const memberDetailContext = useContext(MemberContext);
  const memberContext = useContext(MemberContext);
  const myMemberDetail = memberDetailContext.memberDetail.memberDetail;

  console.log("myMemberDetail", myMemberDetail);

  if (Object.keys(myMemberDetail).length !== 0) {
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

              <MemberProfileItems myMemberDetail={myMemberDetail} />
              <Events />
            </Col>

            <Col xl={8} lg={10} md={10} sm={24} xs={24}>
              <MotoMemberDetailProfileImage myMemberDetail={myMemberDetail} />
              <MotoMemberDetailProfileContact myMemberDetail={myMemberDetail} />
              <MotoMemberDetailProfileRef myMemberDetail={myMemberDetail} />
              <Row>
                <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                  {/* <Friends friendList={friendList} /> */}
                </Col>
                <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                  {/* <Photos photoList={photoList} /> */}
                </Col>
              </Row>
            </Col>
          </Row>

          {/* <Row>
            <Col col={24}>
              <Descriptions
                title="Ерөнхий"
                layout="horizontal"
                bordered
                size="small"
                column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                className="gx-mt-5"
              >
                {Object.keys(myMemberDetail).map((val, k) => {
                  if (
                    val !== "imagemainFileList" &&
                    val !== "imageotherFileList" &&
                    val !== "birthdate"
                  ) {
                    return (
                      <Descriptions.Item label={val} key={k}>
                        {myMemberDetail[val]}
                      </Descriptions.Item>
                    );
                  }
                })}
              </Descriptions>
            </Col>
          </Row> */}
        </div>
      </>
    );
  } else {
    return "";
  }
};

export default MemberDetailComponent;

// fbid: ""
// firebaseuid: ""
// googleid: ""
// id: "1599559047551"
// providerid: ""
// systemuserid: "1598935351417"
