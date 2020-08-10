import React, { useState, useContext } from "react";
import { parse } from "query-string";
import axios from "util/axiosConfig";
import MemberContext from "context/MemberContext";

const NewsListContext = React.createContext();

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
    <NewsListContext.Provider value={{ state, loadNewsList }}>
      {props.children}
    </NewsListContext.Provider>
  );
};

export default NewsListContext;
