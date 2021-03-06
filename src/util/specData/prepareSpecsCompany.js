import React from "react";
import { Html5Entities } from "html-entities";
import { Tooltip, Tag } from "antd";
import toBoolean from "util/booleanFunction";
import accounting from "accounting";
import moment from "moment";
import MotoAuctionStarRatingComponent from "components/Moto/Auction/MotoAuctionStarRatingComponent";

//   #####  ####### #     # ######     #    #     # #     #
//  #     # #     # ##   ## #     #   # #   ##    #  #   #
//  #       #     # # # # # #     #  #   #  # #   #   # #
//  #       #     # #  #  # ######  #     # #  #  #    #
//  #       #     # #     # #       ####### #   # #    #
//  #     # #     # #     # #       #     # #    ##    #
//   #####  ####### #     # #       #     # #     #    #
export const prepareCompanyList = (myArray, menu = "") => {
  console.log("prepareCompanyList Array", myArray);

  const myList = Object.values(myArray);

  myList.map((item, index) => {
    const mainData = {
      id: item.id,
      menu: menu,
      title: item.title,
      imagemain:
        // "https://res.cloudinary.com/motomn/image/upload/v1610193640/moto/noimage2.jpg",
        "",
      imagemaincloudname: "motomn",
      isfeatured: toBoolean(item.isfeatured)
        ? toBoolean(item.isfeatured)
        : false,
      isactive: toBoolean(item.isactive) ? toBoolean(item.isactive) : true,
      description: item.type, // item.description?.substring(0, 250),
      // mainnumber: accounting.formatMoney(58963510, "₮", 0, "'"),
      // mainnumber: item.levelname,
      createddate: moment("2010-12-15").fromNow(),
      modifieddate: moment("1999-12-15").fromNow(),
    };

    const headerSpec = [
      { label: "Activity", value: item.activityname, status: "processing" },
      // { label: "", value: "ffffffg gf", status: "default" },
    ];

    const specList1 = [
      { label: "Утас", value: item.telephone },
      { label: "Имэйл", value: item.email },
      { label: "Вэб", value: item.web },
      { label: "Хаяг", value: item.address },
    ];

    const specList2 = [
      // {
      //   label: "Гүйлт",
      //   value: accounting.formatMoney(55000, {
      //     symbol: "км",
      //     format: "%v %s",
      //     precision: 0,
      //     thousand: "'",
      //   }),
      // },
      // {
      //   label: "Үйлдвэрлэсэн он",
      //   value: moment("2020-12-31").format("YYYY") + " он",
      // },
    ];

    const ownerData = {
      // photo:
      //   "https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000217/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
      // photoalt: "dfgdfgd",
      // name: "Ninja Leader",
      // position: "dfdgfdg",
    };

    myList[index].mainData = mainData;
    myList[index].headerSpec = headerSpec;
    myList[index].specList1 = specList1;
    myList[index].specList2 = specList2;
    myList[index].ownerData = ownerData;
  });

  // console.log("ЭНИЙГ ХАР ДАА", myList);

  return myList;
};
