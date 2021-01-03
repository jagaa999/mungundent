import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import toBoolean from "util/booleanFunction";
import axios, { ecomZ, decomZ } from "util/axiosConfig";
import myAxiosZ from "../util/myAxiosZ";
import MemberContext from "context/MemberContext";

const NewsDetailContext = React.createContext();

export const NewsDetailStore = (props) => {
  const memberContext = useContext(MemberContext);
  const history = useHistory();

  const initialStateNewsDetail = {
    newsDetail: {},
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initialStateNewsDetail);

  const clearNewsDetail = () => {
    setState(initialStateNewsDetail);
  };

  const getError = (error) => {
    setState({ ...state, loading: false, error });
    message.error(error.toString(), 7);
    console.log("error", error);
  };

  const toggleIsFeatured = () => {
    const myProcessParams = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoNewsDV_SPONSOR_002",
        parameters: {
          id: state.newsDetail.newsid,
          isfeatured: !toBoolean(state.newsDetail.isfeatured) ? "1" : "0",
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
          tablename: "ECM_NEWS",
          recordid: state.newsDetail.newsid,
        },
      },
    };
    console.log("myProcessParams", myProcessParams);

    axios
      .post("", myProcessParams)
      .then((response) => {
        setState({
          ...state,
          newsDetail: {
            ...state.newsDetail,
            isfeatured: toBoolean(response.data.response.result.isfeatured),
          },
        });
        message.success("Амжилттай өөрчиллөө. Өдрийг сайхан өнгөрүүлээрэй.");
      })
      .catch((error) => {
        getError(error);
      });
  };

  const toggleIsActive = () => {
    const myProcessParams = {
      request: {
        sessionid: memberContext.state.memberCloudSessionId,
        command: "motoNewsDV_ACTIVE_002",
        parameters: {
          id: state.newsDetail.newsid,
          isactive: !toBoolean(state.newsDetail.isactive) ? "1" : "0",
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
          tablename: "ECM_NEWS",
          recordid: state.newsDetail.newsid,
        },
      },
    };

    axios
      .post("", myProcessParams)
      .then((response) => {
        // console.log("ИРСЭН ДАТА444:   ", response);
        // const myResult = response.data.response;
        // console.log("axiosFunction Process myResult ------------>", myResult);

        setState({
          ...state,
          newsDetail: {
            ...state.newsDetail,
            isactive: toBoolean(response.data.response.result.isactive),
          },
        });
        message.success("Амжилттай өөрчиллөө. Өдрийг сайхан өнгөрүүлээрэй.");
      })
      .catch((error) => {
        getError(error);
      });
  };

  const upPublishedDate = () => {
    const myProcessParams = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoNewsDV_PUBLISHEDDATE_002",
        parameters: {
          id: state.newsDetail.newsid,
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
          tablename: "ECM_NEWS",
          recordid: state.newsDetail.newsid,
        },
      },
    };
    // console.log("myProcessParams", myProcessParams);

    axios
      .post("", myProcessParams)
      .then((response) => {
        console.log("ERP-аас ирсэн response ------------>", response);
        const myResult = response.data.response;
        // console.log("ERP-аас ирсэн response.data.response ------------>", myResult);

        setState({
          ...state,
          newsDetail: {
            ...state.newsDetail,
            publisheddate: response.data.response.result.publisheddate,
          },
        });
        message.success("Амжилттай дээшлүүллээ. Өдрийг сайхан өнгөрүүлээрэй.");
      })
      .catch((error) => {
        getError(error);
      });
  };

  //  #       #######    #    ######
  //  #       #     #   # #   #     #
  //  #       #     #  #   #  #     #
  //  #       #     # #     # #     #
  //  #       #     # ####### #     #
  //  #       #     # #     # #     #
  //  ####### ####### #     # ######

  const loadNewsDetail = (newsId) => {
    const myParamsNewsDetail = {
      request: {
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoNEWS_MAINDETAIL_004",
        parameters: {
          newsid: newsId || "",
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
        },
      },
    };

    clearNewsDetail();
    setState({ ...state, loading: true });

    myAxiosZ(myParamsNewsDetail)
      .then((myData) => {
        const myArray = myData.response.result || [];
        // console.log("NEWS DETAIL------------>", myArray);
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

        setState({
          ...state,
          loading: false,
          newsDetail: myArray,
        });
      })
      .catch((error) => {
        getError(error);
      });
  };

  const loadNewsDetailOg = (newsId) => {
    const myParamsNewsDetail = {
      request: {
        username: "hiWDThpHP2SZy9KRq6hyk3lrvV12",
        password: "89",
        command: "motoNEWS_MAINDETAIL_OG_004",
        parameters: {
          newsid: newsId || "",
        },
      },
    };

    clearNewsDetail();
    setState({ ...state, loading: true });

    axios
      .post("", myParamsNewsDetail)
      .then((response) => {
        const myArray = response.data.response.result;
        console.log("NEWS DETAIL------------>", myArray);
        setState({
          ...state,
          loading: false,
          newsDetail: myArray,
        });
      })
      .catch((error) => {
        getError(error);
      });
  };

  //   #####     #    #     # #######
  //  #     #   # #   #     # #
  //  #        #   #  #     # #
  //   #####  #     # #     # #####
  //        # #######  #   #  #
  //  #     # #     #   # #   #
  //   #####  #     #    #    #######

  const saveNewsDetail = (values) => {
    console.log("saveNewsDetail дотор орж ирсэн values--", values);

    // const myImgUrl =
    //   values.images && values.images.length > 0 ? values.images[0].url : "";
    // console.log(myImgUrl);
    const myimgurl =
      values.imgurl &&
      values.imgurl.fileList &&
      values.imgurl.fileList.length > 0
        ? values.imgurl.fileList[0].response.url
        : "";

    const myBody = JSON.stringify(values.body); //Элдэв тэмдэгтийг хувиргаж, дан текст болгон хадгална.
    const myDescription = values.body.blocks[0].data.text.substring(0, 500); //Эхний параграф текстийг авч description буюу товчлолд өгнө.

    // return null;

    const myParamsNewsDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoNewsDV_002",
        ignorepermission: "1",
        parameters: {
          ignorepermission: "1",
          id: values.newsid || "",
          title: values.title,
          // imgUrl: JSON.stringify(values.images), //JSON.parse
          // imgurl: myImgUrl,
          imgurl: myimgurl,
          body: myBody,
          isfeatured: toBoolean(values.isfeatured) ? "1" : "0",
          iscomment: toBoolean(values.iscomment) ? "1" : "0",
          isactive: toBoolean(values.isactive) ? "1" : "0",
          // isFacebook,
          // isTwitter,
          publisherid: memberContext.state.memberCloudUserSysId,
          userpublisherid: memberContext.state.memberCloudUserSysId,
          // creatorId,
          modifierid: memberContext.state.memberCloudUserSysId,
          //! publishedDate, // --Form-д байгаа ! Түр авав
          // createdDate,
          // modifiedDate,
          description: myDescription,
          newstypeId: values.newstypeid,
          newssourceId: values.newssourceid,
          // contentId,
          // companyId,
          // bookTypeId,
          // dim1,
          // dim2,
        },
      },
    };

    console.log(
      "saveNewsDetail-ын бэлтгэсэн myParamsNewsDetail",
      myParamsNewsDetail
    );

    // setState({ ...state, loading: true });

    axios
      .post("", myParamsNewsDetail)
      .then((response) => {
        // console.log("Save NewsDetail:   ", response);

        const myData = response.data.response;
        // console.log("After Save NewsDetail ------------>", myData);

        if (myData.status === "error") {
          getError(myData.text);
        } else {
          message.success("Амжилттай нэмлээ. Өдрийг сайхан өнгөрүүлээрэй.");
          history.push({
            pathname: "/news",
          });
          // loadNewsDetail(values.newsId);
        }
      })
      .catch((error) => {
        getError(error);
      });
  };

  return (
    <NewsDetailContext.Provider
      value={{
        state,
        loadNewsDetail,
        loadNewsDetailOg,
        toggleIsFeatured,
        toggleIsActive,
        upPublishedDate,
        saveNewsDetail,
      }}
    >
      {props.children}
    </NewsDetailContext.Provider>
  );
};

export default NewsDetailContext;
