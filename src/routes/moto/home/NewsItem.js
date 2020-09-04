import React from "react";
import { Card } from "antd";

const NewsItem = ({ newsItem }) => {
  return (
    <Card
      className="gx-card-full gx-text-center moto-item-card"
      style={{ margin: "0 10px", height: "290px" }}
    >
      <div className="gx-pt-4 gx-px-3">
        <div className="gx-separator gx-bg-grey" />
        <h5 className="gx-mb-4 gx-text-grey">{newsItem.newssourcename}</h5>
        <p>{newsItem.title.substring(0, 50)}</p>
      </div>

      <div className="gx-mt-xxl-3 gx-ayurveda-thumb">
        <div className="gx-text-primary gx-text-uppercase gx-d-block label-read">
          Унших
        </div>
        <img
          className="gx-img-fluid gx-w-100"
          alt={newsItem.title}
          src={newsItem.imagemain}
        />
      </div>
    </Card>
  );
};

export default NewsItem;
