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
      criteria: {
        criteria: [
          {
            operator: "=",
            // operand:
            //   "ii.item_id in (select book_id from kpi where(kpi.indicator_id=16102833255371 and (Kpi.value = to_char(16102833255391) or Kpi.value = to_char(16102833255381)  ))) ",
            operand: "0=0",
          },
        ],
      },
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
    isFilterDrawerOpen: true,
  };

  const initialProductDetail = {
    //   {
    //     "request": {
    //         "username": "admin",
    //         "password": "89",
    //         "command": "imItemGetList_004",
    //         "parameters": {
    //             "id": "1599561408426"
    //             // "memberid": "1502764251361501"
    //         }
    //     }
    // }

    // KPI VALUE
    //   {
    //     "request": {
    //         "username": "admin",
    //         "password": "89",
    //         "command": "itemCategoryGetDv_004",
    //         "parameters": {
    //             "id": "16102833369451"

    //             // "memberid": "1502764251361501"
    //         }
    //     }
    // }

    loadParams: {},
    productDetail: [],
    loading: false,
    error: null,
  };

  const [productList, setProductList] = useState(initialProductList);
  const [productDetail, setProductDetail] = useState(initialProductDetail);

  useEffect(() => {
    if (filterContext.state.menu === "product") {
      // myMenuType = "Insert";
      // myMenuType = "Edit";
      // myMenuType = "Detail";
      // myMenuType = "List";

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

    const myParamsProductList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...productList.loadParams,
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
        console.log("response---------", myResponse);
        const myData = myResponse.response;

        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result?.paging || {};
          console.log("myPaging myPaging", myPaging);
          const myArray = myData.result || [];

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
        command: "imItemGetList_004",
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
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
