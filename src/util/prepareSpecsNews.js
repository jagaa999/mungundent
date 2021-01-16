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
export const prepareNewsListSettings = {
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

//  ######  ####### #######    #    ### #
//  #     # #          #      # #    #  #
//  #     # #          #     #   #   #  #
//  #     # #####      #    #     #  #  #
//  #     # #          #    #######  #  #
//  #     # #          #    #     #  #  #
//  ######  #######    #    #     # ### #######
export const prepareNewsDetailSettings = {
  pagetitle: "Нийтлэл",
  menu: "news",
  meta: {
    title: "Нийтлэл",
    description: "Авто ертөнцийн сонин сайхнаас",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Нийтлэл" },
      {
        property: "og:description",
        content: "Авто ертөнцийн сонин сайхнаас",
      },
      { property: "og:image", content: "" },
      { property: "og:locale", content: "mn_MN" },
    ],
  },
  headerSettings: {
    showPageHeader: true,
    showTableColumns: true,
    showCard: false,
  },
};

//  ####### ####### #     # ######
//     #    #       ##   ## #     #
//     #    #       # # # # #     #
//     #    #####   #  #  # ######
//     #    #       #     # #
//     #    #       #     # #
//     #    ####### #     # #

const tempMainData = (item, menu) => {
  return {
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
};

const tempHeaderSpec = (item, menu, mainData) => {
  return [
    {
      field: "newstypename",
      value: item.newstypename,
    },
    {
      field: "newssourcename",
      value: item.newssourcename,
    },
  ];
};

const tempSpecList1 = (item, menu, mainData) => {
  return [];
};

const tempSpecList2 = (item, menu, mainData) => {
  return [];
};

const tempOwnerData = (item, menu, mainData) => {
  return {
    photo: item.userprofilephoto,
    photoalt: item.userfullname,
    name: item.userfullname,
    position: "",
  };
};

const tempTableColumns = (item, menu, mainData) => {
  return [
    // {
    //   field: "newstypename",
    //   responsive: ["md"],
    //   // responsive: ["lg"],
    //   renderDivClass: "gx-text-grey",
    //   value: item.newstypename,
    // },
    // {
    //   field: "newssourcename",
    //   // responsive: ["md"],
    //   responsive: ["lg"],
    //   renderDivClass: "gx-text-grey",
    //   value: item.newssourcename,
    // },

    //Эдний оронд, уншсан тоо, сэтгэгдлийн тоо тавигдана.
    //Эсвэл залгаатай автомашины фирм, марк

    {
      field: "modifieddate",
      // responsive: ["lg"],
      renderDivClass: "gx-fs-sm gx-text-grey",
      value: mainData.modifieddate.value,
    },
  ];
};

const tempCompareButtonData = (item, menu, mainData) => {
  return {
    title: mainData.title.value,
    imagemain: mainData.imagemain.value,
    mainSpec: mainData.mainnumber.value,
    link: mainData.link.value,
    subSpecs: [
      { field: "newstypename", value: item.newstypename },
      { field: "newssourcename", value: item.newssourcename },
    ],
  };
};

const tempLoveButtonData = (item, menu, mainData) => {
  return {
    id: "",
    tablename: "ECM_NEWS",
    actionname: "Таалагдлаа",
    actiondata: "1",
    recordid: mainData.id || "",
    description: mainData.title.value,
    mainimg: mainData.imagemain.value,
  };
};

const tempSaveButtonData = (item, menu, mainData) => {
  return {
    id: "",
    tablename: "ECM_NEWS",
    actionname: "Жоорлох",
    actiondata: "1",
    recordid: mainData.id || "",
    description: mainData.title.value,
    mainimg: mainData.imagemain.value,
  };
};

//  #       ###  #####  #######
//  #        #  #     #    #
//  #        #  #          #
//  #        #   #####     #
//  #        #        #    #
//  #        #  #     #    #
//  ####### ###  #####     #
export const prepareNewsList = (myArray, menu = "") => {
  const myList = Object.values(myArray);

  myList.map((item, index) => {
    const mainData = tempMainData(item, menu);
    const headerSpec = tempHeaderSpec(item, menu, mainData);
    const specList1 = tempSpecList1(item, menu, mainData);
    const specList2 = tempSpecList2(item, menu, mainData);
    const ownerData = tempOwnerData(item, menu, mainData);
    const loveButtonData = tempLoveButtonData(item, menu, mainData);
    const saveButtonData = tempSaveButtonData(item, menu, mainData);
    const compareButtonData = tempCompareButtonData(item, menu, mainData);
    const tableColumns = tempTableColumns(item, menu, mainData);

    myList[index].mainData = mainData;
    myList[index].headerSpec = headerSpec;
    myList[index].specList1 = specList1;
    myList[index].specList2 = specList2;
    myList[index].ownerData = ownerData;
    myList[index].loveButtonData = loveButtonData;
    myList[index].saveButtonData = saveButtonData;
    myList[index].compareButtonData = compareButtonData;
    myList[index].tableColumns = tableColumns;
  });

  // console.log("ЭНИЙГ ХАР ДАА", myList);

  return myList;
};

//  ######  ####### #######    #    ### #
//  #     # #          #      # #    #  #
//  #     # #          #     #   #   #  #
//  #     # #####      #    #     #  #  #
//  #     # #          #    #######  #  #
//  #     # #          #    #     #  #  #
//  ######  #######    #    #     # ### #######
//
export const prepareNewsDetail = (myItem, menu = "") => {
  const mainData = tempMainData(myItem, menu);
  const headerSpec = tempHeaderSpec(myItem, menu, mainData);
  const specList1 = tempSpecList1(myItem, menu, mainData);
  const specList2 = tempSpecList2(myItem, menu, mainData);
  const ownerData = tempOwnerData(myItem, menu, mainData);
  const loveButtonData = tempLoveButtonData(myItem, menu, mainData);
  const saveButtonData = tempSaveButtonData(myItem, menu, mainData);
  const compareButtonData = tempCompareButtonData(myItem, menu, mainData);
  const tableColumns = tempTableColumns(myItem, menu, mainData);

  //All specs
  myItem.createddate = moment(myItem.createddate);
  myItem.modifieddate = moment(myItem.modifieddate);
  myItem.isactive = toBoolean(myItem.isactive);
  myItem.iscomment = toBoolean(myItem.iscomment);
  myItem.isfeatured = toBoolean(myItem.isfeatured);

  myItem.imagemainFileList = [];
  myItem.imagemainFileList =
    myItem.imagemain !== undefined &&
    (myItem.imagemain !== ""
      ? [
          {
            uid: "-1",
            name: "Тодорхойгүй",
            status: "done",
            url: myItem.imagemain || "",
            thumbUrl: myItem.imagemain || "",
            response: { url: myItem.imagemain || "" },
          },
        ]
      : []);
  myItem.imageotherFileList = [];
  myItem.imageotherFileList =
    myItem.imageother !== undefined &&
    (myItem.imageother !== ""
      ? JSON.parse(myItem.imageother).map((item, index) => ({
          uid: index - 1,
          name: item.replace(/^.*[\\\/]/, ""),
          status: "done",
          url: item || "",
          thumbUrl: item || "",
          response: { url: item || "" },
        }))
      : []);

  myItem.mainData = mainData;
  myItem.headerSpec = headerSpec;
  myItem.specList1 = specList1;
  myItem.specList2 = specList2;
  myItem.ownerData = ownerData;
  myItem.loveButtonData = loveButtonData;
  myItem.saveButtonData = saveButtonData;
  myItem.compareButtonData = compareButtonData;
  myItem.tableColumns = tableColumns;

  return myItem;
};

// body: "";
// booktypeid: "";
// companyid: "";
// contentid: "";
// createddate: "";
// creatorid: "1493006644797290";
// creatorname: "Moto админ";
// creatorphoto: "https://lh5.googleusoto.jpg";
// creatorpositionname: "Гишүүн";
// description: "Zoom тэсрэлт хийсэн.";
// dim1: "";
// dim2: "";
// imagemain: "http://res.cloudykyjwj51up1azp.jpg";
// imageotherFileList: false;
// isactive: true;
// iscomment: true;
// isfacebook: "";
// isfeatured: false;
// istwitter: "";
// modifiedby: "1605592513980";
// modifieddate: "";
// modifiername: "";
// modifierphoto: "";
// modifierpositionname: "";
// newsid: "16102815112941";
// newssourcefacebook: "https://www.facebook.com/gogo.mn/";
// newssourceid: "1508638385019";
// newssourcelogo: "storage/uploa208931.jpg";
// newssourcename: "GoGo Мэдээ";
// newssourcetype: "Вэб сайт";
// newssourcewebsite: "http://gogo.mn/";
// newssourceyoutube: "";
// newstypeid: "201";
// newstypename: "Мэдлэг Зөвлөгөө";
// publisheddate: "2021-01-15 09:54:16";
// publisherid: "1605592513980";
// publishername: "";
// publisherphoto: "";
// publisherpositionname: "";
// title: "2021 оны";
// userfirebaseuid: "7wIotzm1GsaaMCnM4SSbBJkydBu1";
// userfullename: "Aldar Ulzii";
// username: "7wIotzm1GsaaMCnM4SSbBJkydBu1";
// userpersonid: "1605592513978";
// userprofilephoto: "https://lh3.googleuSv9WFV=s96-c";
// userpublisherid: "1605592513980";
