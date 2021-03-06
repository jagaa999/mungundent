import React from "react";
import toBoolean from "util/booleanFunction";
import accounting from "accounting";
import moment from "moment";
import MyIcon from "util/iconFunction";
import FilterCheckbox from "components/Moto/Drawer/FilterWidget/FilterCheckbox";
import FilterTextSearch from "components/Moto/Drawer/FilterWidget/FilterTextSearch";

//   #####  ####### ####### ####### ### #     #  #####
//  #     # #          #       #     #  ##    # #
//  #       #          #       #     #  # #   # #
//   #####  #####      #       #     #  #  #  # #  ####
//        # #          #       #     #  #   # # #     #
//  #     # #          #       #     #  #    ## #     #
//   #####  #######    #       #    ### #     #  #####
export const prepareMotocarListSettings = {
  pagetitle: "Гишүүдийн гарааш",
  menu: "motocar",
  sortFields: [
    {
      field: "id",
      label: "ID дугаараар",
      icon: "iconlistlist",
    },
    ,
  ],
  meta: {
    title: "Гишүүдийн гарааш",
    description: "Гишүүдийн гарааш",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Гишүүдийн гарааш" },
      { property: "og:description", content: "Гишүүдийн гарааш" },
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
export const prepareMotocarDetailSettings = {
  pagetitle: "Гишүүний гарааш",
  menu: "motocar",
  contextName: "context/UniversalContext",
  meta: {
    title: "Гишүүний гарааш",
    description: "Гишүүний гарааш",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Гишүүний гарааш" },
      {
        property: "og:description",
        content: "Гишүүний гарааш",
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

//  #     #    #    ### #     # ######     #    #######    #
//  ##   ##   # #    #  ##    # #     #   # #      #      # #
//  # # # #  #   #   #  # #   # #     #  #   #     #     #   #
//  #  #  # #     #  #  #  #  # #     # #     #    #    #     #
//  #     # #######  #  #   # # #     # #######    #    #######
//  #     # #     #  #  #    ## #     # #     #    #    #     #
//  #     # #     # ### #     # ######  #     #    #    #     #
const tempMainData = (item, menu) => {
  return {
    id: item.id,
    menu: menu,
    link: {
      field: "link",
      value: `/motocar/${item.id}`,
    },
    title: {
      field: "title",
      value: `${item.firmname} ${item.markname} ${item.goocartrim}`,
    },
    imagemain: { field: "indeximage", value: item.indeximage },
    imagemaincloudname: { field: "imagemaincloudname", value: "motomn" },
    isfeatured: {
      field: "isfeatured",
      value: toBoolean(item.isfeatured || false) ? true : false,
    },
    isactive: {
      field: "isactive",
      value: toBoolean(item.isactive || true) ? true : false,
    },
    description: {
      field: "description",
      value: item.description,
    },
    mainnumber: {
      field: "mgllicensenumberfull",
      value: item.mgllicensenumberfull,
    },
    createddate: {
      field: "createddate",
      value: moment(item.createddate).fromNow(),
      // field: "",
      // value: "",
    },
    modifieddate: {
      field: "modifieddate",
      value: moment(item.modifieddate).fromNow(),
      // field: "",
      // value: "",
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
      field: "goobody2modelcodefull",
      value: item.goobody2modelcodefull,
    },
    {
      field: "gooengine2code",
      value: item.gooengine2code,
    },
    // {
    //   field: "assemblygroupdescription",
    //   value: item.assemblygroupdescription,
    // },
  ];
};

const tempSpecList1 = (item, menu, mainData) => {
  return [
    {
      field: "motocarengine",
      value: `${item.gooengine2fuelname} ${item.gooengine2disp} cc`,
    },
    {
      field: "goodrive2transtypename",
      value: item.goodrive2transtypename,
    },
    {
      field: "goocardate",
      value: item.goocardate,
    },
  ];
};

const tempSpecList2 = (item, menu, mainData) => {
  return [];
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
    // {
    //   field: "m_description",
    //   // responsive: ["lg"],
    //   renderDivClass: "gx-fs-sm gx-text-grey",
    //   value: (
    //     <span className="gx-fs-sm gx-text-grey">{item.m_description}</span>
    //   ),
    // },
    // {
    //   field: "description",
    //   // responsive: ["lg"],
    //   renderDivClass: "gx-fs-sm gx-text-grey",
    //   value: <span className="gx-fs-sm gx-text-grey">{item.description}</span>,
    // },
  ];
};

const tempCompareButtonData = (item, menu, mainData) => {
  return {
    title: mainData.title.value,
    imagemain: mainData.imagemain.value,
    mainSpec: mainData.mainnumber.value,
    link: mainData.link.value,
    subSpecs: [
      // { field: "m_description", value: item.m_description },
      // { field: "description", value: item.description },
    ],
  };
};

//  #####  #    # ##### #####  ####  #    #  ####
//  #    # #    #   #     #   #    # ##   # #
//  #####  #    #   #     #   #    # # #  #  ####
//  #    # #    #   #     #   #    # #  # #      #
//  #    # #    #   #     #   #    # #   ## #    #
//  #####   ####    #     #    ####  #    #  ####
const tempLoveButtonData = (item, menu, mainData) => {
  return {
    id: "",
    tablename: "MOTOCAR",
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
    tablename: "MOTOCAR",
    actionname: "Жоорлох",
    actiondata: "1",
    recordid: mainData.id || "",
    description: mainData.title.value,
    mainimg: mainData.imagemain.value,
  };
};

const tempOwnerButtons = (item, menu, mainData, myContext) => {
  return [
    // {
    //   menuItem: (
    //     <Menu.Item key="up" onClick="upPublishedDate">
    //       <MyIcon type="iconangle-double-up-solid" className="moto-icon-1-1" />
    //       Дээшлүүлэх
    //     </Menu.Item>
    //   ),
    // },
    // {
    //   menuItem: (
    //     <Menu.Item key="sponsor">
    //       <Checkbox checked="isfeatured" onChange="toggleIsFeatured">
    //         Спонсор?
    //       </Checkbox>
    //     </Menu.Item>
    //   ),
    // },
    // {
    //   menuItem: (
    //     <Menu.Item key="active">
    //       <Checkbox checked="isactive" onChange="toggleIsActive">
    //         Идэвхтэй?
    //       </Checkbox>
    //     </Menu.Item>
    //   ),
    // },
    // {
    //   menuItem: <Menu.Divider />,
    // },
    // {
    //   menuItem: (
    //     <Menu.Item key="Засах">
    //       <Link to={`/${menu}/edit/${item.newsid}`}>
    //         <MyIcon type="iconpen-solid" className="moto-icon-1-1" /> Засах
    //       </Link>
    //     </Menu.Item>
    //   ),
    // },
    // {
    //   menuItem: (
    //     <Menu.Item
    //       key="Устгах"
    //       danger
    //       disabled
    //     >
    //       <MyIcon type="icontrash-alt-solid" className="moto-icon-1-1" /> Устгах
    //     </Menu.Item>
    //   ),
    // },
  ];
};

//   ####   ####  #####  #####  ######  ####  #####
//  #    # #    # #    # #    # #      #    #   #
//  #      #    # #    # #    # #####  #        #
//  #      #    # #####  #####  #      #        #
//  #    # #    # #   #  #   #  #      #    #   #
//   ####   ####  #    # #    # ######  ####    #
const correctFields = (myItem) => {
  //All specs
  // myItem.createddate = moment(myItem.createddate);
  // myItem.modifieddate = moment(myItem.modifieddate);
  myItem.isactive = toBoolean(myItem.isactive);
  myItem.iscomment = toBoolean(myItem.iscomment);
  myItem.isfeatured = toBoolean(myItem.isfeatured);
  myItem.isdefault = toBoolean(myItem.isdefault);

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
};

//  #       ###  #####  #######
//  #        #  #     #    #
//  #        #  #          #
//  #        #   #####     #
//  #        #        #    #
//  #        #  #     #    #
//  ####### ###  #####     #
export const prepareMotocarList = (myArray, menu = "", myContext) => {
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
    const ownerButtons = tempOwnerButtons(item, menu, mainData, myContext);

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
    myList[index].ownerButtons = ownerButtons;
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
export const prepareMotocarDetail = (myItem, menu = "", myContext) => {
  const mainData = tempMainData(myItem, menu);
  const headerSpec = tempHeaderSpec(myItem, menu, mainData);
  const specList1 = tempSpecList1(myItem, menu, mainData);
  const specList2 = tempSpecList2(myItem, menu, mainData);
  const ownerData = tempOwnerData(myItem, menu, mainData);
  const loveButtonData = tempLoveButtonData(myItem, menu, mainData);
  const saveButtonData = tempSaveButtonData(myItem, menu, mainData);
  const compareButtonData = tempCompareButtonData(myItem, menu, mainData);
  const tableColumns = tempTableColumns(myItem, menu, mainData);
  const ownerButtons = tempOwnerButtons(myItem, menu, mainData, myContext);

  correctFields(myItem);

  myItem.mainData = mainData;
  myItem.headerSpec = headerSpec;
  myItem.specList1 = specList1;
  myItem.specList2 = specList2;
  myItem.ownerData = ownerData;
  myItem.loveButtonData = loveButtonData;
  myItem.saveButtonData = saveButtonData;
  myItem.compareButtonData = compareButtonData;
  myItem.tableColumns = tableColumns;
  myItem.ownerButtons = ownerButtons;

  console.log("myItem.ownerButtons", myItem.ownerButtons);
  console.log("myContext", myContext);

  return myItem;
};

//   #####  ####### #     # ####### ####### #     # #######
//  #     # #     # ##    #    #    #        #   #     #
//  #       #     # # #   #    #    #         # #      #
//  #       #     # #  #  #    #    #####      #       #
//  #       #     # #   # #    #    #         # #      #
//  #     # #     # #    ##    #    #        #   #     #
//   #####  ####### #     #    #    ####### #     #    #
export const prepareMotocarContextSettings = {
  listSetting: {
    loadParams: {
      systemmetagroupid: "1600421356169317", //Motocar List
      showquery: "0",
      ignorepermission: "1",
      paging: {
        pagesize: "12", //нийтлэлийн тоо
        offset: "1", //хуудасны дугаар
        sortcolumnnames: "id",
        sorttypename: "DESC",
      },
    },
    urlIdField: "id",
  },
  detailSetting: {
    loadParams: {
      systemmetagroupid: "", //Motocar Detail байх ёстой
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
export const prepareMotocarFilterSettings = {
  mainSetting: {},
  widgets: [
    <FilterTextSearch
      title="Нэрээр хайх"
      placeholder="Текстээ бичнэ үү"
      urlparamfield="title"
    />,
    // <FilterCheckbox
    //   metaListId="16147438441621"
    //   title="Үйлдвэрлэгч"
    //   placeholder="Хөдөлгүүр үйлдвэрлэгч"
    //   urlparamfield="manufacturerid"
    //   labelfield="description"
    //   valuefield="id"
    // />,
  ],
};
