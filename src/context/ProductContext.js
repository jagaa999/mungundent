import React, { useState, useContext, useEffect } from "react";

import { message } from "antd";

import axios from "util/axiosConfig";
import axiosCloud from "util/axiosCloudConfig";
// import axiosCloud from "util/axiosConfig";
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

  const initialProductDetail = {
    loadParams: {
      // systemmetagroupid: "1600405606733265",
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pageSize: "1",
        offset: "1",
      },
    },
    ProductDetail: [],
    loading: false,
    error: null,
  };

  const [productList, setProductList] = useState(initialProductList);
  const [productDetail, setProductDetail] = useState(initialProductDetail);

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
  const loadProductDetail = (id = 0) => {
    // console.log("ЭЭЭЭЭЭЭЭЭЭ", id);

    const myParamsProductDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: {
          ...productDetail.loadParams,
          criteria: {
            id: {
              0: {
                operator: "=",
                operand: id,
              },
            },
          },
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
        const myArray = response.data.response.result[0] || [];
        // console.log("PRODUCT DETAIL myArray------------> ", myArray);
        // myArray.caryearmanufactured = moment(myArray.caryearmanufactured);
        // myArray.caryearimport = moment(myArray.caryearimport);
        // myArray.mglengine2disp = myArray.mglengine2disp * 1;
        // myArray.carmilageimport = myArray.carmilageimport * 1;
        // myArray.carmilagenow = myArray.carmilagenow * 1;
        // myArray.mgldoor = myArray.mgldoor * 1;
        // myArray.mglseat = myArray.mglseat * 1;
        // myArray.mgldrivepos = myArray.mgldrivepos === "1" ? true : false;
        // myArray.isactive = myArray.isactive === "1" ? true : false;
        // myArray.imagemainFileList = [];
        // myArray.imagemainFileList =
        //   myArray.imagemain !== undefined &&
        //   (myArray.imagemain !== ""
        //     ? [
        //         {
        //           uid: "-1",
        //           name: "Тодорхойгүй",
        //           status: "done",
        //           url: myArray.imagemain || "",
        //           thumbUrl: myArray.imagemain || "",
        //           response: { url: myArray.imagemain || "" },
        //         },
        //       ]
        //     : []);
        // myArray.imageotherFileList = [];
        // myArray.imageotherFileList =
        //   myArray.imageother !== undefined &&
        //   (myArray.imageother !== ""
        //     ? JSON.parse(myArray.imageother).map((item, index) => ({
        //         uid: index - 1,
        //         name: item.replace(/^.*[\\\/]/, ""),
        //         status: "done",
        //         url: item || "",
        //         thumbUrl: item || "",
        //         response: { url: item || "" },
        //       }))
        //     : []);

        // console.log("PRODUCT DETAIL------------> ", myArray);

        setProductDetail({
          ...productDetail,
          loading: false,
          productDetail: myArray,
        });
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
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
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;