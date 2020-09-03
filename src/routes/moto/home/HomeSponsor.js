import React, { useEffect, useContext, useState } from "react";
import { Carousel } from "antd";

import CardBox from "components/CardBox/index";
import RoadMapItem from "./RoadMapItem";

import { LoadProcess, loadDataview } from "util/axiosFunction";

const HomeSponsor = (props) => {
  // const [newsSponsorItems, setNewsSponsorItems] = useState([]);

  return (
    <CardBox styleName="gx-card-full moto-item-card" heading={""}>
      <span
        className="gx-text-success"
        style={{
          position: "absolute",
          top: "12px",
          zIndex: "5",
          left: "12px",
        }}
      >
        Спонсор
      </span>
      <Carousel
        className="gx-slick-slider"
        autoplay={true}
        autoplaySpeed={10000}
        arrows={false}
        dots={true}
        infinite={true}
        speed={500}
        marginLeft={10}
        marginRight={10}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {props.newsSponsorItems.map((sponsorItem, index) => (
          <RoadMapItem key={index} sponsorItem={sponsorItem} />
        ))}
      </Carousel>
    </CardBox>
  );
};

export default HomeSponsor;
