import React, { useState, useContext } from "react";
import { Redirect, useHistory, Link, useLocation } from "react-router-dom";
import { parse } from "query-string";
import axios from "util/axiosConfig";
import MemberContext from "context/MemberContext";

const NewsFilterContext = React.createContext();

export const NewsFilterStore = (props) => {
  const memberContext = useContext(MemberContext);

  const { search } = useLocation();
  console.log("queryStringqueryString", search);
  // * queryString гэдэг нь ?newstypeid=206&newssourceid=1516239256080
  const searchParams = parse(search);
  console.log("searchParams", searchParams);

  const initialStateFilterList = {
    filterList: searchParams,
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initialStateFilterList);

  const loadFilterList = () => {};

  return (
    <NewsFilterContext.Provider value={{ state, loadFilterList }}>
      {props.children}
    </NewsFilterContext.Provider>
  );
};

export default NewsFilterContext;
