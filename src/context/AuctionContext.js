import React, { useState, useContext, useEffect } from "react";
import { message } from "antd";

import axiosAuction from "util/axiosAuctionConfig";

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
      code: "DvemR43s",
      sql: "select * from main limit 10",
    },
    auctionList: [],
    loading: false,
    error: null,
  };

  const initialAuctionDetail = {
    loadParams: {},
    AuctionDetail: [],
    loading: false,
    error: null,
  };

  const [auctionList, setAuctionList] = useState(initialAuctionList);
  const [auctionDetail, setAuctionDetail] = useState(initialAuctionDetail);

  //  #       ###  #####  #######
  //  #        #  #     #    #
  //  #        #  #          #
  //  #        #   #####     #
  //  #        #        #    #
  //  #        #  #     #    #
  //  ####### ###  #####     #

  const loadAuctionList = () => {
    setAuctionList({ ...auctionList, loading: true });

    const myParamsAuctionList = {
      ...initialAuctionList.loadParams,
    };

    console.log("myParamsAuctionList", myParamsAuctionList);

    // axiosAuction
    //   .get("", {})
    //   .then((response) => {
    const response = [
      {
        ID: "123",
        LOT: "7061",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "2",
        MODEL_ID: "9814",
        MARKA_NAME: "NISSAN",
        MODEL_NAME: "FAIRLADYZ",
        YEAR: "2003",
        ENG_V: "3500",
        PW: "280,294,313",
        KUZOV: "Z33",
        GRADE: "http://avto.jp/get_code",
        COLOR: "PEARL",
        KPP: "FA",
        KPP_TYPE: "2",
        PRIV: "FR",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "3.5",
        START: "10000",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "494000",
        AVG_STRING: "606,515,221,735,540,533,306",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7074",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "1",
        MODEL_ID: "139",
        MARKA_NAME: "TOYOTA",
        MODEL_NAME: "PRIUS",
        YEAR: "2014",
        ENG_V: "1800",
        PW: "99",
        KUZOV: "ZVW30",
        GRADE: "http://avto.jp/get_code",
        COLOR: "PEARL",
        KPP: "AT",
        KPP_TYPE: "2",
        PRIV: "FF",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "R",
        START: "0",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "523000",
        AVG_STRING: "535,507,564,669,427,425,695,797,433,496",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7060",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "6",
        MODEL_ID: "669",
        MARKA_NAME: "SUZUKI",
        MODEL_NAME: "JIMNY",
        YEAR: "2007",
        ENG_V: "660",
        PW: "64",
        KUZOV: "JB23W",
        GRADE: "http://avto.jp/get_code",
        COLOR: "GRAY",
        KPP: "FA",
        KPP_TYPE: "2",
        PRIV: "FR,PARTTIME4WD",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "R",
        START: "10000",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "169000",
        AVG_STRING: "174,178,170,200,103,198,211,151,133",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7073",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "1",
        MODEL_ID: "139",
        MARKA_NAME: "TOYOTA",
        MODEL_NAME: "PRIUS",
        YEAR: "2014",
        ENG_V: "1800",
        PW: "99",
        KUZOV: "ZVW30",
        GRADE: "http://avto.jp/get_code",
        COLOR: "BLACK",
        KPP: "AT",
        KPP_TYPE: "2",
        PRIV: "FF",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "3",
        START: "0",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "338000",
        AVG_STRING: "289,386",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7062",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "4",
        MODEL_ID: "475",
        MARKA_NAME: "MITSUBISHI",
        MODEL_NAME: "DELICA",
        YEAR: "2007",
        ENG_V: "2400",
        PW: "",
        KUZOV: "CV5W",
        GRADE: "http://avto.jp/get_code",
        COLOR: "PEARL",
        KPP: "AT",
        KPP_TYPE: "2",
        PRIV: "",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "3.5",
        START: "10000",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "186000",
        AVG_STRING: "105,282,110,79,368,236,164,166,85,103",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7052",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "6",
        MODEL_ID: "10560",
        MARKA_NAME: "SUZUKI",
        MODEL_NAME: "SPACIA",
        YEAR: "2013",
        ENG_V: "660",
        PW: "52,64",
        KUZOV: "MK32S",
        GRADE: "http://avto.jp/get_code",
        COLOR: "SILVER",
        KPP: "AT",
        KPP_TYPE: "2",
        PRIV: "FF,FULLTIME4WD",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "4",
        START: "0",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "627000",
        AVG_STRING: "599,627,545,630,631,615,485,664,687,611",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7050",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "9",
        MODEL_ID: "26997",
        MARKA_NAME: "DAIHATSU",
        MODEL_NAME: "MOVE CANBUS",
        YEAR: "2020",
        ENG_V: "660",
        PW: "52",
        KUZOV: "LA800S",
        GRADE: "http://avto.jp/get_code",
        COLOR: "PEARL",
        KPP: "AT",
        KPP_TYPE: "2",
        PRIV: "FF",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "S",
        START: "0",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "0",
        AVG_STRING: "",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7054",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "7",
        MODEL_ID: "705",
        MARKA_NAME: "SUBARU",
        MODEL_NAME: "IMPREZA",
        YEAR: "2013",
        ENG_V: "2000",
        PW: "",
        KUZOV: "GP7",
        GRADE: "http://avto.jp/get_code",
        COLOR: "NAVY BLUE",
        KPP: "AT",
        KPP_TYPE: "2",
        PRIV: "",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "4",
        START: "450000",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "681000",
        AVG_STRING: "602,503,588,648,750,567,878,438,727,798",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7053",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "6",
        MODEL_ID: "2281",
        MARKA_NAME: "SUZUKI",
        MODEL_NAME: "ALTO LAPIN",
        YEAR: "2006",
        ENG_V: "660",
        PW: "54,60,64",
        KUZOV: "HE21S",
        GRADE: "http://avto.jp/get_code",
        COLOR: "WHITE",
        KPP: "F5",
        KPP_TYPE: "1",
        PRIV: "FF,FULLTIME4WD",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "4",
        START: "30000",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "55000",
        AVG_STRING: "25,48,60,86",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
      {
        ID: "123",
        LOT: "7048",
        AUCTION_DATE: "http://avto.jp/get_code",
        AUCTION: "http://avto.jp/get_code",
        MARKA_ID: "1",
        MODEL_ID: "122",
        MARKA_NAME: "TOYOTA",
        MODEL_NAME: "MARK X",
        YEAR: "2014",
        ENG_V: "2500",
        PW: "203",
        KUZOV: "GRX130",
        GRADE: "http://avto.jp/get_code",
        COLOR: "PEARL",
        KPP: "FA",
        KPP_TYPE: "2",
        PRIV: "FR",
        MILEAGE: "http://avto.jp/get_code",
        EQUIP: "",
        RATE: "4.5",
        START: "0",
        FINISH: "http://avto.jp/get_code",
        STATUS: "",
        TIME: "2020-11-08 00:08:13",
        AVG_PRICE: "1100000",
        AVG_STRING: "1100",
        IMAGES:
          "https://8.ajes.com/imgs/pEb7y2CljloCuPTC8U99h1kMApRgX8E7MZ9&h=50",
      },
    ];
    console.log("GOOOOOOOOOOOOOO---------", response);
    // const myData = response.data.response;
    // const myData = response;
    // if (myData.status === "error") {
    //   // getError(myData.text);
    //   message.error(myData.text);
    // } else {
    //   const myPaging = myData.result.paging || {};
    //   const myArray = myData.result || [];

    //   delete myArray["aggregatecolumns"];
    //   delete myArray["paging"];

    setAuctionList({
      ...auctionList,
      loading: false,
      // auctionList: Object.values(myArray),
      auctionList: response,
    });
    // }
    // })
    // .catch((error) => {
    //   setAuctionList({ ...auctionList, loading: false, error });
    //   message.error(error);
    //   console.log(error);
    // });
  };

  const clearAuctionDetail = () => {
    setAuctionDetail(initialAuctionDetail);
  };

  // ######  ####### #######    #    ### #
  // #     # #          #      # #    #  #
  // #     # #          #     #   #   #  #
  // #     # #####      #    #     #  #  #
  // #     # #          #    #######  #  #
  // #     # #          #    #     #  #  #
  // ######  #######    #    #     # ### #######
  const loadAuctionDetail = (id = 0) => {
    // console.log("ЭЭЭЭЭЭЭЭЭЭ", id);

    const myParamsAuctionDetail = {
      request: {
        username: memberContext.state.memberUID,
        password: "89",
        // username: "motoadmin",
        // password: "moto123",
        command: "PL_MDVIEW_004",
        parameters: {
          ...auctionDetail.loadParams,
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

    // console.log("myParamsAuctionDetail", myParamsAuctionDetail);
    setAuctionDetail(initialAuctionDetail);
    setAuctionDetail({ ...auctionDetail, loading: true });

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

  return (
    <AuctionContext.Provider
      value={{
        auctionList,
        auctionDetail,
        loadAuctionList,
        loadAuctionDetail,
        // saveAuctionDetail,
        clearAuctionDetail,
      }}
    >
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContext;
