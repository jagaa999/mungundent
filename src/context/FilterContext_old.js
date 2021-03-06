import React, { useState, useContext, useEffect } from "react";
import { Redirect, useHistory, Link, useLocation } from "react-router-dom";
import { parse } from "query-string";
import axios from "util/axiosConfig";
import MemberContext from "context/MemberContext";

const FilterContext = React.createContext();

export const FilterStore = (props) => {
  const memberContext = useContext(MemberContext);

  const history = useHistory();
  const { pathname, search } = useLocation();
  const searchParams = parse(search);
  // * queryString гэдэг нь ?newstypeid=206&newssourceid=1516239256080

  const [urlParams, setUrlParams] = useState({});

  const initialParams = {
    filterList: {},
    paging: {
      offset: "1",
      pagesize: "12",
    },
    sorting: {},
    cardtype: {
      cardtype: localStorage.getItem(urlParams.menu + "cardtype") || "typelist",
    },
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initialParams);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalcount, setTotalcount] = useState("0");

  console.log("urlParams.menu", urlParams.menu);

  useEffect(() => {
    setUrlParams({
      motoUrl: pathname.split("/"),
      menu: pathname.split("/")[1],
      pathName: pathname,
      search: search,
      searchParams: parse(search),
    });
    setState(initialParams);
  }, [pathname]);
  useEffect(() => {
    let myFilterList = {};
    let myPaging = { offset: "1", pagesize: "12" };
    let mySorting = {};
    let myCardtype = {
      cardtype: localStorage.getItem(urlParams.menu + "cardtype") || "typelist",
    };

    Object.keys(searchParams).map((item) => {
      if (item === "offset" || item === "pagesize") {
        const myTempItem = {
          [item]: searchParams[item],
        };
        myPaging = Object.assign(myPaging, myTempItem);
      } else if (item === "sortcolumnnames" || item === "sorttype") {
        const myTempItem = {
          [item]: searchParams[item],
        };
        mySorting = Object.assign(mySorting, myTempItem);
      } else if (item === "cardtype") {
        const myTempItem = {
          [item]: searchParams[item],
        };
        myCardtype = Object.assign(myCardtype, myTempItem);
      } else {
        const myTempItem = {
          [item]: searchParams[item],
        };
        myFilterList = Object.assign(myFilterList, myTempItem);
      }
    });

    const initialStateFilterList = {
      filterList: myFilterList,
      paging: myPaging,
      sorting: mySorting,
      cardtype: myCardtype,
      loading: false,
      error: null,
    };

    setState(initialStateFilterList);
  }, [urlParams]);

  useEffect(() => {
    const mySearchQueryParams = [];

    Object.keys(state.filterList).map((item) => {
      if (state.filterList[item] !== "") {
        mySearchQueryParams.push(item + "=" + state.filterList[item]);
      }
    });

    Object.keys(state.paging).map((item) => {
      if (state.paging[item] !== "") {
        mySearchQueryParams.push(item + "=" + state.paging[item]);
      }
    });

    Object.keys(state.sorting).map((item) => {
      if (state.sorting[item] !== "") {
        mySearchQueryParams.push(item + "=" + state.sorting[item]);
      }
    });

    Object.keys(state.cardtype).map((item) => {
      if (state.cardtype[item] !== "") {
        mySearchQueryParams.push(item + "=" + state.cardtype[item]);
        // console.log("myCardtype", state.cardtype[item]);
        localStorage.setItem(urlParams.menu + "cardtype", state.cardtype[item]);
      }
    });

    setSearchQuery(mySearchQueryParams.join("&"));
  }, [state.filterList, state.paging, state.sorting, state.cardtype]);

  useEffect(() => {
    history.push({
      // pathname: "/news",
      pathname: "/" + urlParams.menu,
      search: searchQuery,
    });
  }, [searchQuery]);

  // console.log("urlParams", urlParams);

  const loadFilterList = () => {};

  //  #     # ######  ######     #    ####### #######
  //  #     # #     # #     #   # #      #    #
  //  #     # #     # #     #  #   #     #    #
  //  #     # ######  #     # #     #    #    #####
  //  #     # #       #     # #######    #    #
  //  #     # #       #     # #     #    #    #
  //   #####  #       ######  #     #    #    #######

  const updateParams = (tempObject) => {
    // console.log("FilterContext → updateParams", tempObject);

    let myObject = { ...state };

    Object.entries(tempObject).map((item, i) => {
      const myKey = item[0]; //"newstypeid"
      const myValue = "" + item[1]; //"206"

      // console.log(item);
      // console.log(myKey, myValue);

      if (myKey === "offset" || myKey === "pagesize") {
        if (myValue !== "") {
          myObject.paging = {
            ...myObject.paging,
            [myKey]: myValue,
          };
        } else {
          delete myObject.paging[myKey];
        }
      } else if (myKey === "sortcolumnnames" || myKey === "sorttype") {
        if (myValue !== "") {
          myObject.sorting = {
            ...myObject.sorting,
            [myKey]: myValue,
          };
        } else {
          delete myObject.sorting[myKey];
        }
      } else if (myKey === "cardtype") {
        if (myValue !== "") {
          myObject.cardtype = {
            ...myObject.cardtype,
            [myKey]: myValue,
          };
        } else {
          delete myObject.cardtype[myKey];
        }
      } else {
        if (myValue !== "" && myValue !== "undefined") {
          myObject.filterList = {
            ...myObject.filterList,
            [myKey]: myValue,
          };
          myObject.paging = {
            offset: "1",
            pagesize: "12",
          };
        } else {
          delete myObject.filterList[myKey];
          myObject.paging = { offset: "1", pagesize: "12" };
          myObject.sorting = {};
        }
      }
    });

    // console.log("myObject", myObject);

    setState(myObject);
  };

  const clearAll = () => {
    setState({ ...state, filterList: {}, paging: {}, sorting: {} });
  };

  const updateTotal = (totalcount) => {
    setTotalcount(totalcount);
  };

  return (
    <FilterContext.Provider
      value={{
        state,
        totalcount,
        urlParams,
        loadFilterList,
        updateParams,
        clearAll,
        updateTotal,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
