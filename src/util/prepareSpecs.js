import React from "react";
import toBoolean from "./booleanFunction";
import accounting from "accounting";
import moment from "moment";

export const prepareCompanyList = (myArray, menu = "") => {
  console.log("prepareCompanyList Array", myArray);

  const myList = Object.values(myArray);

  myList.map((item, index) => {
    const tempMainData = {
      id: item.id,
      menu: menu,
      title: item.title,
      imagemain:
        "https://res.cloudinary.com/motomn/image/upload/v1610193640/moto/noimage2.jpg",
      imagemaincloudname: "motomn",
      isfeatured: toBoolean(item.isfeatured)
        ? toBoolean(item.isfeatured)
        : false,
      isactive: toBoolean(item.isactive) ? toBoolean(item.isactive) : true,
      description: "fdg dfg dfgf dgdf gdf gdfg dfg dfsg dfg dfsg dfs", // item.description?.substring(0, 250),
      mainnumber: accounting.formatMoney(58963510, "₮", 0, "'"),
      // mainnumber: "",
      createddate: moment("2010-12-15").fromNow(),
      modifieddate: moment("1999-12-15").fromNow(),
    };

    const tempHeaderSpec = [
      { label: "", value: "dfdsgdfg", status: "processing" },
      { label: "", value: "ffffffg gf", status: "default" },
    ];

    const tempSpecList1 = [
      { label: "Жолоо", value: "Зөв" },
      { label: "Хөдөлгүүр", value: "3000 сс, Премиум бензин" },
    ];

    const tempSpecList2 = [
      {
        label: "Гүйлт",
        value: accounting.formatMoney(55000, {
          symbol: "км",
          format: "%v %s",
          precision: 0,
          thousand: "'",
        }),
      },
      {
        label: "Үйлдвэрлэсэн он",
        value: moment("2020-12-31").format("YYYY") + " он",
      },
    ];

    const tempOwnerData = {
      photo:
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000217/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
      photoalt: "dfgdfgd",
      name: "Ninja Leader",
      position: "dfdgfdg",
    };

    myList[index].mainData = tempMainData;
    myList[index].headerSpec = tempHeaderSpec;
    myList[index].specList1 = tempSpecList1;
    myList[index].specList2 = tempSpecList2;
    myList[index].ownerData = tempOwnerData;
  });

  // console.log("ЭНИЙГ ХАР ДАА", myList);

  return myList;
};
