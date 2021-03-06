import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Button, Checkbox, Input, message, Form, Divider } from "antd";
import Icon from "@ant-design/icons";

import {
  firebaseAuth,
  phoneAuthProvider,
  facebookAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
  emailAuthProvider,
  StyledFirebaseAuth,
  uiConfig,
} from "firebase/firebase";

import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn,
} from "appRedux/actions/Auth";

import MemberContext from "context/MemberContext";

import IntlMessages from "util/IntlMessages";
import CircularProgress from "components/CircularProgress/index";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";

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

  console.log("signin --------", memberContext.state);

  useEffect(() => {
    // if (showMessage) {
    //   setTimeout(() => {
    //     dispatch(hideMessage());
    //   }, 500);
    // }

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
    // this.unregisterAuthObserver = firebaseAuth.onAuthStateChanged((user) => {

    firebaseAuth.onAuthStateChanged((user) => {
      // this.setState({ isSignedIn: !!user })
      console.log("user---------", user);
      !!user && memberContext.setFirebaseProfile(user);
    });
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       dispatch(showAuthLoader());
  //       dispatch(userSignIn(values));
  //     }
  //   });
  // };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    console.log("finish", values);
    dispatch(showAuthLoader());
    dispatch(userSignIn(values));
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
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
              <h1>??????????????</h1>
              <p>
                Moto ???????????? ???????????????? ?????????????????? ?????? ?????????????????? ???????? ????????????????
                ??????????.
              </p>
              <p>???????????????????????? ????????????, ?????? ??????????????.</p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")} />
            </div>
          </div>
          <div className="gx-app-login-content">
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebaseAuth}
            />
            <Divider dashed orientation="left">
              ??????????
            </Divider>
            {/* <Button
              style={{ backgroundColor: "#aa1111", color: "#fff" }}
              icon={<PhoneOutlined />}
              size="large"
              block
              onClick={() => {
                memberContext.signinFirebase(phoneAuthProvider);
              }}
            >
              ????????
            </Button> */}
            <Button
              style={{ backgroundColor: "#3b5998", color: "#fff" }}
              // type="primary"
              icon={<FacebookOutlined />}
              size="large"
              block
              onClick={() => {
                memberContext.signinFirebase(facebookAuthProvider);
              }}
            >
              Facebook
            </Button>
            <Button
              style={{ backgroundColor: "#dd4b39", color: "#fff" }}
              // type="primary"
              icon={<GoogleOutlined />}
              size="large"
              block
              onClick={() => {
                memberContext.signinFirebase(googleAuthProvider);
              }}
            >
              Google
            </Button>
            {/* <Button
              style={{ backgroundColor: "#2795e9", color: "#fff" }}
              // type="primary"
              icon={<TwitterOutlined />}
              size="large"
              block
              onClick={() => {
                memberContext.signinFirebase(twitterAuthProvider);
              }}
            >
              Twitter
            </Button> */}

            <Divider dashed orientation="left">
              ??????????
            </Divider>

            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0"
            >
              <Form.Item
                // initialValue="demo@example.com"
                initialValue=""
                rules={[{ required: true, message: "?????? ?????????? ?????????????? ????!" }]}
                name="email"
              >
                <Input placeholder="?????????? ????????" />
              </Form.Item>
              <Form.Item
                // initialValue="demo#123"
                initialValue=""
                rules={[{ required: true, message: "???????? ???????? ?????????????? ????!" }]}
                name="password"
              >
                <Input type="password" placeholder="???????? ????" />
              </Form.Item>

              <Form.Item>
                <Checkbox checked>
                  ???????????? ??????????????{" "}
                  <span className="gx-signup-form-forgot gx-link">
                    ??????????????????
                  </span>{" "}
                  ???????????????? ??????????.
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  ??????????????
                </Button>
                <span className="gx-text-light gx-fs-sm">???????? ?????? ?????</span>
                <Link to="/signup"> ???????? ???????????? ??????????</Link>
              </Form.Item>
            </Form>
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
      </div>
    </div>
  );
};

export default SignIn;
