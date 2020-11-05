import React, { useState, useContext, useEffect } from "react";

import { message } from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const ProductListContext = React.createContext();

export const ProductListStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialStateProductList = {
    loadParams: {
      systemmetagroupid: "1585197442423220",
      showquery: "0",
      ignorepermission: "1",
      // criteria: {
      //   itemtypeid: "1514183113705",
      // },
      paging: {
        pageSize: "24",
        offset: "1",
        // sortcolumnnames: {
        //   createddate: {
        //     sorttype: "DESC", //эрэмбэлэх чиглэл
        //   },
        // },
      },
    },
    productList: [],
    loading: false,
    error: null,
  };

  const [productList, setProductList] = useState(initialStateProductList);

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
        parameters: productList.loadParams,
      },
    };

    // axiosCloud
    axios
      .post("", myParamsProductList)
      .then((response) => {
        console.log("response---------", response);
        const myData = response.data.response;
        if (myData.status === "error") {
          // getError(myData.text);
          message.error(myData.text);
        } else {
          const myPaging = myData.result.paging || {};
          const myArray = myData.result || [];

          delete myArray["aggregatecolumns"];
          delete myArray["paging"];

          setProductList({
            ...productList,
            loading: false,
            productList: Object.values(myArray),
          });
        }
      })
      .catch((error) => {
        setProductList({ ...productList, loading: false, error });
        message.error(error);
        console.log(error);
      });
  };

  return (
    <ProductListContext.Provider
      value={{
        productList,
        loadProductList,
      }}
    >
      {props.children}
    </ProductListContext.Provider>
  );
};

export default ProductListContext;
