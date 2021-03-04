import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";

import myAxiosZ from "../util/myAxiosZ";
import {
  prepareEngineList,
  prepareEngineListSettings as mySettings,
  prepareEngineDetail,
} from "util/prepareSpecsEngine";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import { ContextDevTool } from "react-context-devtool";

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

  const initialUniversalList = {
    loadParams: filterContext.universalContextSetting.listSetting.loadParams,
    mainList: [],
    loading: false,
    error: null,
    isFilterDrawerOpen: false,
  };

  const initialUniversalDetail = {
    loadParams: filterContext.universalContextSetting.detailSetting.loadParams,
    mainDetail: [],
    loading: false,
    error: null,
  };

  const [universalList, setUniversalList] = useState(initialUniversalList);
  const [universalDetail, setUniversalDetail] = useState(
    initialUniversalDetail
  );

  useEffect(() => {
    // myMenuType = "Insert";
    // myMenuType = "Edit";
    // myMenuType = "Detail";
    // myMenuType = "List";

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
        loadUniversalList();
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
    console.log("loadUniversalList ДУУДСАН");

    setUniversalList({ ...universalList, loading: true });

    const myParamsUniversalList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...universalList.loadParams,
          criteria: {
            // ...myCriteria,
            // criteria: mySpecialCriteria,
          },
          paging: {
            ...universalList.loadParams.paging,
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
        console.log("myData", myData);
        const myPaging = myData.response?.result?.paging || {};
        const myArray = myData.response?.result || [];

        console.log("myArray", myArray);

        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        // let myTempList = Object.values(myArray);
        let myTempList = {};
        switch (filterContext.urlSetting.menu) {
          case "engine":
            myTempList = prepareEngineList(
              myArray,
              filterContext.urlSetting.menu
            );
            break;

          default:
            break;
        }
        // const myTempList = prepareUniversalList(
        //   myArray,
        //   filterContext.urlSetting.menu
        // );

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

  /*
  const loadUniversalDetail = (id = 0) => {
    setUniversalDetail({ ...universalDetail, loading: true });
    const myParamsUniversalDetail = {
      request: {
        // sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        username:
          memberContext.state.memberUID || "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
        password: "89",
        command: "motoUniversal_List_004",
        parameters: {
          id: id || "",
          memberid: memberContext.state.memberCloudUserSysId || "1598934946963",
          usersystemid:
            memberContext.state.memberCloudUserSysId || "1598934946963",
        },
      },
    };

    // console.log("myParamsUniversalDetail", myParamsUniversalDetail);
    setUniversalDetail(initialUniversalDetail);

    // axios
    //   .post("", myParamsUniversalDetail)
    myAxiosZ(myParamsUniversalDetail)
      .then((myData) => {
        // console.log("AUTOZAR DETAIL RESPONSE------------> ", myData);
        const myArray = myData.response.result || [];
        // console.log("AUTOZAR DETAIL myArray------------> ", myArray);

        const myTempItem = prepareUniversalDetail(
          myArray,
          filterContext.urlSetting.menu
        );

        // console.log("MOTOCAR DETAIL------------> ", myArray);

        setUniversalDetail({
          ...universalDetail,
          loading: false,
          // universalDetail: myArray,
          universalDetail: myTempItem,
        });
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
      });
  };
  */

  const clearUniversalDetail = () => {
    setUniversalDetail(initialUniversalDetail);
  };

  const toggleFilterDrawerOpen = () => {
    setUniversalList({
      ...universalList,
      isFilterDrawerOpen: !universalList.isFilterDrawerOpen,
    });
  };

  return (
    <UniversalContext.Provider
      value={{
        universalList,
        universalDetail,
        loadUniversalList,
        // loadUniversalDetail,
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
