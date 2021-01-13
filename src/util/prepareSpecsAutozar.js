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

  return myList;
};
