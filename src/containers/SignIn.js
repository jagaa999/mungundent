import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { message, Spin, Row, Col, Card, Avatar, Image } from "antd";
import { firebaseAuth, StyledFirebaseAuth, uiConfig } from "firebase/firebase";
import MemberContext from "context/MemberContext";

const SignIn = () => {
  const memberContext = useContext(MemberContext);

  const history = useHistory();

  useEffect(() => {
    if (memberContext.state.error !== null) {
      setTimeout(() => {
        memberContext.clearError();
      }, 500);
    }

    if (memberContext.state.isLogin) {
      history.push("/home");
    }
  });

  useEffect(() => {
    const unlisten = firebaseAuth.onAuthStateChanged((user) => {
      //Firebase-ээр дамжаад Member login-дсон гэсэн үг.
      //Firebase-ээс хэрэглэгчийн мэдээллүүд ирнэ.
      console.log("firebaseAuth.onAuthStateChanged-- ", user);

      user && memberContext.setFirebaseProfile(user);
    });
    return () => {
      unlisten();
    };
  }, []);

  // useEffect(() => {
  //   uiConfig.uiShown == true &&
  //     console.log(
  //       "ХААААААААААААААААААААААААРРРРРРРРРРРРРРРРРРРРРРРРРРААААААААААААААААААА"
  //     );
  // }, [uiConfig.uiShown]);

  // console.log("uiConfig.uiShownuiConfig.uiShown", uiConfig.uiShown);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${"https://i.pinimg.com/originals/fc/32/b4/fc32b40e6b1fe09baf6fbef825f61173.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          padding: "10% 5%",
        }}
      >
        <Row align="middle">
          <Col xl={10} md={12} sm={15} xs={19}>
            <div
              className="gx-text-center "
              style={{
                background: "#414A4C",
                padding: "20px 10px",
                borderRadius: "10px",
              }}
            >
              <Avatar
                size="large"
                className="gx-mt-3"
                src="https://www.claremontlincoln.edu/engage/wp-content/uploads/2016/11/default_avatar-2x-150x150.png"
              />
              <div className="gx-mt-2 gx-text-white">Сайн уу, зочин?</div>
              <div className="gx-text-white gx-my-4">
                Facebook, Google-ийн
                <br />
                аль нэгээр шууд нэвтэрч
                <br />
                Мото сайтын гишүүн болохыг урьж байна.
              </div>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebaseAuth}
              />
              <div
                id="myUIloader"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin tip="Нэвтрэх цонх дуудаж байна..." />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Row className="gx-mt-4">
        <Col span={24}>
          <ul>
            <li>
              Moto гишүүн болсноор системийн бүх ажиллагаа танд нээлттэй болно.
            </li>
            <li className="gx-text-success">
              Бүртгүүлэхэд үнэгүй, шууд нэвтэрнэ.
            </li>
            <li>
              Facebook, Google-ийн аль нэг бүртгэлээрээ шууд гишүүн болоорой.
            </li>
          </ul>

          <div className="gx-text-grey gx-fs-sm gx-mx-3 gx-mb-3 gx-font-weight-light">
            Таны Facebook бүртгэлээс зөвхөн таны нэр байхад л хангалттай. Тэгвэл
            энэ бүртгэлийг юунд ашиглах вэ? Таны уншсан, харсан мэдээлэлд
            үндэсэлж, илүү зөв мэдээллийг зөвхөн танд автоматаар харуулдаг
            болгоход ашиглах юм.
          </div>
        </Col>
      </Row>

      <div className="gx-mt-3">
        {memberContext.state.error !== null
          ? message.error(memberContext.state.error.toString(), 7)
          : null}
      </div>
    </>
  );
};

export default SignIn;
