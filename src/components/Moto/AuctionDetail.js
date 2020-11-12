import React, { useContext, useEffect, useState } from "react";

//Body-ийн их биеийн тагуудыг зөв харуулдаг болгохын тулд оруулж ирэв.
import { Html5Entities } from "html-entities";
import Output from "editorjs-react-renderer";

import toBoolean from "util/booleanFunction";
import { defaultSrc } from "util/config";

import { Card, Row, Col, Typography, Tabs, Image } from "antd";

// import AuctionDetailHeader from "./AuctionDetailHeader";
// import AuctionHeaderButton from "./Button/AuctionHeaderButton";

import AuctionContext from "context/AuctionContext";

const AuctionDetailComponent = () => {
  const auctionContext = useContext(AuctionContext);
  const auctionItem = auctionContext.auctionDetail.auctionDetail || {};
  const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  // const member = {
  //   date: auctionItem.publisheddate,
  //   id: auctionItem.userpublisherid,
  //   photo: auctionItem.userprofilephoto,
  //   name: auctionItem.userfullename,
  //   positionname: "Гишүүнчлэл тодорхойгүй",
  //   uid: auctionItem.userfirebaseuid,
  // };

  // console.log("auctionItem", auctionItem);

  console.log("auctionItem", auctionItem);

  if (Object.keys(auctionItem).length !== 0) {
    // let myMainImage = "";
    // try {
    //   myMainImage = auctionItem.imagemain;
    // } catch (e) {
    //   myMainImage = "";
    // }

    auctionItem.imagemain =
      auctionItem.imagemain === ""
        ? "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
        : auctionItem.imagemain;

    return (
      <div>
        <div
          key={auctionItem.auctionid}
          className="gx-main-content auction-detail"
        >
          {/* <AuctionDetailHeader auctionItem={auctionItem} member={member} /> */}

          <Row>
            <Col xs={24}>
              <Card
                // className={
                //   (toBoolean(auctionItem.isfeatured)
                //     ? "gx-border-success"
                //     : "") +
                //   (!toBoolean(auctionItem.isactive) ? "gx-border-danger" : "")
                // }
                cover={<Image src={null} />}
              >
                <div className="moto-auction-body">
                  Body text
                  {auctionItem.IMAGES}
                </div>
              </Card>
            </Col>
          </Row>
          <div>{/* <AuctionHeaderButton item={auctionItem} /> */}</div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default AuctionDetailComponent;
