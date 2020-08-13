import React, { useState, useContext, useEffect } from "react";
import { Redirect, useHistory, Link, useLocation } from "react-router-dom";
import { parse } from "query-string";
import axios from "util/axiosConfig";
import MemberContext from "context/MemberContext";

const NewsFilterContext = React.createContext();

export const NewsFilterStore = (props) => {
  const memberContext = useContext(MemberContext);

  const history = useHistory();
  const { search } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  // console.log("queryStringqueryString", search);
  // * queryString гэдэг нь ?newstypeid=206&newssourceid=1516239256080
  const searchParams = parse(search);
  // console.log("searchParams", searchParams);

  const initialStateFilterList = {
    filterList: searchParams,
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initialStateFilterList);

  useEffect(() => {
    const mySearchQueryParams = [];

    Object.keys(state.filterList).map((item) => {
      if (state.filterList[item] !== "") {
        mySearchQueryParams.push(item + "=" + state.filterList[item]);
      }
    });

    setSearchQuery(mySearchQueryParams.join("&"));
  }, [state.filterList]);

  useEffect(() => {
    // if (didMount) {
    history.push({
      pathname: "/news",
      search: searchQuery,
    });
    // }
  }, [searchQuery]);

  const loadFilterList = () => {};

  const updateParams = (tempObject) => {
    //{newstypeid: "206"}
    const myKey = Object.keys(tempObject)[0]; //"newstypeid"
    const myValue = tempObject[Object.keys(tempObject)[0]]; //"206"

    // console.log("ирсэн объект", myKey, "  --  ", myValue);

    if (myValue !== "") {
      setState({
        ...state,
        filterList: {
          ...state.filterList,
          ...tempObject,
        },
      });
    } else {
      const myTemp = state.filterList;
      delete myTemp[myKey]; //Уг key-тэй хэсгийг устгана.
      setState({
        ...state,
        filterList: {
          ...myTemp,
        },
      });
    }
  };

  const clearAll = () => {
    setState({ ...state, filterList: {} });
  };

  return (
    <NewsFilterContext.Provider
      value={{ state, loadFilterList, updateParams, clearAll }}
    >
      {props.children}
    </NewsFilterContext.Provider>
  );
};

export default NewsFilterContext;
