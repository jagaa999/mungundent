import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  firebaseAuth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from "firebase/firebase";

import axios from "../util/axiosConfig";
// import mainAxios from "axios";

const MemberContext = React.createContext();

//----------------------- Member Profile
const initialStateMemberProfile = {
  memberUID: localStorage.getItem("motoMemberUID") || 0,
  memberProfile: {},
  memberFirebaseProfile:
    JSON.parse(localStorage.getItem("motoMemberProfile")) || {},
  isLogin: localStorage.getItem("motoMemberUID") ? true : false,
  loading: false,
  error: null,
};

const myParamsMemberProfile = {
  request: {
    command: "login",
    parameters: {
      username: "admin",
      password: "89",
    },
  },
};

export const MemberProfileStore = (props) => {
  const [state, setState] = useState(initialStateMemberProfile);

  const clearMemberProfile = () => {
    localStorage.removeItem("motoMemberUID");
    localStorage.removeItem("motoMemberProfile");

    setState({
      memberUID: 0,
      memberProfile: {},
      memberFirebaseProfile: {},
      isLogin: false,
      loading: false,
      error: null,
    });
  };

  const clearError = () => {
    setState({
      ...state,
      error: null,
    });
  };

  // const setFirebaseProfile = (firebaseProfile) => {
  //   setState({ ...state, memberFirebaseProfile: firebaseProfile });
  // };

  const loadMemberProfile = (memberId) => {
    setState({ ...state, loading: true });
    axios
      .post("", myParamsMemberProfile)
      .then((response) => {
        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;
        // Хэрвээ customerid хоосон байвал хүчээр тавьчихъя. 200108101001108990
        if (myArray.userkeys[0].customerid === "") {
          myArray.customerid = "200108101001108990";
          myArray.userkeys[0].customerid = "200108101001108990";
        }
        // console.log("myArray", myArray);
        setState({
          ...state,
          memberProfile: myArray,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };

  const signinFirebase = (firebaseProvider) => {
    setState({ ...state, loading: true });

    firebaseAuth
      .signInWithPopup(firebaseProvider)
      .then((response) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = response.credential.accessToken;
        // The signed-in user info.
        const user = response.user;

        console.log("Member response ------------->>", response);

        localStorage.setItem("motoMemberUID", response.user.uid);
        localStorage.setItem(
          "motoMemberProfile",
          JSON.stringify(response.user)
        );
        localStorage.setItem(
          "motoMemberProfileProviderforDevelopment",
          JSON.stringify(response.user)
        );

        setState({
          ...state,
          memberUID: response.user.uid,
          memberFirebaseProfile: response.user,
          isLogin: true,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        setState({
          ...state,
          isLogin: false,
          loading: false,
          error: error.message,
        });
      });
  };

  return (
    <MemberContext.Provider
      value={{
        state,
        loadMemberProfile,
        signinFirebase,
        clearMemberProfile,
        clearError,
        // setFirebaseProfile,
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberContext;
