import React, { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { parse } from "query-string";
import MemberContext from "context/MemberContext";
import useDidMountEffect from "util/useDidMountEffect";
import { isEmpty } from "lodash";
import { ContextDevTool } from "react-context-devtool";

import {
  prepareEngineList,
  prepareEngineDetail,
  prepareEngineListSettings,
  prepareEngineDetailSettings,
  prepareEngineContextSettings,
  prepareEngineFilterSettings,
} from "util/specData/prepareSpecsEngine";

import {
  preparePartengineList,
  preparePartengineDetail,
  preparePartengineListSettings,
  preparePartengineDetailSettings,
  preparePartengineContextSettings,
  preparePartengineFilterSettings,
} from "util/specData/prepareSpecsPartengine";

import {
  preparePartenginecategoryList,
  preparePartenginecategoryDetail,
  preparePartenginecategoryListSettings,
  preparePartenginecategoryDetailSettings,
  preparePartenginecategoryContextSettings,
  preparePartenginecategoryFilterSettings,
} from "util/specData/prepareSpecsPartenginecategory";

import {
  preparePartenginepartList,
  preparePartenginepartDetail,
  preparePartenginepartListSettings,
  preparePartenginepartDetailSettings,
  preparePartenginepartContextSettings,
  preparePartenginepartFilterSettings,
} from "util/specData/prepareSpecsPartenginepart";

import {
  preparePartList,
  preparePartDetail,
  preparePartListSettings,
  preparePartDetailSettings,
  preparePartContextSettings,
  preparePartFilterSettings,
} from "util/specData/prepareSpecsPart";

import {
  prepareMotocarList,
  prepareMotocarDetail,
  prepareMotocarListSettings,
  prepareMotocarDetailSettings,
  prepareMotocarContextSettings,
  prepareMotocarFilterSettings,
} from "util/specData/prepareSpecsMotocar";

import {
  prepareNewsList,
  prepareNewsDetail,
  prepareNewsListSettings,
  prepareNewsDetailSettings,
  prepareNewsContextSettings,
  prepareNewsFilterSettings,
} from "util/specData/prepareSpecsNews";

import {
  prepareAutozarList,
  prepareAutozarDetail,
  prepareAutozarListSettings,
  prepareAutozarDetailSettings,
  prepareAutozarContextSettings,
  prepareAutozarFilterSettings,
} from "util/specData/prepareSpecsAutozar";

const FilterContext = React.createContext();

export const FilterStore = (props) => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  // const { ddddId } = useParams();
  const searchParams = parse(search);

  // console.log("??????????????????????????????", useLocation());
  // console.log("??????????????????????", useParams());
  // console.log("??????????????????????", ddddId);

  let myContextListSetting = {
    loadParams: {
      systemmetagroupid: "",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pagesize: "24", //???????????????????? ??????
        offset: "1", //???????????????? ????????????
        sortcolumnnames: "id",
        sorttypename: "DESC",
      },
    },
  };
  let myContextDetailSetting = {};
  let myPrepareListFunction = () => {};
  let myPrepareDetailFunction = () => {};
  let myUniversalListSetting = {
    pagetitle: "??????????????????????",
    menu: "Unknow",
    sortFields: [{}],
    meta: { title: "??????????????????????", property: [] },
  };
  let myUniversalDetailSetting = {
    pagetitle: "??????????????????????",
    menu: "Unknow",
    meta: { title: "??????????????????????", property: [] },
  };
  let myUniversalFilterSetting = { mainSetting: {}, widgets: [] };
  let myDetailBox = "";

  const initialUrlSetting = {
    motoUrl: pathname.split("/"),
    menu: pathname.split("/")[1],
    urlIdValue: pathname.split("/")[2] || "",
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

    contextSetting: {
      myContextListSetting: myContextListSetting,
      myContextDetailSetting: myContextDetailSetting,
      myPrepareListFunction: myPrepareListFunction,
      myPrepareDetailFunction: myPrepareDetailFunction,
      myUniversalListSetting: myUniversalListSetting,
      myUniversalDetailSetting: myUniversalDetailSetting,
      myUniversalFilterSetting: myUniversalFilterSetting,
    },
  };

  const [urlSetting, setUrlSetting] = useState(initialUrlSetting);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalcount, setTotalcount] = useState("0");

  //???????????? URL path ???????????????? ?????????? (?????? ?????????????????? ?????????? ????)
  //Filter-?????? ?????? ?????????????????? ???????????????? ????????????????.
  useEffect(() => {
    clearAll();
  }, [pathname]);

  useEffect(() => {
    const myMotoUrl = pathname.split("/");
    const myMenu = pathname.split("/")[1];
    const myUrlIdValue = pathname.split("/")[2] || "";

    switch (myMenu) {
      case "engine":
        myContextListSetting = prepareEngineContextSettings.listSetting;
        myContextDetailSetting = prepareEngineContextSettings.detailSetting;
        myPrepareListFunction = prepareEngineList;
        myPrepareDetailFunction = prepareEngineDetail;
        myUniversalListSetting = prepareEngineListSettings;
        myUniversalDetailSetting = prepareEngineDetailSettings;
        myUniversalFilterSetting = prepareEngineFilterSettings;

        break;
      case "partengine":
        myContextListSetting = preparePartengineContextSettings.listSetting;
        myContextDetailSetting = preparePartengineContextSettings.detailSetting;
        myPrepareListFunction = preparePartengineList;
        myPrepareDetailFunction = preparePartengineDetail;
        myUniversalListSetting = preparePartengineListSettings;
        myUniversalDetailSetting = preparePartengineDetailSettings;
        myUniversalFilterSetting = preparePartengineFilterSettings;

        break;
      case "partenginecategory":
        myContextListSetting =
          preparePartenginecategoryContextSettings.listSetting;
        myContextDetailSetting =
          preparePartenginecategoryContextSettings.detailSetting;
        myPrepareListFunction = preparePartenginecategoryList;
        myPrepareDetailFunction = preparePartenginecategoryDetail;
        myUniversalListSetting = preparePartenginecategoryListSettings;
        myUniversalDetailSetting = preparePartenginecategoryDetailSettings;
        myUniversalFilterSetting = preparePartenginecategoryFilterSettings;
        break;
      case "partenginepart":
        myContextListSetting = preparePartenginepartContextSettings.listSetting;
        myContextDetailSetting =
          preparePartenginepartContextSettings.detailSetting;
        myPrepareListFunction = preparePartenginepartList;
        myPrepareDetailFunction = preparePartenginepartDetail;
        myUniversalListSetting = preparePartenginepartListSettings;
        myUniversalDetailSetting = preparePartenginepartDetailSettings;
        myUniversalFilterSetting = preparePartenginepartFilterSettings;
        break;
      case "part":
        myContextListSetting = preparePartContextSettings.listSetting;
        myContextDetailSetting = preparePartContextSettings.detailSetting;
        myPrepareListFunction = preparePartList;
        myPrepareDetailFunction = preparePartDetail;
        myUniversalListSetting = preparePartListSettings;
        myUniversalDetailSetting = preparePartDetailSettings;
        myUniversalFilterSetting = preparePartFilterSettings;
        break;
      case "motocar":
        myContextListSetting = prepareMotocarContextSettings.listSetting;
        myContextDetailSetting = prepareMotocarContextSettings.detailSetting;
        myPrepareListFunction = prepareMotocarList;
        myPrepareDetailFunction = prepareMotocarDetail;
        myUniversalListSetting = prepareMotocarListSettings;
        myUniversalDetailSetting = prepareMotocarDetailSettings;
        myUniversalFilterSetting = prepareMotocarFilterSettings;
        break;
      case "news":
        myContextListSetting = prepareNewsContextSettings.listSetting;
        myContextDetailSetting = prepareNewsContextSettings.detailSetting;
        myPrepareListFunction = prepareNewsList;
        myPrepareDetailFunction = prepareNewsDetail;
        myUniversalListSetting = prepareNewsListSettings;
        myUniversalDetailSetting = prepareNewsDetailSettings;
        myUniversalFilterSetting = prepareNewsFilterSettings;
        break;
      case "autozar":
        myContextListSetting = prepareAutozarContextSettings.listSetting;
        myContextDetailSetting = prepareAutozarContextSettings.detailSetting;
        myPrepareListFunction = prepareAutozarList;
        myPrepareDetailFunction = prepareAutozarDetail;
        myUniversalListSetting = prepareAutozarListSettings;
        myUniversalDetailSetting = prepareAutozarDetailSettings;
        myUniversalFilterSetting = prepareAutozarFilterSettings;
        break;

      default:
        break;
    }

    let myFilterList = {};
    let myPaging = { offset: "1", pagesize: "12" };
    let mySorting = {
      sortcolumnnames: myContextListSetting.loadParams.paging.sortcolumnnames,
      sorttype: myContextListSetting.loadParams.paging.sorttypename,
    };
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

    //pathName-?????? ?????????????? menuType-?? ???????????? ???????????? ???????????????? ????????.
    //List, Detail, Form (Insert, Edit) ?????????? 3 ?????? ?????????? ??????.
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
      pathname.split("/")[1] !== "partenginecategory" &&
      pathname.split("/")[1] !== "partenginepart"
    ) {
      myMenuType = "Detail";
    } else {
      myMenuType = "List";
    }

    if (!isEmpty(myContextListSetting.urlIdField)) {
      myContextListSetting.loadParams.criteria = {
        ...myContextListSetting.loadParams.criteria,
        [myContextListSetting.urlIdField]: myUrlIdValue,
        // ???????? ?????????? 5 ?????? URL Setting ???????????? ?????????????????????? ????????????
      };
    }

    console.log("?????? ?????? ??????????.");
    setUrlSetting({
      motoUrl: myMotoUrl,
      menu: myMenu,
      urlIdValue: myUrlIdValue,
      pathName: pathname,
      menuType: myMenuType,
      search: search,
      filterList: myFilterList,
      paging: myPaging,
      sorting: mySorting,
      cardtype: myCardtype,
      loading: false,
      error: null,
      contextSetting: {
        myContextListSetting: myContextListSetting,
        myContextDetailSetting: myContextDetailSetting,
        myPrepareListFunction: myPrepareListFunction,
        myPrepareDetailFunction: myPrepareDetailFunction,
        myUniversalListSetting: myUniversalListSetting,
        myUniversalDetailSetting: myUniversalDetailSetting,
        myUniversalFilterSetting: myUniversalFilterSetting,
        myDetailBox: myDetailBox,
      },
    });
  }, [pathname, search]);

  // ?????????? ??????????????????, ???????????? Filter, CardType ???????????????????? ???? ?????? ???????????? URL ?????? ?????????? ????????.
  useDidMountEffect(() => {
    //?????????? render ???????? ????????????????????. https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
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
    // console.log("FilterContext ??? updateParams", tempObject);

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
    console.log("?????? ???????? ?????????? ??????????.");
    setUrlSetting({ ...urlSetting, ...myObject });
  };

  const clearAll = () => {
    console.log("?????? ?????????? ?????????? ??????????.");
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
