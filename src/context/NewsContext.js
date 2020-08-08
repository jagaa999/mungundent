import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { parse } from "query-string";
import { message } from "antd";
import toBoolean from "util/booleanFunction";
import axios from "util/axiosConfig";
import MemberContext from "context/MemberContext";

const NewsContext = React.createContext();

//-----------------------
//-----------------------
//-----------------------
//! NEWSLIST

//  #       ###  #####  #######
//  #        #  #     #    #
//  #        #  #          #
//  #        #   #####     #
//  #        #        #    #
//  #        #  #     #    #
//  ####### ###  #####     #

export const NewsListStore = (props) => {
  const memberContext = useContext(MemberContext);

  const initialStateNewsList = {
    loadParams: {
      systemmetagroupid: "1587197820548033",
      showQuery: "0",
      paging: {
        pageSize: "15", //нийтлэлийн тоо
        offset: "1", //хуудасны дугаар
        sortColumnNames: {
          publisheddate: {
            //эрэмбэлэх талбар
            sortType: "DESC", //эрэмбэлэх чиглэл
          },
        },
      },
      // criteria: {
      //   title: {
      //     0: {
      //       operator: "like",
      //       operand: "%toyota%",
      //     },
      //   },
      //   newstypeid: {
      //     0: {
      //       operator: "=",
      //       operand: "201",
      //     },
      //     1: {
      //       operator: "=",
      //       operand: "202",
      //     },
      //   },
      // },
    },
    newsList: [],
    loading: false,
    error: null,
    // searchParams1: {},
  };

  const [state, setState] = useState(initialStateNewsList);

  const loadNewsList = (queryString) => {
    // * queryString гэдэг нь ?newstypeid=206&newssourceid=1516239256080
    const searchParams = parse(queryString);
    // setState({ ...state, searchParams1: searchParams });
    // console.log("searchParams", searchParams);
    // console.log(state);

    // ! newssourceid: "1514260642854|1518160989674"
    // ! newstypeid: "201|206"
    //гэсэн объект орж ирнэ. Үүнийг доорх руу хувиргана.
    //   newstypeid: {
    //     0: {
    //       operator: "=",
    //       operand: "201",
    //     },
    //     1: {
    //       operator: "=",
    //       operand: "202",
    //     },
    //   },
    let tempFilter = {};
    Object.keys(searchParams).map((item) => {
      // console.log(item, "----", searchParams[item]);
      const myItem1 = {
        operator: "=",
        operand: searchParams[item],
      };
      // console.log("myItem1", myItem1);
      const myItem2 = {
        [item]: {
          "0": myItem1,
        },
      };
      // console.log("myItem2", myItem2);
      tempFilter = Object.assign(tempFilter, myItem2);
    });
    // console.log(tempFilter);
    const dddd = state.loadParams;
    const myTemp33 = Object.assign(dddd, { criteria: tempFilter });
    // console.log("myTemp33", myTemp33);

    // console.log("searchParams", searchParams);

    setState({
      ...state,
      loadParams: myTemp33,
      loading: true,
      // searchParams1: searchParams,
    });

    const myParamsNewsList = {
      request: {
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: state.loadParams,
      },
    };

    axios
      .post("", myParamsNewsList)
      .then((response) => {
        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setState({
          ...state,
          loading: false,
          newsList: Object.values(myArray),
        });
      })
      .catch((error) => {
        setState({ ...state, error });
        console.log(error);
      });
  };

  return (
    <NewsContext.Provider value={{ state, loadNewsList }}>
      {props.children}
    </NewsContext.Provider>
  );
};

//! NEWSDETAIL
//  ######  ####### #######    #    ### #
//  #     # #          #      # #    #  #
//  #     # #          #     #   #   #  #
//  #     # #####      #    #     #  #  #
//  #     # #          #    #######  #  #
//  #     # #          #    #     #  #  #
//  ######  #######    #    #     # ### #######

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
          systemuserid: memberContext.state.memberCloudUserSysId,
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
          systemuserid: memberContext.state.memberCloudUserSysId,
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
          systemuserid: memberContext.state.memberCloudUserSysId,
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
      })
      .catch((error) => {
        getError(error);
      });
  };

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
          systemuserid: memberContext.state.memberCloudUserSysId,
        },
      },
    };
    // console.log("myParamsNewsDetail", myParamsNewsDetail);

    clearNewsDetail();
    setState({ ...state, loading: true });

    axios
      .post("", myParamsNewsDetail)
      .then((response) => {
        // console.log("ИРСЭН ДАТА444:   ", response);
        const myArray = response.data.response.result;
        // console.log("NEWS DETAIL------------>", myArray);
        setState({
          ...state,
          loading: false,
          newsDetail: myArray,
        });
        // setState({ ...state, newsDetail: response.data });
      })
      .catch((error) => {
        getError(error);
      });
  };

  const escapeHTML = (str) =>
    str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[tag])
    );

  //     #####     #    #     # #######
  //  #     #   # #   #     # #
  //  #        #   #  #     # #
  //   #####  #     # #     # #####
  //        # #######  #   #  #
  //  #     # #     #   # #   #
  //   #####  #     #    #    #######

  const saveNewsDetail = (values) => {
    console.log("saveNewsDetail дотор орж ирсэн values--", values);
    const myImgUrl =
      values.images && values.images.length > 0 ? values.images[0].url : "";
    // console.log(myImgUrl);
    const myBody = escapeHTML(JSON.stringify(values.body)); //Элдэв тэмдэгтийг хувиргаж, дан текст болгон хадгална.
    const myDescription = values.body.blocks[0].data.text; //Эхний параграф текстийг авч description буюу товчлолд өгнө.
    // return null;

    const myParamsNewsDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoNewsDV_001",
        parameters: {
          id: values.newsid || "",
          title: values.title,
          // imgUrl: JSON.stringify(values.images), //JSON.parse
          imgurl: myImgUrl,
          body: myBody,
          isfeatured: toBoolean(values.isfeatured) ? "1" : "0",
          iscomment: toBoolean(values.iscomment) ? "1" : "0",
          isactive: toBoolean(values.isactive) ? "1" : "0",
          // isFacebook,
          // isTwitter,
          publisherid: memberContext.state.memberCloudUserSysId,
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
        console.log("Save NewsDetail:   ", response);

        const myData = response.data.response;
        console.log("After Save NewsDetail ------------>", myData);

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
    <NewsContext.Provider
      value={{
        state,
        loadNewsDetail,
        toggleIsFeatured,
        toggleIsActive,
        upPublishedDate,
        saveNewsDetail,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
