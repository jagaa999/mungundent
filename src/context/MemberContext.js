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
import toBoolean from "util/booleanFunction";
import moment from "moment";

const MemberContext = React.createContext();

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

  //  #       #######    #    ######     ######  ####### #######    #    ### #
  //  #       #     #   # #   #     #    #     # #          #      # #    #  #
  //  #       #     #  #   #  #     #    #     # #          #     #   #   #  #
  //  #       #     # #     # #     #    #     # #####      #    #     #  #  #
  //  #       #     # ####### #     #    #     # #          #    #######  #  #
  //  #       #     # #     # #     #    #     # #          #    #     #  #  #
  //  ####### ####### #     # ######     ######  #######    #    #     # ### #######

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
        const myArray = response.data.response.result[0] || [];
        console.log("MEMBER DETAIL myArray------------> ", myArray);
        // myArray.isactive = myArray.isactive === "1" ? true : false;
        myArray.imagemainFileList = [];
        myArray.imagemainFileList =
          myArray.imagemain !== undefined &&
          (myArray.imagemain !== ""
            ? [
                {
                  uid: "-1",
                  name: "Тодорхойгүй",
                  status: "done",
                  url: myArray.imagemain || "",
                  thumbUrl: myArray.imagemain || "",
                  response: { url: myArray.imagemain || "" },
                },
              ]
            : []);
        myArray.imageotherFileList = [];
        myArray.imageotherFileList =
          myArray.imageother !== undefined &&
          (myArray.imageother !== ""
            ? JSON.parse(myArray.imageother).map((item, index) => ({
                uid: index - 1,
                name: item.replace(/^.*[\\\/]/, ""),
                status: "done",
                url: item || "",
                thumbUrl: item || "",
                response: { url: item || "" },
              }))
            : []);

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

  //  #####     #    #     # #######    ######  ####### #######    #    ### #
  // #     #   # #   #     # #          #     # #          #      # #    #  #
  // #        #   #  #     # #          #     # #          #     #   #   #  #
  //  #####  #     # #     # #####      #     # #####      #    #     #  #  #
  //       # #######  #   #  #          #     # #          #    #######  #  #
  // #     # #     #   # #   #          #     # #          #    #     #  #  #
  //  #####  #     #    #    #######    ######  #######    #    #     # ### #######

  const saveMemberDetail = (values) => {
    console.log("saveMemberDetail дотор орж ирсэн values--", values);
    // const mytitle = `${moment(values.caryearmanufactured).format("YYYY")} ${
    //   values.mglfirm
    // } ${values.mglmark}`;

    const myimagemain =
      values.imagemain &&
      values.imagemain.fileList &&
      values.imagemain.fileList.length > 0
        ? values.imagemain.fileList[0].response.url
        : "";
    const myimageother =
      values.imageother &&
      values.imageother.fileList &&
      values.imageother.fileList.length > 0
        ? JSON.stringify(
            values.imageother.fileList.map((item, index) => item.response.url)
          )
        : "";

    const myParamsMemberDetail = {
      request: {
        username: state.memberUID,
        password: "89",
        command: "MOTO_MEMBER_DETAIL_DV_002",
        parameters: {
          ...values,
          id: values.id || "",
          // title: mytitle,
          isactive: toBoolean(values.isactive) ? "1" : "0",
          // mgldrivepos: toBoolean(values.mgldrivepos) ? "1" : "2",
          // caryearimport: moment(values.caryearimport).format(
          //   "YYYY-MM-DD HH:mm:ss"
          // ),
          // caryearmanufactured: moment(values.caryearmanufactured).format(
          //   "YYYY-MM-DD HH:mm:ss"
          // ),
          imagemain: myimagemain,
          imageother: myimageother,

          createdby: state.memberCloudUserSysId,
          modifiedby: state.memberCloudUserSysId,
          ownerid: state.memberCloudUserSysId,
        },
      },
    };

    console.table(myParamsMemberDetail.request.parameters);

    // return;

    axios
      .post("", myParamsMemberDetail)
      .then((response) => {
        console.log("Save MemberDetail:   ", response);

        const myData = response.data.response;
        console.log("After Save MemberDetail ------------>", myData);

        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          message.success(
            "Амжилттай шинэчилллээ. Өдрийг сайхан өнгөрүүлээрэй."
          );
          history.push({
            pathname: "/member",
          });
        }
      })
      .catch((error) => {
        message.error(error, 7);
      });
  };

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
