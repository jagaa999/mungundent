import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { parse } from "query-string";

import axios from "util/axiosConfig";
// import mainAxios from "axios";

const NewsContext = React.createContext();

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
};

const myParamsNewsList = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {},
  },
};

export const NewsListStore = (props) => {
  const [state, setState] = useState(initialStateNewsList);

  const prepareSearchQuery = () => {
    // let { search } = useLocation();
    // const myQuery = new URLSearchParams(search);
    // console.log(myQuery);
  };

  const loadNewsList = (queryString) => {
    // * queryString гэдэг нь ?newstypeid=206&newssourceid=1516239256080
    const searchParams = parse(queryString);
    // console.log("searchParams", searchParams);

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
    const myTemp33 = Object.assign(state.loadParams, { criteria: tempFilter });
    // console.log("myTemp33", myTemp33);

    setState({ ...state, loadParams: myTemp33, loading: true });

    myParamsNewsList.request.parameters = state.loadParams;
    // console.log("myParamsNewsListmyParamsNewsList", myParamsNewsList);

    axios
      .post("", myParamsNewsList)
      .then((response) => {
        //Датанууд ороод ирсэн
        //Одоо state-дээ олгоно.
        //console.log("ИРСЭН ДАТА444:   ", response);

        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setState({
          ...state,
          loading: false,
          newsList: Object.values(myArray),
        });
        // setState({ ...state, newsList: response.data });
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

//-----------------------
//-----------------------
//-----------------------

const initialStateNewsDetail = {
  newsDetail: {},
  loading: false,
  error: null,
};

const myParamsNewsDetail = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "motoNEWS_MAINDETAIL_004",
    parameters: {
      newsid: "",
      memberid: "",
    },
  },
};

export const NewsDetailStore = (props) => {
  const [state, setState] = useState(initialStateNewsDetail);

  const clearNewsDetail = () => {
    setState(initialStateNewsDetail);
  };

  const loadNewsDetail = (newsid) => {
    clearNewsDetail();
    myParamsNewsDetail.request.parameters.newsid = newsid;
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
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };

  return (
    <NewsContext.Provider value={{ state, loadNewsDetail }}>
      {props.children}
    </NewsContext.Provider>
  );
};

//-----------------------
//-----------------------
//-----------------------

const initialStateNewsDetailLog = {
  logItems: {},
  loading: false,
  error: null,
};

const myParamsNewsDetailLog = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {
      systemmetagroupid: "1588323654372494", //Log
      showQuery: "0",
      criteria: {
        recordId: "1588047983186922", //Параметрээр орж ирэх ёстой
        tableName: "ECM_NEWS", //Параметрээр орж ирэх ёстой
      },
      paging: {
        pageSize: "", //нийтлэлийн тоо
        offset: "1", //хуудасны дугаар
      },
    },
  },
};

export const NewsDetailLogStore = (props) => {
  const [state, setState] = useState(initialStateNewsDetailLog);

  const clearNewsDetailLog = () => {
    setState(initialStateNewsDetailLog);
  };

  const loadNewsDetailLog = (recordId, tableName) => {
    clearNewsDetailLog();

    myParamsNewsDetailLog.request.parameters.criteria.recordId = recordId;
    myParamsNewsDetailLog.request.parameters.criteria.tableName = tableName;
    //Log татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    axios
      .post("", myParamsNewsDetailLog)
      .then((response) => {
        // console.log("ИРСЭН ДАТА444:   ", response);
        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setState({
          ...state,
          loading: false,
          logItems: Object.values(myArray),
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
        console.log(error);
      });
  };

  return (
    <NewsContext.Provider value={{ state, loadNewsDetailLog }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
