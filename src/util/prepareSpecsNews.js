import React from "react";
import { Html5Entities } from "html-entities";
import { Tooltip, Tag } from "antd";
import toBoolean from "./booleanFunction";
import accounting from "accounting";
import moment from "moment";
import MotoAuctionStarRatingComponent from "components/Moto/Auction/MotoAuctionStarRatingComponent";

//   #####  ####### ####### ####### ### #     #  #####
//  #     # #          #       #     #  ##    # #
//  #       #          #       #     #  # #   # #
//   #####  #####      #       #     #  #  #  # #  ####
//        # #          #       #     #  #   # # #     #
//  #     # #          #       #     #  #    ## #     #
//   #####  #######    #       #    ### #     #  #####
export const prepareNewsSettings = {
  pagetitle: "Нийтлэл",
  menu: "news",
  sortFields: [
    {
      field: "modifieddate",
      label: "Шинэчилсэн огноогоор",
      icon: "iconlistlist",
    },
    {
      field: "title",
      label: "Гарчгаар",
      icon: "iconlistlist",
    },
  ],
  meta: {
    title: "Нийтлэл, мэдээ",
    description: "Авто ертөнцийн сонин сайхнаас",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Нийтлэл, мэдээ" },
      { property: "og:description", content: "Авто ертөнцийн сонин сайхнаас" },
      { property: "og:image", content: "" },
      { property: "og:locale", content: "mn_MN" },
    ],
  },
};

//  #       ###  #####  #######
//  #        #  #     #    #
//  #        #  #          #
//  #        #   #####     #
//  #        #        #    #
//  #        #  #     #    #
//  ####### ###  #####     #
export const prepareNewsList = (myArray, menu = "") => {
  // console.log("prepareAutozarList Array", myArray);

  const myList = Object.values(myArray);

  myList.map((item, index) => {
    const mainData = {
      id: item.newsid,
      menu: menu,
      link: { field: "link", value: `/${menu}/${item.newsid}` },
      title: {
        field: "title",
        value: item.title,
      },
      imagemain: { field: "imagemain", value: item.imagemain },
      imagemaincloudname: { field: "imagemaincloudname", value: "motomn" },
      isfeatured: {
        field: "isfeatured",
        value: toBoolean(item.isfeatured) ? true : false,
      },
      isactive: {
        field: "isactive",
        value: toBoolean(item.isactive) ? true : false,
      },
      description: {
        field: "description",
        value: item.description.substring(0, 135),
      },
      mainnumber: {
        field: "",
        value: "",
      },
      createddate: {
        field: "createddate",
        value: moment(item.createddate).fromNow(),
      },
      modifieddate: {
        field: "modifieddate",
        value: moment(item.modifieddate).fromNow(),
      },
    };

    const headerSpec = [
      {
        field: "newstypename",
        value: item.newstypename,
      },
      {
        field: "newssourcename",
        value: item.newssourcename,
      },
    ];

    const specList1 = [
      // {
      //   field: "newstypename",
      //   value: item.newstypename,
      // },
    ];

    const specList2 = [
      // {
      //   field: "newstypename",
      //   value: item.newstypename,
      // },
    ];

    const ownerData = {
      photo: item.userprofilephoto,
      photoalt: item.userfullname,
      name: item.userfullname,
      position: "",
    };

    const saveButtonData = {
      id: "",
      tablename: "ECM_NEWS",
      actionname: "Таалагдлаа",
      // actiondata: "1",
      recordid: mainData.id || "",
      description: mainData.title.value,
      mainimg: mainData.imagemain.value,
    };

    const compareButtonData = {
      title: mainData.title.value,
      imagemain: mainData.imagemain.value,
      mainSpec: mainData.mainnumber.value,
      link: mainData.link.value,
      subSpecs: [
        { field: "newstypename", value: item.newstypename },
        { field: "newssourcename", value: item.newssourcename },
      ],
    };

    const tableColumns = [
      {
        field: "newstypename",
        responsive: ["md"],
        // responsive: ["lg"],
        renderDivClass: "gx-text-grey",
        value: item.newstypename,
      },
      {
        field: "newssourcename",
        // responsive: ["md"],
        responsive: ["lg"],
        renderDivClass: "gx-text-grey",
        value: item.newssourcename,
      },

      {
        field: "modifieddate",
        // responsive: ["lg"],
        renderDivClass: "gx-fs-sm gx-text-grey",
        value: mainData.modifieddate.value,
      },
    ];

    myList[index].mainData = mainData;
    myList[index].headerSpec = headerSpec;
    myList[index].specList1 = specList1;
    myList[index].specList2 = specList2;
    myList[index].ownerData = ownerData;
    myList[index].saveButtonData = saveButtonData;
    myList[index].compareButtonData = compareButtonData;
    myList[index].tableColumns = tableColumns;
  });

  // console.log("ЭНИЙГ ХАР ДАА", myList);

  return myList;
};
