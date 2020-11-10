import React, { useState, useContext, useEffect } from "react";
import { message } from "antd";

import axiosAuction from "util/axiosAuctionConfig";
import axios1 from "axios";

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
      sql: "select * from main limit 10",
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

    axios1
      .get(
        "https://cors-anywhere.herokuapp.com/http://50.23.198.149/xml/json?code=Lms7sw3_Cbna&sql=select%20*%20from%20main%20limit%2010",
        {
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log("DDDDDDDDDDD", response);
        setAuctionList({
          ...auctionList,
          loading: false,
          auctionList: response.data,
        });
      })
      .catch((error) => {
        console.log("EEEEEEE", error);
      });

    return null;
    axiosAuction
      // .get("", myParamsAuctionList, {
      .get(
        "",
        {},
        {
          headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log("GOOOOOOOOOOOOOO---------", response);
        setAuctionList({
          ...auctionList,
          loading: false,
          auctionList: response,
        });
      });
    // .catch((error) => {
    //   setAuctionList({ ...auctionList, loading: false, error });
    //   message.error(error);
    //   console.log(error);
    // });
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

  const clearAuctionDetail = () => {
    setAuctionDetail(initialAuctionDetail);
  };

  return (
    <AuctionContext.Provider
      value={{
        auctionList,
        auctionDetail,
        loadAuctionList,
        clearAuctionList,
        toggleFilterDrawerOpen,
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

// Бүх машин
//select * from main limit 10

//Фирм жагсаалт (Count)
// select marka_id,marka_name from main group by marka_id order by marka_id ASC limit 0,50

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

// select auction, auction_date FROM main GROUP BY auction, DATE_FORMAT(auction_date,'%Y-%m-%d')

//Тухайн өдрийн машинууд
// select * from stats WHERE auction_date LIKE '2020-10-20%' limit 5

// select * from stats WHERE DATE(auct_date) = '2020-10-20' limit 5
