import React, { useState, useContext, useEffect } from "react";
import { Redirect, useHistory, Link, useLocation } from "react-router-dom";
import { parse } from "query-string";
import axios from "util/axiosConfig";
import MemberContext from "context/MemberContext";

const FilterContext = React.createContext();

export const FilterStore = (props) => {
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
    paging: {},
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

    Object.keys(state.paging).map((item) => {
      if (state.paging[item] !== "") {
        mySearchQueryParams.push(item + "=" + state.paging[item]);
      }
    });

    console.log("mySearchQueryParamsmySearchQueryParams", mySearchQueryParams);

    setSearchQuery(mySearchQueryParams.join("&"));
  }, [state.filterList, state.paging]);

  useEffect(() => {
    // if (didMount) {
    console.log("searchQuerysearchQuerysearchQuerysearchQuery", searchQuery);
    history.push({
      pathname: "/news",
      search: searchQuery,
    });
    // }
  }, [searchQuery]);

  const loadFilterList = () => {};

  const updateParams = (tempObject) => {
    console.log("tempObjecttempObject", tempObject);
    //{newstypeid: "206"}

    Object.entries(tempObject).map((item, i) => {
      const myKey = item[0]; //"newstypeid"
      const myValue = "" + item[1]; //"206"

      if (myKey !== "offset" && myKey !== "pagesize") {
        if (myValue !== "") {
          setState({
            ...state,
            filterList: {
              ...state.filterList,
              ...tempObject,
            },
            paging: {},
          });
        } else {
          const myTemp = state.filterList;
          delete myTemp[myKey]; //Уг key-тэй хэсгийг устгана.
          setState({
            ...state,
            filterList: {
              ...myTemp,
            },
            paging: {},
          });
        }
      } else {
        if (myValue !== "") {
          setState({
            ...state,
            paging: {
              ...state.paging,
              ...tempObject,
            },
          });
        } else {
          const myTemp = state.paging;
          delete myTemp[myKey]; //Уг key-тэй хэсгийг устгана.
          setState({
            ...state,
            paging: {
              ...myTemp,
            },
          });
        }
      }
    });
  };

  const clearAll = () => {
    setState({ ...state, filterList: {}, paging: {} });
  };

  return (
    <FilterContext.Provider
      value={{ state, loadFilterList, updateParams, clearAll }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
