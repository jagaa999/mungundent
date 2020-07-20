import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Button, Checkbox, Input, message, Form, Divider } from "antd";
import Icon from "@ant-design/icons";

import {
  firebaseAuth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
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
              <h1>Нэвтрэх</h1>
              <p>
                Moto гишүүн болсноор системийн бүх ажиллагаа танд нээлттэй
                болно.
              </p>
              <p>Бүртгүүлэхэд Үнэгүй, бас Амархан.</p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")} />
            </div>
          </div>
          <div className="gx-app-login-content">
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
            <Button
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
            </Button>

            <Divider dashed orientation="left">
              эсвэл
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
                rules={[{ required: true, message: "Зөв имэйл оруулна уу!" }]}
                name="email"
              >
                <Input placeholder="Имэйл хаяг" />
              </Form.Item>
              <Form.Item
                // initialValue="demo#123"
                initialValue=""
                rules={[{ required: true, message: "Нууц үгээ оруулна уу!" }]}
                name="password"
              >
                <Input type="password" placeholder="Нууц үг" />
              </Form.Item>

              <Form.Item>
                <Checkbox checked>
                  систем ашиглах{" "}
                  <span className="gx-signup-form-forgot gx-link">
                    нөхцөлийг
                  </span>{" "}
                  зөвшөөрч байна.
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  Нэвтрэх
                </Button>
                <span className="gx-text-light gx-fs-sm">шинэ хүн үү?</span>
                <Link to="/signup"> Мото Гишүүн болох</Link>
              </Form.Item>

              {/* <div className="gx-flex-row gx-justify-content-between">
                <span>or connect with</span>
                <ul className="gx-social-link">
                  <li>
                    <GoogleOutlined
                      onClick={() => {
                        dispatch(showAuthLoader());
                        dispatch(userGoogleSignIn());
                      }}
                    />
                  </li>
                  <li>
                    <FacebookOutlined
                      onClick={() => {
                        dispatch(showAuthLoader());
                        dispatch(userFacebookSignIn());
                      }}
                    />
                  </li>
                  <li>
                    <TwitterOutlined
                      onClick={() => {
                        dispatch(showAuthLoader());
                        dispatch(userTwitterSignIn());
                      }}
                    />
                  </li>
                </ul>
              </div> */}
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
