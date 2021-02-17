import React from "react";
import { Html5Entities } from "html-entities";
import { Tooltip, Tag } from "antd";
import toBoolean from "./booleanFunction";
import accounting from "accounting";
import moment from "moment";
import MotoAuctionStarRatingComponent from "components/Moto/Auction/MotoAuctionStarRatingComponent";

//   #####  ####### ####### ####### ### #     #  #####
//  #     # #          #       #     #  ##    # #     #
//  #       #          #       #     #  # #   # #
//   #####  #####      #       #     #  #  #  # #  ####
//        # #          #       #     #  #   # # #     #
//  #     # #          #       #     #  #    ## #     #
//   #####  #######    #       #    ### #     #  #####
export const prepareAutozarListSettings = {
  pagetitle: "Автозар",
  menu: "autozar",
  sortFields: [
    {
      field: "modifieddate",
      label: "Зарын огноогоор",
      icon: "iconlistlist",
    },
    {
      field: "financepricerr",
      label: "Зарын үнээр",
      icon: "iconlistlist",
    },
    {
      field: "autozarmilage",
      label: "Зарын гүйлтээр",
      icon: "iconlistlist",
    },
  ],
  meta: {
    title: "Автозар",
    description: "Монгол улсад байгаа автозарууд",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Автозар" },
      {
        property: "og:description",
        content: "Монгол улсад байгаа автозарууд",
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
export const prepareAutozarDetailSettings = {
  pagetitle: "Автозар",
  menu: "autozar",
  meta: {
    title: "Автозар",
    description: "Автозар",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Автозар" },
      {
        property: "og:description",
        content: "Автозар",
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
    id: item.id,
    menu: menu,
    link: { field: "link", value: `/${menu}/${item.id}` },
    title: {
      field: "title",
      value: `${
        moment(item.mglyearmanufactured, "YYYY").isValid() === true
          ? moment(item.mglyearmanufactured).format("YYYY")
          : ""
      } ${item.mglfirm || ""} ${item.mglmark || ""} ${item.cartrim || ""}`,
    },
    imagemain: { field: "imagemain", value: item.imagemain },
    imagemaincloudname: { field: "imagemaincloudname", value: "duznp4bqa" },
    isfeatured: {
      field: "isfeatured",
      value: toBoolean(item.isfeatured) ? toBoolean(item.isfeatured) : false,
    },
    isactive: {
      field: "isactive",
      value: toBoolean(item.isactive) ? toBoolean(item.isactive) : true,
    },
    description: { field: "description", value: item.description },
    mainnumber: {
      field: "financepricerr",
      value: (
        <span className="gx-text-success gx-font-weight-bold">
          {accounting.formatMoney(item.financepricerr, "₮", 0, "'")}
        </span>
      ),
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
      field: "mgllicensenumberfull",
      value: item.mgllicensenumberfull,
    },
    {
      field: "mglbody",
      value: item.mglbody,
    },
  ];
};

const tempSpecList1 = (item, menu, mainData) => {
  return [
    {
      field: "mgldrivepos",
      value: item.mgldrivepos === "1" ? "Зөв" : "Буруу",
    },
    {
      field: "hybridfieldengine",
      value: `${item.mglengine2disp} cc, ${item.mglfuel}`,
    },
    {
      field: "drive2transtypename",
      value: item.drive2transtypename,
    },
    {
      field: "drive2drivename",
      value: item.drive2drivename,
    },
  ];
};

const tempSpecList2 = (item, menu, mainData) => {
  return [
    {
      field: "autozarmilage",
      value: accounting.formatMoney(item.autozarmilage, {
        symbol: "км",
        format: "%v %s",
        precision: 0,
        thousand: "'",
      }),
    },
    {
      field: "mglyearimport",
      value: moment(item.mglyearimport).format("YYYY") + " он",
    },
  ];
};

const tempOwnerData = (item, menu, mainData) => {
  return {
    photo: item.memberprofilephoto,
    photoalt: item.memberuserfullname,
    name: item.memberuserfullname,
    position: "",
  };
};

const tempLoveButtonData = (item, menu, mainData) => {
  return {
    id: "",
    tablename: "MOTO_AUTOZAR",
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
    tablename: "MOTO_AUTOZAR",
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
      { field: "mglfuel", value: item.mglfuel },
      { field: "drive2drivename", value: item.drive2drivename },
    ],
  };
};

const tempTableColumns = (item, menu, mainData) => {
  return [
    {
      field: "mglengine2disp",
      responsive: ["md"],
      value: (
        <span className="gx-text-grey gx-fs-sm">
          {accounting.formatMoney(item.mglengine2disp, {
            symbol: "cc",
            format: "%v %s",
            precision: 0,
            thousand: "'",
          })}
        </span>
      ),
    },

    {
      field: "autozarmilage",
      responsive: ["sm"],
      width: "90px",
      value: (
        <span className="gx-text-grey gx-fs-sm">
          {accounting.formatMoney(item.autozarmilage, {
            symbol: "км",
            format: "%v %s",
            precision: 0,
            thousand: "'",
          })}
        </span>
      ),
    },

    {
      field: "financepricerr",
      width: "110px",
      align: "center",
      value: (
        <span className="gx-text-success gx-font-weight-bold">
          {accounting.formatMoney(item.financepricerr, "₮", 0, "'")}
        </span>
      ),
    },

    // {
    //   field: "modifieddate",
    //   responsive: ["lg"],
    //   value: (
    //     <span className="gx-text-grey gx-fs-sm">
    //       {mainData.modifieddate.value}
    //     </span>
    //   ),
    // },
  ];
};

//  #       ###  #####  #######
//  #        #  #     #    #
//  #        #  #          #
//  #        #   #####     #
//  #        #        #    #
//  #        #  #     #    #
//  ####### ###  #####     #
export const prepareAutozarList = (myArray, menu = "") => {
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

export const prepareAutozarDetail = (myItem, menu = "") => {
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
  myItem.mglyearmanufactured = moment(myItem.mglyearmanufactured);
  myItem.mglyearimport = moment(myItem.mglyearimport);
  myItem.createddate = moment(myItem.createddate);
  myItem.modifieddate = moment(myItem.modifieddate);
  myItem.mglengine2disp = myItem.mglengine2disp * 1;
  myItem.autozarmilage = myItem.autozarmilage * 1;
  myItem.mgldoor = myItem.mgldoor * 1;
  myItem.mglseat = myItem.mglseat * 1;
  myItem.mgldrivepos = toBoolean(myItem.mgldrivepos);
  myItem.autozarleasing = toBoolean(myItem.autozarleasing);
  myItem.autozarpenalty = toBoolean(myItem.autozarpenalty);
  myItem.autozartax = toBoolean(myItem.autozartax);
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
