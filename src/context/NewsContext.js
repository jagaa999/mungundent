import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { message } from "antd";
import toBoolean from "util/booleanFunction";
import moment from "moment";

import axios from "util/axiosConfig";
import myAxiosZ from "../util/myAxiosZ";
import {
  prepareNewsList,
  prepareNewsListSettings as mySettings,
  prepareNewsDetail,
} from "util/prepareSpecsNews";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const NewsContext = React.createContext();

export const NewsStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);
  const history = useHistory();

  //### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialNewsList = {
    loadParams: {
      systemmetagroupid: "1587197820548033",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pagesize: filterContext.state.paging?.pagesize || "12",
        offset: filterContext.state.paging?.offset || "1",
        sortcolumnnames: {
          [filterContext.state.sorting?.sortcolumnnames ||
          mySettings.sortFields[0].field]: {
            sorttype: filterContext.state.sorting?.sorttype || "DESC",
          },
        },
      },
    },
    mainList: [],
    loading: false,
    error: null,
    isFilterDrawerOpen: false,
  };
  const initialNewsDetail = {
    mainDetail: {},
    loading: true,
    error: null,
  };

  const [newsList, setNewsList] = useState(initialNewsList);
  const [newsDetail, setNewsDetail] = useState(initialNewsDetail);

  // useDidMountEffect(() => {
  useEffect(() => {
    if (filterContext.state.menu === "news") {
      // myMenuType = "Insert";
      // myMenuType = "Edit";
      // myMenuType = "Detail";
      // myMenuType = "List";

      switch (filterContext.state.menuType) {
        case "Insert":
          clearNewsDetail();
          break;
        case "Edit":
          clearNewsDetail();
          break;
        case "Edit":
          clearNewsDetail();
          break;
        case "Detail":
          clearNewsDetail();
          break;
        case "List":
          loadNewsList();
          break;
        default:
          clearNewsDetail();
          break;
      }
    }
  }, [filterContext.state, memberContext.state.isLogin]);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadNewsList = () => {
    setNewsList({ ...newsList, loading: true });

    //! ЭНИЙГ util/urlFunction руу хийж өгөөрэй.
    let tempFilter = {};
    Object.keys(filterContext.state.filterList).map((item) => {
      // console.log(item, "----", filterContext.state.filterList[item]);
      if (item !== "offset" && item !== "pagesize" && item !== "title") {
        const myItem1 = {
          operator: "=",
          operand: filterContext.state.filterList[item],
        };
        const myItem2 = {
          [item]: {
            0: myItem1,
          },
        };
        tempFilter = Object.assign(tempFilter, myItem2);
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
      } else if (item === "title") {
        const myItem1 = {
          operator: "like",
          operand: `%${filterContext.state.filterList[item]}%`,
        };
        const myItem2 = {
          [item]: {
            0: myItem1,
          },
        };
        tempFilter = Object.assign(tempFilter, myItem2);
        //   title: {
        //     0: {
        //       operator: "like",
        //       operand: "%toyota%",
        //     },
        //   },
      }
    });
    const dddd = {};
    const myTemp33 = Object.assign(dddd, { criteria: tempFilter });

    const myNewParam = {
      ...newsList,
      loadParams: {
        ...newsList.loadParams,
        ...myTemp33,
        paging: {
          ...newsList.loadParams.paging,
          pagesize: filterContext.state.paging.pagesize || "12",
          offset: filterContext.state.paging.offset || "1",
          sortcolumnnames: {
            [filterContext.state.sorting.sortcolumnnames || "publisheddate"]: {
              sorttype: filterContext.state.sorting.sorttype || "DESC",
            },
          },
        },
      },
      loading: true,
    };

    const myParamsNewsList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: myNewParam.loadParams,
      },
    };

    myAxiosZ(myParamsNewsList)
      .then((myData) => {
        const myPaging = myData.response?.result?.paging || {};
        const myArray = myData.response.result || [];

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        // console.log(myArray);

        const myTempList = prepareNewsList(myArray, filterContext.state.menu);

        // console.log("myTempList", myTempList);

        setNewsList({
          ...myNewParam,
          loading: false,
          mainList: myTempList,
        });

        filterContext.updateTotal(myPaging.totalcount);
      })
      .catch((error) => {
        setNewsList({ ...newsList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######
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
    setNewsDetail({ ...newsDetail, loading: true });

    // console.log("myParamsNewsDetail", myParamsNewsDetail);

    myAxiosZ(myParamsNewsDetail)
      .then((myData) => {
        const myArray = myData.response.result || [];
        // console.log("NEWS DETAIL------------>", myArray);

        const myTempItem = prepareNewsDetail(myArray, filterContext.state.menu);

        setNewsDetail({
          ...newsDetail,
          loading: false,
          // mainDetail: myArray,
          mainDetail: myTempItem,
        });
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
      });
  };

  const clearNewsDetail = () => {
    setNewsDetail({ ...initialNewsDetail, loading: false });
  };

  //   #####     #    #     # #######
  //  #     #   # #   #     # #
  //  #        #   #  #     # #
  //   #####  #     # #     # #####
  //        # #######  #   #  #
  //  #     # #     #   # #   #
  //   #####  #     #    #    #######

  const saveNewsDetail = (values) => {
    // console.log("saveNewsDetail дотор орж ирсэн values--", values);

    const myimagemain =
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
        parameters: {
          id: values.newsid || "",
          title: values.title,
          imgurl: myimagemain,
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

    // console.log("myParamsNewsDetail", myParamsNewsDetail);

    // setState({ ...state, loading: true });

    axios
      .post("", myParamsNewsDetail)
      .then((response) => {
        // console.log("Save NewsDetail:   ", response);

        const myData = response.data.response;
        // console.log("After Save NewsDetail ------------>", myData);

        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          message.success("Амжилттай нэмлээ. Өдрийг сайхан өнгөрүүлээрэй.");
          history.push({
            pathname: "/news",
          });
          // loadNewsDetail(values.newsId);
        }
      })
      .catch((error) => {
        message.error(error, 7);
      });
  };

  const toggleFilterDrawerOpen = () => {
    setNewsList({
      ...newsList,
      isFilterDrawerOpen: !newsList.isFilterDrawerOpen,
    });
  };

  const toggleIsFeatured = () => {
    const myProcessParams = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoNewsDV_SPONSOR_002",
        parameters: {
          id: newsDetail.mainDetail.newsid,
          isfeatured: !toBoolean(newsDetail.mainDetail.isfeatured) ? "1" : "0",
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
          tablename: "ECM_NEWS",
          recordid: newsDetail.mainDetail.newsid,
        },
      },
    };
    // console.log("myProcessParams", myProcessParams);

    axios
      .post("", myProcessParams)
      .then((response) => {
        setNewsDetail({
          ...newsDetail,
          mainDetail: {
            ...newsDetail.mainDetail,
            isfeatured: toBoolean(response.data.response.result.isfeatured),
          },
        });
        message.success("Амжилттай өөрчиллөө. Өдрийг сайхан өнгөрүүлээрэй.");
      })
      .catch((error) => {
        message.error(error, 7);
      });
  };

  const toggleIsActive = () => {
    const myProcessParams = {
      request: {
        sessionid: memberContext.state.memberCloudSessionId,
        command: "motoNewsDV_ACTIVE_002",
        parameters: {
          id: newsDetail.mainDetail.newsid,
          isactive: !toBoolean(newsDetail.mainDetail.isactive) ? "1" : "0",
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
          tablename: "ECM_NEWS",
          recordid: newsDetail.mainDetail.newsid,
        },
      },
    };

    axios
      .post("", myProcessParams)
      .then((response) => {
        // console.log("ИРСЭН ДАТА444:   ", response);
        // const myResult = response.data.response;
        // console.log("axiosFunction Process myResult ------------>", myResult);

        setNewsDetail({
          ...newsDetail,
          mainDetail: {
            ...newsDetail.mainDetail,
            isactive: toBoolean(response.data.response.result.isactive),
          },
        });
        message.success("Амжилттай өөрчиллөө. Өдрийг сайхан өнгөрүүлээрэй.");
      })
      .catch((error) => {
        message.error(error, 7);
      });
  };

  const upPublishedDate = () => {
    const myProcessParams = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoNewsDV_PUBLISHEDDATE_002",
        parameters: {
          id: newsDetail.mainDetail.newsid,
          memberid: memberContext.state.memberCloudUserSysId,
          usersystemid: memberContext.state.memberCloudUserSysId,
          tablename: "ECM_NEWS",
          recordid: newsDetail.mainDetail.newsid,
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

        setNewsDetail({
          ...newsDetail,
          mainDetail: {
            ...newsDetail.mainDetail,
            publisheddate: response.data.response.result.publisheddate,
          },
        });
        message.success("Амжилттай дээшлүүллээ. Өдрийг сайхан өнгөрүүлээрэй.");
      })
      .catch((error) => {
        message.error(error, 7);
      });
  };

  return (
    <NewsContext.Provider
      value={{
        newsList,
        newsDetail,
        loadNewsList,
        clearNewsDetail,
        loadNewsDetail,
        saveNewsDetail,
        toggleFilterDrawerOpen,
        toggleIsFeatured,
        toggleIsActive,
        upPublishedDate,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
