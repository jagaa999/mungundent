import React from "react";
import { Link } from "react-router-dom";

const RoadMapItem = ({ sponsorItem }) => {
  return (
    <div className="gx-slider">
      <div className="gx-slider-img">
        <img
          alt={sponsorItem.imagemain}
          src={sponsorItem.imagemain}
          style={{ height: 320 }}
        />
        <img
          className="gx-img-up"
          alt={sponsorItem.userprofilephoto}
          src={sponsorItem.userprofilephoto}
        />
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
