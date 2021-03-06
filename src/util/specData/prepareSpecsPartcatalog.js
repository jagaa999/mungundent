import React from "react";
import toBoolean from "util/booleanFunction";
import accounting from "accounting";
import moment from "moment";

//   #####  ####### ####### ####### ### #     #  #####
//  #     # #          #       #     #  ##    # #     #
//  #       #          #       #     #  # #   # #
//   #####  #####      #       #     #  #  #  # #  ####
//        # #          #       #     #  #   # # #     #
//  #     # #          #       #     #  #    ## #     #
//   #####  #######    #       #    ### #     #  #####
export const preparePartcatalogListSettings = {
  pagetitle: "Каталог",
  menu: "partcatalog",
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
      field: "partcatalogmilage",
      label: "Зарын гүйлтээр",
      icon: "iconlistlist",
    },
  ],
  meta: {
    title: "Каталог",
    description: "Монгол улсад байгаа автозарууд",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Каталог" },
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
export const preparePartcatalogDetailSettings = {
  pagetitle: "Каталог",
  menu: "partcatalog",
  meta: {
    title: "Каталог",
    description: "Каталог",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Каталог" },
      {
        property: "og:description",
        content: "Каталог",
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
    id: item.carid,
    menu: menu,
    link: { field: "link", value: `/${menu}/edition/${item.carid}` },
    title: {
      field: "title",
      value: item.title || "",
    },
    imagemain: { field: "imagemain", value: item.imagemain },
    imagemaincloudname: { field: "imagemaincloudname", value: "" },
    isfeatured: {
      field: "isfeatured",
      value: toBoolean(item.isfeatured) ? toBoolean(item.isfeatured) : false,
    },
    isactive: {
      field: "isactive",
      value: toBoolean(item.isactive) ? toBoolean(item.isactive) : true,
    },
    description: { field: "fieldeng", value: item.fieldeng },
    mainnumber: {
      field: "cardate",
      value: moment(item.cardate).format("YYYY-MM"),
    },
    createddate: {
      field: "createddate",
      value: null,
    },
    modifieddate: {
      field: "modifieddate",
      value: null,
    },
  };
};

const tempHeaderSpec = (item, menu, mainData) => {
  return [
    {
      field: "body2modelcodefull",
      value: item.body2modelcodefull,
    },
    {
      field: "engine2code",
      value: item.engine2code,
    },
  ];
};

const tempSpecList1 = (item, menu, mainData) => {
  return [
    {
      field: "cartrim",
      value: item.cartrim,
    },
    {
      field: "engine",
      value: `${item.engine2disp} cc, ${item.engine2fuelname}`,
    },
    {
      field: "drive2transmissionfull",
      value: item.drive2transmissionfull,
    },
    {
      field: "drive2drivename",
      value: item.drive2drivename,
    },
  ];
};

const tempSpecList2 = (item, menu, mainData) => {
  return [
    // {
    //   field: "partcatalogmilage",
    //   value: accounting.formatMoney(item.partcatalogmilage, {
    //     symbol: "км",
    //     format: "%v %s",
    //     precision: 0,
    //     thousand: "'",
    //   }),
    // },
    // {
    //   field: "mglyearimport",
    //   value: moment(item.mglyearimport).format("YYYY") + " он",
    // },
  ];
};

const tempOwnerData = (item, menu, mainData) => {
  return {
    // photo: item.memberprofilephoto,
    // photoalt: item.memberuserfullname,
    // name: item.memberuserfullname,
    // position: "",
  };
};

const tempLoveButtonData = (item, menu, mainData) => {
  return {
    id: "",
    tablename: "MOTO_CARCATALOG",
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
    tablename: "MOTO_CARCATALOG",
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
      { field: "body2modelcodefull", value: item.body2modelcodefull },
      { field: "engine2code", value: item.engine2code },
    ],
  };
};

const tempTableColumns = (item, menu, mainData) => {
  return [
    {
      field: "engine2disp",
      responsive: ["md"],
      value: (
        <span className="gx-text-grey gx-fs-sm">
          {accounting.formatMoney(item.engine2disp, {
            symbol: "cc",
            format: "%v %s",
            precision: 0,
            thousand: "'",
          })}
        </span>
      ),
    },

    {
      field: "cardate",
      responsive: ["sm"],
      width: "90px",
      value: (
        <span className="gx-text-grey gx-fs-sm">{moment(item.cardate)}</span>
      ),
    },

    {
      field: "body2modelcodefull",
      width: "110px",
      align: "center",
      value: (
        <span className="gx-text-success gx-fs-sm">
          {item.body2modelcodefull}
        </span>
      ),
    },

    {
      field: "engine2code",
      responsive: ["lg"],
      value: <span className="gx-text-grey gx-fs-sm">{item.engine2code}</span>,
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
export const preparePartcatalogList = (myArray, menu = "partcatalog") => {
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

export const preparePartcatalogDetail = (myItem, menu = "") => {
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
  // myItem.mglyearmanufactured = moment(myItem.mglyearmanufactured);
  // myItem.mglyearimport = moment(myItem.mglyearimport);
  // myItem.createddate = moment(myItem.createddate);
  // myItem.modifieddate = moment(myItem.modifieddate);
  // myItem.mglengine2disp = myItem.mglengine2disp * 1;
  // myItem.partcatalogmilage = myItem.partcatalogmilage * 1;
  // myItem.mgldoor = myItem.mgldoor * 1;
  // myItem.mglseat = myItem.mglseat * 1;
  // myItem.mgldrivepos = toBoolean(myItem.mgldrivepos);
  // myItem.partcatalogleasing = toBoolean(myItem.partcatalogleasing);
  // myItem.partcatalogpenalty = toBoolean(myItem.partcatalogpenalty);
  // myItem.partcatalogtax = toBoolean(myItem.partcatalogtax);
  // myItem.isactive = toBoolean(myItem.isactive);
  // myItem.iscomment = toBoolean(myItem.iscomment);
  // myItem.isfeatured = toBoolean(myItem.isfeatured);

  // myItem.imagemainFileList = [];
  // myItem.imagemainFileList =
  //   myItem.imagemain !== undefined &&
  //   (myItem.imagemain !== ""
  //     ? [
  //         {
  //           uid: "-1",
  //           name: "Тодорхойгүй",
  //           status: "done",
  //           url: myItem.imagemain || "",
  //           thumbUrl: myItem.imagemain || "",
  //           response: { url: myItem.imagemain || "" },
  //         },
  //       ]
  //     : []);
  // myItem.imageotherFileList = [];
  // myItem.imageotherFileList =
  //   myItem.imageother !== undefined &&
  //   (myItem.imageother !== ""
  //     ? JSON.parse(myItem.imageother).map((item, index) => ({
  //         uid: index - 1,
  //         name: item.replace(/^.*[\\\/]/, ""),
  //         status: "done",
  //         url: item || "",
  //         thumbUrl: item || "",
  //         response: { url: item || "" },
  //       }))
  //     : []);

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
