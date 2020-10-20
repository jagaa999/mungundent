import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Col, Row } from "antd";
import MotoMemberProfileTab from "components/Moto/profile/About/MotoMemberProfileTab";
import MotoMemberDetailBiography from "components/Moto/profile/Biography/MotoMemberDetailBiography";
import Events from "components/Moto/profile/Events/index";
import MotoMemberDetailProfileContact from "components/Moto/profile/Contact/MotoMemberDetailProfileContact";

import { friendList } from "./data";
import { photoList } from "routes/socialApps/Wall/data";
import Friends from "components/Moto/profile/Friends/index";
import Photos from "components/Moto/profile/Photos/index";
import MotoMemberDetailProfileHeader from "components/Moto/profile/ProfileHeader/MotoMemberDetailProfileHeader";

import MemberContext from "context/MemberContext";

const MemberDetailPage = (props) => {
  //URL-аас орж ирсэн ID
  const { memberId = 0 } = useParams(); //URL-аас орж ирсэн ID буюу Нийтлэлийн ID
  const memberDetailContext = useContext(MemberContext);
  const memberContext = useContext(MemberContext);
  const myMemberDetail = memberDetailContext.memberDetail.memberDetail;

  useEffect(() => {
    if (memberId !== 0 && memberContext.state.memberCloudUserSysId !== 0) {
      console.log("Member байгаа юм байна.", memberId);
      memberDetailContext.loadMemberDetail(memberId);
    } else {
      console.log("Хоосон объект");
      memberDetailContext.clearMemberDetail();
    }
  }, [memberId, memberContext.state.memberCloudUserSysId]);

  console.log("myMemberDetailmyMemberDetail");
  console.table(myMemberDetail);

  return (
    <>
      <MotoMemberDetailProfileHeader myMemberDetail={myMemberDetail} />

      <div className="gx-profile-content">
        <Row>
          <Col xl={16} lg={14} md={14} sm={24} xs={24}>
            <MotoMemberProfileTab myMemberDetail={myMemberDetail} />
            <MotoMemberDetailBiography myMemberDetail={myMemberDetail} />
            {/* <Events /> */}
          </Col>

          <Col xl={8} lg={10} md={10} sm={24} xs={24}>
            <MotoMemberDetailProfileContact myMemberDetail={myMemberDetail} />
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
};

export default MemberDetailPage;
