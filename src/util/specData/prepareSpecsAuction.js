import React from "react";
import { Html5Entities } from "html-entities";
import { Tooltip, Tag } from "antd";
import toBoolean from "util/booleanFunction";
import accounting from "accounting";
import moment from "moment";
import MotoAuctionStarRatingComponent from "components/Moto/Auction/MotoAuctionStarRatingComponent";

//     #    #     #  #####  ####### ### ####### #     #
//    # #   #     # #     #    #     #  #     # ##    #
//   #   #  #     # #          #     #  #     # # #   #
//  #     # #     # #          #     #  #     # #  #  #
//  ####### #     # #          #     #  #     # #   # #
//  #     # #     # #     #    #     #  #     # #    ##
//  #     #  #####   #####     #    ### ####### #     #

export const prepareAuctionListSettings = {
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
  meta: {
    title: "Япон аукшин",
    description: "Японы аукшины автомашинууд",
    property: [
      { property: "fb:app_id", content: "186294318100220" },
      { property: "og:type", content: "article" },
      // {property: "og:url", content: {window.location.href}},
      { property: "og:title", content: "Аукшин" },
      { property: "og:description", content: "Японы аукшины автомашинууд" },
      { property: "og:image", content: "" },
      { property: "og:locale", content: "mn_MN" },
    ],
  },
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

    const loveButtonData = {
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
    myList[index].loveButtonData = loveButtonData;
    myList[index].compareButtonData = compareButtonData;
    myList[index].tableColumns = tableColumns;
  });

  // console.log("ЭНИЙГ ХАР ДАА", myList);

  return myList;
};
