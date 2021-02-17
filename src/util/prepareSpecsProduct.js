import React from "react";
import { Html5Entities } from "html-entities";
import { Tooltip, Tag } from "antd";
import toBoolean from "./booleanFunction";
import accounting from "accounting";
import moment from "moment";
import MotoAuctionStarRatingComponent from "components/Moto/Auction/MotoAuctionStarRatingComponent";
import { isEmpty } from "lodash";

//   #####  ####### ####### ####### ### #     #  #####
//  #     # #          #       #     #  ##    # #     #
//  #       #          #       #     #  # #   # #
//   #####  #####      #       #     #  #  #  # #  ####
//        # #          #       #     #  #   # # #     #
//  #     # #          #       #     #  #    ## #     #
//   #####  #######    #       #    ### #     #  #####
export const prepareProductListSettings = {
  pagetitle: "Бараа",
  menu: "product",
  sortFields: [
    {
      field: "itemid",
      label: "ID дугаараар",
      icon: "iconlistlist",
    },
    {
      field: "saleprice",
      label: "Барааны үнээр",
      icon: "iconlistlist",
    },
    {
      field: "itemname",
      label: "Барааны нэрээр",
      icon: "iconlistlist",
    },
  ],
  meta: {
    title: "Бараа",
    description: "Авто зах зээлийн бараанууд",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Бараа" },
      {
        property: "og:description",
        content: "Авто зах зээлийн бараанууд",
      },
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
export const prepareProductDetailSettings = {
  pagetitle: "Бараа",
  menu: "product",
  meta: {
    title: "Бараа",
    description: "Бараа",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Бараа" },
      {
        property: "og:description",
        content: "Бараа",
      },
      { property: "og:image", content: "" },
      { property: "og:locale", content: "mn_MN" },
    ],
  },
  headerSettings: {
    showPageHeader: true,
    showTableColumns: true,
    showCard: true,
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
    id: item.itemid || item.id,
    menu: menu,
    link: { field: "link", value: `/${menu}/${item.itemid}` },
    title: {
      field: "itemname",
      value: item.itemname,
    },
    imagemain: {
      field: "profilephoto",
      value: `https://cloudapi.moto.mn/portal/${item.profilephoto}`,
    },
    imagemaincloudname: { field: "imagemaincloudname", value: "" },
    isfeatured: {
      field: "isfeatured",
      value: toBoolean(item.isfeatured) ? toBoolean(item.isfeatured) : false,
    },
    isactive: {
      field: "isactive",
      value: toBoolean(item.isactive) ? toBoolean(item.isactive) : true,
    },
    description: { field: "description", value: item.description || "" },
    mainnumber: {
      field: "saleprice",
      value: (
        <span className="gx-text-success gx-font-weight-bold">
          {accounting.formatMoney(item.saleprice, "₮", 0, "'")}
        </span>
      ),
    },
    createddate: {
      field: "createddate",
      value: !isEmpty(item.createddate)
        ? moment(item.createddate).fromNow()
        : null,
    },
    modifieddate: {
      field: "modifieddate",
      value: !isEmpty(item.modifieddate)
        ? moment(item.modifieddate).fromNow()
        : null,
    },
  };
};

const tempHeaderSpec = (item, menu, mainData) => {
  return [
    {
      field: "rating",
      value: (
        <span style={{ minWidth: "90px" }}>
          {/* <span className="gx-mr-2">{item.rating}</span> */}
          <MotoAuctionStarRatingComponent
            starCount={5}
            value={item.rating}
            emptyStarColor={"#d1d1d1"}
          />
        </span>
      ),
    },
  ];
};

const tempSpecList1 = (item, menu, mainData) => {
  return [
    {
      field: "generalcategoryname",
      value: item.generalcategoryname,
    },
    {
      field: "departmentname",
      value: item.departmentname,
    },
  ];
};

const tempSpecList2 = (item, menu, mainData) => {
  return [];
};

const tempOwnerData = (item, menu, mainData) => {
  return {
    photo: item.memberprofilephoto || "",
    photoalt: item.departmentname || "",
    name: item.departmentname,
    position: "",
  };
};

const tempLoveButtonData = (item, menu, mainData) => {
  return {
    id: "",
    tablename: "MOTO_PRODUCT",
    actionname: "Таалагдлаа",
    // actiondata: "1",
    recordid: mainData.id || "",
    description: mainData.title.value,
    mainimg: mainData.imagemain.value,
  };
};

const tempSaveButtonData = (item, menu, mainData) => {
  return {
    id: "",
    tablename: "MOTO_PRODUCT",
    actionname: "Жоорлох",
    actiondata: "1",
    recordid: mainData.id || "",
    description: mainData.title.value,
    mainimg: mainData.imagemain.value,
  };
};

const tempCompareButtonData = (item, menu, mainData) => {
  return {
    title: mainData.title.value,
    imagemain: mainData.imagemain.value,
    mainSpec: mainData.mainnumber.value,
    link: mainData.link.value,
    subSpecs: [
      { field: "generalcategoryname", value: item.generalcategoryname },
      { field: "departmentname", value: item.departmentname },
    ],
  };
};

const tempTableColumns = (item, menu, mainData) => {
  return [
    {
      field: "generalcategoryname",
      responsive: ["md"],
      value: <span className="gx-fs-sm">{item.generalcategoryname}</span>,
    },

    {
      field: "rating",
      responsive: ["sm"],
      width: "90px",
      value: (
        <span style={{ minWidth: "90px" }}>
          {/* <div className="gx-text-center">{item.rating}</div> */}
          <MotoAuctionStarRatingComponent
            starCount={5}
            value={item.rating}
            emptyStarColor={"#d1d1d1"}
          />
        </span>
      ),
    },

    {
      field: "saleprice",
      width: "110px",
      align: "center",
      value: (
        <span className="gx-text-success gx-font-weight-bold">
          {accounting.formatMoney(item.saleprice, "₮", 0, "'")}
        </span>
      ),
    },
  ];
};

//  #       ###  #####  #######
//  #        #  #     #    #
//  #        #  #          #
//  #        #   #####     #
//  #        #        #    #
//  #        #  #     #    #
//  ####### ###  #####     #
export const prepareProductList = (myArray, menu = "") => {
  const myList = Object.values(myArray);

  // console.log("myList", myList);

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

  return myList;
};

//  ######  ####### #######    #    ### #
//  #     # #          #      # #    #  #
//  #     # #          #     #   #   #  #
//  #     # #####      #    #     #  #  #
//  #     # #          #    #######  #  #
//  #     # #          #    #     #  #  #
//  ######  #######    #    #     # ### #######
// const tempDetailMainData = (item, menu) => {
//   return {
//     id: item.id,
//     menu: menu,
//     link: { field: "link", value: `/${menu}/${item.id}` },
//     title: {
//       field: "itemname",
//       value: item.itemname,
//     },
//     imagemain: {
//       field: "imagemain",
//       value: `https://cloudapi.moto.mn/portal/${item.profilephoto}`,
//     },
//     imagemaincloudname: { field: "imagemaincloudname", value: "" },
//     isfeatured: {
//       field: "isfeatured",
//       value: toBoolean(item.isfeatured) ? toBoolean(item.isfeatured) : false,
//     },
//     isactive: {
//       field: "isactive",
//       value: toBoolean(item.isactive) ? toBoolean(item.isactive) : true,
//     },
//     description: { field: "description", value: item.description || "" },
//     mainnumber: {
//       field: "saleprice",
//       value: accounting.formatMoney(item.saleprice, "₮", 0, "'"),
//     },
//     createddate: {
//       field: "createddate",
//       value: !isEmpty(item.createddate)
//         ? moment(item.createddate).fromNow()
//         : null,
//     },
//     modifieddate: {
//       field: "modifieddate",
//       value: !isEmpty(item.modifieddate)
//         ? moment(item.modifieddate).fromNow()
//         : null,
//     },
//   };
// };

const tempDetailHeaderSpec = (item, menu, mainData) => {
  let myArray = [];
  Object.values(item.kpidmdtl).map((item, index) => {
    const tempItem = {
      field: item.indicatorname,
      value: item.value,
    };
    myArray.push(tempItem);
  });
  return myArray;
};

const tempDetailPhotos = (item, menu, mainData) => {
  if (isEmpty(item.photos)) return null;

  let myArray = [];
  Object.values(item.photos).map((item, index) => {
    const tempItem = {
      field: "photos",
      value: `https://cloudapi.moto.mn/portal/${item.physicalpath}`,
    };
    myArray.push(tempItem);
  });
  return myArray;
};

export const prepareProductDetail = (myItem, menu = "") => {
  console.log("MY PRODUCT", myItem);

  const mainData = tempMainData(myItem, menu);
  const headerSpec = tempDetailHeaderSpec(myItem, menu, mainData);
  const detailPhotos = tempDetailPhotos(myItem, menu, mainData);
  const specList1 = tempSpecList1(myItem, menu, mainData);
  const specList2 = tempSpecList2(myItem, menu, mainData);
  const ownerData = tempOwnerData(myItem, menu, mainData);
  const loveButtonData = tempLoveButtonData(myItem, menu, mainData);
  const saveButtonData = tempSaveButtonData(myItem, menu, mainData);
  const compareButtonData = tempCompareButtonData(myItem, menu, mainData);
  const tableColumns = tempTableColumns(myItem, menu, mainData);

  //All specs
  myItem.brandid = myItem.brandid;
  myItem.citytaxcode = myItem.citytaxcode;
  myItem.citytaxpercent = myItem.citytaxpercent;
  myItem.coeftype = myItem.coeftype;
  myItem.colorid = myItem.colorid;
  myItem.colors = myItem.colors;
  myItem.countryid = myItem.countryid;
  myItem.createddate = myItem.createddate;
  myItem.createduserid = myItem.createduserid;
  myItem.currencyid = myItem.currencyid;
  myItem.deliverableqty = myItem.deliverableqty;
  myItem.departmentid = myItem.departmentid;
  myItem.description = myItem.description;
  myItem.discountendtime = myItem.discountendtime;
  myItem.equivalentcoef = myItem.equivalentcoef;
  myItem.equivalentitemid = myItem.equivalentitemid;
  myItem.equivalentmeasureid = myItem.equivalentmeasureid;
  myItem.favid = myItem.favid;
  myItem.foreignname = myItem.foreignname;
  myItem.generalcategoryid = myItem.generalcategoryid;
  // myItem.generalcategoryname = myItem.generalcategoryname;
  myItem.generalcategoryname = myItem.tendercategoryname;
  myItem.height = myItem.height;
  myItem.id = myItem.id;
  myItem.imagealbumid = myItem.imagealbumid;
  myItem.imitembarcodedv = myItem.imitembarcodedv;
  myItem.isactive = myItem.isactive;
  myItem.ischeckendqty = myItem.ischeckendqty;
  myItem.iscitytax = myItem.iscitytax;
  myItem.isconst = myItem.isconst;
  myItem.isequivalent = myItem.isequivalent;
  myItem.isfractional = myItem.isfractional;
  myItem.ishighcost = myItem.ishighcost;
  myItem.iskeycost = myItem.iskeycost;
  myItem.iskeymanufacturedate = myItem.iskeymanufacturedate;
  myItem.iskeypartnumber = myItem.iskeypartnumber;
  myItem.iskeyqualitycode = myItem.iskeyqualitycode;
  myItem.islot = myItem.islot;
  myItem.ismaterial = myItem.ismaterial;
  myItem.isneedbestbeforemode = myItem.isneedbestbeforemode;
  myItem.isoffbalance = myItem.isoffbalance;
  myItem.ispackage = myItem.ispackage;
  myItem.ispart = myItem.ispart;
  myItem.isproduceditem = myItem.isproduceditem;
  myItem.ispromotionitem = myItem.ispromotionitem;
  myItem.ispurchaseprice = myItem.ispurchaseprice;
  myItem.issaleitem = myItem.issaleitem;
  myItem.issouvenir = myItem.issouvenir;
  myItem.isspecialise = myItem.isspecialise;
  myItem.issulitem = myItem.issulitem;
  myItem.isuseequavalient = myItem.isuseequavalient;
  myItem.isusegl = myItem.isusegl;
  myItem.isuseserial = myItem.isuseserial;
  myItem.isvat = myItem.isvat;
  myItem.itemcategoryid = myItem.itemcategoryid;
  myItem.itemcode = myItem.itemcode;
  myItem.itemkeymetagroupid = myItem.itemkeymetagroupid;
  myItem.itemname = myItem.itemname;
  myItem.itemtypeid = myItem.itemtypeid;
  myItem.kpi_dm_key_dv = myItem.kpi_dm_key_dv;
  myItem.kpidmdtl = myItem.kpidmdtl;
  myItem.kpidmdtlnutrition = myItem.kpidmdtlnutrition;
  myItem.l1barcode = myItem.l1barcode;
  myItem.l1measureid = myItem.l1measureid;
  myItem.l1qty = myItem.l1qty;
  myItem.l2barcode = myItem.l2barcode;
  myItem.l2measureid = myItem.l2measureid;
  myItem.l2qty = myItem.l2qty;
  myItem.length = myItem.length;
  myItem.lotitemid = myItem.lotitemid;
  myItem.lotitemqty = myItem.lotitemqty;
  myItem.minqty = myItem.minqty;
  myItem.modifieddate = myItem.modifieddate;
  myItem.modifieduserid = myItem.modifieduserid;
  myItem.olditemcode = myItem.olditemcode;
  myItem.ordercode = myItem.ordercode;
  myItem.photos = myItem.photos;
  myItem.prevprice = myItem.prevprice;
  myItem.processid = myItem.processid;
  myItem.procitemid = myItem.procitemid;
  myItem.productid = myItem.productid;
  myItem.profilephoto = myItem.profilephoto;
  myItem.purchaseprice = myItem.purchaseprice;
  myItem.relateditem = myItem.relateditem;
  myItem.reorderqty = myItem.reorderqty;
  myItem.saleprice = myItem.saleprice;
  myItem.seenqty = myItem.seenqty;
  myItem.shortname = myItem.shortname;
  myItem.supplier = myItem.supplier;
  myItem.taxcategoryid = myItem.taxcategoryid;
  myItem.taxtypeid = myItem.taxtypeid;
  myItem.temperature = myItem.temperature;
  myItem.templateid = myItem.templateid;
  myItem.tendercategoryname = myItem.tendercategoryname;
  myItem.unitmeasureid = myItem.unitmeasureid;
  myItem.usageyear = myItem.usageyear;
  myItem.volume = myItem.volume;
  myItem.wetnesspercent = myItem.wetnesspercent;
  myItem.wholesaleprice = myItem.wholesaleprice;
  myItem.whsalepricekeydv = myItem.whsalepricekeydv;
  myItem.width = myItem.width;
  myItem.wieght = myItem.wieght;

  myItem.mainData = mainData;
  myItem.headerSpec = headerSpec;
  myItem.detailPhotos = detailPhotos;
  myItem.specList1 = specList1;
  myItem.specList2 = specList2;
  myItem.ownerData = ownerData;
  myItem.loveButtonData = loveButtonData;
  myItem.saveButtonData = saveButtonData;
  myItem.compareButtonData = compareButtonData;
  myItem.tableColumns = tableColumns;

  return myItem;
};
