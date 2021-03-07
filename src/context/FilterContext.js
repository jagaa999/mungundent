import React, { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { parse } from "query-string";
import MemberContext from "context/MemberContext";
import useDidMountEffect from "util/useDidMountEffect";
import { isEmpty } from "lodash";
import { ContextDevTool } from "react-context-devtool";

const FilterContext = React.createContext();

export const FilterStore = (props) => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  // const { ddddId } = useParams();
  const searchParams = parse(search);

  // console.log("БББББББББББББББ", useLocation());
  // console.log("ЫЫЫЫЫЫЫЫЫЫЫ", useParams());
  // console.log("ЫЫЫЫЫЫЫЫЫЫЫ", ddddId);

  const initialUrlSetting = {
    motoUrl: pathname.split("/"),
    menu: pathname.split("/")[1],
    pathName: pathname,
    menuType: "",
    search: search,
    filterList: {},
    paging: {},
    sorting: {},
    cardtype: {
      cardtype: localStorage.getItem(pathname + "cardtype") || "typecard",
    },
    loading: false,
    error: null,
  };

  const [urlSetting, setUrlSetting] = useState(initialUrlSetting);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalcount, setTotalcount] = useState("0");

  //Хэрвээ URL path солигдох аваас (цэс солигдсон гэсэн үг)
  //Filter-ийн бүх өгөгдлийг цэвэрлэх хэрэгтэй.
  useEffect(() => {
    clearAll();
  }, [pathname]);

  useEffect(() => {
    let myFilterList = {};
    let myPaging = { offset: "1", pagesize: "12" };
    let mySorting = {};
    let myCardtype = {
      cardtype: localStorage.getItem(pathname + "cardtype") || "typelist",
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

    //pathName-ээс хамаарч menuType-д тухайн цэсний төлөвийг өгнө.
    //List, Detail, Form (Insert, Edit) гэсэн 3 гол төрөл бий.
    let myMenuType = "List";
    // "/news/edit/:newsId",
    // "/news/:newsId/edit",
    // "/news/insert",
    // "/news/add",
    // "/news/:newsId",
    // "/news/:newsId/detail",
    // "/news/detail/:newsId",
    // "/newslist/:newsId",

    if (pathname.indexOf("insert") !== -1 || pathname.indexOf("add") !== -1) {
      myMenuType = "Insert";
    } else if (pathname.indexOf("edit") !== -1) {
      myMenuType = "Edit";
    } else if (
      !isEmpty(pathname.split("/")[2]) &&
      pathname.split("/")[1] !== "partenginecategory"
    ) {
      myMenuType = "Detail";
    } else {
      myMenuType = "List";
    }

    setUrlSetting({
      motoUrl: pathname.split("/"),
      menu: pathname.split("/")[1],
      pathName: pathname,
      menuType: myMenuType,
      search: search,
      filterList: myFilterList,
      paging: myPaging,
      sorting: mySorting,
      cardtype: myCardtype,
      loading: false,
      error: null,
    });
  }, [pathname, search]);

  // Энийг сэргээлээ, Хэрвээ Filter, CardType өөрчлөгдөх юм бол тэрийг URL руу тавьж өгье.
  useDidMountEffect(() => {
    //Анхны render дээр ажиллахгүй. https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
    const mySearchQueryParams = [];

    Object.keys(urlSetting.filterList || {}).map((item) => {
      if (urlSetting.filterList[item] !== "") {
        mySearchQueryParams.push(item + "=" + urlSetting.filterList[item]);
      }
    });

    Object.keys(urlSetting.paging || {}).map((item) => {
      if (urlSetting.paging[item] !== "") {
        mySearchQueryParams.push(item + "=" + urlSetting.paging[item]);
      }
    });

    Object.keys(urlSetting.sorting || {}).map((item) => {
      if (urlSetting.sorting[item] !== "") {
        mySearchQueryParams.push(item + "=" + urlSetting.sorting[item]);
      }
    });

    Object.keys(urlSetting.cardtype || {}).map((item) => {
      if (urlSetting.cardtype[item] !== "") {
        mySearchQueryParams.push(item + "=" + urlSetting.cardtype[item]);
        localStorage.setItem(pathname + "cardtype", urlSetting.cardtype[item]);
      }
    });

    setSearchQuery(mySearchQueryParams.join("&"));
  }, [urlSetting]);

  useDidMountEffect(() => {
    // history.push({
    //   pathname: pathname,
    //   search: searchQuery,
    // });
    history.replace({
      pathname: pathname,
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

  const updateParams = (tempObject, clearAll = false) => {
    // console.log("FilterContext → updateParams", tempObject);

    let myObject = !clearAll ? { ...urlSetting } : { ...initialUrlSetting };
    Object.entries(tempObject).map((item, i) => {
      const myKey = item[0]; //"newstypeid"
      // const myValue = "gogogo" + item[1] + "hahaha"; //"206"
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
    // window.scrollTo(0, 0);
    setUrlSetting(myObject);
  };

  const clearAll = () => {
    setUrlSetting({ ...urlSetting, filterList: {}, paging: {}, sorting: {} });
  };

  const updateTotal = (totalcount) => {
    setTotalcount(totalcount);
  };

  return (
    <FilterContext.Provider
      value={{
        urlSetting,
        totalcount,
        loadFilterList,
        updateParams,
        clearAll,
        updateTotal,
      }}
    >
      {process.env.NODE_ENV === "development" && (
        <ContextDevTool
          context={FilterContext}
          id="FilterContextId"
          displayName="FILTER STORE"
        />
      )}

      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
