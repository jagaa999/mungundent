import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import {
  firebaseAuth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from "firebase/firebase";

import axios from "../util/axiosConfig";
import { Button, Card, Modal } from "antd";

const MemberContext = React.createContext();

//----------------------- Member Profile
const initialStateMemberProfile = {
  memberUID: localStorage.getItem("motoMemberUID") || "",
  memberCloudUserSysId: 0,
  memberCloudUserId: 0,
  memberCloudSessionId: "",
  memberCloudProfile: {},
  memberFirebaseProfile:
    JSON.parse(localStorage.getItem("motoMemberProfile")) || {},
  isLogin: localStorage.getItem("motoMemberUID") ? true : false,
  isModal: false,
  loading: false,
  error: null,
};

export const MemberProfileStore = (props) => {
  const [state, setState] = useState(initialStateMemberProfile);

  const clearMemberProfile = () => {
    localStorage.removeItem("motoMemberUID");
    localStorage.removeItem("motoMemberProfile");

    setState({
      memberUID: 0,
      memberFirebaseProfile: {},
      isLogin: false,
      loading: false,
      isModal: false,
      error: null,
    });

    firebaseAuth.signOut();
  };

  useEffect(() => {
    if (state.isLogin) {
      console.log("state", state);
      if (!isEmpty(state.memberCloudProfile)) {
        console.log("state.memberCloudProfile", state.memberCloudProfile);
        setState({
          ...state,
          memberCloudUserSysId: state.memberCloudProfile.id,
          memberCloudUserId: state.memberCloudProfile.userkeys[0].id || 0,
          memberCloudSessionId: state.memberCloudProfile.sessionid,
        });
      }
    }
  }, [state.memberCloudProfile]);

  useEffect(() => {
    console.log("ЭНД ХЭРЭГЛЭГЧ-ИЙН islogin төлөв өөрчлөгдөж байна.");
    if (state.isLogin) {
      // console.log("ЭНД ХЭРЭГЛЭГЧ FIREBASE логиндсон.");
      // console.log("Харин одоо хэрэглэгчийн мэдээллийг ERP-аас татах ёстой.");

      if (state.memberUID) {
        loginMemberCloud(state.memberUID); //Cloud-д хэрэглэгчийг login-дуулна.
      }
    }
  }, [state.isLogin]);

  const clearError = () => {
    setState({
      ...state,
      error: null,
    });
  };

  const loginMemberCloud = (firebaseUid) => {
    setState({ ...state, loading: true });
    const myParamsLoginMemberCloud = {
      request: {
        // username: "username",
        // password: "89",

        command: "login",
        parameters: {
          username: firebaseUid,
          password: "89",
        },
      },
    };

    // console.log("myParamsLoginMemberCloud", myParamsLoginMemberCloud);

    axios
      .post("", myParamsLoginMemberCloud)
      .then((response) => {
        // console.log("loginMemberCloud response:--> ", response);
        const myArray = response.data.response.result;
        // Хэрвээ customerid хоосон байвал хүчээр тавьчихъя. 200108101001108990
        // if (myArray.userkeys[0].customerid === "") {
        //   myArray.customerid = "200108101001108990";
        //   myArray.userkeys[0].customerid = "200108101001108990";
        // }

        //Одоо оршин байгаа бүх customerid-ыг userid руу шилжүүлэх шаардлагатай бололтой.
        console.log("loginMemberCloud myArray:--> ", myArray);

        if (
          response.data.response.status === "error" &&
          response.data.response.text === "User_name_or_password_wrong"
        ) {
          createMemberCloudWithFirebase();
        } else {
          setState({
            ...state,
            memberCloudProfile: response.data.response.result,
            loading: false,
          });
        }
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log("error", error);
      });
  };

  const createMemberCloudWithFirebase = () => {
    console.log("ОДООО ҮҮСГЭХЭЭР ОРЖ ИРЭВ");

    setState({ ...state, loading: true });

    let myFacebookData = {};
    let myGoogleData = {};

    state.memberFirebaseProfile.providerData.map((item, i) => {
      console.log("item", item, i);

      if (item.providerId === "facebook.com") {
        myFacebookData = item;
      }

      if (item.providerId === "google.com") {
        myGoogleData = item;
      }
    });

    const myParamsCreateMemberCloudWithFirebase = {
      request: {
        sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        command: "CreateCustomer",
        parameters: {
          displayName: state.memberFirebaseProfile.displayName,
          givenName: state.memberFirebaseProfile.displayName,
          familyName: state.memberFirebaseProfile.displayName,
          email: state.memberFirebaseProfile.email,
          gender: "",
          providerId: state.memberFirebaseProfile.providerData[0].providerId,
          googleKey: myGoogleData ? myGoogleData.uid : "",
          faceBookKey: myFacebookData ? myFacebookData.uid : "",
          phoneNumber: "",
          profilePhoto: state.memberFirebaseProfile.photoURL,
          firebaseUid: state.memberFirebaseProfile.uid,
          departmentId: "1",
        },
      },
    };

    console.log("ПАРАМЕТР ҮҮСГЭСНИЙ ДАРАА");
    console.log("state.memberFirebaseProfile", state.memberFirebaseProfile);

    axios
      .post("", myParamsCreateMemberCloudWithFirebase)
      .then((response) => {
        console.log("createMemberCloudWithFirebase response:--> ", response);

        setState({
          ...state,
          memberCloudProfile: response.data.response.result,
          loading: false,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log("error", error);
      });
  };

  const setFirebaseProfile = (user) => {
    // console.log("RAW user", user);
    localStorage.setItem("motoMemberUID", user.uid);
    localStorage.setItem("motoMemberProfile", JSON.stringify(user));
    localStorage.setItem(
      "motoMemberProfileProviderforDevelopment",
      JSON.stringify(user)
    );

    setState({
      ...state,
      memberUID: user.uid,
      memberFirebaseProfile: user,
      isLogin: true,
      loading: false,
      isModal: false,
      error: null,
    });
  };

  const isModal = (isVisible) => {
    //Member signin хийх modal цонх нээгдсэн эсэх
    // console.log("COLLLLLLLLLLLL MODAL", isVisible);
    setState({
      ...state,
      isModal: isVisible,
    });
  };

  return (
    <MemberContext.Provider
      value={{
        state,
        // loadMemberProfile,
        loginMemberCloud,
        clearMemberProfile,
        clearError,
        setFirebaseProfile,
        isModal,
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberContext;
