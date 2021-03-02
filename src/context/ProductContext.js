import React, { useState, useContext, useEffect } from "react";
import moment from "moment";
import { message, Modal, Button } from "antd";

import axios from "../util/axiosConfig";
import myAxiosZ from "../util/myAxiosZ";
import {
  prepareProductList,
  prepareProductListSettings as mySettings,
  prepareProductDetail,
} from "util/prepareSpecsProduct";
import MyIcon from "util/iconFunction";
import { loadDataview } from "util/axiosFunction";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import { ContextDevTool } from "react-context-devtool";
import OrderModal from "components/Moto/Order/OrderModal";

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
    productDetail: {},
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
  const [productCategoryList, setProductCategoryList] = useState({
    loading: false,
    productCategoryList: [],
  });
  const [order, setOrder] = useState({
    isModal: false,
    orderDetail: {},
    orderList: [],
  });

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
          loadProductCategoryList();
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
        loadKpiFilterList(filterContext.state.filterList?.generalcategoryid);
      }
    }
  }, [filterContext.state, memberContext.state.isLogin]);

  //orderModal харуулах үед Login хийгдсэн эсэхийг шалгаж байгаа юм.
  // useEffect(() => {
  //   if (order.isModal) {
  //     if (!memberContext.state.isLogin) {
  //       memberContext.isModal(true);
  //       // return null;
  //       setOrder({ ...order, isModal: false });
  //     }
  //   }
  // }, [order.isModal]);

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
      // console.log(item, "----", filterContext.state.filterList[item]);
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

    // console.log("myCriteria", myCriteria);

    const myParamsProductList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "PL_MDVIEW_004",
        parameters: {
          ...productList.loadParams,
          criteria: {
            ...myCriteria,
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

    // console.log(myParamsProductList);

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

          // console.log("My Response Products", myArray);

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
          memberid: memberContext.state.memberCloudUserSysId || "1598934946963",
          usersystemid:
            memberContext.state.memberCloudUserSysId || "1598934946963",
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

        // console.log("PRODUCT DETAIL", myData);

        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          const myArray = myData.result || [];

          const myTempItem = prepareProductDetail(
            myArray,
            filterContext.state.menu
          );
          // console.log("FFFFFFFFF productDetail", productDetail);
          setProductDetail({
            ...productDetail,
            loading: false,
            // productDetail: myArray,
            productDetail: myTempItem,
          });
          setOrder({
            ...order,
            orderDetail: {
              itemid: myTempItem.id,
              total: myTempItem.saleprice,
              unitamount: myTempItem.saleprice,
              linetotalamount: myTempItem.saleprice,
            },
          });
          // console.log("FFFFFFFFF myTempItem", myTempItem);
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

  const loadKpiFilterList = (generalcategoryid = 0) => {
    const myParamsKpiFilterList = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "itemCategoryGetDv_004",
        ...kpiFilterList.loadParams,
        parameters: {
          id: generalcategoryid || "",
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

  const loadProductCategoryList = async () => {
    setProductCategoryList({ ...productCategoryList, loading: true });
    setProductCategoryList({
      productCategoryList: await loadDataview({
        systemmetagroupid: "1486357548092",
        criteria: {
          parentCategoryId: [
            {
              operator: "=",
              operand: "16102833377461",
            },
          ],
        },
        paging: {
          sortColumnNames: {
            itemcategoryname: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });
  };

  //  ####### ######  ######  ####### ######
  //  #     # #     # #     # #       #     #
  //  #     # #     # #     # #       #     #
  //  #     # ######  #     # #####   ######
  //  #     # #   #   #     # #       #   #
  //  #     # #    #  #     # #       #    #
  //  ####### #     # ######  ####### #     #
  const saveOrderProduct = (values) => {
    const myParamsOrderProductDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        command: "motoSdmOrderBookDv_001", //Order Save Process
        parameters: {
          customerid: memberContext.memberDetail.memberDetail.customerid,
          ordernumber: values.ordernumber || moment().format("YYYYMMDDHHmmss"),
          enddate: moment(values.enddate).format("YYYY-MM-DD"),
          itemid: values.itemid || values.id || "",
          timerangeid: values.timerangeid || "",
          total: values.total || "",
          orderbookdtl: {
            itemid: values.itemid || values.id || "",
            unitamount: values.unitamount || "",
            linetotalamount: values.linetotalamount || "",
          },
        },
      },
    };

    console.log("myParamsOrderProductDetail", myParamsOrderProductDetail);
    // return null;

    axios
      .post("", myParamsOrderProductDetail)
      .then((response) => {
        console.log("Save OrderDetail:   ", response);
        const myData = response.data.response;
        console.log("After Save OrderDetail ------------>", myData);
        if (myData.status === "error") {
          message.error(myData.text, 7);
        } else {
          message.success(
            "Захиалгыг амжилттай бүртгэлээ. Өдрийг сайхан өнгөрүүлээрэй."
          );
          // history.push({
          //   pathname: "/news",
          // });
        }
      })
      .catch((error) => {
        message.error(error, 7);
      });
  };

  const isOrderModal = (isVisible) => {
    setOrder({
      ...order,
      isModal: isVisible,
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
        kpiFilterList,
        productCategoryList,
        loadKpiFilterList,
        clearKpiFilterList,
        saveOrderProduct,
        isOrderModal,
        order,
        setOrder,
      }}
    >
      <ContextDevTool
        context={ProductContext}
        id="uniqContextId"
        displayName="PRODUCT STORE PROVIDER"
      />

      {props.children}
      <OrderModal order={order} isOrderModal={isOrderModal} />
    </ProductContext.Provider>
  );
};

export default ProductContext;

/*


-- Хөдөлгүүрийн кодын дагуу Engine ID олж авна.
-- AMS2_ENGINES
SELECT
	ENG.ID AS ENGINEID,
	ENG.DESCRIPTION,
	ENG.FULLDESCRIPTION,
	ENG.MANUFACTURERID 
FROM
	AMS2_ENGINES ENG 
WHERE
	ENG.ISENGINE = 'True' 
	AND ENG.CANBEDISPLAYED = 'True' 
	AND ENG.DESCRIPTION = '2AZ-FXE'
-- 2AZ-FXE = 19295 (Toyota) болно.


-- Хөдөлгүүрийн ID дагуу таарах сэлбэгийн мод олж авна.
-- AMS2_ENGINE_TREES (Филтер гэсэн ангилал олж авна.)
SELECT
	ETR.ENGINEID,
	ETR.ID AS NODEID,
	ETR.PARENTID,
	ETR.DESCRIPTION 
FROM
	AMS2_ENGINE_TREES ETR 
WHERE
	ETR.ENGINEID = 19295
-- 300001 NODEID-тай Фильтр жишээ нь гаргаж авна.







--PRODUCT буюу сэлбэгийн ерөнхий ID гаргаж авна.
-- AMS2_ENGINE_PDS нь холбогч Mapping Table
-- AMS2_ENGINE_PRD нь Product гаргаж өгнө.
SELECT
	EPDS.ENGINEID,
	EPDS.NODEID,
	EPDS.SUPPLIERID,
	EPDS.PRODUCTID,
	EPRD.* 
FROM
	AMS2_ENGINE_PDS EPDS
	LEFT JOIN AMS2_ENGINE_PRD EPRD ON EPDS.PRODUCTID = EPRD.ID 
WHERE
	EPDS.ENGINEID = 19295 
	AND EPDS.NODEID = 300001

-- доод үндсэн Query-д энэ жижиг query-г ашиглана.





-- ARTICLE_LINKS -ийн LINKAGETYPEID passangercar 2, engine 14, commercial 16, motorbike 777, axle 19


SELECT
	ALINKS.SUPPLIERID,
	ALINKS.PRODUCTID,
	ALINKS.LINKAGETYPEID,
	ALINKS.LINKAGEID,
	ALINKS.DATASUPPLIERARTICLENUMBER,
	EPRD.*,
	EPDS.*,
	SUP.* 
FROM
	AMS2_ARTICLE_LINKS ALINKS
	LEFT JOIN AMS2_ENGINE_PDS EPDS ON ALINKS.SUPPLIERID = EPDS.SUPPLIERID 
																AND ALINKS.PRODUCTID = EPDS.PRODUCTID 
																AND ALINKS.LINKAGEID = EPDS.ENGINEID
	LEFT JOIN AMS2_ENGINE_PRD EPRD ON EPDS.PRODUCTID = EPRD.ID
	LEFT JOIN AMS2_SUPPLIERS SUP ON ALINKS.SUPPLIERID = SUP.ID 
WHERE
	EPDS.ENGINEID = 19295 
	AND EPDS.NODEID = 300001 
	AND ALINKS.LINKAGETYPEID = 14 --ENGINE

-- Жишээ нь WG1380658 гэсэн DATASUPPLIERARTICLENUMBER дугаартай агаар шүүгчийг гаргаж авч байна.



SELECT 
  ALINKS.SUPPLIERID, 
  ALINKS.PRODUCTID, 
  ALINKS.LINKAGETYPEID, 
  ALINKS.LINKAGEID, 
  ALINKS.DATASUPPLIERARTICLENUMBER, 
  EPDS.NODEID, 
  EPRD.ASSEMBLYGROUPDESCRIPTION, 
  EPRD.DESCRIPTION, 
  EPRD.NORMALIZEDDESCRIPTION, 
  EPRD.USAGEDESCRIPTION, 
  SUP.DATAVERSION, 
  SUP.DESCRIPTION, 
  SUP.MATCHCODE, 
  SUP.NBROFARTICLES, 
  SUP.HASNEWVERSIONARTICLES 
FROM 
  AMS2_ARTICLE_LINKS ALINKS 
  LEFT JOIN AMS2_ENGINE_PDS EPDS ON ALINKS.SUPPLIERID = EPDS.SUPPLIERID 
  AND ALINKS.PRODUCTID = EPDS.PRODUCTID 
  AND ALINKS.LINKAGEID = EPDS.ENGINEID 
  LEFT JOIN AMS2_ENGINE_PRD EPRD ON EPDS.PRODUCTID = EPRD.ID 
  LEFT JOIN AMS2_SUPPLIERS SUP ON ALINKS.SUPPLIERID = SUP.ID 
WHERE 
  ALINKS.LINKAGETYPEID = 14 --ENGINE


  


-- Сэлбэгийн OEM Number гаргаж авах
SELECT
	AM.description,
	AAOE.OENbr 
FROM
	AMS2_ARTICLE_OE AAOE
	JOIN AMS2_MANUFACTURERS AM ON AM.ID = AAOE.MANUFACTURERID
WHERE
	AAOE.DATASUPPLIERARTICLENUMBER = 'WG1380658'
	AND AM.ISENGINE = 'True'
	-- AND a.supplierid = '" . $brand_id . "'
	
-- Энэ Агаар шүүгч жишээ нь Toyota-ийн 3 загварт таарна.


-- Статус изделия
-- Сэлбэгийн төлвийг үзэх юм байна. Нээх онц хэрэггүй эд бололтой.
SELECT
	NormalizedDescription,
	ArticleStateDisplayValue 
FROM
	ams2_articles 
WHERE
	DataSupplierArticleNumber = 'WG1380658' 
-- 	AND supplierId = '" . $brand_id . "'


-- Сэлбэгийн дата олж авах
SELECT
  AAA.SUPPLIERID,
  AAA.DATASUPPLIERARTICLENUMBER,
	AAA.DESCRIPTION,
	AAA.DISPLAYTITLE,
	AAA.DISPLAYVALUE 
FROM
	AMS2_ARTICLE_ATTRIBUTES AAA
WHERE
	AAA.DATASUPPLIERARTICLENUMBER = 'WG1380658'
-- 	AND a.supplierid = '" . $brand_id . "'


-- Сэлбэгийн файл олж авах
SELECT
	Description,
	PictureName 
FROM
	ams2_article_images 
WHERE
	DataSupplierArticleNumber = 'WG1380658' 



-- Применимость изделия
-- Тухайн сэлбэг ямар Engine-үүдэд таарах вэ?
-- AMS2_ARTICLE_LI - Тухайн сэлбэг ямар engine, ямар car-д таарах вэ гэдгийг гаргана.
SELECT
	linkageTypeId,
	linkageId 
FROM
	ams2_article_li 
WHERE
	DataSupplierArticleNumber = 'WG1380658' 
	-- 	AND a.supplierid = '" . $brand_id . "'


-- Замены изделия
-- ARTICLE_RN
SELECT
	s.description supplier,
	a.replacenbr
FROM
	ams2_article_rn a
	JOIN ams2_suppliers s ON s.id = a.replacedsupplierid 
WHERE
	a.datasupplierarticlenumber = 'WG1380658' 
-- 	AND a.supplierid = '" . $brand_id . "'


--Аналоги-заменители
-- Кросс сэлбэгүүд
-- AMS2_ARTICLE_CROSS
SELECT DISTINCT
	s.description,
	c.PartsDataSupplierArticleNumber 
FROM
	ams2_article_oe a
	JOIN ams2_manufacturers m ON m.id = a.manufacturerId
	JOIN ams2_article_cross c ON c.OENbr = a.OENbr
	JOIN ams2_suppliers s ON s.id = c.SupplierId 
WHERE
	a.datasupplierarticlenumber = 'WG1380658' 
-- 	AND a.supplierid = '" . $brand_id . "'


--Комплектующие (части) изделия
SELECT DISTINCT
	description Brand,
	Quantity,
	PartsDataSupplierArticleNumber 
FROM
	ams2_article_parts
	JOIN ams2_suppliers ON id = PartsSupplierId 
WHERE
	DataSupplierArticleNumber = 'WG1380658' 
-- 	AND supplierId = '" . $brand_id . "'









*/
