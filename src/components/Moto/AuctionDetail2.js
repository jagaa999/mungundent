import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";

import { Card, Alert, Badge } from "antd";

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
      tab: <span className="gx-fs-md">Автомашин</span>,
    },
    {
      key: "tab2",
      tab: <span className="gx-fs-md">Аукшин</span>,
    },
    {
      key: "tab3",
      tab: <span className="gx-fs-md">Түүх</span>,
    },
    {
      key: "tab4",
      tab: (
        <span className="gx-fs-md">
          Үнэ
          <Badge status="processing" className="gx-m-0 gx-ml-1" />
        </span>
      ),
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
          className="moto-auction-detail-card"
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
