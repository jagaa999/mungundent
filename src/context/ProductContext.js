import React, { useState, useContext, useEffect } from "react";

import { message } from "antd";

import axios from "../util/axiosConfig";
import myAxiosZ from "../util/myAxiosZ";
import {
  prepareProductList,
  prepareProductListSettings as mySettings,
  prepareProductDetail,
} from "util/prepareSpecsProduct";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const ProductContext = React.createContext();

export const ProductStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialProductList = {
    loadParams: {
      systemmetagroupid: "1585197442423220",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        // pageSize: "24",
        // offset: "1",
        pagesize: filterContext.state.paging?.pagesize || "24", //нийтлэлийн тоо
        offset: filterContext.state.paging?.offset || "1", //хуудасны дугаар

        sortcolumnnames: {
          [filterContext.state.sorting?.sortcolumnnames || "itemid"]: {
            sorttype: filterContext.state.sorting?.sorttype || "DESC",
          },
        },
      },
    },
    productList: [],
    loading: false,
    error: null,
    isFilterDrawerOpen: false,
  };

  const initialProductDetail = {
    loadParams: {},
    productDetail: [],
    loading: false,
    error: null,
  };

  const initialKpiFilterList = {
    kpiFilterList: [],
    loading: false,
    error: null,
  };

  const [productList, setProductList] = useState(initialProductList);
  const [productDetail, setProductDetail] = useState(initialProductDetail);
  const [kpiFilterList, setKpiFilterList] = useState(initialKpiFilterList);

  useEffect(() => {
    if (filterContext.state.menu === "product") {
      // myMenuType = "Insert";
      // myMenuType = "Edit";
      // myMenuType = "Detail";
      // myMenuType = "List";
      clearKpiFilterList();

      switch (filterContext.state.menuType) {
        // case "Insert":
        //   clearProductDetail();
        //   break;
        // case "Edit":
        //   clearProductDetail();
        //   break;
        case "Detail":
          clearProductDetail();
          break;
        case "List":
          loadProductList();
          break;
        default:
          clearProductDetail();
          break;
      }

      //Filter дотор kpitemplateid байвал kpi-ийн бүх зүйлсийг дуудах ёстой. Filter-д ашиглана.
      if (filterContext.state.filterList?.kpitemplateid !== undefined) {
        // console.log(
        //   "DDDDDDDDDDDDDDDDDDDDDDDDDD",
        //   filterContext.state.filterList?.kpitemplateid
        // );
        // loadKpiFilterList(filterContext.state.filterList?.kpitemplateid);
        //KPItemplateid биш Category-ийн ID-аар дууддаг юм байна.
        loadKpiFilterList(filterContext.state.filterList?.itemcategoryid);
      }
    }
  }, [filterContext.state, memberContext.state.isLogin]);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadProductList = () => {
    setProductList({ ...productList, loading: true });

    //Criteria-аа бэлтгэж авна.
    //*-той Key байвал Value-г нь atob()-аар string болгож авна. String-ээ Object болгоно.
    let myCriteria = {};
    let specialCriteriaOperand = "0=0";
    Object.keys(filterContext.state.filterList).map((item) => {
      console.log(item, "----", filterContext.state.filterList[item]);
      if (
        item !== "offset" &&
        item !== "pagesize" &&
        item !== "title" &&
        item.charAt(0) !== "*" //буюу Тусгай кодолсон талбар биш байх ёстой.
      ) {
        myCriteria = {
          ...myCriteria,
          [item]: {
            0: {
              operator: "=",
              operand: filterContext.state.filterList[item],
            },
          },
        };
      } else if (item === "title") {
        myCriteria = {
          ...myCriteria,
          [item]: {
            0: {
              operator: "like",
              operand: `%${filterContext.state.filterList[item]}%`,
            },
          },
        };
      } else if (item.charAt(0) === "*") {
        //буюу Тусгай кодолсон талбар биш байх ёстой.
        const myDecodeField = item.substring(1);
        const myTempJSON = JSON.parse(
          atob(filterContext.state.filterList[item] || "") || ""
        );
        // {
        //   indicator_id: "16102833423851";
        //   value: "16102833423911";
        // }

        //myTempJSON -ээс доорх string-ийг гаргаж авах ёстой.
        // ii.item_id in (select book_id from kpi where(kpi.indicator_id=16102833423851 and (Kpi.value = to_char(16102833423931)  )))

        if (specialCriteriaOperand === "") {
          specialCriteriaOperand = `ii.item_id in (select book_id from kpi where(kpi.indicator_id=${myTempJSON.indicator_id} and (Kpi.value = to_char(${myTempJSON.value})  )))`;
        } else {
          specialCriteriaOperand += `and ii.item_id in (select book_id from kpi where(kpi.indicator_id=${myTempJSON.indicator_id} and (Kpi.value = to_char(${myTempJSON.value})  )))`;
        }
      }
    });

    const mySpecialCriteria = [
      {
        operator: "=",
        operand: specialCriteriaOperand,
        // operand: "0=0",
        // operand:
        // "ii.item_id in (select book_id from kpi where(kpi.indicator_id=16102833423851 and (Kpi.value = to_char(16102833423931)  ))) and ii.item_id in (select book_id from kpi where(kpi.indicator_id=16102833255371 and (Kpi.value = to_char(16102833255421)  )))",
      },
    ];

    console.log("myCriteria", myCriteria);

    const myParamsProductList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...productList.loadParams,
          criteria: {
            // ...myCriteria, //түр орхиё. Барааны дотоод ангилалтай зөрчилдөөд байна.

            criteria: mySpecialCriteria,
          },
          paging: {
            ...productList.loadParams.paging,
            pagesize: filterContext.state.paging.pagesize || "24",
            offset: filterContext.state.paging.offset || "1",
            sortcolumnnames: {
              [filterContext.state.sorting.sortcolumnnames || "itemid"]: {
                sorttype: filterContext.state.sorting.sorttype || "DESC",
              },
            },
          },
        },
      },
    };

    // axiosCloud
    // axios
    //   .post("", myParamsProductList)
    myAxiosZ(myParamsProductList)
      .then((myResponse) => {
        // console.log("response---------", myResponse);
        const myData = myResponse.response;

        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result?.paging || {};
          // console.log("myPaging myPaging", myPaging);
          const myArray = myData.result || [];

          console.log("My Response Products", myArray);

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          const myTempList = prepareProductList(
            myArray,
            filterContext.state.menu
          );

          setProductList({
            ...productList,
            loading: false,
            // productList: Object.values(myArray),
            productList: myTempList,
          });

          filterContext.updateTotal(myPaging.totalcount);
        }
      })
      .catch((error) => {
        setProductList({ ...productList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  const clearProductDetail = () => {
    setProductDetail(initialProductDetail);
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######
  const loadProductDetail = (itemid = 0) => {
    const myParamsProductDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "itemCategoryGetDv_004",
        ...productDetail.loadParams,
        parameters: {
          id: itemid,
        },
      },
    };

    // console.log("myParamsProductDetail", myParamsProductDetail);
    setProductDetail(initialProductDetail);
    setProductDetail({ ...productDetail, loading: true });

    axios
      .post("", myParamsProductDetail)
      .then((response) => {
        // console.log("PRODUCT DETAIL RESPONSE------------> ", response);
        const myData = response.data.response;

        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          const myArray = myData.result || [];

          const myTempItem = prepareProductDetail(
            myArray,
            filterContext.state.menu
          );

          setProductDetail({
            ...productDetail,
            loading: false,
            // productDetail: myArray,
            productDetail: myTempItem,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
      });
  };

  const toggleFilterDrawerOpen = () => {
    setProductList({
      ...productList,
      isFilterDrawerOpen: !productList.isFilterDrawerOpen,
    });
  };

  //  #    # ######  ###
  //  #   #  #     #  #
  //  #  #   #     #  #
  //  ###    ######   #
  //  #  #   #        #
  //  #   #  #        #
  //  #    # #       ###

  const loadKpiFilterList = (itemcategoryid = 0) => {
    const myParamsKpiFilterList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "itemCategoryGetDv_004",
        ...kpiFilterList.loadParams,
        parameters: {
          id: itemcategoryid || "",
        },
      },
    };

    // console.log("myParamsKpiFilterList", myParamsKpiFilterList);
    setKpiFilterList(initialKpiFilterList);
    setKpiFilterList({ ...kpiFilterList, loading: true });

    axios
      .post("", myParamsKpiFilterList)
      .then((response) => {
        // console.log("KPI LIST RESPONSE------------> ", response);
        const myData = response.data.response;

        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          const myArray = myData.result || [];
          console.log("KPI LIST myArray------------> ", myArray);

          setKpiFilterList({
            ...kpiFilterList,
            loading: false,
            kpiFilterList: myArray,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
      });
  };

  const clearKpiFilterList = () => {
    setKpiFilterList(initialKpiFilterList);
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        productDetail,
        loadProductList,
        loadProductDetail,
        // saveProductDetail,
        clearProductDetail,
        toggleFilterDrawerOpen,
        kpiFilterList,
        loadKpiFilterList,
        clearKpiFilterList,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
