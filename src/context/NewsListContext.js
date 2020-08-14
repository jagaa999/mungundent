import React, { useState, useContext } from "react";
import { parse } from "query-string";
import axios from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const NewsListContext = React.createContext();

export const NewsListStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  const initialStateNewsList = {
    loadParams: {
      systemmetagroupid: "1587197820548033",
      showquery: "0",
      paging: {
        pagesize: filterContext.state.paging.pagesize || "10", //нийтлэлийн тоо
        offset: filterContext.state.paging.offset || "1", //хуудасны дугаар
        sortcolumnnames: {
          publisheddate: {
            //эрэмбэлэх талбар
            sorttype: "DESC", //эрэмбэлэх чиглэл
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
    paging: {
      offset: 1,
      pagesize: 10,
      totalcount: 1,
    },
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
      console.log(item, "----", searchParams[item]);
      if (item !== "offset" && item !== "pagesize") {
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
      }
    });
    console.log(tempFilter);
    // const dddd = state.loadParams;
    const dddd = {};
    const myTemp33 = Object.assign(dddd, { criteria: tempFilter });
    console.log("myTemp33", myTemp33);

    // console.log("searchParams", searchParams);

    const myNewParam = {
      ...state,
      loadParams: {
        ...state.loadParams,
        ...myTemp33,
        paging: {
          ...state.loadParams.paging,
          pagesize: filterContext.state.paging.pagesize || "10", //нийтлэлийн тоо
          offset: filterContext.state.paging.offset || "1", //хуудасны дугаар
        },
      },
      loading: true,
      // searchParams1: searchParams,
    };

    console.log("myNewParammyNewParammyNewParam", myNewParam);

    // setState(myNewParam);

    const myParamsNewsList = {
      request: {
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: myNewParam.loadParams,
      },
    };

    console.log("myParamsNewsListmyParamsNewsList", myParamsNewsList);

    axios
      .post("", myParamsNewsList)
      .then((response) => {
        console.log("loadNewsList after", response);

        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        console.log("loadNewsList after myPaging", myPaging);

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setState({
          ...myNewParam,
          loading: false,
          newsList: Object.values(myArray),
          paging: {
            offset: myPaging.offset,
            pagesize: myPaging.pagesize,
            totalcount: myPaging.totalcount,
          },
        });
      })
      .catch((error) => {
        setState({ ...state, error });
        console.log(error);
      });
  };

  return (
    <NewsListContext.Provider value={{ state, loadNewsList }}>
      {props.children}
    </NewsListContext.Provider>
  );
};

export default NewsListContext;
