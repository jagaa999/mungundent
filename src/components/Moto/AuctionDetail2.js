import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import moment from "moment";
import "moment/locale/mn";
import accounting from "accounting";
import toBoolean from "util/booleanFunction";
import { defaultSrc } from "util/config";

import { Card, Alert } from "antd";

import MotoAuctionDetailImages from "./Auction/MotoAuctionDetailImages";

import AuctionDetail2General from "./Auction/AuctionDetail2General";
import AuctionDetail2Lot from "./Auction/AuctionDetail2Lot";
import MotoAuctionDetailPrice from "./Auction/MotoAuctionDetailPrice";
import MotoAuctionSameCars from "./Auction/MotoAuctionSameCars";

import AuctionContext from "context/AuctionContext";

const AuctionDetail2 = () => {
  const auctionContext = useContext(AuctionContext);
  const auctionItem = auctionContext.auctionDetail.auctionDetail || {};
  const htmlEntities = new Html5Entities();

  const [cardTabs, setCardTabs] = useState({
    key: "tab1",
  });

  const tabList = [
    {
      key: "tab1",
      tab: "Автомашин",
    },
    {
      key: "tab2",
      tab: "Аукшин",
    },
    {
      key: "tab3",
      tab: "Түүх",
    },
    {
      key: "tab4",
      tab: "Үнэ",
    },
  ];

  const contentList = {
    tab1: <AuctionDetail2General auctionItem={auctionItem} />,
    tab2: <AuctionDetail2Lot auctionItem={auctionItem} />,
    tab3: <MotoAuctionSameCars auctionItem={auctionItem} />,
    tab4: <MotoAuctionDetailPrice auctionItem={auctionItem} />,
  };

  const onTabChange = (key, type) => {
    // console.log(key, type);
    setCardTabs({ ...cardTabs, [type]: key });
  };

  // console.log("auctionItem", auctionItem);

  if (Object.keys(auctionItem).length !== 0) {
    const myImages = auctionItem.IMAGES.split("#");

    // MARKA_ID
    // MODEL_ID
    // AVG_STRING

    return (
      <div
        key={auctionItem.auctionid}
        className="gx-main-content auction-detail"
      >
        <Card
          style={{ width: "100%" }}
          title={
            <>
              {auctionItem.YEAR} {htmlEntities.decode(auctionItem.MARKA_NAME)}{" "}
              {htmlEntities.decode(auctionItem.MODEL_NAME)}
              <span className="gx-text-grey gx-fs-sm gx-ml-2">
                {htmlEntities.decode(auctionItem.GRADE)}
              </span>
            </>
          }
          extra={`LOT: ${auctionItem.LOT}`}
          tabList={tabList}
          activeTabKey={cardTabs.key}
          onTabChange={(key) => {
            onTabChange(key, "key");
          }}
        >
          {contentList[cardTabs.key]}
        </Card>

        <Alert
          message="Японоос машин захиалгаар оруулж ирдэг бизнестэй хүмүүсийн анхааралд!"
          description="Энэ системийг ашиглан хүмүүс машин захиалах хүсэлтэй юм. Хэрвээ та эдгээр захиалгыг өөртөө авахыг хүсвэл Moto.mn тантай хамтран ажиллахад бэлэн байна. Утас: 99902070"
          type="info"
          showIcon
        />
      </div>
    );
  } else {
    return "";
  }
};

export default AuctionDetail2;
