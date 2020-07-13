import React, { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "../util/axiosConfig";
// import mainAxios from "axios";

const NewsContext = React.createContext();

const initialStateNewsList = {
  newsList: [],
  loading: false,
  error: null,
};

const myParamsNewsList = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {
      //"systemmetagroupid": "1587100905303413",
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
    },
  },
};

export const NewsListStore = (props) => {
  const [state, setState] = useState(initialStateNewsList);

  const loadNewsList = () => {
    setState({ ...state });
    //console.log("ЭНД ОРЖ ИРСЭН");
    //News татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    //console.log("axios====>", axios);

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
  newsDetail: {
    // newsid,
    // imagemain,
    // title,
    // body,
    // isfeatured,
    // isactive,
    // newstypeid,
    // newstypename,
    // newssourceid,
    // newssourcename,
    // newssourcelogo,
    // newssourcetype,
    // newssourcefacebook,
    // newssourcewebsite,
    // newssourceyoutube,
    // publisheddate,
    // publisherid,
    // publisherphoto,
    // publishername,
    // publisherpositionname,
    // createddate,
    // creatorid,
    // creatorname,
    // creatorphoto,
    // creatorpositionname,
    // modifieddate,
    // modifiedby,
    // modifiername,
    // modifierphoto,
    // modifierpositionname,
    // iscomment,
    // isfacebook,
    // istwitter,
    // contentid,
    // companyid,
    // booktypeid,
    // dim1,
    // dim2,
  },
  loading: false,
  error: null,
};

const myParamsNewsDetail = {
  request: {
    sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
    command: "PL_MDVIEW_004",
    parameters: {
      systemmetagroupid: "1587601946540",
      showQuery: "0",
      criteria: {
        newsid: {
          "0": {
            operator: "=",
            operand: "1588047983186922",
          },
        },
      },
      paging: {
        pageSize: "1", //нийтлэлийн тоо
        offset: "1", //хуудасны дугаар
      },
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

    myParamsNewsDetail.request.parameters.criteria.newsid = newsid;
    //console.log("ЭНД ОРЖ ИРСЭН");
    //News татаж эхэллээ гэдгийг мэдэгдэнэ.
    //Энийг хүлээж аваад Spinner ажиллаж эхэлнэ.
    setState({ ...state, loading: true });

    //console.log("axios====>", axios);

    axios
      .post("", myParamsNewsDetail)
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
          newsDetail: Object.values(myArray)[0],
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
