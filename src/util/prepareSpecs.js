import React from "react";
import { Html5Entities } from "html-entities";
import { Tooltip, Tag } from "antd";
import toBoolean from "./booleanFunction";
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

//     #    #     # ####### ####### #######    #    ######
//    # #   #     #    #    #     #      #    # #   #     #
//   #   #  #     #    #    #     #     #    #   #  #     #
//  #     # #     #    #    #     #    #    #     # #####
//  ####### #     #    #    #     #   #     ####### #   #
//  #     # #     #    #    #     #  #      #     # #    #
//  #     #  #####     #    ####### ####### #     # #     #
//Autozar
export const prepareAutozarSettings = {
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
};

export const prepareAutozarList = (myArray, menu = "") => {
  // console.log("prepareAutozarList Array", myArray);

  const myList = Object.values(myArray);

  myList.map((item, index) => {
    // myList[index].financepricerr = accounting.formatMoney(
    //   item.financepricerr,
    //   "₮",
    //   0,
    //   "'"
    // );

    const mainData = {
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
      description: { field: "description", value: "" },
      mainnumber: {
        field: "financepricerr",
        value: accounting.formatMoney(item.financepricerr, "₮", 0, "'"),
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
        field: "mgllicensenumberfull",
        value: item.mgllicensenumberfull,
      },
      {
        field: "mglbody",
        value: item.mglbody,
      },
    ];

    const specList1 = [
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

    const specList2 = [
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

    const ownerData = {
      photo: item.memberprofilephoto,
      photoalt: item.memberuserfullname,
      name: item.memberuserfullname,
      position: "",
    };

    const saveButtonData = {
      id: "",
      tablename: "MOTO_AUTOZAR",
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
        { field: "mglfuel", value: item.mglfuel },
        { field: "drive2drivename", value: item.drive2drivename },
      ],
    };

    const tableColumns = [
      {
        field: "mglengine2disp",
        responsive: ["md"],
        renderDivClass: "gx-text-grey",
        value: accounting.formatMoney(item.mglengine2disp, {
          symbol: "cc",
          format: "%v %s",
          precision: 0,
          thousand: "'",
        }),
      },

      {
        field: "autozarmilage",
        responsive: ["sm"],
        width: "90px",
        renderDivClass: "gx-text-grey gx-fs-sm",
        value: accounting.formatMoney(item.autozarmilage, {
          symbol: "км",
          format: "%v %s",
          precision: 0,
          thousand: "'",
        }),
      },

      {
        field: "financepricerr",
        width: "110px",
        align: "center",
        renderDivClass: "gx-text-success",
        // value: mainData.mainnumber.value,
        value: accounting.formatMoney(item.financepricerr, "₮", 0, "'"),
      },

      {
        field: "modifieddate",
        responsive: ["lg"],
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

//  #     # ####### #     #  #####
//  ##    # #       #  #  # #     #
//  # #   # #       #  #  # #
//  #  #  # #####   #  #  #  #####
//  #   # # #       #  #  #       #
//  #    ## #       #  #  # #     #
//  #     # #######  ## ##   #####

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
};

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

//     #    #     #  #####  ####### ### ####### #     #
//    # #   #     # #     #    #     #  #     # ##    #
//   #   #  #     # #          #     #  #     # # #   #
//  #     # #     # #          #     #  #     # #  #  #
//  ####### #     # #          #     #  #     # #   # #
//  #     # #     # #     #    #     #  #     # #    ##
//  #     #  #####   #####     #    ### ####### #     #

export const prepareAuctionSettings = {
  pagetitle: "Аукшин",
  menu: "auction",
  sortFields: [
    {
      field: "YEAR",
      label: "Оноор",
      icon: "iconlistlist",
    },
    {
      field: "RATE",
      label: "Үнэлгээгээр",
      icon: "iconlistlist",
    },
    {
      field: "MILEAGE",
      label: "Гүйлтээр",
      icon: "iconlistlist",
    },
  ],
};

export const prepareAuctionList = (myArray, menu = "") => {
  const htmlEntities = new Html5Entities();
  // const myList = Object.values(myArray);
  const myList = myArray;

  myList.map((item, index) => {
    const mainData = {
      id: item.ID,
      menu: menu,
      link: { field: "link", value: `/${menu}/${item.ID}` },
      title: {
        field: "title",
        value: (
          <>
            {item.YEAR} {item.MARKA_NAME} {item.MODEL_NAME}
            <Tooltip title="LOT дугаар">
              <Tag color="magenta" className="gx-ml-2">
                {item.LOT}
              </Tag>
            </Tooltip>
          </>
        ),
      },
      imagemain: {
        field: "imagemain",
        value: item.IMAGES.replace("h=50", "w=320"),
      },
      imagemaincloudname: { field: "imagemaincloudname", value: "regular" },
      isfeatured: {
        field: "isfeatured",
        value: false,
      },
      isactive: {
        field: "isactive",
        value: true,
      },
      description: {
        field: "description",
        value: "",
      },
      mainnumber: {
        field: "RATE",
        value: (
          <div style={{ minWidth: "90px" }}>
            <div className="gx-text-black gx-fs-lg">{item.RATE}</div>
            <MotoAuctionStarRatingComponent
              starCount={6}
              value={item.RATE}
              emptyStarColor={"#d1d1d1"}
            />
          </div>
        ),
      },
      createddate: {
        field: "createddate",
        value: "",
      },
      modifieddate: {
        field: "modifieddate",
        value: (
          <>
            <div>{moment(item.AUCTION_DATE).fromNow()}</div>
            <div>{moment(item.AUCTION_DATE).format("HH:mm")}</div>
          </>
        ),
      },
    };

    const headerSpec = [
      {
        field: "MILEAGE",
        value: accounting.formatMoney(item.MILEAGE, {
          symbol: "км",
          format: "%v %s",
          precision: 0,
          thousand: "'",
        }),
      },
      {
        field: "START",
        value: accounting.formatMoney(item.START, "¥", 0, "'"),
      },
      {
        field: "AVG_PRICE",
        value: accounting.formatMoney(item.AVG_PRICE, "¥", 0, "'"),
      },
    ];

    const specList1 = [
      {
        field: "ENG_V",
        value: accounting.formatMoney(item.ENG_V, {
          symbol: "cc",
          format: "%v %s",
          precision: 0,
          thousand: "'",
        }),
      },
      {
        field: "KPP",
        value: `${item.KPP} ${item.KPP_TYPE}`,
      },
      {
        field: "PRIV",
        value: item.PRIV,
      },
    ];

    const specList2 = [
      {
        field: "KUZOV",
        value: htmlEntities.decode(item.KUZOV),
      },
      {
        field: "GRADE",
        value: htmlEntities.decode(item.GRADE),
      },
    ];

    const ownerData = {
      photo: "",
      photoalt: "",
      name: item.AUCTION,
      position: "",
    };

    const saveButtonData = {
      id: "",
      tablename: "MOTO_AUCTION",
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
        {
          field: "MILEAGE",
          value: accounting.formatMoney(item.MILEAGE, {
            symbol: "км",
            format: "%v %s",
            precision: 0,
            thousand: "'",
          }),
        },
        {
          field: "RATE",
          value: (
            <div style={{ minWidth: "90px" }}>
              <div className="gx-text-black gx-fs-lg">{item.RATE}</div>
              <MotoAuctionStarRatingComponent
                starCount={6}
                value={item.RATE}
                emptyStarColor={"#d1d1d1"}
              />
            </div>
          ),
        },
      ],
    };

    const tableColumns = [
      {
        field: "RATE",
        // responsive: ["md"],
        // responsive: ["lg"],
        renderDivClass: "gx-text-grey",
        value: (
          <div style={{ minWidth: "90px" }}>
            <div className="gx-text-black gx-fs-lg">{item.RATE}</div>
            <MotoAuctionStarRatingComponent
              starCount={6}
              value={item.RATE}
              emptyStarColor={"#d1d1d1"}
            />
          </div>
        ),
      },
      {
        field: "MILEAGE",
        responsive: ["md"],
        renderDivClass: "gx-text-grey",
        value: accounting.formatMoney(item.MILEAGE, {
          symbol: "км",
          format: "%v %s",
          precision: 0,
          thousand: "'",
        }),
      },

      {
        field: "PRICE",
        responsive: ["sm"],
        renderDivClass: "gx-fs-sm gx-text-grey",
        value: (
          <>
            <Tooltip title="Дуудах эхлэх үнэ">
              <div className="gx-text-grey gx-fs-sm">
                {accounting.formatMoney(item.START, "¥", 0, "'")}
              </div>
            </Tooltip>
            <Tooltip title="Зарагддаг дундаж үнэ">
              <div className="gx-text-grey gx-fs-sm">
                {accounting.formatMoney(item.AVG_PRICE, "¥", 0, "'")}
              </div>
            </Tooltip>
          </>
        ),
      },

      {
        field: "AUCTION_DATE",
        responsive: ["lg"],
        renderDivClass: "gx-fs-sm gx-text-grey",
        value: (
          <>
            <div className="gx-text-grey gx-fs-sm">{item.AUCTION}</div>
            <Tooltip
              title={`Дуудлагын огноо (Япон цагаар) ${item.AUCTION_DATE}`}
            >
              <span className="gx-fs-sm gx-text-grey">
                <div>{moment(item.AUCTION_DATE).fromNow()}</div>
                <div>{moment(item.AUCTION_DATE).format("HH:mm")}</div>
                <div>{item.STATUS}</div>
              </span>
            </Tooltip>
          </>
        ),
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
