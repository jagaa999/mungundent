import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { isEmpty } from "lodash";
import { firebaseAuth } from "firebase/firebase";

import myAxiosZ from "../util/myAxiosZ";
import { message, Modal } from "antd";
import MyIcon from "util/iconFunction";
import PleaseLogin from "components/Moto/Member/PleaseLogin";
import SignIn from "containers/SignIn";

const MemberContext = React.createContext();

export const MemberProfileStore = (props) => {
  const history = useHistory();

  const initialStateMemberProfile = {
    memberUID:
      localStorage.getItem("motoMemberUID") || "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
    memberCloudUserSysId: "1598934946963", //Moto Guest
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
    //ERP Login ???????????????? ?????? State-?? ERP-?????? ?????????? ???????????????????????? ???????????????????? ?????????? ????????.
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
    // console.log("?????? ??????????????????-?????? islogin ?????????? ???????????????????? ??????????.");
    if (state.isLogin) {
      // console.log("?????? ?????????????????? FIREBASE ??????????????????.");
      // console.log("?????????? ???????? ???????????????????????? ???????????????????? ERP-?????? ?????????? ??????????.");
      /*
      if (state.memberUID) {
        loginMemberCloud(state.memberUID); //Cloud-?? ???????????????????????? login-????????????.
      }
      */
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

  /*
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

    myAxiosZ(myParamsLoginMemberCloud)
      .then((myData) => {
        // console.log(myData);
        if (
          myData.response.status === "error" &&
          myData.response.text === "User_name_or_password_wrong"
        ) {
          createMemberCloudWithFirebase();
        } else {
          setState({
            ...state,
            memberCloudProfile: myData.response.result,
            loading: false,
          });
          loadMemberDetail(myData.response.result.id);
        }
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };
  */

  //  ####### ######  ######      #####  ######  #######    #    ####### #######
  //  #       #     # #     #    #     # #     # #         # #      #    #
  //  #       #     # #     #    #       #     # #        #   #     #    #
  //  #####   ######  ######     #       ######  #####   #     #    #    #####
  //  #       #   #   #          #       #   #   #       #######    #    #
  //  #       #    #  #          #     # #    #  #       #     #    #    #
  //  ####### #     # #           #####  #     # ####### #     #    #    #######

  /*
  const createMemberCloudWithFirebase = () => {
    // console.log("?????????? ?????????????????? ?????? ????????");
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
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
        password: "89",
        command: "CreateCustomer",
        parameters: {
          displayName: state.memberFirebaseProfile.displayName || "??????????????????????",
          givenName: state.memberFirebaseProfile.displayName || "??????????????????????",
          familyName: state.memberFirebaseProfile.displayName || "??????????????????????",
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

    // console.log("???????????????? ?????????????????? ??????????");
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
  */

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
    //Member signin ???????? modal ???????? ???????????????? ????????
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

  /*
  const loadMemberDetail = (id = 0) => {
    // console.log("????????????????????", id);

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

    // console.log("myParamsMemberDetail", myParamsMemberDetail);
    setMemberDetail(initialStateMemberDetail);
    setMemberDetail({ ...memberDetail, loading: true });

    axios
      .post("", myParamsMemberDetail)
      .then((response) => {
        // console.log("MEMBER DETAIL RESPONSE------------> ", response);
        const myArray = response.data.response.result[0] || [];
        // console.log("MEMBER DETAIL myArray------------> ", myArray);
        // myArray.isactive = myArray.isactive === "1" ? true : false;
        myArray.birthdate = moment(myArray.birthdate);
        myArray.imagemainFileList = [];
        myArray.imagemainFileList =
          myArray.imagemain !== undefined &&
          (myArray.imagemain !== ""
            ? [
                {
                  uid: "-1",
                  name: "??????????????????????",
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
  */

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

  /*
  const saveMemberDetail = (values) => {
    console.log("saveMemberDetail ?????????? ?????? ?????????? values--", values);
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
          systemuserid: values.systemuserid || state.memberCloudUserSysId,
          // title: mytitle,
          isactive: toBoolean(values.isactive) ? "1" : "0",
          // mgldrivepos: toBoolean(values.mgldrivepos) ? "1" : "2",
          birthdate: moment(values.birthdate).format("YYYY-MM-DD HH:mm:ss"),
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
            "?????????????????? ??????????????????????. ???????????? ???????????? ??????????????????????????."
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
  */

  //  ###  #####  #     # ####### #     # ######  ####### ######
  //   #  #     # ##   ## #       ##   ## #     # #       #
  //   #  #       # # # # #       # # # # #     # #       #
  //   #   #####  #  #  # #####   #  #  # ######  #####   ######
  //   #        # #     # #       #     # #     # #       #   #
  //   #  #     # #     # #       #     # #     # #       #    #
  //  ###  #####  #     # ####### #     # ######  ####### #     #
  const isMember = () => {
    //Member Login-?????? ?????????? ????????
    //?????????????? ?????? login ???????? ????????????????.
    // console.log("COLLLLLLLLLLLL MODAL", isVisible);
    if (!state.isLogin) {
      //guest
      isModal(true);
      return false;
    } else {
      return true; //member login
    }
  };

  //  ####### #     # #       #     #
  //  #     # ##    # #        #   #
  //  #     # # #   # #         # #
  //  #     # #  #  # #          #
  //  #     # #   # # #          #
  //  #     # #    ## #          #
  //  ####### #     # #######    #
  const OnlyMember = (props) => {
    if (!state.isLogin) {
      return <PleaseLogin />;
    } else {
      return props.children;
    }
  };

  //  #     # ####### ######     #    #
  //  ##   ## #     # #     #   # #   #
  //  # # # # #     # #     #  #   #  #
  //  #  #  # #     # #     # #     # #
  //  #     # #     # #     # ####### #
  //  #     # #     # #     # #     # #
  //  #     # ####### ######  #     # #######
  const SiginModal = (props) => {
    return (
      <Modal
        visible={state.isModal}
        onOk={(e) => {
          isModal(false);
        }}
        onCancel={(e) => {
          isModal(false);
        }}
        footer={null}
        header={null}
        z-index="5000"
        closeIcon={<MyIcon type="icontimes-solid" className="moto-icon-1-5" />}
        bodyStyle={{ background: "#F0F0F0", borderRadius: "6px" }}
      >
        <SignIn />
      </Modal>
    );
  };

  return (
    <MemberContext.Provider
      value={{
        state,
        memberDetail,
        // loginMemberCloud,
        clearMemberProfile,
        clearError,
        setFirebaseProfile,
        isModal,
        // loadMemberDetail,
        // saveMemberDetail,
        clearMemberDetail,
        isMember,
        OnlyMember,
      }}
      displayName="MemberStore"
    >
      {props.children}
      <SiginModal />
    </MemberContext.Provider>
  );
};

export default MemberContext;
