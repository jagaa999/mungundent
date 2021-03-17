import React from "react";
import toBoolean from "util/booleanFunction";
import accounting from "accounting";
import moment from "moment";
import MyIcon from "util/iconFunction";
import FilterTextSearch from "components/Moto/Drawer/FilterWidget/FilterTextSearch";
import FilterCheckbox from "components/Moto/Drawer/FilterWidget/FilterCheckbox";
import FilterRadioButton2 from "components/Moto/Drawer/FilterWidget/FilterRadioButton2";

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

//  #    # ######   ##   #####  ###### #####
//  #    # #       #  #  #    # #      #    #
//  ###### #####  #    # #    # #####  #    #
//  #    # #      ###### #    # #      #####
//  #    # #      #    # #    # #      #   #
//  #    # ###### #    # #####  ###### #    #
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

//  #####   ##   #####  #      ######
//    #    #  #  #    # #      #
//    #   #    # #####  #      #####
//    #   ###### #    # #      #
//    #   #    # #    # #      #
//    #   #    # #####  ###### ######
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

//  #####  #    # ##### #####  ####  #    #  ####
//  #    # #    #   #     #   #    # ##   # #
//  #####  #    #   #     #   #    # # #  #  ####
//  #    # #    #   #     #   #    # #  # #      #
//  #    # #    #   #     #   #    # #   ## #    #
//  #####   ####    #     #    ####  #    #  ####
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

const tempOwnerButtons = (item, menu, mainData, myContext) => {
  // return [
  //   {
  //     menuItem: (
  //       <Menu.Item key="up" onClick="upPublishedDate">
  //         {/* <ArrowUpOutlined /> */}
  //         <MyIcon type="iconangle-double-up-solid" className="moto-icon-1-1" />
  //         Дээшлүүлэх
  //       </Menu.Item>
  //     ),
  //   },
  //   {
  //     menuItem: (
  //       <Menu.Item key="sponsor">
  //         <Checkbox checked="isfeatured" onChange="toggleIsFeatured">
  //           Спонсор?
  //         </Checkbox>
  //       </Menu.Item>
  //     ),
  //   },
  //   {
  //     menuItem: (
  //       <Menu.Item key="active">
  //         <Checkbox checked="isactive" onChange="toggleIsActive">
  //           Идэвхтэй?
  //         </Checkbox>
  //       </Menu.Item>
  //     ),
  //   },
  //   {
  //     menuItem: <Menu.Divider />,
  //   },
  //   {
  //     menuItem: (
  //       <Menu.Item key="Засах">
  //         <Link to={`/${menu}/edit/${item.newsid}`}>
  //           <MyIcon type="iconpen-solid" className="moto-icon-1-1" /> Засах
  //         </Link>
  //       </Menu.Item>
  //     ),
  //   },
  //   {
  //     menuItem: (
  //       <Menu.Item
  //         key="Устгах"
  //         // onClick={handleMenuClick}
  //         danger
  //         disabled
  //       >
  //         <MyIcon type="icontrash-alt-solid" className="moto-icon-1-1" /> Устгах
  //       </Menu.Item>
  //     ),
  //   },
  // ];
};

//   ####   ####  #####  #####  ######  ####  #####
//  #    # #    # #    # #    # #      #    #   #
//  #      #    # #    # #    # #####  #        #
//  #      #    # #####  #####  #      #        #
//  #    # #    # #   #  #   #  #      #    #   #
//   ####   ####  #    # #    # ######  ####    #
const correctFields = (myItem) => {
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

    correctFields(item);

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

  correctFields(myItem);

  //All specs

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

//   #####  ####### #     # ####### ####### #     # #######
//  #     # #     # ##    #    #    #        #   #     #
//  #       #     # # #   #    #    #         # #      #
//  #       #     # #  #  #    #    #####      #       #
//  #       #     # #   # #    #    #         # #      #
//  #     # #     # #    ##    #    #        #   #     #
//   #####  ####### #     #    #    ####### #     #    #
export const prepareAutozarContextSettings = {
  listSetting: {
    loadParams: {
      systemmetagroupid: "1605592797379", //Autozar List
      showquery: "0",
      ignorepermission: "1",
      criteria: {
        isactive: {
          0: {
            operator: "=",
            operand: "1",
          },
        },
      },
      paging: {
        pagesize: "12", //нийтлэлийн тоо
        offset: "1", //хуудасны дугаар
        sortcolumnnames: "modifieddate",
        sorttypename: "DESC",
      },
    },
    urlIdField: "",
  },
  detailSetting: {
    loadParams: {
      systemmetagroupid: "1605592797379", //Autozar Detail байх ёстой
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pagesize: "1",
        offset: "1",
      },
    },
  },
};

//  ####### ### #       ####### ####### ######
//  #        #  #          #    #       #     #
//  #        #  #          #    #       #     #
//  #####    #  #          #    #####   ######
//  #        #  #          #    #       #   #
//  #        #  #          #    #       #    #
//  #       ### #######    #    ####### #     #
export const prepareAutozarFilterSettings = {
  mainSetting: {},
  widgets: [
    // <FilterTextSearch
    //   title="Нэрээр хайх"
    //   placeholder="Текстээ бичнэ үү"
    //   urlparamfield="title"
    // />,

    <FilterCheckbox
      metaListId="1602132741145717"
      paging={{
        sortColumnNames: "mglfirm",
        sortType: "ASC",
      }}
      title="Фирм"
      placeholder="Автомашины фирм"
      urlparamfield="mglfirm"
      labelfield="mglfirm"
      valuefield="mglfirm"
    />,
    <FilterCheckbox
      metaListId="1602132873132213"
      criteria={{
        operator: "=",
        operand: "mglfirm",
      }}
      paging={{
        sortColumnNames: "mglmark",
        sortType: "ASC",
      }}
      title="Марк"
      placeholder="Автомашины марк"
      urlparamfield="mglmark"
      labelfield="mglmark"
      valuefield="mglmark"
    />,

    <FilterCheckbox
      metaListId="1599557926832"
      paging={{
        sortColumnNames: "mglbody",
        sortType: "ASC",
      }}
      title="Хийц"
      placeholder="Автомашины хийц"
      urlparamfield="mglbody"
      labelfield="mglbody"
      valuefield="mglbody"
    />,

    <FilterCheckbox
      metaListId="1586942860884102"
      paging={{
        sortColumnNames: "firmname",
        sortType: "ASC",
      }}
      title="Фирм"
      placeholder="Автомашины фирм"
      urlparamfield="firmid"
      labelfield="firmname"
      valuefield="firmid"
    />,
    <FilterCheckbox
      metaListId="1586946725870325"
      criteria={{
        operator: "=",
        operand: "firmid",
      }}
      paging={{
        sortColumnNames: "markname",
        sortType: "ASC",
      }}
      title="Марк"
      placeholder="Автомашины марк"
      urlparamfield="markid"
      labelfield="markname"
      valuefield="markid"
    />,

    <FilterCheckbox
      metaListId="1586957792729721"
      paging={{
        sortColumnNames: "firmname",
        sortType: "ASC",
      }}
      title="Хийц"
      placeholder="Автомашины хийц"
      urlparamfield="bodyid"
      labelfield="body2bodyname"
      valuefield="id"
    />,
  ],
};
