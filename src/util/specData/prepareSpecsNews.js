import React from "react";
import { Link } from "react-router-dom";
import { Menu, Checkbox } from "antd";
import toBoolean from "util/booleanFunction";
import accounting from "accounting";
import moment from "moment";
import MyIcon from "util/iconFunction";
import FilterTextSearch from "components/Moto/Drawer/FilterWidget/FilterTextSearch";
import FilterCheckbox from "components/Moto/Drawer/FilterWidget/FilterCheckbox";
import FilterRadioButton2 from "components/Moto/Drawer/FilterWidget/FilterRadioButton2";

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
  contextName: "context/NewsContext",
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
      value: item?.description?.substring(0, 135),
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

//  #    # ######   ##   #####  ###### #####
//  #    # #       #  #  #    # #      #    #
//  ###### #####  #    # #    # #####  #    #
//  #    # #      ###### #    # #      #####
//  #    # #      #    # #    # #      #   #
//  #    # ###### #    # #####  ###### #    #
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
  return [
    {
      field: "carfirmnames",
      value: item.carfirmnames,
    },
    {
      field: "carmarknames",
      value: item.carmarknames,
    },
  ];
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

//  #####   ##   #####  #      ######
//    #    #  #  #    # #      #
//    #   #    # #####  #      #####
//    #   ###### #    # #      #
//    #   #    # #    # #      #
//    #   #    # #####  ###### ######
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
      value: (
        <span className="gx-fs-sm gx-text-grey">
          {mainData.modifieddate.value}
        </span>
      ),
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

//  #####  #    # ##### #####  ####  #    #  ####
//  #    # #    #   #     #   #    # ##   # #
//  #####  #    #   #     #   #    # # #  #  ####
//  #    # #    #   #     #   #    # #  # #      #
//  #    # #    #   #     #   #    # #   ## #    #
//  #####   ####    #     #    ####  #    #  ####
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

const tempOwnerButtons = (item, menu, mainData, myContext) => {
  return [
    {
      menuItem: (
        <Menu.Item key="up" onClick="upPublishedDate">
          {/* <ArrowUpOutlined /> */}
          <MyIcon type="iconangle-double-up-solid" className="moto-icon-1-1" />
          Дээшлүүлэх
        </Menu.Item>
      ),
    },
    {
      menuItem: (
        <Menu.Item key="sponsor">
          <Checkbox checked="isfeatured" onChange="toggleIsFeatured">
            Спонсор?
          </Checkbox>
        </Menu.Item>
      ),
    },
    {
      menuItem: (
        <Menu.Item key="active">
          <Checkbox checked="isactive" onChange="toggleIsActive">
            Идэвхтэй?
          </Checkbox>
        </Menu.Item>
      ),
    },
    {
      menuItem: <Menu.Divider />,
    },
    {
      menuItem: (
        <Menu.Item key="Засах">
          <Link to={`/${menu}/edit/${item.newsid}`}>
            <MyIcon type="iconpen-solid" className="moto-icon-1-1" /> Засах
          </Link>
        </Menu.Item>
      ),
    },
    {
      menuItem: (
        <Menu.Item
          key="Устгах"
          // onClick={handleMenuClick}
          danger
          disabled
        >
          <MyIcon type="icontrash-alt-solid" className="moto-icon-1-1" /> Устгах
        </Menu.Item>
      ),
    },
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
};

//  #       ###  #####  #######
//  #        #  #     #    #
//  #        #  #          #
//  #        #   #####     #
//  #        #        #    #
//  #        #  #     #    #
//  ####### ###  #####     #
export const prepareNewsList = (myArray, menu = "", myContext) => {
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
export const prepareNewsDetail = (myItem, menu = "", myContext) => {
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

//   #####  ####### #     # ####### ####### #     # #######
//  #     # #     # ##    #    #    #        #   #     #
//  #       #     # # #   #    #    #         # #      #
//  #       #     # #  #  #    #    #####      #       #
//  #       #     # #   # #    #    #         # #      #
//  #     # #     # #    ##    #    #        #   #     #
//   #####  ####### #     #    #    ####### #     #    #
export const prepareNewsContextSettings = {
  listSetting: {
    loadParams: {
      systemmetagroupid: "1587197820548033", //News List
      showquery: "0",
      ignorepermission: "1",
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
      systemmetagroupid: "", //News Detail байх ёстой
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
export const prepareNewsFilterSettings = {
  mainSetting: {},
  widgets: [
    <FilterTextSearch
      title="Нэрээр хайх"
      placeholder="Текстээ бичнэ үү"
      urlparamfield="title"
    />,
    // <FilterCheckbox
    //   metaListId="1587100905303413"
    //   title="Төрөл"
    //   placeholder="Нийтлэлийн төрөл"
    //   urlparamfield="newstypeid"
    //   labelfield="newstypename"
    //   valuefield="newstypeid"
    // />,
    <FilterRadioButton2
      metaListId="1587100905303413"
      paging={{
        sortColumnNames: "newstypeid",
        sortType: "ASC",
      }}
      title="Төрөл"
      placeholder="Нийтлэлийн төрөл"
      urlparamfield="newstypeid"
      labelfield="newstypename"
      valuefield="newstypeid"
    />,
    <FilterCheckbox
      metaListId="1585046479054"
      title="Эх сурвалж"
      placeholder="Нийтлэлийн эх сурвалж"
      urlparamfield="newssourceid"
      labelfield="newssourcename"
      valuefield="newssourceid"
    />,
    // <FilterCheckbox
    //   metaListId="1585046481242"
    //   title="Нийтлэгч"
    //   placeholder="Нийтлэгч хүмүүс"
    //   urlparamfield="publisherid"
    //   labelfield="publishername"
    //   valuefield="publisherid"
    // />,

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
  ],
};
