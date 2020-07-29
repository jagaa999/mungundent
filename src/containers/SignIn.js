import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { message, Form, Divider } from "antd";
import { firebaseAuth, StyledFirebaseAuth, uiConfig } from "firebase/firebase";
import MemberContext from "context/MemberContext";
import CircularProgress from "components/CircularProgress/index";

const SignIn = () => {
  const memberContext = useContext(MemberContext);

  const dispatch = useDispatch();
  const {
    loader,
    alertMessage,
    showMessage,
    authUser,
    userProfile,
  } = useSelector(({ auth }) => auth);

  const [form] = Form.useForm();
  const history = useHistory();

  useEffect(() => {
    if (memberContext.state.error !== null) {
      setTimeout(() => {
        memberContext.clearError();
      }, 500);
    }

    if (memberContext.state.isLogin) {
      history.push("/news");
    }
  });

  useEffect(() => {
    const unlisten = firebaseAuth.onAuthStateChanged((user) => {
      //Firebase-ээр дамжаад Member login-дсон гэсэн үг.
      //Firebase-ээс хэрэглэгчийн мэдээллүүд ирнэ.
      user && memberContext.setFirebaseProfile(user);
    });
    return () => {
      unlisten();
    };
  }, []);

  return (
    // <div className="gx-app-login-wrap">
    //   <div className="gx-app-login-container">
    <div className="gx-app-login-main-content">
      <div className="gx-app-logo-content">
        <div className="gx-app-logo-content-bg">
          <img
            src={
              "https://images.unsplash.com/photo-1529567186287-3e17bdefa342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=500&q=80"
            }
            alt="Moto Signup Wallpaper"
          />
        </div>
        <div className="gx-app-logo-wid">
          <h1>Нэвтрэх</h1>
          <p>
            Moto гишүүн болсноор системийн бүх ажиллагаа танд нээлттэй болно.
          </p>
          <p>Бүртгүүлэхэд Үнэгүй, бас Амархан.</p>
        </div>
        <div className="gx-app-logo">
          <img alt="example" src={require("assets/images/logo.png")} />
        </div>
      </div>
      <div className="gx-app-login-content">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
      </div>

      {loader ? (
        <div className="gx-loader-view">
          <CircularProgress />
        </div>
      ) : null}
      {/* {showMessage ? message.error(alertMessage.toString()) : null} */}
      {memberContext.state.error !== null
        ? message.error(memberContext.state.error.toString(), 7)
        : null}
    </div>
    //   </div>
    // </div>
  );
};

export default SignIn;
