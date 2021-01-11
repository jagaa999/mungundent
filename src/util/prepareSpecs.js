import React from "react";
import toBoolean from "./booleanFunction";
import accounting from "accounting";
import moment from "moment";

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
      description: mainData.title,
      mainimg: mainData.imagemain,
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
        value: mainData.mainnumber.value,
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
