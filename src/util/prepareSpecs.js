import React from "react";
import toBoolean from "./booleanFunction";
import accounting from "accounting";
import moment from "moment";

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
      link: `/${menu}/${item.id}`,
      title: `${
        moment(item.mglyearmanufactured, "YYYY").isValid() === true
          ? moment(item.mglyearmanufactured).format("YYYY")
          : ""
      } ${item.mglfirm || ""} ${item.mglmark || ""} ${item.cartrim || ""}`,
      imagemain: item.imagemain,
      imagemaincloudname: "duznp4bqa",
      isfeatured: toBoolean(item.isfeatured)
        ? toBoolean(item.isfeatured)
        : false,
      isactive: toBoolean(item.isactive) ? toBoolean(item.isactive) : true,
      description: "",
      mainnumber: accounting.formatMoney(item.financepricerr, "₮", 0, "'"),
      createddate: moment(item.createddate).fromNow(),
      modifieddate: moment(item.modifieddate).fromNow(),
    };

    const headerSpec = [
      {
        label: "Улсын дугаар",
        value: item.mgllicensenumberfull,
        status: "processing",
      },
      { label: "Хийц", value: item.mglbody, status: "default" },
    ];

    const specList1 = [
      { label: "Жолоо", value: item.mgldrivepos === "1" ? "Зөв" : "Буруу" },
      {
        label: "Хөдөлгүүр",
        value: `${item.mglengine2disp} cc, ${item.mglfuel}`,
      },
      { label: "Хроп", value: item.drive2transtypename },
      { label: "Хөтлөгч", value: item.drive2drivename },
    ];

    const specList2 = [
      {
        label: "Гүйлт",
        value: accounting.formatMoney(item.autozarmilage, {
          symbol: "км",
          format: "%v %s",
          precision: 0,
          thousand: "'",
        }),
      },
      {
        label: "Орж ирсэн",
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
      title: mainData.title,
      image: mainData.imagemain,
      mainSpec: mainData.mainnumber,
      link: mainData.link,
      subSpecs: [
        { title: "Шатахуун", value: item.mglfuel },
        { title: "Хөтлөгч", value: item.drive2drivename },
      ],
    };

    myList[index].mainData = mainData;
    myList[index].headerSpec = headerSpec;
    myList[index].specList1 = specList1;
    myList[index].specList2 = specList2;
    myList[index].ownerData = ownerData;
    myList[index].saveButtonData = saveButtonData;
    myList[index].compareButtonData = compareButtonData;
  });

  // console.log("ЭНИЙГ ХАР ДАА", myList);

  return myList;
};
