import React, { useState, useContext, useEffect } from "react";
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
        pagesize: filterContext.state.paging?.pagesize || "10", //нийтлэлийн тоо
        offset: filterContext.state.paging?.offset || "1", //хуудасны дугаар
        sortcolumnnames: {
          [filterContext.state.sorting?.sortcolumnnames || "publisheddate"]: {
            //эрэмбэлэх талбар
            sorttype: filterContext.state.sorting?.sorttype || "DESC", //эрэмбэлэх чиглэл
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

  const [state, setState] = useState(initialStateNewsList);

  useEffect(() => {
    loadNewsList();
  }, [
    filterContext.state.filterList,
    filterContext.state.paging,
    filterContext.state.sorting,
    filterContext.state.cardtype,
  ]);

  const loadNewsList = (queryString) => {
    setState({ ...state, loading: true });

    let tempFilter = {};
    Object.keys(filterContext.state.filterList).map((item) => {
      console.log(item, "----", filterContext.state.filterList[item]);
      if (item !== "offset" && item !== "pagesize") {
        const myItem1 = {
          operator: "=",
          operand: filterContext.state.filterList[item],
        };
        const myItem2 = {
          [item]: {
            "0": myItem1,
          },
        };
        tempFilter = Object.assign(tempFilter, myItem2);
      }
    });
    const dddd = {};
    const myTemp33 = Object.assign(dddd, { criteria: tempFilter });

    const myNewParam = {
      ...state,
      loadParams: {
        ...state.loadParams,
        ...myTemp33,
        paging: {
          ...state.loadParams.paging,
          pagesize: filterContext.state.paging.pagesize || "10", //нийтлэлийн тоо
          offset: filterContext.state.paging.offset || "1", //хуудасны дугаар
          sortcolumnnames: {
            [filterContext.state.sorting.sortcolumnnames || "publisheddate"]: {
              //эрэмбэлэх талбар
              sorttype: filterContext.state.sorting.sorttype || "DESC", //эрэмбэлэх чиглэл
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

    axios
      .post("", myParamsNewsList)
      .then((response) => {
        const myPaging = response.data.response.result.paging;
        const myArray = response.data.response.result;

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setState({
          ...myNewParam,
          loading: false,
          newsList: Object.values(myArray),
        });

        filterContext.updateTotal(myPaging.totalcount);
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
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
