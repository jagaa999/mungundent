import React, { useState, useContext, useEffect } from "react";
import { message } from "antd";

import axios from "axios";
import { stringify } from "query-string";

import {
  prepareAuctionList,
  prepareAuctionListSettings as mySettings,
} from "util/specData/prepareSpecsAuction";
import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";
import LogContext from "context/LogsContext";

const AuctionContext = React.createContext();

export const AuctionStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);
  const logContext = useContext(LogContext);

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialAuctionList = {
    loadParams: {
      sql: "select * from main limit 24",
    },
    auctionList: [],
    loading: false,
    error: null,
    isFilterDrawerOpen: false,
    where: "",
  };

  const initialAuctionDetail = {
    loadParams: {},
    AuctionDetail: [],
    loading: false,
    error: null,
  };

  const initialAuctionSameList = {
    loadParams: {
      sql: "select * from main limit 24",
    },
    auctionSameList: [],
    loading: false,
    error: null,
  };

  const [auctionList, setAuctionList] = useState(initialAuctionList);
  const [auctionDetail, setAuctionDetail] = useState(initialAuctionDetail);
  const [auctionSameList, setAuctionSameList] = useState(
    initialAuctionSameList
  );

  useEffect(() => {
    if (filterContext.urlSetting.menu !== "auction") return;
    loadAuctionList();
  }, [
    filterContext.urlSetting,
    // filterContext.urlSetting.filterList,
    // filterContext.urlSetting.paging,
    // filterContext.urlSetting.sorting,
    // filterContext.urlSetting.cardtype,
    memberContext.state.isLogin,
  ]);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadAuctionList = () => {
    setAuctionList({ ...auctionList, loading: true });

    let myTempObject = [];
    let myTempObject2 = "";

    Object.keys(filterContext.urlSetting.filterList).map((val, k) => {
      if (["marka_id", "model_id", "kuzov", "rate"].includes(val)) {
        // val нь эдгээрийн аль нэг мөн эсэх?
        // console.log("1-", val);
        // console.log("2-", filterContext.urlSetting.filterList[val]);
        myTempObject.push({
          label: val,
          value: filterContext.urlSetting.filterList[val],
          operator: "=",
        });
      }
      if (val === "yearstart") {
        myTempObject.push({
          label: "year",
          value: filterContext.urlSetting.filterList[val],
          operator: ">=",
        });
      }
      if (val === "yearend") {
        myTempObject.push({
          label: "year",
          value: filterContext.urlSetting.filterList[val],
          operator: "<=",
        });
      }
      if (val === "search") {
        myTempObject2 = `(kuzov like '%${filterContext.urlSetting.filterList[val]}%' or grade like '%${filterContext.urlSetting.filterList[val]}%' or lot like '%${filterContext.urlSetting.filterList[val]}%')`;
      }
    });

    // select * from main where model_name='corolla' and marka_name='toyota' and (rate>='3' and rate<='6') and year>=1990 order by year desc limit 4,50

    // convert objec to a query string
    const qs0 = myTempObject
      .map((item) => `${item.label}${item.operator}'${item.value}'`)
      .join(" AND ");

    const qs =
      qs0 + (qs0 !== "" && myTempObject2 !== "" ? " AND " : "") + myTempObject2; //Аль аль нь хоосон биш байвал дунд нь AND залгаж өгнө.

    // console.log("PPPPPPPPPPPPP", qs);

    let myWhere = "";
    if (qs !== "") {
      myWhere = "where " + qs;
    }

    // console.log("PPPPPPPPPPPPP WHERE", myWhere);

    if (filterContext.urlSetting.filterList?.marka_id) {
      myTempObject.marka_id = filterContext.urlSetting.filterList?.marka_id;
    }

    const mySQLCount = `select Count(*) from main ${myWhere}`;

    const myParamsAuctionListCount = {
      ...initialAuctionList.loadParams,
      sql: mySQLCount,
    };

    //FOR COUNT
    axios
      .get(
        "https://us-central1-moto-86243.cloudfunctions.net/loadAuction?" +
          stringify(myParamsAuctionListCount)
      )
      .then((response) => {
        // console.log("DDDDDDDDDDD", response);
        const myCount = response.data.response[0]?.TAG0 || "0";
        filterContext.updateTotal(myCount);
      })
      .catch((error) => {
        console.log("error", error);
      });

    //FOR LIST
    const myPagesize = filterContext.urlSetting.paging.pagesize || "12";
    const myOffset = String(
      (Number(filterContext.urlSetting.paging.offset || "1") - 1) * 12
    );
    const mySortColumn =
      filterContext.urlSetting.sorting?.sortcolumnnames ||
      mySettings.sortFields[0].field;
    const mySortType = filterContext.urlSetting.sorting?.sorttype || "DESC";
    //LIMIT 15, 10 (16 дах бичлэгээс эхлэн 10 мөрийг авчир)
    // offset 1 гэдэг нь 0 гэж гарах ёстой. (1-1) * 12
    // offset 2 гэдэг нь 12 гэж гарах ёстой. (2-1) * 12
    // offset 3 гэдэг нь 24 гэж гарах ёстой. (3-1) * 12

    const mySQL = `select * from main ${myWhere} order by ${mySortColumn} ${mySortType} limit ${myOffset}, ${myPagesize}`;
    const myParamsAuctionList = {
      ...initialAuctionList.loadParams,
      sql: mySQL,
    };

    // console.log("myParamsAuctionList", myParamsAuctionList);

    axios
      .get(
        "https://us-central1-moto-86243.cloudfunctions.net/loadAuction?" +
          stringify(myParamsAuctionList)
      )
      .then((response) => {
        // console.log("OOOOPPPPPPPPPPPP", response);

        const myTempList = prepareAuctionList(
          response.data.response || [],
          filterContext.urlSetting.menu
        );

        setAuctionList({
          ...auctionList,
          loading: false,
          // auctionList: response.data.response || [],
          auctionList: myTempList,
          where: myWhere,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const clearAuctionList = () => {
    setAuctionList(initialAuctionList);
  };

  const toggleFilterDrawerOpen = () => {
    setAuctionList({
      ...auctionList,
      isFilterDrawerOpen: !auctionList.isFilterDrawerOpen,
    });
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######
  const loadAuctionDetail = (id = 0) => {
    // console.log("myParamsAuctionDetail", myParamsAuctionDetail);
    setAuctionDetail(initialAuctionDetail);
    setAuctionDetail({ ...auctionDetail, loading: true });

    const myParamsAuctionDetail = {
      ...initialAuctionList.loadParams,
      sql: `select * from main where id='${id}'`,
    };

    // console.log("myParamsAuctionDetail", myParamsAuctionDetail);

    axios
      .get(
        "https://us-central1-moto-86243.cloudfunctions.net/loadAuction?" +
          stringify(myParamsAuctionDetail)
      )
      .then((response) => {
        // console.log("DDDDDDDDDDD", response);
        const auctionDetail = response.data.response[0];
        console.log("auctionDetail", auctionDetail);
        console.log(
          "memberContext.state.memberCloudUserSysId",
          memberContext.state.memberCloudUserSysId
        );

        setAuctionDetail({
          ...auctionDetail,
          loading: false,
          auctionDetail: auctionDetail,
        });

        //Гишүүн Detail дуудсан Log-ийг бичнэ.

        if (
          memberContext.state.memberCloudUserSysId != 0 &&
          memberContext.state.memberCloudUserSysId != 1598935351417 &&
          auctionDetail != undefined &&
          auctionDetail != null
        ) {
          console.log("Ийшээ ороод бйана шдээ");

          logContext.insertLog({
            // recordId: id, //string байгаа тул recordId болохгүй байна.
            actionType: id, //string байгаа тул recordId болохгүй байна.
            tableName: "Auction",
            actionName: "Үзэв",
            description: `${auctionDetail.YEAR || ""}  ${
              auctionDetail.MARKA_NAME || ""
            } ${auctionDetail.MODEL_NAME || ""} ${auctionDetail.GRADE || ""}`,
            idstring: auctionDetail.IMAGES.split("#")[1],
          });
        }
      })

      .catch((error) => {
        console.log("EEEEEEE", error);
      });
  };

  const clearAuctionDetail = () => {
    setAuctionDetail(initialAuctionDetail);
  };

  //   #####     #    #     # #######
  //  #     #   # #   ##   ## #
  //  #        #   #  # # # # #
  //   #####  #     # #  #  # #####
  //        # ####### #     # #
  //  #     # #     # #     # #
  //   #####  #     # #     # #######

  const loadAuctionSameList = (auctionItem) => {
    setAuctionSameList({ ...auctionSameList, loading: true });

    const myParamsAuctionSameList = {
      ...initialAuctionList.loadParams,
      // sql: `select * from stats WHERE marka_id='${auctionItem.MARKA_ID}' and model_id='${auctionItem.MODEL_ID}' and year='${auctionItem.YEAR}' and eng_v='${auctionItem.ENG_V}' and kuzov='${auctionItem.KUZOV}' and grade='${auctionItem.GRADE}' and rate='${auctionItem.RATE}' and status='sold'`,
      sql: `select * from stats WHERE marka_id='${auctionItem.MARKA_ID}' and model_id='${auctionItem.MODEL_ID}' and year='${auctionItem.YEAR}' and kuzov='${auctionItem.KUZOV}' and finish<>'0' and rate='${auctionItem.RATE}' and status='sold' limit 12`,
    };

    // console.log("myParamsAuctionSameList", myParamsAuctionSameList);

    axios
      .get(
        "https://us-central1-moto-86243.cloudfunctions.net/loadAuction?" +
          stringify(myParamsAuctionSameList)
      )

      .then((response) => {
        // console.log("DDDDDDDDDDD", response);

        setAuctionSameList({
          ...auctionSameList,
          loading: false,
          auctionSameList: response.data.response,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <AuctionContext.Provider
      value={{
        auctionList,
        auctionDetail,
        auctionSameList,
        loadAuctionList,
        clearAuctionList,
        toggleFilterDrawerOpen,
        loadAuctionDetail,
        // saveAuctionDetail,
        clearAuctionDetail,
        loadAuctionSameList,
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContext;

// Бүх машин
//select * from main limit 10

//Фирм жагсаалт (Count)
// select marka_id,marka_name from main group by marka_id order by marka_id ASC limit 0,50
// select marka_id,marka_name from main group by marka_id order by marka_name ASC

//Марк жагсаалт (Count)
//select model_id,model_name from main where marka_name='toyota' group by model_id order by model_name

//Шүүлтүүр бүхий жагсаалт
// select * from main where model_name='corolla' and marka_name='toyota' and (rate>='3' and rate<='6') and year>=1990 order by year desc limit 4,50

// select auction,auction_date,images from main WHERE id='123'
// select auction_date,images from stats WHERE id='123'

// select distinct marka_id,model_name from main order by marka_id,model_name

// select marka_id,model_name from main group by model_id

// select COUNT(distinct model_id) from main

// select COUNT(*) from stats WHERE marka_name='toyota' group by marka_id

//Маркийн жагсаалт (фирмээр шүүсэн)
// select model_id,model_name,COUNT(model_id) from stats where marka_name='toyota' group by model_id order by model_name

//Зарагдсан дундаж үнэ
// select AVG(finish), model_name from stats WHERE marka_name='toyota' and status='sold' group by model_id

//select * from stats WHERE marka_id='5' and model_id='567' and year='2018' and eng_v='2000' and kuzov='FK8' and grade='TYPE R 5D' and status='sold' and rate='5'

// select auction, auction_date FROM main GROUP BY auction, DATE_FORMAT(auction_date,'%Y-%m-%d')

//Тухайн өдрийн машинууд
// select * from stats WHERE auction_date LIKE '2020-10-20%' limit 5

// select * from stats WHERE DATE(auct_date) = '2020-10-20' limit 5
