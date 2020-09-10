import React from "react";
import { Link } from "react-router-dom";

import { defaultSrc } from "util/config";

const RoadMapItem = ({ sponsorItem }) => {
  return (
    <div className="gx-slider">
      <div className="gx-slider-img">
        <img
          src={
            sponsorItem.imagemain ||
            "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg"
          }
          style={{ height: 320 }}
        />
        <img className="gx-img-up" src={sponsorItem.userprofilephoto} />
      </div>
      <div className="gx-slider-content">
        <Link to={"/news/" + sponsorItem.newsid}>
          <h3 className="gx-text-success">{sponsorItem.title}</h3>
        </Link>
        <p className="gx-text-grey gx-mt-2">
          {sponsorItem.description.substring(0, 150)}
        </p>
      </div>
    </div>
  );
};

export default RoadMapItem;
