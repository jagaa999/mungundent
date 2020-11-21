import React, { useState, useContext, useEffect } from "react";

import { message } from "antd";

import myAxiosZ from "../util/myAxiosZ";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const NewsListContext = React.createContext();

export const NewsListStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  const initialNewsList = {
    loadParams: {
      systemmetagroupid: "1587197820548033",
      showquery: "0",
      paging: {
        pagesize: filterContext.state.paging?.pagesize || "12", //нийтлэлийн тоо
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
    isFilterDrawerOpen: false,
  };

  const [newsList, setNewsList] = useState(initialNewsList);

  // useDidMountEffect(() => {
  useEffect(() => {
    loadNewsList();
  }, [
    filterContext.state.filterList,
    filterContext.state.paging,
    filterContext.state.sorting,
    filterContext.state.cardtype,
    memberContext.state.isLogin,
  ]);

  //  #       #######    #    ######
  //  #       #     #   # #   #     #
  //  #       #     #  #   #  #     #
  //  #       #     # #     # #     #
  //  #       #     # ####### #     #
  //  #       #     # #     # #     #
  //  ####### ####### #     # ######

  const loadNewsList = (queryString) => {
    setNewsList({ ...newsList, loading: true });

    let tempFilter = {};
    Object.keys(filterContext.state.filterList).map((item) => {
      console.log(item, "----", filterContext.state.filterList[item]);
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

    myAxiosZ(myParamsNewsList)
      .then((myData) => {
        const myPaging = myData.response.result.paging || {};
        const myArray = myData.response.result || [];

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        setNewsList({
          ...myNewParam,
          loading: false,
          newsList: Object.values(myArray),
        });

        filterContext.updateTotal(myPaging.totalcount);
      })
      .catch((error) => {
        setNewsList({ ...newsList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  const toggleFilterDrawerOpen = () => {
    setNewsList({
      ...newsList,
      isFilterDrawerOpen: !newsList.isFilterDrawerOpen,
    });
  };

  return (
    <NewsListContext.Provider
      value={{ newsList, loadNewsList, toggleFilterDrawerOpen }}
    >
      {props.children}
    </NewsListContext.Provider>
  );
};

export default NewsListContext;
