import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { message, Spin, Avatar, Image, Divider } from "antd";
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

  return (
    <>
      <div className="gx-text-center">
        <div className="gx-mt-2 ">Сайн уу?</div>
        <div className=" gx-my-4 gx-mb-5">
          Facebook, Google-ийн аль нэгээр шууд нэвтэрч Мото сайтын гишүүн болно
          уу.
        </div>

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />

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

      <Divider className="gx-my-4" />

      <ul className="gx-fs-sm">
        <li>Бүртгүүлэхэд үнэгүй.</li>
        <li>Facebook, Google-ийн аль нэг бүртгэлээр нэвтэрнэ.</li>
      </ul>

      <div className="gx-text-grey gx-fs-sm gx-font-weight-light">
        Гишүүний бүртгэлийг юунд ашиглах вэ? Таны уншсан, харсан мэдээлэлд
        үндэсэлж, илүү зөв мэдээллийг танд харуулдаг болгоход ашиглана. Гишүүн
        болсноор Moto.mn-ийн{" "}
        <a href="/static/privacy" target="_blank">
          нууцлалын бодлого
        </a>{" "}
        ба{" "}
        <a href="/static/privacy" target="_blank">
          үйлчилгээний нөхцөлийг
        </a>{" "}
        зөвшөөрсөнд тооцно.
      </div>

      {memberContext.state.error !== null ? (
        <div className="gx-mt-3">
          message.error(memberContext.state.error.toString(), 7)
        </div>
      ) : null}
    </>
  );
};

export default SignIn;
