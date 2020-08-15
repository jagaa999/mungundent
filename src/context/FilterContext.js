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
  // * queryString гэдэг нь ?newstypeid=206&newssourceid=1516239256080
  const searchParams = parse(search);
  let myFilterList = {};
  let myPaging = {};
  let mySorting = {};

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

    Object.keys(state.sorting).map((item) => {
      if (state.sorting[item] !== "") {
        mySearchQueryParams.push(item + "=" + state.sorting[item]);
      }
    });

    setSearchQuery(mySearchQueryParams.join("&"));
  }, [state.filterList, state.paging, state.sorting]);

  useEffect(() => {
    history.push({
      pathname: "/news",
      search: searchQuery,
    });
  }, [searchQuery]);

  const loadFilterList = () => {};

  const updateParams = (tempObject) => {
    Object.entries(tempObject).map((item, i) => {
      const myKey = item[0]; //"newstypeid"
      const myValue = "" + item[1]; //"206"

      if (myKey === "offset" || myKey === "pagesize") {
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
      } else if (myKey === "sortcolumnnames" || myKey === "sorttype") {
        if (myValue !== "") {
          setState({
            ...state,
            sorting: {
              ...state.sorting,
              ...tempObject,
            },
          });
        } else {
          const myTemp = state.sorting;
          delete myTemp[myKey]; //Уг key-тэй хэсгийг устгана.
          setState({
            ...state,
            sorting: {
              ...myTemp,
            },
          });
        }
      } else {
        if (myValue !== "") {
          setState({
            ...state,
            filterList: {
              ...state.filterList,
              ...tempObject,
            },
            paging: {},
            sorting: {},
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
            sorting: {},
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
