import React, { useState, useContext, useEffect } from "react";
import { message } from "antd";

import axiosAuction from "util/axiosAuctionConfig";
import axios1 from "axios";
import { stringify } from "query-string";

import MemberContext from "context/MemberContext";
import FilterContext from "context/FilterContext";

const AuctionContext = React.createContext();

export const AuctionStore = (props) => {
  const memberContext = useContext(MemberContext);
  const filterContext = useContext(FilterContext);

  // ### #     # ### #######
  // #  ##    #  #     #
  // #  # #   #  #     #
  // #  #  #  #  #     #
  // #  #   # #  #     #
  // #  #    ##  #     #
  //### #     # ###    #

  const initialAuctionList = {
    loadParams: {
      // code: "DvemR43s",
      code: "Lms7sw3_Cbna",
      sql: "select * from main limit 24",
    },
    auctionList: [],
    loading: false,
    error: null,
    isFilterDrawerOpen: true,
  };

  const initialAuctionDetail = {
    loadParams: {},
    AuctionDetail: [],
    loading: false,
    error: null,
  };

  const initialAuctionSameList = {
    loadParams: {
      code: "Lms7sw3_Cbna",
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
    loadAuctionList();
  }, [
    filterContext.state.filterList,
    filterContext.state.paging,
    filterContext.state.sorting,
    filterContext.state.cardtype,
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

    Object.keys(filterContext.state.filterList).map((val, k) => {
      if (["marka_id", "model_id", "kuzov", "rate"].includes(val)) {
        // val нь эдгээрийн аль нэг мөн эсэх?
        // console.log("1-", val);
        // console.log("2-", filterContext.state.filterList[val]);
        myTempObject.push({
          label: val,
          value: filterContext.state.filterList[val],
          operator: "=",
        });
      }
      if (val === "yearstart") {
        myTempObject.push({
          label: "year",
          value: filterContext.state.filterList[val],
          operator: ">=",
        });
      }
      if (val === "yearend") {
        myTempObject.push({
          label: "year",
          value: filterContext.state.filterList[val],
          operator: "<=",
        });
      }
    });

    // select * from main where model_name='corolla' and marka_name='toyota' and (rate>='3' and rate<='6') and year>=1990 order by year desc limit 4,50

    // console.log("myTempObject", myTempObject);

    // convert objec to a query string
    const qs = myTempObject
      .map((item) => `${item.label}${item.operator}'${item.value}'`)
      .join(" AND ");

    // console.log("PPPPPPPPPPPPP", qs);

    let myWhere = "";
    if (qs !== "") {
      myWhere = "where " + qs;
    }

    if (filterContext.state.filterList?.marka_id) {
      myTempObject.marka_id = filterContext.state.filterList?.marka_id;
    }

    const mySQL = `select * from main ${myWhere} order by year desc limit 24`;

    const myParamsAuctionList = {
      ...initialAuctionList.loadParams,
      sql: mySQL,
    };

    console.log("myParamsAuctionList", myParamsAuctionList);

    const myParams = stringify(myParamsAuctionList);
    console.log("myParamsmyParams", myParams);

    return (
      axios1
        .get(
          "https://cors-anywhere.herokuapp.com/http://50.23.198.149/xml/json" +
            "?" +
            myParams,
          {
            headers: {
              "Content-Type": "application/json",
              // "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
            },
          }
        )

        // axios1
        //   .get(
        //     "https://cors-anywhere.herokuapp.com/http://50.23.198.149/xml/json?code=Lms7sw3_Cbna&sql=select%20*%20from%20main%20where%20model_id=4%20order%20by%20year%20desc%20limit%2020",
        //     // select * from main where mode4  order by year desc limit 20
        //     {
        //       headers: {
        //         "Content-Type": "application/json",
        //         // "Content-Type": "application/x-www-form-urlencoded",
        //         "Access-Control-Allow-Origin": "*",
        //       },
        //     }
        //   )
        .then((response) => {
          // console.log("DDDDDDDDDDD", response);
          setAuctionList({
            ...auctionList,
            loading: false,
            auctionList: response.data,
          });
        })
        .catch((error) => {
          console.log("EEEEEEE", error);
        })
    );
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

    console.log("myParamsAuctionDetail", myParamsAuctionDetail);

    const myParams = stringify(myParamsAuctionDetail);
    console.log("myParamsmyParams", myParams);

    axios1
      .get(
        "https://cors-anywhere.herokuapp.com/http://50.23.198.149/xml/json" +
          "?" +
          myParams,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        }
      )

      .then((response) => {
        console.log("DDDDDDDDDDD", response);
        setAuctionDetail({
          ...auctionDetail,
          loading: false,
          auctionDetail: response.data[0],
        });
      })
      .catch((error) => {
        console.log("EEEEEEE", error);
      });

    return;

    axiosAuction
      .post("", myParamsAuctionDetail)
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

        setAuctionDetail({
          ...auctionDetail,
          loading: false,
          auctionDetail: myArray,
        });
      })
      .catch((error) => {
        console.error(error);
        message.error(error.toString(), 7);
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
      sql: `select * from stats WHERE marka_id='${auctionItem.MARKA_ID}' and model_id='${auctionItem.MODEL_ID}' and year='${auctionItem.YEAR}' and kuzov='${auctionItem.KUZOV}' and finish<>'0' and rate='${auctionItem.RATE}' and status='sold'`,
    };

    console.log("myParamsAuctionSameList", myParamsAuctionSameList);

    const myParams = stringify(myParamsAuctionSameList);
    console.log("myParamsmyParams", myParams);

    axios1
      .get(
        "https://cors-anywhere.herokuapp.com/http://50.23.198.149/xml/json" +
          "?" +
          myParams,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        }
      )

      .then((response) => {
        console.log("DDDDDDDDDDD", response);

        setAuctionSameList({
          ...auctionSameList,
          loading: false,
          auctionSameList: response.data,
        });
      })
      .catch((error) => {
        console.log("EEEEEEE", error);
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
