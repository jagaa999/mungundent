import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import {
  firebaseAuth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from "firebase/firebase";

import axios from "../util/axiosConfig";
import { message } from "antd";
import moment from "moment";

const MemberContext = React.createContext();

//Moto Guest
// Firebase UID: d14BuUMTjSRnLbrFXDOXM80fNfa2
// memberCloudUserId: "1598934946965"
// memberCloudUserSysId: "1598934946963"
// displayName: "Moto Guest (Зочин)"
// email: "guest@moto.mn"
// photoURL: "https://lh3.googleusercontent.com/a-/AOh14GhRrqaweP4rM3fgr64JCbHhoVlqyWx6nZlLpdAjzkHnDQ1iYvNzDaDT-7N8rqUjjGMK22wslI8nXdeMfIqxM4jbHo-D1g4rcGIhSTWh0AGALgHoi4HV4kQkB-SY11_IcXyJ5_-8OBdaSBO9QKYUBaPW0IrQ47KgCbfR5VAOoe0LQSDpuugFNJAFkYH8vGWpoHQUvFZinesbNK2ddSuoIUnlTYlKivdiA5zkDR-mI5fW2VQNo4Eq12iWsNqNlpLeGiXgn1F7iK5HDH3tEGoTZ5mwq4LQIZbavtKwKnGiB3XKExPke6d2b-qwBjYm_RpUb8diFbJr5AJUraQgipyBA2mJSqa6CWmKiCe2mXrElSDfn80aEagJllW_7r0r14k1TS3BRHN2rjn-umTJEPQwLIWHWCSZoVurI1X8KdLTuH1C-x_Dp9I-PssIzYS4NtuqmlqlEktaTvlioaOj3d3yiDRIe8_e9v_03GPyJWHpuj9Uuf674d6o5d4eM8ASz8iQaLtPJmiLDjSDgJM0DxGk2swmf6Iqc35dPlgMQyao8RsPYvqvFQje_YuABd7cJ-33B7BcyCPSGQrFFSA5bqxee8AS9MMnvlvJcduwaCwZjYpPhY2jOYF0CdgajrsfWmOflOKg2BUCwyowa3XSlLCtF6_Yp2UKCl_MNHuQje1CTD8OQrZRCSFKR9IHxYLYNEQsx5etp5RpPslqxZMeQRoABhUPpHDq_ONQ8U4EZiKNPWyQTDfpEIvoNysUWKMmohaQuJpBJQ"

export const MemberProfileStore = (props) => {
  const history = useHistory();

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
    memberDetail: [],
    loading: false,
    error: null,
  };

  const initialStateMemberDetail = {
    loadParams: {
      systemmetagroupid: "1603162864242786",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pageSize: "1",
        offset: "1",
      },
    },
    memberDetail: [],
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initialStateMemberProfile);
  const [memberDetail, setMemberDetail] = useState(initialStateMemberDetail);

  //   #####  #       #######    #    ######
  //  #     # #       #         # #   #     #
  //  #       #       #        #   #  #     #
  //  #       #       #####   #     # ######
  //  #       #       #       ####### #   #
  //  #     # #       #       #     # #    #
  //  #####  ####### ####### #     # #     #

  const clearMemberProfile = () => {
    localStorage.removeItem("motoMemberUID");
    localStorage.removeItem("motoMemberProfile");

    setState({
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
    });

    firebaseAuth.signOut();

    history.push({
      pathname: "/home",
    });
  };

  //    ###   #######
  //   #   #  #
  //  #     # #
  //  #     # ######
  //  #     #       #
  //   #   #  #     #
  //    ###    #####

  useEffect(() => {
    //ERP Login хийгдсэн бол State-д ERP-аас ирсэн Хэрэглэгчийн мэдээллийг тавьж өгнө.
    if (state.isLogin) {
      // console.log("state", state);
      if (!isEmpty(state.memberCloudProfile)) {
        // console.log("state.memberCloudProfile", state.memberCloudProfile);
        setState({
          ...state,
          memberCloudUserSysId: state.memberCloudProfile.id,
          memberCloudUserId: state.memberCloudProfile.userkeys[0].id || 0,
          memberCloudSessionId: state.memberCloudProfile.sessionid,
        });
      }
    }
  }, [state.memberCloudProfile]);

  //    ###    #####
  //   #   #  #     #
  //  #     # #
  //  #     # ######
  //  #     # #     #
  //   #   #  #     #
  //    ###    #####

  useEffect(() => {
    // console.log("ЭНД ХЭРЭГЛЭГЧ-ИЙН islogin төлөв өөрчлөгдөж байна.");
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

  //  ####### ######  ######     #       #######  #####  ### #     #
  //  #       #     # #     #    #       #     # #     #  #  ##    #
  //  #       #     # #     #    #       #     # #        #  # #   #
  //  #####   ######  ######     #       #     # #  ####  #  #  #  #
  //  #       #   #   #          #       #     # #     #  #  #   # #
  //  #       #    #  #          #       #     # #     #  #  #    ##
  //  ####### #     # #          ####### #######  #####  ### #     #

  const loginMemberCloud = (firebaseUid) => {
    setState({ ...state, loading: true });

    const myParamsLoginMemberCloud = {
      request: {
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
        const myArray = response.data.response.result;

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

  //  ####### ######  ######      #####  ######  #######    #    ####### #######
  //  #       #     # #     #    #     # #     # #         # #      #    #
  //  #       #     # #     #    #       #     # #        #   #     #    #
  //  #####   ######  ######     #       ######  #####   #     #    #    #####
  //  #       #   #   #          #       #   #   #       #######    #    #
  //  #       #    #  #          #     # #    #  #       #     #    #    #
  //  ####### #     # #           #####  #     # ####### #     #    #    #######

  const createMemberCloudWithFirebase = () => {
    // console.log("ОДООО ҮҮСГЭХЭЭР ОРЖ ИРЭВ");
    setState({ ...state, loading: true });

    let myFacebookData = {};
    let myGoogleData = {};
    let myPhoneData = {};

    state.memberFirebaseProfile.providerData.map((item, i) => {
      console.log("item", item, i);
      if (item.providerId === "facebook.com") {
        myFacebookData = item;
      }
      if (item.providerId === "google.com") {
        myGoogleData = item;
      }
      if (item.providerId === "phone") {
        myPhoneData = item;
      }
    });

    const myParamsCreateMemberCloudWithFirebase = {
      request: {
        sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        command: "CreateCustomer",
        parameters: {
          displayName: state.memberFirebaseProfile.displayName || "Тодорхойгүй",
          givenName: state.memberFirebaseProfile.displayName || "Тодорхойгүй",
          familyName: state.memberFirebaseProfile.displayName || "Тодорхойгүй",
          email: state.memberFirebaseProfile.email,
          gender: "",
          providerId: state.memberFirebaseProfile.providerData[0].providerId,
          googleKey: myGoogleData ? myGoogleData.uid : "",
          faceBookKey: myFacebookData ? myFacebookData.uid : "",
          phoneNumber: myPhoneData ? myPhoneData.uid : "",
          profilePhoto: state.memberFirebaseProfile.photoURL,
          firebaseUid: state.memberFirebaseProfile.uid,
          departmentId: "1",
        },
      },
    };

    // console.log("ПАРАМЕТР ҮҮСГЭСНИЙ ДАРАА");
    // console.log("state.memberFirebaseProfile", state.memberFirebaseProfile);

    axios
      .post("", myParamsCreateMemberCloudWithFirebase)
      .then((response) => {
        // console.log("createMemberCloudWithFirebase response:--> ", response);
        loginMemberCloud(response.data.response.result.firebaseuid);
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log("error", error);
      });
  };

  //   #####  ####### #######    #       #######  #####     #    #
  //  #     # #          #       #       #     # #     #   # #   #
  //  #       #          #       #       #     # #        #   #  #
  //   #####  #####      #       #       #     # #       #     # #
  //        # #          #       #       #     # #       ####### #
  //  #     # #          #       #       #     # #     # #     # #
  //   #####  #######    #       ####### #######  #####  #     # #######
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

  const loadMemberDetail = (id = 0) => {
    // console.log("ЭЭЭЭЭЭЭЭЭЭ", id);

    const myParamsMemberDetail = {
      request: {
        username: state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...memberDetail.loadParams,
          criteria: {
            systemuserid: {
              0: {
                operator: "=",
                operand: id,
              },
            },
          },
        },
      },
    };

    console.log("myParamsMemberDetail", myParamsMemberDetail);
    setMemberDetail(initialStateMemberDetail);
    setMemberDetail({ ...memberDetail, loading: true });

    axios
      .post("", myParamsMemberDetail)
      .then((response) => {
        // console.log("MEMBER DETAIL RESPONSE------------> ", response);
        const myArray = response.data.response.result[0];
        // console.log("MEMBER DETAIL myArray------------> ", myArray);
        // myArray.isactive = myArray.isactive === "1" ? true : false;
        // myArray.imagemainFileList =
        //   myArray.imagemain !== ""
        //     ? [
        //         {
        //           uid: "-1",
        //           name: "Тодорхойгүй",
        //           status: "done",
        //           url: myArray.imagemain || "",
        //           thumbUrl: myArray.imagemain || "",
        //           response: { url: myArray.imagemain || "" },
        //         },
        //       ]
        //     : [];
        // myArray.imageotherFileList =
        //   myArray.imageother !== ""
        //     ? JSON.parse(myArray.imageother).map((item, index) => ({
        //         uid: index - 1,
        //         name: item.replace(/^.*[\\\/]/, ""),
        //         status: "done",
        //         url: item || "",
        //         thumbUrl: item || "",
        //         response: { url: item || "" },
        //       }))
        //     : [];

        // console.log("MEMBER DETAIL------------> ", myArray);

        setMemberDetail({
          ...memberDetail,
          loading: false,
          memberDetail: myArray,
        });
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
      });
  };

  const clearMemberDetail = () => {
    setMemberDetail(initialStateMemberDetail);
  };

  const saveMemberDetail = (values) => {};

  return (
    <MemberContext.Provider
      value={{
        state,
        memberDetail,
        // loadMemberProfile,
        loginMemberCloud,
        clearMemberProfile,
        clearError,
        setFirebaseProfile,
        isModal,
        loadMemberDetail,
        saveMemberDetail,
        clearMemberDetail,
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberContext;
