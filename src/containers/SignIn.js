import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { message, Form, Divider } from "antd";
import { firebaseAuth, StyledFirebaseAuth, uiConfig } from "firebase/firebase";
import MemberContext from "context/MemberContext";
import CircularProgress from "components/CircularProgress/index";

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
    <div className="gx-app-login-main-content">
      <div className="gx-app-logo-content">
        <div className="gx-app-logo-wid">
          <p>
            Moto гишүүн болсноор системийн бүх ажиллагаа танд нээлттэй болно.
          </p>
          <p className="gx-font-weight-light">
            Бүртгүүлэхэд Үнэгүй, бас Амархан.
          </p>

          <p>Та өөрт байгаа бэлэн бүртгэлээ ашиглан шууд гишүүн болоорой.</p>
        </div>
        {/* <div className="gx-app-logo">
          <img alt="example" src={require("assets/images/logo.png")} />
        </div> */}
      </div>
      <div className="gx-app-login-content">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
      </div>

      {/* {showMessage ? message.error(alertMessage.toString()) : null} */}
      {memberContext.state.error !== null
        ? message.error(memberContext.state.error.toString(), 7)
        : null}
    </div>
  );
};

export default SignIn;
