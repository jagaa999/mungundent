import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";

import myAxiosZ from "../util/myAxiosZ";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import { ContextDevTool } from "react-context-devtool";
import { isEmpty } from "lodash";

const UniversalContext = React.createContext();

export const UniversalStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  //### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  // let initialUniversalList = {
  //   loadParams: {
  //     ...filterContext.urlSetting.contextSetting.myContextListSetting.loadParams,
  //     paging: {
  //       ...filterContext.urlSetting.contextSetting.myContextListSetting.loadParams.paging,
  //       pagesize:
  //         filterContext.urlSetting.paging?.pagesize ||
  //         filterContext.urlSetting.contextSetting.myContextListSetting.loadParams.paging
  //           .pagesize ||
  //         "24",
  //       offset:
  //         filterContext.urlSetting.paging?.offset ||
  //         filterContext.urlSetting.contextSetting.myContextListSetting.loadParams.paging
  //           .offset ||
  //         "1",
  //       sortcolumnnames: {
  //         [filterContext.urlSetting.sorting.sortcolumnnames ||
  //         filterContext.urlSetting.contextSetting.myContextListSetting.loadParams.paging
  //           .sortcolumnname ||
  //         "id"]: {
  //           sorttype:
  //             filterContext.urlSetting.sorting?.sorttype ||
  //             filterContext.urlSetting.contextSetting.myContextListSetting.loadParams
  //               .paging.sorttypename ||
  //             "DESC",
  //         },
  //       },
  //     },
  //   },
  //   mainList: [],
  //   loading: false,
  //   error: null,
  //   isFilterDrawerOpen: false,
  // };
  let initialUniversalList = {
    loadParams:
      filterContext.urlSetting.contextSetting.myContextListSetting.loadParams,
    mainList: [],
    loading: false,
    error: null,
    isFilterDrawerOpen: false,
  };

  const initialUniversalDetail = {
    loadParams: {
      // ...myContextDetailSetting.loadParams,
    },
    mainDetail: {},
    loading: false,
    error: null,
  };

  const [universalList, setUniversalList] = useState(initialUniversalList);
  const [universalDetail, setUniversalDetail] = useState(
    initialUniversalDetail
  );

  useEffect(() => {
    // initialUniversalList = {
    //   loadParams: {},
    //   mainList: [],
    //   loading: false,
    //   error: null,
    //   isFilterDrawerOpen: false,
    // };

    // myMenuType = "Insert";
    // myMenuType = "Edit";
    // myMenuType = "Detail";
    // myMenuType = "List";
    console.log("ЭНД ОРЖ БАЙГАА БИЗ ДЭЭ", filterContext.urlSetting);

    switch (filterContext.urlSetting.menuType) {
      // case "Insert":
      //   clearProductDetail();
      //   break;
      // case "Edit":
      //   clearProductDetail();
      //   break;
      case "Detail":
        clearUniversalDetail();
        break;
      case "List":
        // setUniversalList(initialUniversalList);
        if (
          !isEmpty(
            filterContext.urlSetting.contextSetting.myContextListSetting
              .loadParams.systemmetagroupid
          )
        )
          loadUniversalList();
        // Жаргалаа 3. menuType-ийн Detail, List-ийг prepareSpec тохиргоонууд дотор тавьж өгөх хэрэгтэй.
        break;
      default:
        clearUniversalDetail();
        break;
    }
  }, [filterContext.urlSetting, memberContext.state.isLogin]);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadUniversalList = () => {
    // console.log("loadUniversalList ДУУДСАН", universalList);
    // setUniversalList({ ...initialUniversalList, loading: true });
    setUniversalList({ ...universalList, loading: true });

    // console.log("ӨБөӨӨӨӨӨӨӨ", filterContext.urlSetting.contextSetting);

    let myCriteria = {};
    Object.keys(filterContext.urlSetting.filterList).map((item) => {
      // console.log(item, "----", filterContext.urlSetting.filterList[item]);
      if (
        item !== "offset" &&
        item !== "pagesize" &&
        item.charAt(0) !== "*" &&
        item.charAt(0) !== "~"
      ) {
        myCriteria = {
          ...myCriteria,
          [item]: {
            0: {
              operator: "=",
              operand: filterContext.urlSetting.filterList[item],
            },
          },
        };
        // } else if (item === "title") {
      } else if (item.charAt(0) === "~") {
        myCriteria = {
          ...myCriteria,
          [item.substring(1)]: {
            0: {
              operator: "like",
              operand: `%${filterContext.urlSetting.filterList[item]}%`,
            },
          },
        };
      }
    });

    // console.log(
    //   "RRRRRRRRRR",
    //   filterContext.urlSetting.contextSetting,
    //   universalList
    // );

    const myParamsUniversalList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          // ...initialUniversalList.loadParams,
          ...filterContext.urlSetting.contextSetting.myContextListSetting
            .loadParams,
          criteria: {
            ...filterContext.urlSetting.contextSetting.myContextListSetting
              .loadParams.criteria,
            ...myCriteria,
          },
          paging: {
            // ...initialUniversalList.loadParams.paging,
            ...filterContext.urlSetting.contextSetting.myContextListSetting
              .loadParams.paging,
            pagesize: filterContext.urlSetting.paging.pagesize || "24",
            offset: filterContext.urlSetting.paging.offset || "1",
            sortcolumnnames: {
              [filterContext.urlSetting.sorting.sortcolumnnames || "itemid"]: {
                sorttype: filterContext.urlSetting.sorting.sorttype || "DESC",
              },
            },
          },
        },
      },
    };

    console.log(
      "loadUniversalList myParamsUniversalList",
      myParamsUniversalList
    );

    myAxiosZ(myParamsUniversalList)
      .then((myData) => {
        // console.log("myData", myData);
        const myPaging = myData.response?.result?.paging || {};
        const myArray = myData.response?.result || [];

        // console.log("myArray", myArray);

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        const myTempList = filterContext.urlSetting.contextSetting.myPrepareListFunction(
          myArray,
          filterContext.urlSetting.menu
        );

        setUniversalList({
          ...universalList,
          loading: false,
          mainList: myTempList,
        });

        filterContext.updateTotal(myPaging.totalcount);
      })
      .catch((error) => {
        setUniversalList({ ...universalList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######

  const loadUniversalDetail = (myId = 0) => {
    setUniversalDetail({ ...universalDetail, loading: true });
    const myParamsUniversalDetail = {
      request: {
        username:
          memberContext.state.memberUID || "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
        password: "89",
        command:
          filterContext.urlSetting.contextSetting.myContextDetailSetting
            .command || "",
        parameters: {
          ...filterContext.urlSetting.contextSetting.myContextDetailSetting
            .parameters,
          [filterContext.urlSetting.contextSetting.myContextDetailSetting
            .urlIdField]: myId,
        },
      },
    };

    console.log("myParamsUniversalDetail", myParamsUniversalDetail);

    // axios
    //   .post("", myParamsUniversalDetail)
    myAxiosZ(myParamsUniversalDetail)
      .then((myData) => {
        console.log("UNIVERSAL DETAIL RESPONSE------------> ", myData);
        const myArray = myData.response.result || [];
        console.log("UNIVERSAL DETAIL myArray------------> ", myArray);

        const myTempItem = filterContext.urlSetting.contextSetting.myPrepareDetailFunction(
          myArray,
          filterContext.urlSetting.menu
        );

        // console.log("MOTOCAR DETAIL------------> ", myArray);

        setUniversalDetail({
          ...universalDetail,
          loading: false,
          mainDetail: myTempItem,
        });
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
      });
  };

  const clearUniversalDetail = () => {
    setUniversalDetail(initialUniversalDetail);
  };

  const toggleFilterDrawerOpen = () => {
    setUniversalList({
      ...universalList,
      isFilterDrawerOpen: !universalList.isFilterDrawerOpen,
    });
  };

  // console.log("ddddddd", myUniversalFilterSetting);

  return (
    <UniversalContext.Provider
      value={{
        universalList,
        universalDetail,
        // myUniversalListSetting,
        // myUniversalFilterSetting,
        loadUniversalDetail,
        clearUniversalDetail,
        toggleFilterDrawerOpen,
      }}
    >
      {process.env.NODE_ENV === "development" && (
        <ContextDevTool
          context={UniversalContext}
          id="UniversalContextId"
          displayName="UNIVERSAL STORE"
        />
      )}

      {props.children}
    </UniversalContext.Provider>
  );
};

export default UniversalContext;
